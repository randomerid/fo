/**
 * Foodies — Indonesian Archipelago Gastronomy & Tourism
 * Client Application Logic: Bilingual Engine, Filters, Modal, and AI Chatbot Widget
 */

// ============================================================================
// 1. Bilingual Translation Dictionary (i18n)
// ============================================================================
const translations = {
  id: {
    topBarBadge: "✨ Warisan Cita Rasa Dunia",
    topBarText: "Lebih dari 5.300 resep tradisional melintasi 17.000 pulau eksotis Indonesia",
    langLabel: "Bahasa:",
    logoSub: "Kuliner Nusantara",
    navHome: "Beranda",
    navRecs: "Rekomendasi Wisata",
    navRegions: "Jelajah Nusantara",
    navGuide: "Panduan Wisatawan",
    navAskAI: "Tanya AI Foodies",
    heroPill: "Sensasi Cita Rasa Kepulauan Terbesar di Dunia",
    heroTitlePart1: "Jelajahi Jiwa & Kelezatan",
    heroTitleHighlight: "Kuliner Indonesia",
    heroDesc: "Dari karamelisasi Rendang Minang yang dinobatkan terbaik dunia, kehangatan rempah Soto Betawi, hingga aroma sate bakar arang kelapa. Temukan kekayaan rasa otentik yang memikat setiap lidah dari lintas generasi dan seluruh penjuru dunia.",
    heroBtnExplore: "Mulai Eksplorasi Makanan",
    heroBtnChat: "Konsultasi dengan AI Foodie",
    statIslands: "Pulau Tropis",
    statDishes: "Resep Tradisional",
    statCNN: "Makanan Terbaik Dunia (CNN)",
    statSambal: "Varian Sambal Unik",
    badgeAwardTitle: "CNN World's Best Food",
    badgeAwardSub: "Rendang #1 Pilihan Global",
    badgeHeritageTitle: "Bumbu & Rempah Asli",
    badgeHeritageSub: "Kunyit, Lengkuas, Serai, Santan",
    previewTag: "Ikon Kuliner Nasional",
    previewRendangBrief: "Daging sapi empuk dimasak perlahan berjam-jam dalam santan kelapa pekat dan racikan bumbu rempah aromatik.",
    viewDetails: "Lihat Cerita & Resep →",
    valuesTag: "Pesona Nusantara",
    valuesTitle: "Mengapa Kuliner Indonesia Sangat Istimewa?",
    valuesSub: "Setiap piring adalah perpaduan harmonis antara sejarah jalur rempah dunia, kearifan lokal, dan keragaman biodiversitas tropis yang tiada duanya.",
    val1Title: "Kekayaan Bumbu Dasar",
    val1Desc: "Sistem bumbu merah, bumbu kuning, dan bumbu putih yang mengolah rempah segar seperti kunyit, jahe, ketumbar, dan lengkuas.",
    val2Title: "Keseimbangan Rasa Komprehensif",
    val2Desc: "Paduan sempurna antara pedas, gurih santan, manis gula aren, segar asam kandis/belimbing wuluh, dan aroma daun salam & jeruk.",
    val3Title: "Ramah Segala Generasi & Diet",
    val3Desc: "Tersedia ragam kuliner mulai dari yang lembut bebas pedas untuk anak & manula, menu nabati kaya protein tempe & tahu, hingga santapan daging halal bercita rasa tinggi.",
    val4Title: "Eksplorasi Tak Terbatas",
    val4Desc: "Setiap provinsi memiliki karakter kuliner unik: dari kuah kuning rempah Maluku, gurih manis Jawa, hingga kesegaran dabu-dabu pesisir Sulawesi.",
    recsTag: "Rekomendasi Wisata Kuliner",
    recsTitle: "Hidangan Ikonik Wajib Coba untuk Wisatawan",
    recsSub: "Pilihan hidangan terbaik nusantara yang telah dikurasi untuk wisatawan mancanegara maupun lokal dari seluruh generasi. Lengkap dengan tingkat kepedasan, profil rasa, dan panduan menikmatinya.",
    dishesFound: "Hidangan Siap Dieksplorasi",
    searchPlaceholder: "Cari nama makanan, bahan, atau daerah (contoh: Rendang, Soto, Bali, Tempe)...",
    filterTasteLabel: "Kategori Rasa & Tipe:",
    catAll: "Semua Menu",
    catMustTry: "⭐ Wajib Coba Pertama Kali",
    catMild: "🌱 Ramah Lidah (Tidak Pedas)",
    catSoups: "🍲 Aneka Sup & Soto",
    catGrilled: "🔥 Bakaran & Sate",
    catVeggie: "🥗 Ramah Nabati / Vegetarian",
    catStreet: "🍡 Jajanan & Penutup Manis",
    filterRegionLabel: "Pilih Wilayah:",
    regAll: "Seluruh Indonesia",
    regSumatra: "Sumatra",
    regJava: "Jawa & Madura",
    regBali: "Bali & Nusa Tenggara",
    regSulawesi: "Sulawesi",
    regEastern: "Maluku, Papua & Kalimantan",
    emptyTitle: "Hidangan Tidak Ditemukan",
    emptyDesc: "Coba kata kunci lain atau reset filter untuk menjelajahi kembali seluruh koleksi kuliner.",
    emptyBtnReset: "Reset Semua Filter",
    regionsTag: "Peta Kuliner Nusantara",
    regionsTitle: "Keluasan Karakter Rasa Tiap Sudut Nusantara",
    regionsSub: "Indonesia bukan hanya satu rasa. Setiap kepulauan memiliki filosofi rasa, teknik memasak warisan leluhur, dan bahan alami endemik tersendiri.",
    regTabSumatraTitle: "Sumatra",
    regTabSumatraSub: "Pusat Rempah Berani & Gulai",
    regTabJavaTitle: "Jawa & Madura",
    regTabJavaSub: "Harmoni Gurih, Manis & Kluwek",
    regTabBaliTitle: "Bali & Lombok",
    regTabBaliSub: "Aroma Base Genep & Bakaran",
    regTabSulawesiTitle: "Sulawesi",
    regTabSulawesiSub: "Seafood Pesisir & Dabu-Dabu Segar",
    regTabEasternTitle: "Maluku, Papua & Borneo",
    regTabEasternSub: "Pala Cengkeh, Kuah Kuning & Sagu",
    guideTag: "Panduan Kuliner Wisatawan",
    guideTitle: "Tips Menikmati Santapan Layaknya Warga Lokal",
    guideSub: "Hal-hal penting yang membuat pengalaman bersantap Anda di Indonesia menjadi menyenangkan, penuh penghormatan budaya, dan tak terlupakan.",
    guide1Title: "Etika Makan di Indonesia",
    guide1Sub: "Sendok, Garpu & Tradisi Tangan Kanan",
    guide1Point1Head: "Kombinasi Sendok & Garpu:",
    guide1Point1Body: " Di sebagian besar warung dan restoran, Anda akan diberi sendok di tangan kanan dan garpu di tangan kiri untuk memotong makanan.",
    guide1Point2Head: "Makan Menggunakan Tangan:",
    guide1Point2Body: " Untuk hidangan seperti nasi padang atau ayam bakar, gunakan kobokan (mangkuk air jeruk nipis) untuk membasuh tangan kanan Anda sebelum dan sesudah makan.",
    guide1Point3Head: "Konsep Rumah Makan Padang:",
    guide1Point3Body: " Pelayan akan menyajikan puluhan piring hidangan di meja (\"Hidang\"). Anda hanya membayar piring yang disentuh atau dimakan!",
    guide2Title: "Spektrum Tingkat Kepedasan Sambal",
    guide2Sub: "Kenali Jenis Sambal Sebelum Mencoba",
    sambalMatahDesc: "Irisan bawang merah mentah, serai wangi, cabai rawit, minyak kelapa panas, dan perasan jeruk limau. Segar tanpa terasi mentah.",
    sambalTerasiDesc: "Cabai merah ulek dengan terasi bakar, tomat, gula aren, dan garam. Sangat gurih dan nikmat dipadukan dengan lalapan sayur segar.",
    sambalDabuDesc: "Potongan dadu tomat merah-hijau segar, cabai rawit, bawang, dan air lemon cui. Pendamping ideal ikan bakar laut.",
    sambalKorekDesc: "Cabai rawit merah murni dan bawang putih digiling kasar disiram minyak mendidih. Waspada bila Anda sensitif terhadap rasa pedas!",
    guide3Title: "Kamus Singkat Menu Indonesia",
    guide3Sub: "Kosakata Praktis Saat Membaca Buku Menu",
    vocabGoreng: "Digoreng (Fried)",
    vocabBakar: "Dibakar arang (Grilled)",
    vocabKuah: "Berkuah sup (Soup broth)",
    vocabTidakPedas: "Tidak pedas (Zero chili)",
    vocabKurangManis: "Kurang manis (Less sweet)",
    vocabEsTeh: "Teh melati manis dingin (Iced tea)",
    vocabKerupuk: "Kerupuk renyah (Crispy crackers)",
    vocabBungkus: "Bungkus bawa pulang (Take away)",
    vocabTip: "Tips: Anda bisa langsung meminta \"Tolong buatkan tidak pedas ya\" kepada koki di warung makan!",
    chatLauncherTitle: "Tanya AI Foodies",
    chatLauncherSub: "Konsultasi Kuliner 24/7",
    chatStatusText: "Ahli Kuliner & Sejarah Makanan Indonesia",
    chatGreeting: "Halo! Selamat datang di <strong>Foodies</strong>. Saya asisten kuliner pintar Anda. Mau rekomendasi makanan khas daerah tertentu, tips menu tanpa pedas, atau ingin tahu sejarah suatu masakan Nusantara? Silakan tanyakan apa saja!",
    chatInputPlaceholder: "Tanyakan seputar makanan Indonesia...",
    chipNonSpicy: "Menu Bebas Pedas",
    chipRendangStory: "Kisah Rendang",
    chipPadangStyle: "Cara Makan Padang",
    chipVeggie: "Opsi Vegetarian",
    footerTagline: "Merayakan warisan gastronomi terkaya di dunia. Menjembatani rasa, budaya, dan keramahan Indonesia untuk seluruh generasi dan penjuru dunia.",
    footNavTitle: "Navigasi Utama",
    footIconsTitle: "Ikon Kuliner Nasional",
    footAITitle: "Asisten Kuliner Pintar",
    footAIDesc: "Didukung teknologi AI dengan endpoint langsung ke panduan gastronomi Nusantara. Tersedia dalam dwibahasa untuk wisatawan global.",
    footAIBtn: "Buka Percakapan AI",
    footerCredit: "Dirancang untuk pecinta kuliner dari segala generasi dan bangsa.",
    btnAskAIAbout: "Tanya AI Tentang Hidangan Ini",
    touristTipLabel: "💡 Tips Wisatawan:",
    flavorProfileLabel: "Profil Rasa Utama:",
    keyIngredientsLabel: "Bumbu & Bahan Utama:",
    diningEtiquetteLabel: "Cara Terbaik Menikmati:",
    spiceLevelLabel: "Tingkat Pedas:",
    spiceLevel0: "Tidak Pedas (Aman untuk Semua)",
    spiceLevel1: "Pedas Lembut / Hangat",
    spiceLevel2: "Pedas Sedang Nusantara",
    spiceLevel3: "Pedas Mantap / Berani"
  },
  en: {
    topBarBadge: "✨ World Gastronomy Heritage",
    topBarText: "Over 5,300 traditional recipes across Indonesia's 17,000 exotic islands",
    langLabel: "Language:",
    logoSub: "Archipelago Flavors",
    navHome: "Home",
    navRecs: "Tourism Picks",
    navRegions: "Explore Islands",
    navGuide: "Tourist Guide",
    navAskAI: "Ask AI Foodie",
    heroPill: "Flavors from the World's Largest Archipelago",
    heroTitlePart1: "Discover the Soul & Taste of",
    heroTitleHighlight: "Indonesian Cuisine",
    heroDesc: "From the slow-caramelized Minangkabau Beef Rendang voted #1 in the world, to the comforting spices of Soto Betawi and smoky coconut charcoal satay. Experience authentic culinary treasures that delight every generation and world travelers alike.",
    heroBtnExplore: "Start Exploring Dishes",
    heroBtnChat: "Consult AI Food Guide",
    statIslands: "Tropical Islands",
    statDishes: "Heritage Recipes",
    statCNN: "World's Best Food (CNN)",
    statSambal: "Unique Sambal Varieties",
    badgeAwardTitle: "CNN World's Best Food",
    badgeAwardSub: "Rendang #1 Global Choice",
    badgeHeritageTitle: "Root Spices & Coconut",
    badgeHeritageSub: "Turmeric, Galangal, Lemongrass, Santan",
    previewTag: "National Culinary Icon",
    previewRendangBrief: "Tender beef slow-simmered for hours in rich coconut milk and complex aromatic spice pastes until dark and caramelized.",
    viewDetails: "View Story & Recipe →",
    valuesTag: "Archipelago Magic",
    valuesTitle: "Why is Indonesian Food So Extraordinary?",
    valuesSub: "Every plate is a harmonious marriage between historic world spice trade routes, indigenous wisdom, and unparalleled tropical biodiversity.",
    val1Title: "Foundational Bumbu Pastes",
    val1Desc: "The revered base system: red, yellow, and white spice pastes combining fresh turmeric, ginger, coriander, and galangal.",
    val2Title: "Exquisite Flavor Harmony",
    val2Desc: "A masterclass in balancing fiery chili, rich coconut milk, sweet palm sugar, tangy tamarind, and aromatic kaffir lime.",
    val3Title: "Welcoming for Every Diet & Age",
    val3Desc: "Gentle non-spicy broths for kids and seniors, rich plant-based tempeh and tofu delights, and premium halal meats cooked to perfection.",
    val4Title: "Endless Exploration",
    val4Desc: "Every province holds its own identity: from Maluku's aromatic turmeric broths, Java's sweet-savory balance, to Sulawesi's citrusy ocean seafood.",
    recsTag: "Traveler Recommendations",
    recsTitle: "Iconic Dishes Every Visitor Must Experience",
    recsSub: "Carefully curated for international visitors and all generations. Packed with spice level meters, flavor profiles, and insider dining tips.",
    dishesFound: "Dishes Ready to Explore",
    searchPlaceholder: "Search dish name, ingredient, or region (e.g., Rendang, Soto, Bali, Tempeh)...",
    filterTasteLabel: "Flavor & Food Category:",
    catAll: "All Dishes",
    catMustTry: "⭐ First-Timer Must Try",
    catMild: "🌱 Mild & Non-Spicy",
    catSoups: "🍲 Iconic Soups & Broths",
    catGrilled: "🔥 Charcoal Grilled & Satay",
    catVeggie: "🥗 Plant-Based / Vegetarian",
    catStreet: "🍡 Street Snacks & Sweets",
    filterRegionLabel: "Filter by Region:",
    regAll: "All Indonesia",
    regSumatra: "Sumatra",
    regJava: "Java & Madura",
    regBali: "Bali & Nusa Tenggara",
    regSulawesi: "Sulawesi",
    regEastern: "Maluku, Papua & Borneo",
    emptyTitle: "No Dishes Found",
    emptyDesc: "Try another search term or reset filters to browse the entire collection again.",
    emptyBtnReset: "Reset All Filters",
    regionsTag: "Archipelago Flavor Map",
    regionsTitle: "The Immense Diversity of Regional Profiles",
    regionsSub: "Indonesia is not a single flavor. Every island cluster possesses distinct culinary philosophies, ancestral techniques, and endemic herbs.",
    regTabSumatraTitle: "Sumatra",
    regTabSumatraSub: "Bold Spices & Rich Curries",
    regTabJavaTitle: "Java & Madura",
    regTabJavaSub: "Sweet, Savory & Kluwek Harmony",
    regTabBaliTitle: "Bali & Lombok",
    regTabBaliSub: "Aromatic Base Genep & Roasting",
    regTabSulawesiTitle: "Sulawesi",
    regTabSulawesiSub: "Coastal Seafood & Fresh Dabu-Dabu",
    regTabEasternTitle: "Maluku, Papua & Borneo",
    regTabEasternSub: "Nutmeg, Cloves & Yellow Broths",
    guideTag: "Traveler Survival Guide",
    guideTitle: "How to Dine Like a Local in Indonesia",
    guideSub: "Essential etiquette and cultural insights to make your culinary adventure in Indonesia comfortable, respectful, and joyful.",
    guide1Title: "Dining Etiquette in Indonesia",
    guide1Sub: "Spoon, Fork & Right Hand Tradition",
    guide1Point1Head: "Spoon & Fork Combination:",
    guide1Point1Body: " In most casual restaurants, you will be given a spoon in your right hand (main tool) and a fork in your left to assist or cut food.",
    guide1Point2Head: "Eating with Your Hands:",
    guide1Point2Body: " For dishes like Nasi Padang or grilled chicken, use the 'kobokan' (bowl with lime water) to wash your right hand before and after eating.",
    guide1Point3Head: "Padang Restaurant Style:",
    guide1Point3Body: " Waiters will set dozens of small plates on your table ('Hidang'). You only pay for the specific plates you touch or eat!",
    guide2Title: "The Sambal Heat Spectrum",
    guide2Sub: "Know Your Chili Paste Before Tasting",
    sambalMatahDesc: "Fresh sliced raw shallots, fragrant lemongrass, bird's eye chilies, hot coconut oil, and kaffir lime. Refreshing, unfermented.",
    sambalTerasiDesc: "Crushed red chilies with toasted shrimp paste, ripe tomatoes, palm sugar, and salt. Deeply savory, pairs best with fresh vegetables.",
    sambalDabuDesc: "Diced fresh green/red tomatoes, fiery chilies, shallots, and calamansi lime juice. The quintessential pairing for ocean grilled fish.",
    sambalKorekDesc: "Pure raw bird's eye chilies and garlic crushed with sizzling boiling oil. Beware: extremely fiery for spice-sensitive travelers!",
    guide3Title: "Indonesian Menu Dictionary",
    guide3Sub: "Everyday Words for Deciphering Local Menus",
    vocabGoreng: "Fried (e.g. Nasi Goreng)",
    vocabBakar: "Charcoal Grilled",
    vocabKuah: "Soup or Broth dish",
    vocabTidakPedas: "Non-spicy (Zero chili)",
    vocabKurangManis: "Less sweet",
    vocabEsTeh: "Sweet iced jasmine tea",
    vocabKerupuk: "Crispy crackers",
    vocabBungkus: "Take away / To go",
    vocabTip: "Tip: You can always ask 'Tolong buatkan tidak pedas ya' (Please make it non-spicy) at any food stall!",
    chatLauncherTitle: "Ask AI Foodies",
    chatLauncherSub: "24/7 Culinary Concierge",
    chatStatusText: "Expert in Indonesian Gastronomy & History",
    chatGreeting: "Hello! Welcome to <strong>Foodies</strong>. I am your culinary AI guide. Wondering about non-spicy regional recommendations, food history, or dining tips in Bali or Jakarta? Feel free to ask anything!",
    chatInputPlaceholder: "Ask anything about Indonesian food...",
    chipNonSpicy: "Non-Spicy Dishes",
    chipRendangStory: "Story of Rendang",
    chipPadangStyle: "Padang Dining Style",
    chipVeggie: "Vegetarian Options",
    footerTagline: "Celebrating the richest gastronomy on Earth. Bridging flavor, culture, and Indonesian hospitality to every generation and global traveler.",
    footNavTitle: "Navigation",
    footIconsTitle: "Culinary Icons",
    footAITitle: "Smart AI Concierge",
    footAIDesc: "Powered by AI with direct connection to Indonesian culinary knowledge. Fully bilingual for global food lovers.",
    footAIBtn: "Start AI Conversation",
    footerCredit: "Designed for food lovers from every generation and nation.",
    btnAskAIAbout: "Ask AI About This Dish",
    touristTipLabel: "💡 Tourist Tip:",
    flavorProfileLabel: "Flavor Profile:",
    keyIngredientsLabel: "Key Spices & Ingredients:",
    diningEtiquetteLabel: "How Best to Enjoy:",
    spiceLevelLabel: "Spice Level:",
    spiceLevel0: "Non-Spicy (Friendly for Everyone)",
    spiceLevel1: "Gentle Warmth / Mild",
    spiceLevel2: "Medium Archipelago Spice",
    spiceLevel3: "Fiery & Bold"
  }
};

