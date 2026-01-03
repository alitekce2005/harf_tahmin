const GameConfig = {
    categories: {
        "Hayvanlar": [
            "köpek", "balina", "aslan", "tavşan", "kaplan", "zebra",
            "zürafa", "maymun", "penguen", "papağan", "kartal", "baykuş", "karga", "güvercin", "serçe",
            "ördek", "tavuk", "horoz", "hindi", "devekuşu", "flamingo", "pelikan", "şahin", "doğan",
            "koyun", "domuz", "sığır",
            "geyik", "ceylan", "antilop", "bufalo", "su aygırı", "timsah", "yılan", "kertenkele", "kaplumbağa", "kurbağa",
            "balık", "köpekbalığı", "pirana", "merlin", "levrek", "sazan", "alabalık", "ton balığı", "uskumru", "sardunya",
            "ahtapot", "mürekkepbalığı", "istiridye", "midye", "karides", "ıstakoz", "yengeç", "salyangoz", "solucan",
            "kelebek", "tırtıl", "sinek", "sivrisinek", "eşek arısı", "karınca", "örümcek", "akrep", "çekirge", "cırcır böceği",
            "hamster", "sincap", "porsuğun", "kunduz", "su samuru", "tilki",
            "leopar", "jaguar", "aslan", "kaplan", "gergedan", "hipopotam"
        ],
        "Meyveler": [
            "armut", "çilek", "portakal", "karpuz", "kavun", "ananas", "limon", "greyfurt",
            "mandalina", "kuru üzüm", "incir", "hurma", "kayısı", "şeftali", "nektarin",
            "kiraz", "vişne", "çilek", "ahududu", "böğürtlen", "fındık", "ceviz", "badem", "fıstık", "antep fıstığı",
            "hindistan cevizi", "kakao", "kestane", "yer fıstığı", "ayçiçeği", "kırmızı biber", "yeşil biber",
            "domates", "patlıcan", "kabak", "mısır", "fasulye", "nohut", "mercimek",
            "avokado", "mango", "papaya",
        ],
        "Şehirler": [
            "ankara", "istanbul", "izmir", "antalya", "bursa", "adana", "gaziantep", "konya", "kayseri", "samsun",
            "diyarbakır", "erzurum", "trabzon", "giresun", "sinop", "çorum", "amasya", "tokat",
            "sivas", "malatya", "elazığ", "bingöl", "tunceli", "erzincan", "bayburt", "gümüşhane", "artvin",
            "ardahan", "iğdır", "bitlis", "siirt", "şırnak", "mardin", "batman",
            "cizre", "hasankeyf", "nusaybin", "midyat", "kızıltepe", "dargeçit", "idil", "silopi", "uludere", "beytüşşebap",
            "eskişehir", "edirne", "tekirdağ", "çanakkale", "balıkesir", "manisa", "denizli", "muğla", "aydın", "afyon",
            "kütahya", "isparta", "burdur", "mersin", "adıyaman", "kahramanmaraş", "hatay", "kilis", "osmaniyeleri",
            "niğde", "nevşehir", "kırşehir", "aksaray", "yozgat", "çankırı", "kastamonu", "karabük", "zonguldak", "bartın",
            "düzce", "sakarya", "kocaeli", "yalova", "bilecik", "eskişehir", "afyon", "kütahya",
            "manisa"
        ],
        "Meslekler": [
            "doktor", "öğretmen", "mühendis", "hemşire", "pilot", "garson", "berber", "kuaför", "terzi",
            "elektrikçi", "tesisatçı", "marangoz", "boyacı", "cam ustası", "çatı ustası", "kalfa", "çırak",
            "inşaat mühendisi", "mimari", "harita mühendisi", "ziraat mühendisi", "orman mühendisi", "çevre mühendisi", "endüstri mühendisi", "makine mühendisi", "elektrik mühendisi", "elektronik mühendisi",
            "bilgisayar mühendisi", "yazılım geliştirici", "veri analisti", "sistem yöneticisi", "ağ yöneticisi", "veritabanı yöneticisi", "web tasarımcı", "grafik tasarımcı", "oyun geliştiricisi", "mobil uygulama geliştiricisi",
            "avukat", "hakim", "savcı", "noterde", "hukuk müşaviri", "vergi müşaviri", "muhasebeci", "finansal analist", "yatırım danışmanı", "gümrük müşaviri",
            "pazarlama müdürü", "satış müdürü", "insan kaynakları müdürü", "operasyon müdürü", "proje yöneticisi", "ürün müdürü", "marka müdürü", "müşteri hizmetleri müdürü", "kalite kontrol müdürü", "üretim müdürü",
            "gazeteci", "editör", "yazar", "çevirmen", "tercüman", "kütüphaneci", "arşiv müdürü", "müze müdürü", "sanat yönetmeni", "küratör",
            "müzisyen", "şarkıcı", "dansçı", "oyuncu", "yönetmen", "yapımcı", "senarist", "kameraman", "ses teknisyeni", "kurgucu",
            "ressam", "heykeltıraş", "seramik sanatçısı", "fotoğrafçı", "model", "manken", "estetisyen", "masöz", "fizyoterapist", "diyetisyen",
            "psikolog", "sosyal çalışmacı", "sosyolog", "antropolog", "arkeolog", "tarihçi", "coğrafyacı", "matematikçi", "fizikçi", "kimyager"
        ],
        "Spor": [
            "futbol", "basketbol", "tenis", "yüzme", "voleybol", "badminton", "masa tenisi", "squash", "hentbol", "rugbi",
            "amerikan futbolu", "beyzbol", "kriket", "bowling", "bilardo", "curling", "buz hokeyi", "paten",
            "kayak", "snowboard", "buz pateni", "dağ tırmanışı", "kaya tırmanışı", "paraşüt", "paragliding", "yelkencilik", "windsurf",
            "dalış", "snorkeling", "rafting", "kayaking", "sinkro yüzme", "dalış", "atıcılık",
            "okçuluk", "beden eğitimi", "jimnastik", "ritmik jimnastik", "artistik jimnastik", "trampolin", "akrobatik", "yüksek atlama", "uzun atlama", "üçlü atlama",
            "çekiç atma", "cirit atma", "disk atma", "gülle atma", "kısa mesafe koşu", "orta mesafe koşu", "uzun mesafe koşu", "maraton", "engelli koşu", "bayrak koşusu",
            "yürüyüş", "kros", "orienteering", "dağ koşusu", "sokak koşusu", "buz pisti", "dressage", "atlı spor", "cirit",
            "boks", "muay thai", "karate", "judo", "taekwondo", "güreş", "kendo", "esgrim", "kılıç",
            "bisiklet", "dağ bisikleti", "pist bisikleti", "motosiklet", "motorsiklet yarışı", "formula 1", "rallisi",
            "bungee jumping", "zip line", "sörfçülük", "wakeboard", "su kayağı", "jet ski", "denizcilik", "yelkenli", "kayık", "sandal"
        ],
        "Yemekler": [
            "pizza", "hamburger", "döner", "kebab", "manti", "börek", "gözleme", "lahmacun", "tatlı",
            "baklava", "künefe", "kadayıf", "revani", "sütlaç", "muhallebi", "fırın", "çorbası", "mercimek çorbası", "yayla çorbası",
            "tavuk çorbası", "et çorbası", "balık çorbası", "sebze çorbası", "nohut çorbası", "arpa çorbası", "bulgur çorbası", "şehriye çorbası", "tarhana çorbası", "tutmaç",
            "hummus", "cacık", "tarama", "salatası", "çoban salatası", "patlıcan salatası", "domates salatası",
            "salata", "yeşil salata", "kırmızı lahana salatası", "karpuz salatası", "buğday salatası",
            "adana kebab", "urfa kebab", "şiş kebab", "doner kebab", "tavuk döner", "kıyma döner", "beyti", "inegöl köfte", "çiğ köfte",
            "kuru fasulye", "nohut", "mercimek", "bulgur", "pilav", "pirinç", "makarna", "bulgur pilavı", "sebzeli pilav",
            "karides", "midye", "ahtapot", "mürekkepbalığı", "istiridye", "salyangoz",
            "sucuk", "salam", "jambon", "pastırma", "sosis", "sosisli",
        ],
        "Araçlar": [
            "Toyota", "Honda", "Nissan", "Mazda", "Subaru", "Mitsubishi",
            "General Motors", "Chevrolet", "Cadillac", "Buick",
            "Volkswagen", "Mercedes-Benz", "Porsche", "Lamborghini",
            "Ferrari", "Maserati", "Alfa Romeo", "Lancia",
            "Renault", "Peugeot", "Citroën", "Vauxhall",
            "Volvo", "Scania", "Koenigsegg", "Pagani", "Bugatti",
            "Hyundai", "Daewoo", "SsangYong", "Geely",
            "Chery", "Great Wall", "Li Auto", "XPeng",
            "Tesla", "Rivian", "Lucid", "Fisker", "Canoo", "Arrival",
            "Suzuki", "Daihatsu", "Isuzu", "UD Trucks",
            "Harley-Davidson", "Yamaha", "Kawasaki", "Suzuki", "Honda",
            "Ducati", "BMW Motorrad", "Triumph", "Royal Enfield", "Bajaj"
        ],
        "Bölümler": [
            "yazılım geliştirme", "bilgisayar mühendisliği", "bilgisayar bilimleri", "veri bilimi", "yapay zeka", "siber güvenlik",
            "diş hekimliği", "veterinerlik", "eczacılık", "hemşirelik", "fizyoterapı",
            "makine mühendisliği", "elektrik mühendisliği", "elektronik mühendisliği", "inşaat mühendisliği", "çevre mühendisliği", "endüstri mühendisliği",
            "kimya mühendisliği", "gıda mühendisliği", "ziraat mühendisliği", "orman mühendisliği", "su ürünleri mühendisliği", "peyzaj mimarı",
            "hukuk", "iktisat", "işletme", "muhasebe", "pazarlama", "yönetim",
            "eğitim", "öğretmen eğitimi", "rehberlik ve psikolojik danışmanlık", "eğitim yönetimi", "eğitim teknolojileri",
            "mimar", "şehir planlama", "iç mimar", "endüstriyel tasarım", "moda tasarımı",
            "jeoloji", "jeofizik", "meteoroloji", "coğrafya", "harita mühendisliği",
            "fizik", "kimya", "biyoloji", "matematik", "istatistik",
        ]
    },
    difficulties: {
        "Easy": { letters: 7, lives: 5 },
        "Normal": { letters: 5, lives: 3 },
        "Hard": { letters: 3, lives: 2 },
        "Extreme": { letters: 1, lives: 1 }
    }
};

