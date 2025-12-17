// State Management
let currentLanguage = null;
let currentCategory = 'basic';
let isPremium = false;
let learnedWords = new Set();

// Language Data
const languageData = {
    english: {
        name: 'English',
        flag: '🇬🇧',
        free: true,
        categories: {
            basic: [
                { word: 'Hello', translation: 'Halo', pronunciation: '/həˈloʊ/' },
                { word: 'Goodbye', translation: 'Selamat tinggal', pronunciation: '/ɡʊdˈbaɪ/' },
                { word: 'Thank you', translation: 'Terima kasih', pronunciation: '/θæŋk juː/' },
                { word: 'Please', translation: 'Tolong', pronunciation: '/pliːz/' },
                { word: 'Sorry', translation: 'Maaf', pronunciation: '/ˈsɒri/' }
            ],
            greetings: [
                { word: 'Good morning', translation: 'Selamat pagi', pronunciation: '/ɡʊd ˈmɔːrnɪŋ/' },
                { word: 'Good night', translation: 'Selamat malam', pronunciation: '/ɡʊd naɪt/' },
                { word: 'How are you?', translation: 'Apa kabar?', pronunciation: '/haʊ ɑːr juː/' },
                { word: 'Nice to meet you', translation: 'Senang bertemu denganmu', pronunciation: '/naɪs tuː miːt juː/' }
            ],
            numbers: [
                { word: 'One', translation: 'Satu', pronunciation: '/wʌn/' },
                { word: 'Two', translation: 'Dua', pronunciation: '/tuː/' },
                { word: 'Three', translation: 'Tiga', pronunciation: '/θriː/' },
                { word: 'Four', translation: 'Empat', pronunciation: '/fɔːr/' },
                { word: 'Five', translation: 'Lima', pronunciation: '/faɪv/' }
            ],
            colors: [
                { word: 'Red', translation: 'Merah', pronunciation: '/red/' },
                { word: 'Blue', translation: 'Biru', pronunciation: '/bluː/' },
                { word: 'Green', translation: 'Hijau', pronunciation: '/ɡriːn/' },
                { word: 'Yellow', translation: 'Kuning', pronunciation: '/ˈjeloʊ/' },
                { word: 'Black', translation: 'Hitam', pronunciation: '/blæk/' }
            ]
        }
    },
    arabic: {
        name: 'Arabic',
        flag: '🇸🇦',
        free: false,
        categories: {
            basic: [
                { word: 'مرحبا', translation: 'Halo', pronunciation: '/marħaban/' },
                { word: 'وداعا', translation: 'Selamat tinggal', pronunciation: '/wadaʕan/' },
                { word: 'شكرا', translation: 'Terima kasih', pronunciation: '/ʃukran/' },
                { word: 'من فضلك', translation: 'Tolong', pronunciation: '/min fadˤlik/' },
                { word: 'آسف', translation: 'Maaf', pronunciation: '/ʔaːsif/' }
            ],
            greetings: [
                { word: 'صباح الخير', translation: 'Selamat pagi', pronunciation: '/sˤabaːħ alχayr/' },
                { word: 'مساء الخير', translation: 'Selamat sore', pronunciation: '/masaːʔ alχayr/' },
                { word: 'كيف حالك؟', translation: 'Apa kabar?', pronunciation: '/kayfa ħaːluk/' },
                { word: 'أهلا وسهلا', translation: 'Selamat datang', pronunciation: '/ʔahlan wa sahlan/' }
            ],
            numbers: [
                { word: 'واحد', translation: 'Satu', pronunciation: '/waːħid/' },
                { word: 'اثنان', translation: 'Dua', pronunciation: '/iθnaːn/' },
                { word: 'ثلاثة', translation: 'Tiga', pronunciation: '/θalaːθa/' },
                { word: 'أربعة', translation: 'Empat', pronunciation: '/ʔarbaʕa/' },
                { word: 'خمسة', translation: 'Lima', pronunciation: '/χamsa/' }
            ],
            colors: [
                { word: 'أحمر', translation: 'Merah', pronunciation: '/ʔaħmar/' },
                { word: 'أزرق', translation: 'Biru', pronunciation: '/ʔazraq/' },
                { word: 'أخضر', translation: 'Hijau', pronunciation: '/ʔaχdˤar/' },
                { word: 'أصفر', translation: 'Kuning', pronunciation: '/ʔasˤfar/' },
                { word: 'أسود', translation: 'Hitam', pronunciation: '/ʔaswad/' }
            ]
        }
    },
    japanese: {
        name: 'Japanese',
        flag: '🇯🇵',
        free: false,
        categories: {
            basic: [
                { word: 'こんにちは', translation: 'Halo', pronunciation: '/konnichiwa/' },
                { word: 'さようなら', translation: 'Selamat tinggal', pronunciation: '/sayounara/' },
                { word: 'ありがとう', translation: 'Terima kasih', pronunciation: '/arigatou/' },
                { word: 'お願いします', translation: 'Tolong', pronunciation: '/onegaishimasu/' },
                { word: 'ごめんなさい', translation: 'Maaf', pronunciation: '/gomennasai/' }
            ],
            greetings: [
                { word: 'おはよう', translation: 'Selamat pagi', pronunciation: '/ohayou/' },
                { word: 'こんばんは', translation: 'Selamat malam', pronunciation: '/konbanwa/' },
                { word: '元気ですか？', translation: 'Apa kabar?', pronunciation: '/genki desu ka/' },
                { word: 'はじめまして', translation: 'Senang bertemu denganmu', pronunciation: '/hajimemashite/' }
            ],
            numbers: [
                { word: '一', translation: 'Satu', pronunciation: '/ichi/' },
                { word: '二', translation: 'Dua', pronunciation: '/ni/' },
                { word: '三', translation: 'Tiga', pronunciation: '/san/' },
                { word: '四', translation: 'Empat', pronunciation: '/shi/' },
                { word: '五', translation: 'Lima', pronunciation: '/go/' }
            ],
            colors: [
                { word: '赤', translation: 'Merah', pronunciation: '/aka/' },
                { word: '青', translation: 'Biru', pronunciation: '/ao/' },
                { word: '緑', translation: 'Hijau', pronunciation: '/midori/' },
                { word: '黄色', translation: 'Kuning', pronunciation: '/kiiro/' },
                { word: '黒', translation: 'Hitam', pronunciation: '/kuro/' }
            ]
        }
    },
    russian: {
        name: 'Russian',
        flag: '🇷🇺',
        free: false,
        categories: {
            basic: [
                { word: 'Привет', translation: 'Halo', pronunciation: '/priˈvʲet/' },
                { word: 'До свидания', translation: 'Selamat tinggal', pronunciation: '/də svʲɪˈdanʲɪjə/' },
                { word: 'Спасибо', translation: 'Terima kasih', pronunciation: '/spɐˈsʲibə/' },
                { word: 'Пожалуйста', translation: 'Tolong', pronunciation: '/pɐˈʐaɫʊstə/' },
                { word: 'Извините', translation: 'Maaf', pronunciation: '/ɪzvʲɪˈnʲitʲe/' }
            ],
            greetings: [
                { word: 'Доброе утро', translation: 'Selamat pagi', pronunciation: '/ˈdobrəjə ˈutrə/' },
                { word: 'Добрый вечер', translation: 'Selamat malam', pronunciation: '/ˈdobrɨj ˈvʲetɕɪr/' },
                { word: 'Как дела?', translation: 'Apa kabar?', pronunciation: '/kak dʲɪˈɫa/' },
                { word: 'Рад встрече', translation: 'Senang bertemu', pronunciation: '/rad ˈfstrʲetɕə/' }
            ],
            numbers: [
                { word: 'Один', translation: 'Satu', pronunciation: '/ɐˈdʲin/' },
                { word: 'Два', translation: 'Dua', pronunciation: '/dva/' },
                { word: 'Три', translation: 'Tiga', pronunciation: '/trʲi/' },
                { word: 'Четыре', translation: 'Empat', pronunciation: '/tɕɪˈtɨrʲɪ/' },
                { word: 'Пять', translation: 'Lima', pronunciation: '/pʲætʲ/' }
            ],
            colors: [
                { word: 'Красный', translation: 'Merah', pronunciation: '/ˈkrasnɨj/' },
                { word: 'Синий', translation: 'Biru', pronunciation: '/ˈsʲinʲɪj/' },
                { word: 'Зелёный', translation: 'Hijau', pronunciation: '/zʲɪˈlʲɵnɨj/' },
                { word: 'Жёлтый', translation: 'Kuning', pronunciation: '/ˈʐɵɫtɨj/' },
                { word: 'Чёрный', translation: 'Hitam', pronunciation: '/ˈtɕɵrnɨj/' }
            ]
        }
    },
    korean: {
        name: 'Korean',
        flag: '🇰🇷',
        free: false,
        categories: {
            basic: [
                { word: '안녕하세요', translation: 'Halo', pronunciation: '/annyeonghaseyo/' },
                { word: '안녕히 가세요', translation: 'Selamat tinggal', pronunciation: '/annyeonghi gaseyo/' },
                { word: '감사합니다', translation: 'Terima kasih', pronunciation: '/gamsahamnida/' },
                { word: '제발', translation: 'Tolong', pronunciation: '/jebal/' },
                { word: '죄송합니다', translation: 'Maaf', pronunciation: '/joesonghamnida/' }
            ],
            greetings: [
                { word: '좋은 아침', translation: 'Selamat pagi', pronunciation: '/joeun achim/' },
                { word: '안녕히 주무세요', translation: 'Selamat malam', pronunciation: '/annyeonghi jumuseyo/' },
                { word: '어떻게 지내세요?', translation: 'Apa kabar?', pronunciation: '/eotteoke jinaeseyo/' },
                { word: '만나서 반가워요', translation: 'Senang bertemu', pronunciation: '/mannaseo bangawoyo/' }
            ],
            numbers: [
                { word: '하나', translation: 'Satu', pronunciation: '/hana/' },
                { word: '둘', translation: 'Dua', pronunciation: '/dul/' },
                { word: '셋', translation: 'Tiga', pronunciation: '/set/' },
                { word: '넷', translation: 'Empat', pronunciation: '/net/' },
                { word: '다섯', translation: 'Lima', pronunciation: '/daseot/' }
            ],
            colors: [
                { word: '빨간색', translation: 'Merah', pronunciation: '/ppalgansaek/' },
                { word: '파란색', translation: 'Biru', pronunciation: '/paransaek/' },
                { word: '초록색', translation: 'Hijau', pronunciation: '/choroksaek/' },
                { word: '노란색', translation: 'Kuning', pronunciation: '/noransaek/' },
                { word: '검은색', translation: 'Hitam', pronunciation: '/geomeunsaek/' }
            ]
        }
    }
};