// Current active language: default to 'id', or restore from localStorage
let currentLang = localStorage.getItem('foodies_lang') || 'id';

// ============================================================================
// 2. Curated Indonesian Culinary Dataset (16 Masterpiece Dishes)
// ============================================================================
const foodData = [
  {
    id: "rendang",
    nameId: "Rendang Daging Minang",
    nameEn: "Caramelized Beef Rendang",
    region: "sumatra",
    originProvince: "Sumatra Barat (Padang)",
    categories: ["must-try", "soups"],
    spiceLevel: 2,
    tags: ["Halal", "Iconic", "Gluten-Free"],
    flavorNotes: "Rich, Savory, Caramelized Coconut, Deep Umami",
    image: "assets/rendang.jpg",
    descId: "Daging sapi yang dimasak perlahan bersama santan kelapa murni dan belasan rempah selama 4-6 jam hingga kuahnya mengering dan terkaramelisasi menjadi bumbu hitam pekat yang lezat.",
    descEn: "Slow-cooked beef simmered for hours in pure coconut milk and rich spices until liquid evaporates, creating dark, deeply caramelized, melt-in-your-mouth flavor.",
    touristTipId: "Nikmati dengan nasi putih hangat dan daun singkong rebus. Sangat awet disimpan berhari-hari tanpa lemari pendingin!",
    touristTipEn: "Pair with warm steamed jasmine rice and boiled cassava greens. Traditionally preserved without refrigeration for travels!",
    historyId: "Berasal dari suku Minangkabau di Sumatra Barat. Rendang merupakan filosofi penghormatan terhadap alam dan bekal utama para perantau Minang karena daya tahannya yang luar biasa.",
    historyEn: "Originated with the Minangkabau people of West Sumatra as ceremonial food and a hearty provision for travelers embarking on 'Merantau' migrations.",
    ingredientsId: ["Daging Sapi Pilihan", "Santan Kelapa Kental", "Lengkuas & Serai", "Cabai Merah Keriting", "Bawang Merah & Putih", "Asam Kandis", "Daun Kunyit"],
    ingredientsEn: ["Tender Beef Cut", "Pure Coconut Milk", "Galangal & Lemongrass", "Curly Red Chilies", "Shallots & Garlic", "Kandis Acid fruit", "Turmeric Leaves"],
    etiquetteId: "Sangat nikmat disantap menggunakan tangan kanan yang bersih, menyatukan serpihan bumbu rempah kelapa dengan nasi putih.",
    etiquetteEn: "Traditionally savored using clean right hand, mixing the savory dark coconut seasoning directly with fragrant rice."
  },
  {
    id: "sate-ayam",
    nameId: "Sate Ayam Madura",
    nameEn: "Madurese Charcoal Chicken Satay",
    region: "java",
    originProvince: "Madura / Jawa Timur",
    categories: ["must-try", "grilled"],
    spiceLevel: 1,
    tags: ["Halal", "Street Food", "Nutty"],
    flavorNotes: "Smoky, Sweet, Savory Peanut Sauce",
    image: "assets/sate-ayam.jpg",
    descId: "Tusukan daging ayam pilihan yang dibakar di atas bara arang batok kelapa, disiram saus kacang tanah kental yang manis gurih, kecap manis, dan taburan bawang merah goreng renyah.",
    descEn: "Skewered marinated chicken grilled over coconut charcoal, drenched in velvety sweet-savory peanut sauce, sweet soy sauce, and crispy shallots.",
    touristTipId: "Bila tidak suka pedas, katakan 'Jangan pakai cabai potong'. Biasanya disajikan bersama lontong (rice cakes).",
    touristTipEn: "If you dislike heat, say 'Tanpa cabai' (no chilies). Commonly served with compressed rice cakes (lontong).",
    historyId: "Sate terinspirasi dari pedagang rempah dan pedagang Arab abad ke-19, kemudian disempurnakan oleh masyarakat Pulau Madura dengan saus kacang sangrai yang khas.",
    historyEn: "Evolved in Java through contact with spice traders, perfected by the Madurese with rich roasted peanut sauce and coconut charcoal grilling.",
    ingredientsId: ["Fillet Daging Ayam", "Kacang Tanah Sangrai Halus", "Kecap Manis Tradisional", "Bawang Goreng", "Jeruk Limau", "Minyak Ayam"],
    ingredientsEn: ["Chicken Breast & Thigh", "Roasted Ground Peanuts", "Sweet Soy Sauce (Kecap)", "Crispy Fried Shallots", "Kaffir Limes", "Shallot Oil"],
    etiquetteId: "Gunakan garpu untuk melepaskan daging dari tusuk sate ke piring, lalu aduk bersama potongan lontong dan bumbu kacang.",
    etiquetteEn: "Use a fork to gently slide the meat off skewers, then coat thoroughly in peanut sauce and sliced lontong."
  },
  {
    id: "nasi-goreng",
    nameId: "Nasi Goreng Spesial Nusantara",
    nameEn: "Indonesian Classic Fried Rice",
    region: "java",
    originProvince: "Seluruh Nusantara (National Heritage)",
    categories: ["must-try", "mild"],
    spiceLevel: 1,
    tags: ["Halal", "Comfort Food", "Kid-Friendly"],
    flavorNotes: "Aromatic, Sweet-Savory Umami, Smoky Wok Hei",
    image: "assets/nasi-goreng.jpg",
    descId: "Nasi dingin yang digoreng dalam wajan panas dengan aroma bawang merah, bawang putih, sedikit terasi bakar, kecap manis yang terkaramelisasi, disajikan bersama telur mata sapi dan kerupuk.",
    descEn: "Fluffy jasmine rice wok-fried with caramelized sweet soy sauce, garlic, shallots, scallions, topped with sunny-side-up egg, pickles, and crispy crackers.",
    touristTipId: "Hidangan paling aman dan digemari oleh wisatawan pemula di Indonesia. Bisa dipesan versi tidak pedas sama sekali!",
    touristTipEn: "The ultimate beginner-friendly comfort food in Indonesia. Always customizable to zero spice level upon request!",
    historyId: "Lahir dari budaya menghargai makanan agar tidak membuang nasi kemarin, diolah dengan teknik wok fry yang berpadu dengan kecap manis khas nusantara.",
    historyEn: "Created from the tradition of zero waste and home cooking, elevated with sweet Indonesian kecap and local aromatic shallots.",
    ingredientsId: ["Nasi Putih Dingin", "Kecap Manis", "Bawang Merah & Putih", "Telur Ayam", "Daun Bawang", "Acar Timun & Kerupuk"],
    ingredientsEn: ["Chilled Jasmine Rice", "Indonesian Sweet Soy", "Shallots & Garlic", "Fresh Farm Egg", "Spring Onions", "Pickled Cucumber & Crackers"],
    etiquetteId: "Santap selagi panas dengan sendok dan garpu. Jangan lewatkan memadukannya dengan kerupuk renyah untuk sensasi tekstur!",
    etiquetteEn: "Eat warm with spoon and fork. Crack the kerupuk over the rice for essential crunchy texture."
  },
  {
    id: "gado-gado",
    nameId: "Gado-Gado Betawi",
    nameEn: "Indonesian Salad with Peanut Dressing",
    region: "java",
    originProvince: "DKI Jakarta (Betawi)",
    categories: ["must-try", "veggie", "mild"],
    spiceLevel: 1,
    tags: ["Vegetarian-Friendly", "Halal", "High Protein"],
    flavorNotes: "Fresh, Earthy, Creamy Nutty, Light Sweetness",
    image: "assets/gado-gado.jpg",
    descId: "Salad khas nusantara berisi sayuran segar rebus (tauge, bayam, kacang panjang, labu siam), kentang, tahu, tempe, telur rebus, disiram saus kacang yang diulek segar di cobek batu.",
    descEn: "Rich vegetable salad with blanched spinach, bean sprouts, long beans, boiled potatoes, fried tofu, tempeh, hard-boiled egg, and freshly ground creamy peanut dressing.",
    touristTipId: "Pilihan terbaik untuk vegetarian dan vegan (cukup minta tanpa telur dan terasi!). Sangat mengenyangkan dan sehat.",
    touristTipEn: "Top recommendation for vegetarians and vegans (simply request without egg and shrimp paste!). Nutrient-rich and satisfying.",
    historyId: "Sering disebut 'Indonesian Salad with Peanut Dressing'. Gado-gado merupakan kreasi masyarakat Betawi Jakarta yang mengutamakan hasil bumi kebun sayur segar.",
    historyEn: "Created by the Betawi people of Jakarta, showcasing the abundance of tropical garden vegetables united by mortar-ground peanut paste.",
    ingredientsId: ["Kacang Panjang & Tauge", "Tahu & Tempe Goreng", "Kentang Rebus", "Telur Rebus", "Bumbu Kacang Ulek", "Emping Melinjo & Kerupuk"],
    ingredientsEn: ["Long Beans & Bean Sprouts", "Golden Tofu & Tempeh", "Boiled Potatoes", "Hard-boiled Eggs", "Stone-ground Peanut Sauce", "Emping Bittersweet Crackers"],
    etiquetteId: "Aduk rata saus kacang dengan seluruh sayuran di piring sebelum dinikmati bersama kerupuk emping.",
    etiquetteEn: "Toss the rich peanut sauce thoroughly with all vegetables before eating; crumble emping crackers on top."
  },
  {
    id: "soto-betawi",
    nameId: "Soto Betawi Daging & Santan",
    nameEn: "Betawi Aromatic Coconut Beef Soup",
    region: "java",
    originProvince: "DKI Jakarta",
    categories: ["must-try", "soups", "mild"],
    spiceLevel: 0,
    tags: ["Halal", "Creamy Soup", "Comfort Food"],
    flavorNotes: "Rich, Creamy, Fragrant Clove & Nutmeg, Comforting",
    image: "assets/soto-betawi.jpg",
    descId: "Sup daging sapi legendaris dengan kuah perpaduan santan kelapa gurih (dan susu segar), dibumbui cengkeh, pala, kapulaga, disajikan dengan potongan tomat segar, kentang goreng, dan emping melinjo.",
    descEn: "Iconic Jakarta beef soup featuring tender brisket in a silky broth of spiced coconut milk and fresh milk, spiced with cloves and nutmeg, served with tomatoes and crackers.",
    touristTipId: "Bebas pedas alami! Anda bisa menambahkan sambal hijau dan perasan jeruk limau sendiri sesuai selera.",
    touristTipEn: "Naturally non-spicy and velvety! You can adjust lime juice and green sambal at your table according to your spice threshold.",
    historyId: "Istilah Soto Betawi dipopulerkan pada dekade 1970-an di Jakarta, mencerminkan percampuran budaya kuliner peranakan Tionghoa, Arab, dan Betawi lokal.",
    historyEn: "Popularized in 1970s Jakarta, showcasing multicultural culinary influences blending Arab spices, Chinese soup traditions, and indigenous coconut milk.",
    ingredientsId: ["Daging & Sengkel Sapi", "Santan Murni & Susu Segar", "Pala, Cengkeh, Kayu Manis", "Tomat Merah Segar", "Kentang Goreng Dadu", "Emping Melinjo"],
    ingredientsEn: ["Beef Brisket & Shank", "Pure Coconut Milk & Fresh Milk", "Nutmeg, Cloves, Cinnamon", "Fresh Red Tomatoes", "Crispy Diced Potatoes", "Melinjo Crackers"],
    etiquetteId: "Beri sedikit perasan jeruk nipis dan kecap manis ke dalam mangkuk kuah untuk memotong rasa gurih kental.",
    etiquetteEn: "Squeeze fresh lime and add a splash of sweet soy directly into the warm broth to balance its rich creaminess."
  },
  {
    id: "rawon",
    nameId: "Rawon Daging Kluwek Surabaya",
    nameEn: "Surabaya Black Nut Beef Stew",
    region: "java",
    originProvince: "Jawa Timur",
    categories: ["soups"],
    spiceLevel: 1,
    tags: ["Halal", "Heritage", "Unique Flavor"],
    flavorNotes: "Earthy, Nutty, Savory, Deep Herbaceous Broth",
    image: "assets/rawon.jpg",
    descId: "Sup daging sapi khas Jawa Timur dengan kuah hitam pekat yang didapat dari fermentasi biji kluwek (black nut). Beraroma daun jeruk, serai, dan disajikan dengan tauge pendek renyah serta telur asin.",
    descEn: "Traditional East Javanese beef stew characterized by its deep black broth infused with fermented kluwek nuts, lemongrass, fresh raw baby bean sprouts, and salted duck egg.",
    touristTipId: "Warna hitamnya murni dari biji rempah kluwek, bukan pewarna buatan! Teksturnya ringan dan kaya mineral.",
    touristTipEn: "The dark color comes purely from the indigenous fermented kluwek nut. Rich, earthy, and not at all bitter when prepared well.",
    historyId: "Salah satu hidangan tertua di Jawa, tercatat dalam prasasti Taji kuno sejak abad ke-10 Masehi dengan nama 'Rarawwan'.",
    historyEn: "One of Java's most ancient recipes, referenced in the 10th-century Taji inscription as 'Rarawwan' served during ancient royal feasts.",
    ingredientsId: ["Daging Sapi Sandung Lamur", "Biji Kluwek Hitam Fermentasi", "Serai & Daun Jeruk Purut", "Tauge Pendek Segar", "Telur Asin Bebek", "Sambal Terasi"],
    ingredientsEn: ["Beef Brisket", "Fermented Kluwek Black Nuts", "Lemongrass & Kaffir Leaves", "Crunchy Short Bean Sprouts", "Salted Duck Egg", "Sambal Terasi"],
    etiquetteId: "Taburkan tauge pendek mentah langsung ke dalam kuah panas agar tetap renyah, lalu nikmati bersama potongan telur asin.",
    etiquetteEn: "Scatter raw baby sprouts directly into steaming broth for crunchy texture, accompanied by savory salted egg."
  },
  {
    id: "ayam-betutu",
    nameId: "Ayam Betutu Gilimanuk Bali",
    nameEn: "Balinese Slow-Roasted Spiced Chicken",
    region: "bali",
    originProvince: "Bali",
    categories: ["must-try", "grilled"],
    spiceLevel: 3,
    tags: ["Halal Available", "Aromatic", "Balinese Heritage"],
    flavorNotes: "Fiery, Lemongrass Citrus, Aromatic Galangal, Peppery",
    image: "assets/ayam-betutu.jpg",
    descId: "Ayam utuh yang dibumbui Base Genep (racikan 15 rempah khas Bali), dibungkus daun pinang atau pelepah pisang, lalu dimasak dan dipanggang berjam-jam hingga dagingnya super empuk dan bumbunya meresap.",
    descEn: "Whole chicken enveloped in Bali's revered 'Base Genep' 15-spice paste, wrapped in banana leaves and slow-cooked for hours until tender and aromatic.",
    touristTipId: "Tingkat kepedasannya cukup tinggi! Nikmati dengan Sambal Matah dan Plecing Kangkung untuk pengalaman kuliner Bali yang sejati.",
    touristTipEn: "Bold in spice and heat! Best enjoyed alongside raw Sambal Matah and spicy Plecing water spinach.",
    historyId: "Dahulu merupakan hidangan istiadat upacara keagamaan di puri-puri raja Bali, dimasak dalam sekam padi arang yang hangat semalaman.",
    historyEn: "Originally prepared for sacred Balinese temple ceremonies and royal feasts, slow-baked overnight inside rice husk embers.",
    ingredientsId: ["Ayam Kampung Utuh", "Bumbu Base Genep Bali", "Serai & Bawang Merah", "Kencur & Kunyit Bakar", "Minyak Kelapa Asli", "Daun Pisang"],
    ingredientsEn: ["Free-range Chicken", "Balinese Base Genep Spice Mix", "Fragrant Lemongrass", "Aromatic Ginger & Turmeric", "Virgin Coconut Oil", "Banana Leaf wrap"],
    etiquetteId: "Suwir daging ayam empuk, lumuri dengan minyak kuah rempahnya, lalu padukan dengan Sambal Matah mentah.",
    etiquetteEn: "Shred the tender meat, coat with aromatic spice pan juices, and enjoy with fresh raw Sambal Matah."
  },
  {
    id: "pempek",
    nameId: "Pempek Kapal Selam Palembang",
    nameEn: "Palembang Fish Cake with Tamarind Dip",
    region: "sumatra",
    originProvince: "Sumatra Selatan (Palembang)",
    categories: ["street"],
    spiceLevel: 2,
    tags: ["Halal", "Seafood", "Snack & Main"],
    flavorNotes: "Chewy Savory, Sweet, Tangy Garlic, Spicy Cuko",
    image: "assets/pempek.jpg",
    descId: "Olahan daging ikan tenggiri segar dan sagu yang kenyal gurih, digoreng renyah di luar, disajikan bersama kuah Cuko kental yang terbuat dari gula aren linggau, asam jawa, bawang putih, dan cabai rawit.",
    descEn: "Crisp-fried savory fish and tapioca cakes with a whole egg center ('Kapal Selam'), paired with dark, tangy, sweet-and-sour tamarind chili vinegar dip (Cuko).",
    touristTipId: "Kuah Cuko biasanya diseruput langsung dari piring atau mangkuk kecil oleh penikmat sejati di Palembang!",
    touristTipEn: "Locals drink the dark tangy Cuko sauce directly from the small bowl for an exhilarating burst of flavor!",
    historyId: "Diciptakan oleh komunitas Tionghoa Palembang abad ke-16 yang memadukan melimpahnya ikan Sungai Musi dengan tepung sagu lokal.",
    historyEn: "Invented by 16th-century Chinese immigrants in Palembang who combined Musi River mackerel with indigenous sago tapioca flour.",
    ingredientsId: ["Ikan Tenggiri Giling", "Tepung Sagu Tani", "Telur Utuh (Isi)", "Gula Aren Hitam Batok", "Asam Jawa & Bawang Putih", "Cabai Rawit Hijau"],
    ingredientsEn: ["Minced Spanish Mackerel", "High-grade Tapioca Starch", "Whole Egg filling", "Dark Palm Sugar", "Tamarind Pulp & Garlic", "Green Bird's Eye Chilies"],
    etiquetteId: "Potong pempek menjadi ukuran suapan, celupkan hingga basah kuyup dalam saus cuko hitam, lalu seruput kuahnya.",
    etiquetteEn: "Slice into bite sizes, soak thoroughly in dark tangy cuko, and enjoy with yellow noodles and diced cucumber."
  },
  {
    id: "gudeg",
    nameId: "Gudeg Basah Keraton Yogyakarta",
    nameEn: "Yogyakarta Sweet Jackfruit Stew",
    region: "java",
    originProvince: "DI Yogyakarta",
    categories: ["mild"],
    spiceLevel: 0,
    tags: ["Halal", "Traditional", "Unique Sweet Savory"],
    flavorNotes: "Sweet, Mellow Coconut, Coriander Spiced, Tender",
    image: "assets/gudeg.jpg",
    descId: "Nangka muda (gori) yang dimasak perlahan berjam-jam bersama gula aren Jawa, santan, daun jati (pemberi warna cokelat kemerahan alami), disajikan bersama telur pindang, ayam kampung, dan krecek kulit sapi gurih.",
    descEn: "Young unripe jackfruit gently slow-cooked for hours with Javanese palm sugar, coconut milk, and teak leaves, served with braised eggs, chicken, and spicy cattle skin (krecek).",
    touristTipId: "Hidangan ini manis alami tanpa rasa pedas sama sekali! Pedasnya hanya berasal dari krecek pelengkap jika Anda menginginkannya.",
    touristTipEn: "Naturally sweet and non-spicy! The heat only comes from the optional spicy beef skin stew (krecek) served on the side.",
    historyId: "Kuliner pusaka dari zaman pembangunan Kerajaan Mataram Islam di hutan Mentaok pada abad ke-16, di mana pohon nangka dan kelapa tumbuh melimpah.",
    historyEn: "Heritage recipe dating back to the 16th-century Mataram Sultanate when laborers prepared giant cauldrons of jackfruit in the Mentaok forests.",
    ingredientsId: ["Nangka Muda Segar", "Gula Kelapa / Aren Asli", "Santan Murni", "Daun Jati & Daun Salam", "Ketumbar & Bawang Merah", "Krecek Kulit Sapi"],
    ingredientsEn: ["Young Jackfruit", "Javanese Palm Sugar", "Thick Coconut Cream", "Teak & Salam Leaves", "Coriander & Shallots", "Spicy Beef Skin (Krecek)"],
    etiquetteId: "Padukan suapan gudeg manis dengan sedikit krecek pedas-gurih di atas nasi untuk keseimbangan rasa yang magis.",
    etiquetteEn: "Combine a bite of sweet jackfruit with savory-spicy krecek over warm rice for the legendary Yogyakarta sweet-savory harmony."
  },
  {
    id: "coto-makassar",
    nameId: "Coto Makassar Warisan Bugis",
    nameEn: "Bugis-Makassar Herbal Beef Broth",
    region: "sulawesi",
    originProvince: "Sulawesi Selatan",
    categories: ["soups"],
    spiceLevel: 1,
    tags: ["Halal", "Rich Broth", "Seafood & Meat Capital"],
    flavorNotes: "Nutty, Herbal Coriander, Lemongrass, Hearty Umami",
    image: "assets/coto-makassar.jpg",
    descId: "Sup daging dan jeroan sapi khas Makassar yang dimasak dengan air cucian beras khusus (tajin) serta 40 jenis rempah bumbu kacang tanah sangrai, disajikan bersama ketupat atau buras gurih berbalut daun pisang.",
    descEn: "Hearty South Sulawesi beef and offal broth prepared with fermented rice water and 40 aromatic spices ground with roasted peanuts, paired with buras rice cakes.",
    touristTipId: "Wajib disajikan dengan perasan jeruk nipis dan Sambal Tauco khas Makassar. Anda bisa memesan 'daging saja' tanpa jeroan.",
    touristTipEn: "Always customize with a squeeze of calamansi and local tauco sambal. You can request 'Daging Saja' (meat only, no offal).",
    historyId: "Telah dinikmati sejak era Kerajaan Gowa pada abad ke-16, dahulu disajikan untuk para pengawal kerajaan dan tamu kehormatan istana.",
    historyEn: "Enjoyed since the 16th-century Gowa Sultanate, historically served to palace royal guards and noble foreign ambassadors.",
    ingredientsId: ["Daging Sapi & Sengkel", "Kacang Tanah Sangrai Halus", "Tajin (Air Tajin)", "Serai & Lengkuas", "Ketumbar & Jintan", "Buras Beras Santan"],
    ingredientsEn: ["Beef Chuck & Brisket", "Finely Ground Roasted Peanuts", "Nutrient Rice Broth", "Lemongrass & Galangal", "Coriander & Cumin", "Buras Coconut Rice Cakes"],
    etiquetteId: "Iris buras ke dalam mangkuk sup, aduk dengan kuah kacang herbal yang panas mengepul.",
    etiquetteEn: "Slice the buras coconut rice cake directly into the steaming bowl, letting it soak up the nutty herbal broth."
  },
  {
    id: "mie-aceh",
    nameId: "Mie Aceh Kepiting Rempah",
    nameEn: "Acehnese Rich Curried Spiced Noodles",
    region: "sumatra",
    originProvince: "Aceh (Serambi Mekkah)",
    categories: ["must-try"],
    spiceLevel: 3,
    tags: ["Halal", "Bold Spices", "Comfort Food"],
    flavorNotes: "Robust Curry, Peppery Heat, Cardamom, Fragrant",
    image: "assets/mie-aceh.jpg",
    descId: "Mie kuning kenyal khas Aceh yang dimasak dengan kuah kari kental kaya rempah kapulaga, jintan, cabai merah, disajikan dengan daging sapi empuk atau kepiting laut, emping melinjo, dan acar bawang merah segar.",
    descEn: "Thick, chewy egg noodles stir-fried in a rich, fiery curry paste packed with cardamom, cumin, star anise, served with crab or beef, topped with shallot pickles.",
    touristTipId: "Tersedia versi 'Goreng' (kering), 'Tumis' (kuah nyemek/sedikit kuah), dan 'Kuah' (sup kari penuh). Versi tumis paling direkomendasikan!",
    touristTipEn: "Available as Fried (dry), Tumis (semi-gravy), or Kuah (curry soup). The semi-gravy 'Tumis' style is universally adored!",
    historyId: "Mencerminkan posisi historis Aceh sebagai pelabuhan pintu masuk pertama jalur rempah dunia dari India, Timur Tengah, dan Tiongkok.",
    historyEn: "Reflects Aceh's historic status as the Silk Road spice gate, synthesizing Indian curry spices, Chinese noodles, and Middle Eastern cardamom.",
    ingredientsId: ["Mie Kuning Basah Aceh", "Pasta Rempah Kari & Jintan", "Daging Sapi / Daging Kepiting", "Tauge & Kol Segar", "Acar Bawang Merah", "Emping Melinjo"],
    ingredientsEn: ["Thick Yellow Noodles", "Cardamom Curry Paste", "Beef or Fresh Crab", "Fresh Cabbage & Sprouts", "Pickled Purple Shallots", "Emping Crackers"],
    etiquetteId: "Makan acar bawang merah bersamaan dengan tiap suapan mie untuk menyeimbangkan rempah pedas kari yang pekat.",
    etiquetteEn: "Bite into the crisp pickled shallots alongside each mouthful to refresh your palate from the spicy curry."
  },
  {
    id: "ayam-taliwang",
    nameId: "Ayam Bakar Taliwang Lombok",
    nameEn: "Lombok Fiery Grilled Spiced Chicken",
    region: "bali",
    originProvince: "Nusa Tenggara Barat (Lombok)",
    categories: ["grilled"],
    spiceLevel: 3,
    tags: ["Halal", "Fiery Hot", "Smoky"],
    flavorNotes: "Intense Chili, Shrimp Paste Umami, Smoky, Citrus",
    image: "assets/ayam-taliwang.jpg",
    descId: "Ayam muda (ayam pejantan) yang dibakar setengah matang lalu dilumuri bumbu cabai rawit merah, terasi khas Lombok, tomat, kencur, dan minyak kelapa, lalu dibakar kembali di atas bara arang hingga harum merekah.",
    descEn: "Young spring chicken flame-grilled with wild red bird's eye chilies, pungent Lombok shrimp paste, aromatic ginger, and lime juice.",
    touristTipId: "Salah satu hidangan terpedas di Indonesia! Sangat nikmat dipadukan dengan Plecing Kangkung dan es kelapa muda.",
    touristTipEn: "Among the fiercest spice levels in Indonesia! Balance the heat with fresh young coconut water.",
    historyId: "Berasal dari masyarakat suku Sasak di Karang Taliwang, Lombok, sebagai hidangan penghormatan pemuka adat dan pendamai perang tempo dulu.",
    historyEn: "Created by the Sasak people of Karang Taliwang, Lombok, historically served to reconcile conflicts between neighboring kingdoms.",
    ingredientsId: ["Ayam Kampung Muda", "Cabai Rawit Lombok", "Terasi Khas Lombok", "Kencur Segar", "Gula Merah", "Jeruk Limau"],
    ingredientsEn: ["Young Spring Chicken", "Lombok Fiery Chilies", "Toasted Lombok Shrimp Paste", "Aromatic Sand Ginger", "Palm Sugar", "Kaffir Lime"],
    etiquetteId: "Gunakan tangan untuk merobek daging ayam, cocolkan ke bumbu bakar basahnya, lalu segera minumlah es teh atau kelapa muda.",
    etiquetteEn: "Tear the chicken with your fingers, dip into excess spicy roasting glaze, and keep cold coconut water nearby."
  },
  {
    id: "papeda",
    nameId: "Papeda & Ikan Kuah Kuning",
    nameEn: "Papeda Sago Porridge with Yellow Fish Broth",
    region: "eastern",
    originProvince: "Maluku & Papua",
    categories: ["soups", "mild"],
    spiceLevel: 1,
    tags: ["Halal", "Gluten-Free", "Indigenous Heritage"],
    flavorNotes: "Tangy Citrus, Turmeric Aromatic, Fresh Fish Umami, Smooth",
    image: "assets/papeda.jpg",
    descId: "Bubur sagu murni khas Indonesia Timur bertekstur kenyal bening, disiram sup ikan laut segar kuah kuning berempah kunyit, serai, daun kemangi wangi, dan perasan jeruk nipis.",
    descEn: "Silky transparent sago starch staple from Eastern Indonesia, savored with ocean-fresh fish in a fragrant, tangy turmeric broth infused with wild basil.",
    touristTipId: "Bebas gluten secara alami! Gunakan sepasang sumpit bambu atau garpu (gata-gata) untuk menggulung papeda ke dalam kuah.",
    touristTipEn: "Naturally 100% gluten-free and clean! Use two bamboo sticks to roll the sago porridge directly into the zesty fish broth.",
    historyId: "Makanan pokok warisan leluhur bangsa Melanesia dan Maluku selama ribuan tahun sebelum padi diperkenalkan secara masif.",
    historyEn: "Millennia-old staple nourishment of indigenous Melanesian and Moluccan islanders, sustainably harvested from wild sago palms.",
    ingredientsId: ["Tepung Sagu Murni Basah", "Ikan Tongkol / Kakap Laut", "Kunyit Segar & Serai", "Kemangi Hutan Segar", "Air Jeruk Nipis", "Cabai Rawit Utuh"],
    ingredientsEn: ["Pure Wild Sago Starch", "Fresh Tuna or Red Snapper", "Fresh Turmeric & Lemongrass", "Wild Indonesian Basil", "Fresh Lime Juice", "Whole Bird's Eye Chilies"],
    etiquetteId: "Papeda tidak dikunyah, melainkan ditelan lembut bersama kuah kuning ikan yang kaya rasa asam segar.",
    etiquetteEn: "Papeda is gently swallowed smooth rather than chewed, accompanied by a generous spoonful of zesty fish broth."
  },
  {
    id: "bakso-malang",
    nameId: "Bakso Sapi Komplet Malang",
    nameEn: "Malang Springy Beef Meatball Feast",
    region: "java",
    originProvince: "Jawa Timur (Malang)",
    categories: ["soups", "street", "mild"],
    spiceLevel: 0,
    tags: ["Halal", "Street Favorite", "Comfort Food"],
    flavorNotes: "Savory Clear Bone Broth, Chewy Beef, Crispy Wontons",
    image: "assets/bakso-malang.jpg",
    descId: "Semangkuk bakso daging sapi kenyal lezat khas kota sejuk Malang, lengkap dengan tahu bakso, siomay kukus, pangsit goreng renyah segitiga, dan kuah kaldu tulang sapi bening beraroma seledri.",
    descEn: "Beloved East Javanese springy beef meatballs served in a steaming bone broth with tofu, steamed dumplings, crispy fried wontons, and fresh celery.",
    touristTipId: "Bahkan anak-anak dan wisatawan lansia sangat menyukainya. Anda bisa meracik saus kecap, cuka, dan sambal sendiri.",
    touristTipEn: "Universally loved by all ages, from toddlers to grandparents. Completely mild until you add table condiments.",
    historyId: "Percampuran harmonis antara teknik bola daging Tionghoa (Bak-So) dengan daging sapi halal lokal di dataran tinggi Malang yang berhawa sejuk.",
    historyEn: "Harmonious fusion of Chinese culinary ball techniques ('Bak-So') adapted to local Indonesian halal beef in cool highland Malang.",
    ingredientsId: ["Daging Sapi Asli Giling", "Kaldu Tulang Sapi Bening", "Pangsit Goreng Renyah", "Tahu Bakso", "Mie Kuning & Bihun", "Daun Seledri & Bawang Goreng"],
    ingredientsEn: ["Tender Ground Halal Beef", "Simmered Beef Bone Broth", "Crispy Wonton Skins", "Stuffed Tofu Dumpling", "Yellow Egg & Rice Noodles", "Celery & Fried Shallots"],
    etiquetteId: "Nikmati kerupuk pangsit goreng selagi masih renyah, atau celupkan ke dalam kuah panas agar sedikit lunak.",
    etiquetteEn: "Take a bite of the crispy wonton while crunchy, or dip it in hot broth to soften slightly before savoring."
  },
  {
    id: "tempe-mendoan",
    nameId: "Tempe Mendoan Banyumas",
    nameEn: "Banyumas Crispy-Soft Battered Tempeh",
    region: "java",
    originProvince: "Jawa Tengah (Banyumas)",
    categories: ["veggie", "street", "mild"],
    spiceLevel: 1,
    tags: ["Vegetarian", "Superfood", "High Protein"],
    flavorNotes: "Crispy-Soft Batter, Savory Coriander, Sweet-Spicy Dip",
    image: "assets/tempe-mendoan.jpg",
    descId: "Irisan tempe kedelai tipis dibalut adonan tepung beras, daun bawang, dan ketumbar, digoreng setengah matang ('mendo') hingga luarnya gurih renyah dan dalamnya lembut, disajikan dengan kecap cabai rawit.",
    descEn: "Thin slices of fermented soybean tempeh coated in spiced rice flour batter and scallions, fried just until golden and soft-crisp, served with sweet chili dipping sauce.",
    touristTipId: "Tempe adalah makanan superfood asli Indonesia yang kini diakui dunia! Sangat cocok untuk sarapan atau teman minum teh hangat.",
    touristTipEn: "Tempeh is Indonesia's proud ancient superfood gift to the world! Packed with plant protein and gut-friendly fermented probiotics.",
    historyId: "Berasal dari kawasan Banyumas, Jawa Tengah. Kata 'Mendo' berarti setengah matang atau lembut lembek dalam bahasa Jawa.",
    historyEn: "Born in Banyumas, Central Java. 'Mendo' is Javanese for half-cooked, yielding its prized tender interior.",
    ingredientsId: ["Tempe Kedelai Khusus Mendoan", "Tepung Beras & Tepung Terigu", "Daun Bawang Iris Segar", "Ketumbar & Bawang Putih", "Kecap Manis Cocolan", "Cabai Rawit Hijau"],
    ingredientsEn: ["Thin Fermented Tempeh Sheets", "Rice & Wheat Flour blend", "Fresh Scallions", "Coriander & Garlic", "Sweet Soy Sauce dip", "Green Bird's Eye Chilies"],
    etiquetteId: "Gigit sedikit cabai rawit hijau segar lalu susul dengan suapan tempe mendoan hangat berbalut kecap manis.",
    etiquetteEn: "Take a tiny bite of raw green chili followed immediately by the warm sweet-soy-drenched tempeh."
  },
  {
    id: "es-cendol",
    nameId: "Es Cendol Dawet Ayu",
    nameEn: "Cendol Shaved Ice with Pandan & Palm Sugar",
    region: "java",
    originProvince: "Jawa Tengah / Jawa Barat",
    categories: ["street", "mild"],
    spiceLevel: 0,
    tags: ["Dessert", "Vegetarian", "Sweet Refreshing"],
    flavorNotes: "Fragrant Pandan, Creamy Coconut Milk, Smoky Palm Sugar",
    image: "assets/es-cendol.jpg",
    descId: "Minuman penutup manis menyegarkan berisi butiran jeli tepung beras hijau beraroma daun pandan & suji, disiram santan kelapa gurih, sirup gula aren kental, dan es batu serut dingin.",
    descEn: "Classic tropical dessert of pandan-flavored green rice jelly droplets, rich chilled coconut milk, and smoky caramel Javanese palm sugar over shaved ice.",
    touristTipId: "Penawar sempurna di hari tropis yang terik atau setelah menikmati hidangan Indonesia yang kaya rempah!",
    touristTipEn: "The ultimate tropical refresher on a sunny day and the ideal cooling antidote after a spicy Indonesian feast!",
    historyId: "Telah dinikmati berabad-abad di tanah Jawa. Daun pandan dan gula kelapa merupakan dua pilar utama gastronomi manis kepulauan nusantara.",
    historyEn: "Savored for centuries across Java and Sunda, honoring the archipelago's two sweet pillars: natural pandan and aromatic palm syrup.",
    ingredientsId: ["Jeli Cendol Tepung Beras", "Daun Pandan & Daun Suji Asli", "Santan Kelapa Segar", "Kinca Gula Aren Kental", "Es Batu Serut", "Potongan Nangka (Opsional)"],
    ingredientsEn: ["Pandan Green Rice Flour Droplets", "Fresh Pandan & Suji Extract", "Rich Fresh Coconut Cream", "Dark Palm Sugar Nectar (Kinca)", "Crushed Shaved Ice", "Sweet Jackfruit bits"],
    etiquetteId: "Aduk gelas dari dasar ke atas menggunakan sedotan atau sendok agar santan dan lelehan gula aren menyatu sempurna.",
    etiquetteEn: "Stir thoroughly from the bottom up so the dark palm sugar swirls into the velvety coconut cream."
  }
];