class GameState {
    constructor() {
        this.reset();
    }

    reset() {
        this.selectedCategory = "Hayvanlar";
        this.selectedDifficulty = "Normal";
        this.secretWord = '';
        this.revealedLetters = [];
        this.letterBuyCount = 5;
        this.lives = 3;
        this.gameActive = false;
        this.jokerIndices = [];
        this.foundWords = 0;
    }

    startGame() {
        const categoryWords = GameConfig.categories[this.selectedCategory];
        const difficulty = GameConfig.difficulties[this.selectedDifficulty];

        this.secretWord = categoryWords[Math.floor(Math.random() * categoryWords.length)];
        this.revealedLetters = new Array(this.secretWord.length).fill('');
        this.letterBuyCount = difficulty.letters;
        this.lives = difficulty.lives;
        this.gameActive = true;
        this.jokerIndices = [];

        // Joker harf ekle
        if (this.secretWord.length >= 6) {
            const randomIndex = Math.floor(Math.random() * this.secretWord.length);
            this.jokerIndices.push(randomIndex);
            this.revealedLetters[randomIndex] = this.secretWord[randomIndex];
        }

        console.log('%c🎯 Oyun Başladı', 'color: red; font-weight: bold;', this.secretWord);
    }

    revealLetter(letter) {
        let foundCount = 0;
        for (let i = 0; i < this.secretWord.length; i++) {
            if (this.secretWord[i] === letter && !this.revealedLetters[i]) {
                this.revealedLetters[i] = letter;
                foundCount++;
            }
        }
        this.letterBuyCount--;
        return foundCount;
    }