// Load subscription status
function loadSubscriptionStatus() {
    const subscription = localStorage.getItem('subscription');
    if (subscription) {
        const subData = JSON.parse(subscription);
        const expiryDate = new Date(subData.expiryDate);
        const now = new Date();
        
        if (expiryDate > now) {
            isPremium = true;
            updateUIForPremium();
        } else {
            localStorage.removeItem('subscription');
        }
    }
}

// Update UI for premium users
function updateUIForPremium() {
    const statusBadge = document.getElementById('subscriptionStatus');
    statusBadge.innerHTML = '<span class="badge premium">Premium ⭐</span>';
    
    const banner = document.getElementById('subscriptionBanner');
    banner.classList.add('hidden');
    
    // Unlock all languages
    const cards = document.querySelectorAll('.language-card.locked');
    cards.forEach(card => {
        card.classList.remove('locked');
    });
}

// Select language
function selectLanguage(lang) {
    const langData = languageData[lang];
    
    if (!langData.free && !isPremium) {
        checkSubscription(lang);
        return;
    }
    
    currentLanguage = lang;
    document.getElementById('languageGrid').parentElement.style.display = 'none';
    document.getElementById('learningSection').style.display = 'block';
    document.getElementById('currentLanguageTitle').textContent = `${langData.flag} ${langData.name}`;
    
    loadVocabulary();
    updateProgress();
}