// ============================================================================
// 3. Regional Discovery Content (The Vastness of Indonesian Cuisine)
// ============================================================================
const regionsContent = {
  sumatra: {
    badge: "🌶️",
    titleId: "Sumatra: Kerajaan Rempah & Santan Pekat",
    titleEn: "Sumatra: The Realm of Bold Spices & Curries",
    taglineId: "Pusat Jalur Rempah dengan Cita Rasa Berani dan Kuah Gulai Legendaris",
    taglineEn: "The Ancient Spice Hub with Unrivaled Curries & Bold Aromatics",
    descId: "Sumatra merupakan gerbang masuk jalur rempah dunia. Ciri khas kulinernya adalah penggunaan cabai merah melimpah, santan kental gurih, asam kandis, serai, dan kapulaga. Dari Rendang Minang yang tersohor hingga Mie Aceh yang kaya kari, rasa Sumatra selalu berani, harum, dan menggugah selera.",
    descEn: "Sumatra was the historic gateway of the global Spice Trade. Its cuisine is defined by vibrant red chilies, rich coconut milk, dried tamarind, and warm cloves. From the world-famous Rendang of West Sumatra to fragrant Acehnese curries, Sumatran dishes are unapologetically bold and deeply satisfying.",
    featuresId: [
      "Teknik gulai dan karamelisasi lambat (Rendang, Kalio, Gulai Otak)",
      "Pengaruh jalur rempah Timur Tengah, India, dan Melayu",
      "Kultur bersantap unik Rumah Makan Padang dengan puluhan piring 'Hidang'"
    ],
    featuresEn: [
      "Masters of rich coconut curries and slow reduction (Rendang, Kalio, Gulai)",
      "Centuries of fusion with Indian, Middle Eastern, and Malay maritime trade",
      "The iconic 'Hidang' banquet dining style of Rumah Makan Padang"
    ],
    dishes: ["Rendang Minang", "Pempek Palembang", "Mie Aceh", "Sate Padang", "Ayam Pop", "Arsik Ikan Mas"]
  },
  java: {
    badge: "🍯",
    titleId: "Jawa & Madura: Harmoni Manis, Gurih, dan Kluwek",
    titleEn: "Java & Madura: The Symphony of Sweet, Savory, and Umami",
    taglineId: "Keseimbangan Halus Gula Kelapa, Kedelai Fermentasi, dan Rempah Hutan",
    taglineEn: "Delicate Balance of Palm Sugar, Fermented Soybeans, and Earthy Kluwek",
    descId: "Pulau Jawa menampilkan spektrum rasa yang sangat beragam: kelembutan manis gula aren Yogyakarta (Gudeg), kesegaran asam manis Sunda (Lalapan & Sambal), kehangatan kuah santan Betawi (Soto Betawi), hingga kuah hitam legendaris Jawa Timur yang diperkaya biji kluwek fermentasi (Rawon). Madura menyempurnakannya dengan sate bakar saus kacang.",
    descEn: "Java boasts an incredible spectrum of flavors: from the gentle palm sweetness of Yogyakarta (Gudeg) and fresh herbaceous Sundanese greens, to Jakarta's creamy soups (Soto Betawi) and East Java's rare fermented black nut beef stew (Rawon). Madura elevates charcoal-grilled satays with roasted peanut sauces.",
    featuresId: [
      "Tempat lahirnya Tempe — superfood nabati fermentasi kedelai kebanggaan dunia",
      "Kecap Manis — sentuhan manis gurih karamel yang unik di seluruh Asia Tenggara",
      "Koleksi Soto terkaya: Soto Betawi, Soto Kudus, Soto Lamongan, Soto Madura"
    ],
    featuresEn: [
      "Birthplace of Tempeh — the world-celebrated fermented plant superfood",
      "Kecap Manis — indigenous sweet aromatic molasses-thick soy sauce",
      "Vast regional soup variations: Soto Betawi, Soto Kudus, Soto Lamongan"
    ],
    dishes: ["Rawon Surabaya", "Gudeg Jogja", "Soto Betawi", "Sate Madura", "Gado-Gado", "Tempe Mendoan"]
  },
  bali: {
    badge: "🌿",
    titleId: "Bali & Lombok: Pesona Base Genep dan Bakaran Pedas",
    titleEn: "Bali & Lombok: Sacred Aromatics & Fiery Charcoal Roasts",
    taglineId: "Harmoni 15 Rempah Suci, Serai Segar, dan Sensasi Cabai Wild Sasak",
    taglineEn: "The Balance of 15 Sacred Herbs, Fresh Lemongrass, and Wild Lombok Chilies",
    descId: "Kuliner Pulau Dewata berakar pada filosofi bumbu dasar 'Base Genep' yang meramu kencur, jahe, lengkuas, kunyit, dan serai dalam takaran sakral. Dipadukan dengan daun pisang dan pemanggangan arang kelapa, melahirkan Ayam Betutu dan Sate Lilit yang semerbak. Di seberang selat, Lombok menghadirkan sengatan Ayam Taliwang yang melegenda.",
    descEn: "Balinese culinary tradition revolves around 'Base Genep'—a sacred paste combining 15 fresh roots and spices including aromatic sand ginger, galangal, turmeric, and kaffir lime. Across the strait in Lombok, volcanic soils yield the fierce bird's eye chilies that define smoky Ayam Taliwang and spicy Plecing.",
    featuresId: [
      "Sambal Matah mentah yang segar dengan minyak kelapa dan jeruk limau",
      "Teknik memasak lambat dalam sekam padi (Betutu) menghasilkan kelembutan luar biasa",
      "Sate Lilit cincang yang dililitkan pada batang serai wangi"
    ],
    featuresEn: [
      "Raw Sambal Matah: diced shallots, lemongrass, and fresh virgin coconut oil",
      "Ancient slow-roasting techniques wrapped in banana bark inside rice embers",
      "Minced meat skewers wound around fragrant stalks of fresh lemongrass (Sate Lilit)"
    ],
    dishes: ["Ayam Betutu", "Ayam Taliwang", "Sambal Matah", "Sate Lilit", "Plecing Kangkung", "Nasi Campur Bali"]
  },
  sulawesi: {
    badge: "🐟",
    titleId: "Sulawesi: Surga Seafood Pesisir & Sambal Dabu-Dabu",
    titleEn: "Sulawesi: Coastal Oceanic Treasures & Fresh Citrus Heat",
    taglineId: "Ikan Segar Laut Dalam, Kuah Rempah Kacang, dan Sambal Tanpa Terasi",
    taglineEn: "Deep-sea Fresh Fish, Nutty Broths, and Zesty Non-fermented Sambals",
    descId: "Dikelilingi lautan tropis kaya terumbu karang, Sulawesi adalah ibu kota hidangan laut Indonesia. Di Manado, ikan laut dibakar sederhana lalu disiram Sambal Dabu-Dabu yang segar asam pedas. Di selatan, masyarakat Makassar dan Bugis menghadirkan Coto Makassar yang kaya 40 bumbu dan Konro Bakar iga sapi yang empuk.",
    descEn: "Surrounded by deep tropical waters, Sulawesi is Indonesia's coastal seafood paradise. In Manado, ocean catches are charbroiled and showered with diced tomato Dabu-Dabu salsa. In the south, Bugis-Makassar cooks brew legendary 40-spice herbal broths like Coto Makassar and giant Konro beef ribs.",
    featuresId: [
      "Sambal Dabu-Dabu segar dengan air perasan jeruk lemon cui Manado",
      "Sup kaldu tulang sapi rempah kacang khas Makassar (Coto & Sop Konro)",
      "Penggunaan daun woku, daun pandan, dan kemangi untuk sajian ikan"
    ],
    featuresEn: [
      "Sambal Dabu-Dabu: vibrant fresh tomato salsa sparked with calamansi citrus",
      "Deeply comforting beef broths thickened with stone-ground roasted peanuts",
      "Woku aromatic herb bouquets with wild basil, pandan leaves, and lemongrass"
    ],
    dishes: ["Coto Makassar", "Ikan Bakar Dabu-Dabu", "Sop Konro", "Ayam Woku Belanga", "Bubur Manado (Tinutuan)"]
  },
  eastern: {
    badge: "🌴",
    titleId: "Maluku, Papua & Kalimantan: Pulau Rempah Asli & Sagu Purba",
    titleEn: "Maluku, Papua & Borneo: The Original Spice Islands & Sago Staples",
    taglineId: "Pohon Pala, Cengkeh Bersejarah, Sup Kuah Kuning, dan Kemurnian Sagu",
    taglineEn: "Native Nutmeg, Historic Cloves, Golden Fish Soups, and Ancient Sago",
    descId: "Kepulauan Maluku adalah kepulauan rempah asli tempat pohon pala dan cengkeh pertama kali tumbuh di muka bumi. Di sinilah lahir hidangan ikan laut kuah kuning yang beraroma kunyit segar. Bersama masyarakat Papua, mereka menyantap sagu murni dalam wujud Papeda yang kenyal lembut. Di Kalimantan, rempah hutan dan bubur pedas memperkaya khazanah nusantara.",
    descEn: "The Maluku archipelago is the original 'Spice Islands' where native nutmeg and cloves captivated medieval world trade. Here, golden turmeric fish soups nourish the soul, paired with pure sago starch (Papeda) in Maluku and Papua. In Borneo, wild botanical ferns, river fish, and spiced heritage porridges showcase primeval rainforest flavors.",
    featuresId: [
      "Papeda: makanan pokok sagu murni alami bebas gluten",
      "Ikan Kuah Kuning: perpaduan kunyit segar, kemangi, dan jeruk nipis",
      "Pala dan cengkeh segar yang digunakan langsung dari pohon perkebunan rakyat"
    ],
    featuresEn: [
      "Papeda: 100% gluten-free wild sago porridge staple eaten with broth",
      "Ikan Kuah Kuning: bright turmeric ocean fish soup with wild basil and lime",
      "Original habitat of nutmeg and cloves, utilized fresh from tree to table"
    ],
    dishes: ["Papeda Ikan Kuning", "Ikan Asar Asap", "Gohu Ikan Maluku", "Bubur Pedas Sambas", "Ayam Cincane"]
  }
};