    guessWord(guess) {
        if (guess === this.secretWord) {
            this.revealedLetters = this.secretWord.split('');
            this.foundWords++;
            return 'win';
        }
        this.lives--;
        return this.lives <= 0 ? 'lose' : 'wrong';
    }

    isWordComplete() {
        return this.revealedLetters.every(l => l !== '');
    }
}

class GameUI {
    constructor() {
        this.gameState = new GameState();
        this.cacheElements();
        this.attachEventListeners();
    }

    cacheElements() {
        this.elements = {
            wordDisplay: document.getElementById('wordDisplay'),
            categoryDisplay: document.getElementById('categoryDisplay'),
            difficultyDisplay: document.getElementById('difficultyDisplay'),
            letterCountDisplay: document.getElementById('letterCountDisplay'),
            lifeCountDisplay: document.getElementById('lifeCountDisplay'),
            foundCount: document.getElementById('foundCount'),
            wordLengthInfo: document.getElementById('wordLengthInfo'),
            letterInput: document.getElementById('letterInput'),
            guessInput: document.getElementById('guessInput'),
            letterMessage: document.getElementById('letterMessage'),
            guessMessage: document.getElementById('guessMessage'),
            heartsDisplay: document.getElementById('heartsDisplay'),
            settingsModal: document.getElementById('settingsModal'),
            gameModal: document.getElementById('gameModal'),
            categoryGrid: document.getElementById('categoryGrid'),
            difficultyGrid: document.getElementById('difficultyGrid'),
            difficultyInfo: document.getElementById('difficultyInfo'),
            buyLetterBtn: document.getElementById('buyLetterBtn'),
            guessBtn: document.getElementById('guessBtn'),
            floatingLetters: document.getElementById('floatingLetters'),
            modalTitle: document.getElementById('modalTitle'),
            modalText: document.getElementById('modalText'),
            modalWord: document.getElementById('modalWord')
        };
    }