// Check subscription
function checkSubscription(lang) {
    showSubscriptionModal();
}

// Load vocabulary
function loadVocabulary() {
    const vocabList = document.getElementById('vocabularyList');
    const langData = languageData[currentLanguage];
    const categoryData = langData.categories[currentCategory];
    
    vocabList.innerHTML = '';
    
    categoryData.forEach((item, index) => {
        const vocabItem = document.createElement('div');
        vocabItem.className = 'vocab-item';
        vocabItem.innerHTML = `
            <div class="vocab-info">
                <div class="vocab-word">${item.word}</div>
                <div class="vocab-translation">${item.translation}</div>
                <div class="vocab-pronunciation">${item.pronunciation}</div>
            </div>
            <button class="audio-btn" onclick="playAudio('${currentLanguage}', '${item.word}', this)">
                🔊
            </button>
        `;
        vocabList.appendChild(vocabItem);
    });
}

// Play audio using Web Speech API
function playAudio(lang, word, button) {
    if (!isPremium && lang !== 'english') {
        alert('🔒 Fitur audio untuk bahasa premium memerlukan berlangganan!');
        showSubscriptionModal();
        return;
    }
    
    const utterance = new SpeechSynthesisUtterance(word);
    
    // Set language codes
    const langCodes = {
        english: 'en-US',
        arabic: 'ar-SA',
        japanese: 'ja-JP',
        russian: 'ru-RU',
        korean: 'ko-KR'
    };
    
    utterance.lang = langCodes[lang];
    utterance.rate = 0.8;
    
    button.classList.add('playing');
    
    utterance.onend = () => {
        button.classList.remove('playing');
        
        // Mark as learned
        const wordKey = `${lang}-${currentCategory}-${word}`;
        learnedWords.add(wordKey);
        updateProgress();
    };
    
    window.speechSynthesis.speak(utterance);
}