// ============================================================================
// 4. Core State Management
// ============================================================================
let activeCategoryFilter = "all";
let activeRegionFilter = "all";
let searchQuery = "";
let currentRegionTab = "sumatra";
let selectedChatImageFile = null;
let chatSessionId = localStorage.getItem("foodies_chat_sessionId") || null;

// ============================================================================
// 5. DOM Elements
// ============================================================================
const langSwitchBtns = document.querySelectorAll(".lang-btn, .btn-footer-lang");
const foodGrid = document.getElementById("foodGrid");
const emptyState = document.getElementById("emptyState");
const foodSearchInput = document.getElementById("foodSearchInput");
const searchClearBtn = document.getElementById("searchClearBtn");
const categoryPills = document.querySelectorAll(".pill-btn");
const regionPills = document.querySelectorAll(".region-btn");
const foodCountNum = document.getElementById("foodCountNum");
const btnResetFilters = document.getElementById("btnResetFilters");
const regionNavTabs = document.querySelectorAll(".region-tab");
const regionTabContent = document.getElementById("regionTabContent");
const dishModalBackdrop = document.getElementById("dishModalBackdrop");
const modalDynamicContent = document.getElementById("modalDynamicContent");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const mobileToggle = document.getElementById("mobileToggle");
const navLinks = document.getElementById("navLinks");

