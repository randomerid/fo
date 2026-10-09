import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
import express from 'express';
import multer from "multer";
import crypto from "crypto";

const app = express();
const upload = multer();
const ai = new GoogleGenAI({});

app.use(express.json());
app.use(express.static('public'));
const PORT = 4000;
const model = "gemini-2.5-flash-lite";

const system_prompt = `
You are an expert culinary guide and food historian for "Foodies" (Indonesian Culinary & Tourism Guide).
- You have deep, authentic knowledge of Indonesian archipelago cuisine across Sumatra, Java, Bali, Lombok, Sulawesi, Kalimantan, Maluku, Papua, and Nusa Tenggara.
- You are strictly bilingual: respond in the same language the user uses. If the user writes in English, reply in appetizing, warm, and natural English. If the user writes in Indonesian, reply in natural, engaging Bahasa Indonesia.
- For tourists and foodies across all generations, provide rich insights: flavor profile (sweet, savory, umami, sour, spicy level 🌶️), key spices (bumbu), cultural backstory, dietary suitability (halal, vegetarian/vegan adaptation, peanut or shellfish allergies), and best places/ways to eat it (e.g., local warung etiquette, sambal pairings).
- If the user sends an image, identify the Indonesian dish, describe its ingredients, flavors, and how best to enjoy it.
- Keep responses well-structured, appetizing, and easy to read using markdown bullet points.
- If a question is not related to food, beverages, ingredients, dining culture, or culinary travel in Indonesia, politely guide them back to exploring Indonesian culinary treasures.
`;


function getMimeType(file) {
    if (file.mimetype && file.mimetype !== 'application/octet-stream') {
        return file.mimetype;
    }
    const ext = file.originalname ? file.originalname.split('.').pop()?.toLowerCase() : '';
    const extToMime = {
        pdf: 'application/pdf',
        csv: 'text/csv',
        txt: 'text/plain',
        json: 'application/json',
        html: 'text/html',
        htm: 'text/html',
        md: 'text/markdown',
        jpg: 'image/jpeg',
        jpeg: 'image/jpeg',
        png: 'image/png',
        gif: 'image/gif',
        webp: 'image/webp',
        svg: 'image/svg+xml',
        mp3: 'audio/mp3',
        wav: 'audio/wav',
        ogg: 'audio/ogg',
        m4a: 'audio/m4a',
        aac: 'audio/aac',
        mp4: 'video/mp4',
        webm: 'video/webm',
        mov: 'video/quicktime',
        avi: 'video/x-msvideo',
    };
    return (ext && extToMime[ext]) || file.mimetype || 'application/octet-stream';
}

function getContentType(mimeType = '') {
    if (mimeType.startsWith('image/')) return 'image';
    if (mimeType.startsWith('audio/')) return 'audio';
    if (mimeType.startsWith('video/')) return 'video';
    return 'document';
}

function getDefaultFilePrompt(contentType) {
    switch (contentType) {
        case 'image':
            return 'Describe this image.';
        case 'audio':
            return 'Describe this audio.';
        case 'video':
            return 'Describe this video.';
        default:
            return 'Describe this document.';
    }
}

app.post('/api/chat', upload.any(), async (req, res) => {
    try {
        let { prompt, sessionId } = req.body || {};
        const files = req.files && req.files.length > 0 ? req.files : (req.file ? [req.file] : []);

        if (!prompt && files.length === 0) {
            return res.status(400).json({ message: "Prompt or file is required." });
        }

        if (!sessionId) {
            sessionId = crypto.randomUUID();
        }

        const sessionHistory = getSessionHistory(sessionId);

        const content = [];
        if (prompt && prompt.trim()) {
            content.push({ type: "text", text: prompt.trim() });
        } else if (files.length > 0) {
            const firstFileType = getContentType(getMimeType(files[0]));
            content.push({ type: "text", text: getDefaultFilePrompt(firstFileType) });
        }

        for (const file of files) {
            const mimeType = getMimeType(file);
            const contentType = getContentType(mimeType);
            const base64Data = file.buffer.toString("base64");
            content.push({
                type: contentType,
                data: base64Data,
                mime_type: mimeType
            });
        }

        sessionHistory.push({
            type: "user_input",
            content: content
        });

        const interaction = await ai.interactions.create({
            model,
            store: false,
            input: sessionHistory,
            system_instruction: system_prompt,
        });
        sessionHistory.push(...interaction.steps);

        res.status(200).json({ sessionId, result: sessionHistory });
    } catch (error) {
        console.error("Error in /api/chat:", error);
        res.status(500).json({ message: error.message });
    }
});


const sessions = new Map();
function getSessionHistory(sessionId) {
    if (!sessions.has(sessionId)) {
        sessions.set(sessionId, []);
    }
    return sessions.get(sessionId);
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