    attachEventListeners() {
        this.elements.letterInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.buyLetter();
        });

        this.elements.guessInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.guessWord();
        });
    }

    openSettings() {
        // Önce game modalını kapat
        this.elements.gameModal.classList.remove('active');
        // Sonra settings modalını aç
        this.elements.settingsModal.classList.add('active');
        this.initializeSettings();
    }

    closeSettings() {
        this.elements.settingsModal.classList.remove('active');
    }

    initializeSettings() {
        this.renderCategoryButtons();
        this.renderDifficultyButtons();
        this.updateDifficultyInfo();
    }

    renderCategoryButtons() {
        this.elements.categoryGrid.innerHTML = '';
        Object.keys(GameConfig.categories).forEach(category => {
            const btn = document.createElement('button');
            btn.className = 'category-btn';
            if (category === this.gameState.selectedCategory) btn.classList.add('active');
            btn.textContent = category;
            btn.addEventListener('click', () => this.selectCategory(category));
            this.elements.categoryGrid.appendChild(btn);
        });
    }

    renderDifficultyButtons() {
        this.elements.difficultyGrid.innerHTML = '';
        Object.keys(GameConfig.difficulties).forEach(difficulty => {
            const btn = document.createElement('button');
            btn.className = 'difficulty-btn';
            if (difficulty === this.gameState.selectedDifficulty) btn.classList.add('active');
            btn.textContent = difficulty;
            btn.addEventListener('click', () => this.selectDifficulty(difficulty));
            this.elements.difficultyGrid.appendChild(btn);
        });
    }

    selectCategory(category) {
        this.gameState.selectedCategory = category;
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.toggle('active', btn.textContent === category);
        });
    }

    selectDifficulty(difficulty) {
        this.gameState.selectedDifficulty = difficulty;
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.classList.toggle('active', btn.textContent === difficulty);
        });
        this.updateDifficultyInfo();
    }

    updateDifficultyInfo() {
        const difficulty = GameConfig.difficulties[this.gameState.selectedDifficulty];
        this.elements.difficultyInfo.innerHTML = `
            <strong>${this.gameState.selectedDifficulty}:</strong><br>
            💡 Harf Al Hakkı: ${difficulty.letters}<br>
            ❤️ Başlangıç Canı: ${difficulty.lives}
        `;
    }

    startGameFromSettings() {
        this.closeSettings();
        this.gameState.startGame();
        this.updateDisplay();
        this.updateStats();
        this.clearMessages();

        // Butonları aktif et
        this.elements.buyLetterBtn.disabled = false;
        this.elements.guessBtn.disabled = false;
    }

    buyLetter() {
        if (!this.gameState.gameActive || this.gameState.letterBuyCount <= 0) return;

        const letter = this.elements.letterInput.value.toLowerCase().trim();

        if (!letter) {
            this.showMessage(this.elements.letterMessage, '❌ Lütfen bir harf girin!', 'danger');
            return;
        }

        this.createParticles(this.elements.buyLetterBtn, '#f59e0b');

        const foundCount = this.gameState.revealLetter(letter);

        if (foundCount > 0) {
            this.showMessage(this.elements.letterMessage, `✅ ${foundCount} adet "${letter.toUpperCase()}" harfi bulundu!`, 'success');
            this.updateDisplay();
            this.checkWin();
        } else {
            this.showMessage(this.elements.letterMessage, `❌ "${letter.toUpperCase()}" harfi kelimede yok!`, 'danger');
        }

        this.updateStats();
        this.elements.letterInput.value = '';

        if (this.gameState.letterBuyCount === 0) {
            this.elements.buyLetterBtn.disabled = true;
        }
    }

    guessWord() {
        if (!this.gameState.gameActive) return;

        const guess = this.elements.guessInput.value.toLowerCase().trim();

        if (!guess) {
            this.showMessage(this.elements.guessMessage, '❌ Lütfen bir kelime girin!', 'danger');
            return;
        }

        this.createParticles(this.elements.guessBtn, '#6366f1');

        const result = this.gameState.guessWord(guess);

        if (result === 'win') {
            this.updateDisplay();
            this.updateStats();
            setTimeout(() => this.endGame(true), 500);
        } else if (result === 'lose') {
            this.updateStats();
            setTimeout(() => this.endGame(false), 500);
        } else {
            this.showMessage(this.elements.guessMessage, `❌ Yanlış tahmin! ${this.gameState.lives} canınız kaldı.`, 'danger');
            this.updateStats();
        }

        this.elements.guessInput.value = '';
    }

    updateDisplay() {
        this.elements.wordDisplay.innerHTML = '';

        for (let i = 0; i < this.gameState.secretWord.length; i++) {
            const letterBox = document.createElement('div');
            letterBox.className = 'letter-box';

            if (this.gameState.revealedLetters[i]) {
                letterBox.textContent = this.gameState.revealedLetters[i];
                letterBox.classList.add(this.gameState.jokerIndices.includes(i) ? 'joker' : 'revealed');
            }

            this.elements.wordDisplay.appendChild(letterBox);
        }
    }

    updateStats() {
        this.elements.categoryDisplay.textContent = this.gameState.selectedCategory;
        this.elements.difficultyDisplay.textContent = this.gameState.selectedDifficulty;
        this.elements.letterCountDisplay.textContent = this.gameState.letterBuyCount;
        this.elements.lifeCountDisplay.textContent = this.gameState.lives;
        this.elements.foundCount.textContent = this.gameState.foundWords;
        this.elements.wordLengthInfo.textContent = `📏 Kelime: ${this.gameState.secretWord.length} Harf`;
        this.updateHearts();
    }

    updateHearts() {
        this.elements.heartsDisplay.innerHTML = '';
        for (let i = 0; i < this.gameState.lives; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = '❤️';
            this.elements.heartsDisplay.appendChild(heart);
        }
    }

    checkWin() {
        if (this.gameState.isWordComplete()) {
            this.gameState.foundWords++;
            this.updateStats();
            setTimeout(() => this.endGame(true), 500);
        }
    }

    endGame(won) {
        this.gameState.gameActive = false;

        // Butonları devre dışı bırak
        this.elements.buyLetterBtn.disabled = true;
        this.elements.guessBtn.disabled = true;

        if (won) {
            this.elements.modalTitle.textContent = '🎉 Tebrikler!';
            this.elements.modalText.textContent = 'Kelimeyi doğru tahmin ettiniz!';
            this.elements.modalWord.textContent = this.gameState.secretWord.toUpperCase();

            // --- PUAN HESAPLAMA ---
            // Seçili zorluğa göre puan belirle
            const diff = this.gameState.selectedDifficulty;
            let earnedScore = 0;

            if (diff === "Easy") earnedScore = 20;
            else if (diff === "Normal") earnedScore = 40;
            else if (diff === "Hard") earnedScore = 60;
            else if (diff === "Extreme") earnedScore = 100;

            // Görsel olarak modal içine puanı yazalım
            this.elements.modalText.innerHTML += `<br><br><span style="color:#10b981; font-weight:bold; font-size:1.2rem;">+${earnedScore} Lügat Puanı Kazanıldı!</span>`;

            // --- ANA SİSTEME SKORU GÖNDER ---
            sendScoreToParent(earnedScore);

        } else {
            this.elements.modalTitle.textContent = '😢 Oyun Bitti';
            this.elements.modalText.textContent = 'Maalesef kelimeyi bulamadınız.';
            this.elements.modalWord.textContent = `Kelime: ${this.gameState.secretWord.toUpperCase()}`;
        }

        this.elements.gameModal.classList.add('active');
    }

    resetGame() {
        // Oyun durumunu sıfırla
        this.gameState.reset();

        // Input alanlarını temizle
        this.elements.letterInput.value = '';
        this.elements.guessInput.value = '';

        // Mesajları temizle
        this.clearMessages();

        // Ekranı tamamen temizle
        this.elements.wordDisplay.innerHTML = '';
        this.elements.heartsDisplay.innerHTML = '';

        // İstatistikleri sıfırla
        this.elements.categoryDisplay.textContent = 'Kategori';
        this.elements.difficultyDisplay.textContent = 'Normal';
        this.elements.letterCountDisplay.textContent = '5';
        this.elements.lifeCountDisplay.textContent = '3';
        this.elements.wordLengthInfo.textContent = '📏 Kelime: 0 Harf';

        // Butonları aktif et
        this.elements.buyLetterBtn.disabled = false;
        this.elements.guessBtn.disabled = false;

        // Ayarları aç (bu otomatik olarak game modalını kapatacak)
        this.openSettings();
    }

    showMessage(element, message, type) {
        const bgColor = type === 'success' ? '16, 185, 129' : '239, 68, 68';
        element.innerHTML = `<div class="info-message" style="border-color: var(--${type}); background: rgba(${bgColor}, 0.25);">${message}</div>`;
        setTimeout(() => { element.innerHTML = ''; }, 3000);
    }

    clearMessages() {
        this.elements.letterMessage.innerHTML = '';
        this.elements.guessMessage.innerHTML = '';
    }

    createParticles(element, color) {
        const rect = element.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.background = color;
            particle.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
            particle.style.setProperty('--ty', (Math.random() - 0.5) * 200 + 'px');
            document.body.appendChild(particle);
            setTimeout(() => particle.remove(), 2000);
        }
    }

    createFloatingLetters() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÇĞİÖŞÜ';
        for (let i = 0; i < 30; i++) {
            const letter = document.createElement('div');
            letter.className = 'floating-letter';
            letter.textContent = letters[Math.floor(Math.random() * letters.length)];
            letter.style.left = Math.random() * 100 + '%';
            letter.style.animationDuration = (12 + Math.random() * 12) + 's';
            letter.style.animationDelay = Math.random() * 8 + 's';
            this.elements.floatingLetters.appendChild(letter);
        }
    }

    init() {
        const savedTheme = localStorage.getItem('selectedTheme') || 'theme2';
        document.body.classList.add(savedTheme);
        const themeBtn = document.querySelector(`[onclick*="${savedTheme}"]`);
        if (themeBtn) themeBtn.classList.add('active');

        this.createFloatingLetters();
        this.openSettings();

        console.log('%c✅ Oyun başlatıldı!', 'color: green; font-weight: bold;');
    }
}

// Global oyun örneği
let game;

// Sayfa yükleme
document.addEventListener('DOMContentLoaded', () => {
    game = new GameUI();
    game.init();
});

// Global fonksiyonlar (HTML onclick için)
function switchTheme(theme) {
    document.body.classList.remove('theme1', 'theme2');
    document.body.classList.add(theme);
    document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    localStorage.setItem('selectedTheme', theme);
}

function openSettings() {
    if (game) game.openSettings();
}

function closeSettings() {
    if (game) game.closeSettings();
}

function startGameFromSettings() {
    if (game) game.startGameFromSettings();
}

function buyLetter() {
    if (game) game.buyLetter();
}

function guessWord() {
    if (game) game.guessWord();
}

function resetGame() {
    if (game) game.resetGame();
}

// --- BU FONKSİYONU MAIN.JS DOSYASININ EN ALTINA (CLASS DIŞINA) YAPIŞTIR ---
function sendScoreToParent(score) {
    window.parent.postMessage({
        type: 'GAME_OVER',
        gameId: 3,               // Kelime Tahmin ID'si
        score: score,            // Kazanılan Lügat Puanı
        pointName: 'Lügat Puanı' // Puanın Adı
    }, '*');
    console.log("Skor ana sisteme gönderildi:", score);
}