// Chatbot Elements
const chatLauncherBtn = document.getElementById("chatLauncherBtn");
const chatWindow = document.getElementById("chatWindow");
const chatCloseBtn = document.getElementById("chatCloseBtn");
const chatResetBtn = document.getElementById("chatResetBtn");
const chatForm = document.getElementById("chatForm");
const chatPromptInput = document.getElementById("chatPromptInput");
const chatMessages = document.getElementById("chatMessages");
const chatQuickChips = document.getElementById("chatQuickChips");
const btnAttachFile = document.getElementById("btnAttachFile");
const chatFileInput = document.getElementById("chatFileInput");
const chatAttachmentPreview = document.getElementById("chatAttachmentPreview");
const attachmentPreviewImg = document.getElementById("attachmentPreviewImg");
const attachmentFileName = document.getElementById("attachmentFileName");
const btnRemoveAttachment = document.getElementById("btnRemoveAttachment");
const navChatTrigger = document.getElementById("navChatTrigger");
const btnHeroChat = document.getElementById("btnHeroChat");
const btnFooterOpenChat = document.getElementById("btnFooterOpenChat");

// ============================================================================
// 6. Language Switching Logic (i18n)
// ============================================================================
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem("foodies_lang", lang);
  document.documentElement.lang = lang;

  // Update static text elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  // Update language buttons active state
  langSwitchBtns.forEach(btn => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Re-render dynamic sections
  renderFoodCards();
  renderRegionDetail(currentRegionTab);
}