// Change category
function changeCategory(category) {
    currentCategory = category;
    
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    loadVocabulary();
}

// Back to selection
function backToSelection() {
    document.getElementById('learningSection').style.display = 'none';
    document.getElementById('languageGrid').parentElement.style.display = 'block';
    currentLanguage = null;
}

// Update progress
function updateProgress() {
    if (!currentLanguage) return;
    
    const langData = languageData[currentLanguage];
    let totalWords = 0;
    let learnedCount = 0;
    
    Object.keys(langData.categories).forEach(cat => {
        totalWords += langData.categories[cat].length;
    });
    
    learnedWords.forEach(word => {
        if (word.startsWith(currentLanguage)) {
            learnedCount++;
        }
    });
    
    const percentage = Math.round((learnedCount / totalWords) * 100);
    
    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('progressText').textContent = 
        `${percentage}% - ${learnedCount} dari ${totalWords} kata dipelajari`;
}

// Show subscription modal
function showSubscriptionModal() {
    document.getElementById('subscriptionModal').classList.add('show');
}

// Close subscription modal
function closeSubscriptionModal() {
    document.getElementById('subscriptionModal').classList.remove('show');
}

// Subscribe
function subscribe(plan) {
    const plans = {
        monthly: { price: 99000, duration: 30, name: 'Bulanan' },
        quarterly: { price: 249000, duration: 90, name: '3 Bulan' },
        yearly: { price: 799000, duration: 365, name: 'Tahunan' }
    };
    
    const selectedPlan = plans[plan];
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + selectedPlan.duration);
    
    const subscription = {
        plan: selectedPlan.name,
        price: selectedPlan.price,
        startDate: new Date().toISOString(),
        expiryDate: expiryDate.toISOString()
    };
    
    localStorage.setItem('subscription', JSON.stringify(subscription));
    
    isPremium = true;
    updateUIForPremium();
    
    closeSubscriptionModal();
    showSuccessModal(subscription);
}

// Show success modal
function showSuccessModal(subscription) {
    const modal = document.getElementById('successModal');
    const expiryDate = new Date(subscription.expiryDate);
    
    document.getElementById('subscriptionInfo').textContent = 
        `Paket ${subscription.plan} aktif sampai ${expiryDate.toLocaleDateString('id-ID', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        })}`;
    
    modal.classList.add('show');
}

// Close success modal
function closeSuccessModal() {
    document.getElementById('successModal').classList.remove('show');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadSubscriptionStatus();
});

// Close modal when clicking outside
window.onclick = function(event) {
    const subModal = document.getElementById('subscriptionModal');
    const successModal = document.getElementById('successModal');
    
    if (event.target === subModal) {
        closeSubscriptionModal();
    }
    if (event.target === successModal) {
        closeSuccessModal();
    }
}