// ============================================================================
// 7. Food Recommendation Cards Rendering
// ============================================================================
function getSpiceBadgeHtml(level) {
  const t = translations[currentLang];
  let icon = "🌶️";
  let label = t.spiceLevel1;
  let cssClass = "spice-1";

  if (level === 0) {
    icon = "🌱";
    label = t.spiceLevel0;
    cssClass = "spice-0";
  } else if (level === 2) {
    icon = "🌶️🌶️";
    label = t.spiceLevel2;
    cssClass = "spice-2";
  } else if (level >= 3) {
    icon = "🌶️🌶️🌶️";
    label = t.spiceLevel3;
    cssClass = "spice-3";
  }

  return `<span class="badge-spice ${cssClass}">${icon} ${label}</span>`;
}

function renderFoodCards() {
  const filtered = foodData.filter(food => {
    // Category filter
    const matchesCategory = (activeCategoryFilter === "all") ||
      (activeCategoryFilter === "mild" && food.spiceLevel === 0) ||
      (food.categories && food.categories.includes(activeCategoryFilter));

    // Region filter
    const matchesRegion = (activeRegionFilter === "all") || (food.region === activeRegionFilter);

    // Search query filter
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query ||
      food.nameId.toLowerCase().includes(query) ||
      food.nameEn.toLowerCase().includes(query) ||
      food.originProvince.toLowerCase().includes(query) ||
      food.flavorNotes.toLowerCase().includes(query) ||
      food.descId.toLowerCase().includes(query) ||
      food.descEn.toLowerCase().includes(query);

    return matchesCategory && matchesRegion && matchesSearch;
  });

  // Update counter
  if (foodCountNum) {
    foodCountNum.textContent = filtered.length;
  }

  if (filtered.length === 0) {
    foodGrid.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";
  const isEn = currentLang === "en";
  const t = translations[currentLang];

  foodGrid.innerHTML = filtered.map(food => {
    const title = isEn ? food.nameEn : food.nameId;
    const subTitle = isEn ? food.nameId : food.nameEn;
    const desc = isEn ? food.descEn : food.descId;
    const tip = isEn ? food.touristTipEn : food.touristTipId;

    return `
      <article class="food-card" data-dish-id="${food.id}">
        <div class="card-img-wrapper">
          <img src="${food.image}" alt="${title}" class="card-img" loading="lazy" onerror="this.onerror=null; this.src='assets/hero-banner.jpg';">
          <div class="card-badges-top">
            <span class="badge-origin">📍 ${food.originProvince}</span>
            ${getSpiceBadgeHtml(food.spiceLevel)}
          </div>
        </div>

        <div class="card-content">
          <div class="card-meta-tags">
            ${food.tags.map(tag => {
              const tagClass = tag.toLowerCase().includes("veggie") || tag.toLowerCase().includes("vegetarian") ? "veggie" :
                               tag.toLowerCase().includes("halal") ? "halal" : "";
              return `<span class="tag-pill ${tagClass}">${tag}</span>`;
            }).join("")}
          </div>

          <div class="card-title-group">
            <h3 class="card-title-id">${title}</h3>
            <p class="card-title-en">${subTitle}</p>
          </div>

          <p class="card-description">${desc}</p>

          <div class="tourist-tip-box">
            <strong>${t.touristTipLabel}</strong> ${tip}
          </div>

          <div class="card-footer">
            <span class="card-flavor-tag">✨ ${food.flavorNotes}</span>
            <button type="button" class="btn-card-action" data-action="open-modal" data-dish-id="${food.id}">
              ${isEn ? "Explore Details →" : "Selengkapnya →"}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Attach click listeners to card detail buttons
  foodGrid.querySelectorAll("[data-action='open-modal']").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const dishId = btn.getAttribute("data-dish-id");
      openDishModal(dishId);
    });
  });

  // Clicking anywhere on card also opens modal
  foodGrid.querySelectorAll(".food-card").forEach(card => {
    card.addEventListener("click", () => {
      const dishId = card.getAttribute("data-dish-id");
      openDishModal(dishId);
    });
  });
}

// ============================================================================
// 8. Regional Deep Dive Tab Rendering
// ============================================================================
function renderRegionDetail(regionKey) {
  const reg = regionsContent[regionKey];
  if (!reg) return;

  const isEn = currentLang === "en";
  const title = isEn ? reg.titleEn : reg.titleId;
  const tagline = isEn ? reg.taglineEn : reg.taglineId;
  const desc = isEn ? reg.descEn : reg.descId;
  const features = isEn ? reg.featuresEn : reg.featuresId;

  // Visual image based on region
  let regImage = "assets/hero-rendang.jpg";
  if (regionKey === "java") regImage = "assets/rawon.jpg";
  if (regionKey === "bali") regImage = "assets/ayam-betutu.jpg";
  if (regionKey === "sumatra") regImage = "assets/rendang.jpg";
  if (regionKey === "sulawesi") regImage = "assets/coto-makassar.jpg";
  if (regionKey === "eastern") regImage = "assets/papeda.jpg";

  regionTabContent.innerHTML = `
    <div class="region-detail-grid">
      <div class="region-detail-info">
        <div class="region-detail-header">
          <h3>${reg.badge} ${title}</h3>
          <span class="region-tagline">${tagline}</span>
        </div>
        <p class="region-narrative">${desc}</p>

        <div class="region-features-list">
          ${features.map(f => `
            <div class="region-feat-item">
              <span class="feat-dot">✔</span>
              <span>${f}</span>
            </div>
          `).join("")}
        </div>

        <div class="region-dishes-chips">
          ${reg.dishes.map(d => `<span class="dish-chip">🍲 ${d}</span>`).join("")}
        </div>
      </div>

      <div class="region-visual-card">
        <img src="${regImage}" alt="${title}" loading="lazy" onerror="this.onerror=null; this.src='assets/hero-banner.jpg';">
      </div>
    </div>
  `;
}

// ============================================================================
// 9. Interactive Dish Detail Modal
// ============================================================================
function openDishModal(dishId) {
  const dish = foodData.find(d => d.id === dishId);
  if (!dish) return;

  const isEn = currentLang === "en";
  const t = translations[currentLang];
  const title = isEn ? dish.nameEn : dish.nameId;
  const subTitle = isEn ? dish.nameId : dish.nameEn;
  const history = isEn ? dish.historyEn : dish.historyId;
  const etiquette = isEn ? dish.etiquetteEn : dish.etiquetteId;
  const tip = isEn ? dish.touristTipEn : dish.touristTipId;
  const ingredients = isEn ? dish.ingredientsEn : dish.ingredientsId;

  modalDynamicContent.innerHTML = `
    <div class="modal-hero-cover">
      <img src="${dish.image}" alt="${title}" onerror="this.onerror=null; this.src='assets/hero-banner.jpg';">
    </div>

    <div class="modal-body">
      <div class="modal-header-section">
        <h2 class="modal-title-main">${title}</h2>
        <span class="modal-title-trans">${subTitle}</span>

        <div class="modal-meta-bar">
          <span class="badge-origin">📍 ${dish.originProvince}</span>
          ${getSpiceBadgeHtml(dish.spiceLevel)}
          ${dish.tags.map(t => `<span class="tag-pill">${t}</span>`).join("")}
        </div>
      </div>

      <div class="modal-story-box">
        <h4>📜 ${isEn ? "Cultural Heritage & Background" : "Sejarah & Filosofi Kuliner"}</h4>
        <p>${history}</p>
      </div>

      <div class="modal-details-grid">
        <div class="modal-info-card">
          <h5>${t.keyIngredientsLabel}</h5>
          <ul>
            ${ingredients.map(ing => `<li>${ing}</li>`).join("")}
          </ul>
        </div>

        <div class="modal-info-card">
          <h5>${t.diningEtiquetteLabel}</h5>
          <p>${etiquette}</p>
          <div style="margin-top: 12px; font-weight: 600; color: #C84B31;">
            <strong>${t.touristTipLabel}</strong> ${tip}
          </div>
        </div>
      </div>

      <div class="modal-actions">
        <button type="button" class="btn btn-secondary" id="btnModalCloseSecondary">
          ${isEn ? "Close" : "Tutup"}
        </button>
        <button type="button" class="btn btn-primary" id="btnModalAskAI" data-dish-name="${dish.nameId}">
          💬 ${t.btnAskAIAbout}
        </button>
      </div>
    </div>
  `;

  dishModalBackdrop.classList.add("open");
  dishModalBackdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Modal actions
  document.getElementById("btnModalCloseSecondary").addEventListener("click", closeDishModal);
  document.getElementById("btnModalAskAI").addEventListener("click", () => {
    closeDishModal();
    openChatWindow();
    const promptText = isEn
      ? `Can you tell me more about ${dish.nameEn} (${dish.nameId}) from ${dish.originProvince}? What makes its taste unique and where is the best place to eat it?`
      : `Bisa jelaskan lebih dalam tentang hidangan ${dish.nameId} dari ${dish.originProvince}? Apa keunikan bumbunya dan di mana tempat terbaik mencobanya?`;
    sendChatMessage(promptText);
  });
}

function closeDishModal() {
  dishModalBackdrop.classList.remove("open");
  dishModalBackdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// ============================================================================
// 10. Chatbot Assistant Controller (Integrated with /api/chat)
// ============================================================================
function openChatWindow() {
  chatWindow.classList.add("open");
  chatWindow.setAttribute("aria-hidden", "false");
  chatPromptInput.focus();
}

function closeChatWindow() {
  chatWindow.classList.remove("open");
  chatWindow.setAttribute("aria-hidden", "true");
}

function toggleChatWindow() {
  if (chatWindow.classList.contains("open")) {
    closeChatWindow();
  } else {
    openChatWindow();
  }
}

function appendUserMessage(text, imageSrc = null) {
  const row = document.createElement("div");
  row.className = "message-row user-row";

  let imageHtml = "";
  if (imageSrc) {
    imageHtml = `<img src="${imageSrc}" class="user-attached-img" alt="Foto Makanan Pengguna">`;
  }

  row.innerHTML = `
    <div class="msg-bubble">
      ${imageHtml}
      <p>${escapeHtml(text)}</p>
    </div>
  `;
  chatMessages.appendChild(row);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
  const row = document.createElement("div");
  row.className = "message-row bot-row typing-row";
  row.id = "typingIndicatorRow";
  row.innerHTML = `
    <div class="msg-avatar">👨‍🍳</div>
    <div class="msg-bubble">
      <div class="typing-dots">
        <span></span><span></span><span></span>
      </div>
    </div>
  `;
  chatMessages.appendChild(row);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
  const indicator = document.getElementById("typingIndicatorRow");
  if (indicator) {
    indicator.remove();
  }
}

function appendBotMessage(markdownText) {
  removeTypingIndicator();
  const row = document.createElement("div");
  row.className = "message-row bot-row";

  const formattedHtml = formatMarkdown(markdownText);

  row.innerHTML = `
    <div class="msg-avatar">👨‍🍳</div>
    <div class="msg-bubble">
      ${formattedHtml}
    </div>
  `;
  chatMessages.appendChild(row);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.innerText = text;
  return div.innerHTML;
}

/**
 * Basic safe markdown parser for assistant bullet points, bolding, and headings
 */
function formatMarkdown(text) {
  if (!text) return "";
  let html = text;

  // Escape basic HTML tags to prevent XSS
  html = html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Bold **text**
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  // Italic *text* or _text_
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // Headings
  html = html.replace(/^### (.*$)/gim, "<h5 style='font-size: 0.95rem; font-weight: 700; margin-top: 10px; margin-bottom: 4px; color: #C84B31;'>$1</h5>");
  html = html.replace(/^## (.*$)/gim, "<h4 style='font-size: 1rem; font-weight: 800; margin-top: 12px; margin-bottom: 6px;'>$1</h4>");

  // Lists (* item or - item)
  const lines = html.split("\n");
  let inList = false;
  let processedLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("* ") || line.startsWith("- ")) {
      if (!inList) {
        processedLines.push("<ul>");
        inList = true;
      }
      processedLines.push(`<li>${line.substring(2)}</li>`);
    } else {
      if (inList) {
        processedLines.push("</ul>");
        inList = false;
      }
      if (line.length > 0) {
        processedLines.push(`<p>${line}</p>`);
      }
    }
  }
  if (inList) {
    processedLines.push("</ul>");
  }

  return processedLines.join("");
}

/**
 * Sends a message to Express backend endpoint /api/chat
 */
async function sendChatMessage(promptText, file = null) {
  if (!promptText && !file) return;

  // Preview user message in UI
  let previewUrl = null;
  if (file) {
    previewUrl = URL.createObjectURL(file);
  }
  appendUserMessage(promptText || (file ? "Mengirim foto makanan..." : ""), previewUrl);
  showTypingIndicator();

  try {
    let response;

    if (file) {
      // Use FormData if file attachment is present
      const formData = new FormData();
      if (promptText) formData.append("prompt", promptText);
      formData.append("file", file);
      if (chatSessionId) formData.append("sessionId", chatSessionId);

      response = await fetch("/api/chat", {
        method: "POST",
        body: formData
      });
    } else {
      // Use standard JSON POST
      response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: promptText,
          sessionId: chatSessionId
        })
      });
    }

    if (!response.ok) {
      throw new Error(`Server returned HTTP ${response.status}`);
    }

    const data = await response.json();

    // Preserve session ID for ongoing conversation history
    if (data.sessionId) {
      chatSessionId = data.sessionId;
      localStorage.setItem("foodies_chat_sessionId", chatSessionId);
    }

    // Extract AI reply from returned sessionHistory steps
    let replyText = "";
    if (data.result && Array.isArray(data.result)) {
      // Find the latest step of type "model_output"
      for (let i = data.result.length - 1; i >= 0; i--) {
        const step = data.result[i];
        if (step.type === "model_output" && step.content) {
          const textPart = step.content.find(c => c.type === "text" || c.text);
          if (textPart && textPart.text) {
            replyText = textPart.text;
            break;
          }
        }
      }
    }

    if (!replyText) {
      replyText = "Terima kasih! Saya siap membantu Anda menjelajahi kelezatan kuliner Nusantara lainnya.";
    }

    appendBotMessage(replyText);

  } catch (error) {
    console.error("Error communicating with /api/chat:", error);
    const errText = currentLang === "en"
      ? "Sorry, I had trouble connecting to the food guide server. Please verify your connection or try again shortly."
      : "Mohon maaf, terjadi kendala saat menghubungi server panduan kuliner. Silakan coba beberapa saat lagi.";
    appendBotMessage(errText);
  } finally {
    // Clear attachment state
    clearAttachment();
  }
}

function clearAttachment() {
  selectedChatImageFile = null;
  chatFileInput.value = "";
  chatAttachmentPreview.style.display = "none";
  attachmentPreviewImg.src = "";
  attachmentFileName.textContent = "";
}

// ============================================================================
// 11. Event Listeners & Interactive Controls
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize language
  setLanguage(currentLang);

  // Language button clicks
  langSwitchBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-lang");
      setLanguage(selected);
    });
  });

  // Category filter clicks
  categoryPills.forEach(pill => {
    pill.addEventListener("click", () => {
      categoryPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategoryFilter = pill.getAttribute("data-category");
      renderFoodCards();
    });
  });

  // Region filter clicks
  regionPills.forEach(pill => {
    pill.addEventListener("click", () => {
      regionPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeRegionFilter = pill.getAttribute("data-region");
      renderFoodCards();
    });
  });

  // Search input typing
  foodSearchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    if (searchQuery.trim().length > 0) {
      searchClearBtn.style.display = "flex";
    } else {
      searchClearBtn.style.display = "none";
    }
    renderFoodCards();
  });

  // Search clear button
  searchClearBtn.addEventListener("click", () => {
    foodSearchInput.value = "";
    searchQuery = "";
    searchClearBtn.style.display = "none";
    renderFoodCards();
    foodSearchInput.focus();
  });

  // Reset filters button
  if (btnResetFilters) {
    btnResetFilters.addEventListener("click", () => {
      activeCategoryFilter = "all";
      activeRegionFilter = "all";
      searchQuery = "";
      foodSearchInput.value = "";
      searchClearBtn.style.display = "none";

      categoryPills.forEach(p => p.classList.remove("active"));
      document.querySelector(".pill-btn[data-category='all']").classList.add("active");

      regionPills.forEach(p => p.classList.remove("active"));
      document.querySelector(".region-btn[data-region='all']").classList.add("active");

      renderFoodCards();
    });
  }

  // Regional discovery tabs
  regionNavTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      regionNavTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentRegionTab = tab.getAttribute("data-reg-tab");
      renderRegionDetail(currentRegionTab);
    });
  });

  // Hero Preview Card "View Details"
  const btnPreviewDetails = document.getElementById("btnPreviewDetails");
  if (btnPreviewDetails) {
    btnPreviewDetails.addEventListener("click", () => {
      openDishModal("rendang");
    });
  }

  // Footer Quick dish links
  document.querySelectorAll(".quick-dish-link").forEach(link => {
    link.addEventListener("click", () => {
      const dishId = link.getAttribute("data-dish-id");
      openDishModal(dishId);
    });
  });

  // Modal Close triggers
  modalCloseBtn.addEventListener("click", closeDishModal);
  dishModalBackdrop.addEventListener("click", (e) => {
    if (e.target === dishModalBackdrop) {
      closeDishModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && dishModalBackdrop.classList.contains("open")) {
      closeDishModal();
    }
  });

  // Mobile menu toggle
  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // Chat launcher button
  chatLauncherBtn.addEventListener("click", toggleChatWindow);
  chatCloseBtn.addEventListener("click", closeChatWindow);
  if (navChatTrigger) navChatTrigger.addEventListener("click", openChatWindow);
  if (btnHeroChat) btnHeroChat.addEventListener("click", openChatWindow);
  if (btnFooterOpenChat) btnFooterOpenChat.addEventListener("click", openChatWindow);

  // Chat reset button
  chatResetBtn.addEventListener("click", () => {
    chatSessionId = null;
    localStorage.removeItem("foodies_chat_sessionId");
    chatMessages.innerHTML = `
      <div class="message-row bot-row">
        <div class="msg-avatar">👨‍🍳</div>
        <div class="msg-bubble">
          <p>${translations[currentLang].chatGreeting}</p>
        </div>
      </div>
    `;
    clearAttachment();
  });

  // Quick suggestion chips
  chatQuickChips.querySelectorAll(".chip-item").forEach(chip => {
    chip.addEventListener("click", () => {
      const prompt = chip.getAttribute("data-prompt");
      sendChatMessage(prompt);
    });
  });

  // Chat form submit
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const promptText = chatPromptInput.value.trim();
    if (!promptText && !selectedChatImageFile) return;

    const fileToSend = selectedChatImageFile;
    chatPromptInput.value = "";
    sendChatMessage(promptText, fileToSend);
  });

  // Attachment upload triggers
  btnAttachFile.addEventListener("click", () => {
    chatFileInput.click();
  });

  chatFileInput.addEventListener("change", (e) => {
    if (e.target.files && e.target.files[0]) {
      selectedChatImageFile = e.target.files[0];
      attachmentFileName.textContent = selectedChatImageFile.name;
      attachmentPreviewImg.src = URL.createObjectURL(selectedChatImageFile);
      chatAttachmentPreview.style.display = "flex";
    }
  });

  btnRemoveAttachment.addEventListener("click", clearAttachment);
});
