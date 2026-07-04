// =======================================
// DEEN GUIDE - Interactive JavaScript
// =======================================

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // === GSAP Scroll Animations ===
    gsap.registerPlugin(ScrollTrigger);

    // Parallax background animation
    gsap.from('.geometric-pattern .shape', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        scale: 1.5,
        opacity: 0.3,
        ease: 'none'
    });

    // Hero zoom out animation on scroll
    gsap.to('.hero', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        scale: 0.8,
        opacity: 0.5,
        ease: 'none'
    });

    // Fade in section titles
    gsap.from('.section-title', {
        scrollTrigger: {
            trigger: '.features',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1
    });

    gsap.from('.section-subtitle', {
        scrollTrigger: {
            trigger: '.features',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3
    });

    // Zoom in features grid
    gsap.from('.features-grid', {
        scrollTrigger: {
            trigger: '.features',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)'
    });

    // Stagger fade in feature cards
    gsap.from('.feature-card', {
        scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Stats section zoom animation
    gsap.from('.stats-section', {
        scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.8,
        opacity: 0,
        duration: 1
    });

    gsap.from('.stat-item', {
        scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)'
    });

    // Prayer section parallax
    gsap.from('.prayer-widget', {
        scrollTrigger: {
            trigger: '.prayer-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.9,
        opacity: 0,
        duration: 1
    });

    // Qibla section zoom
    gsap.from('.qibla-section', {
        scrollTrigger: {
            trigger: '.qibla-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.9,
        opacity: 0,
        duration: 1
    });

    gsap.from('.qibla-content', {
        scrollTrigger: {
            trigger: '.qibla-section',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 1
    });

    // Quran section zoom in
    gsap.from('.quran-section', {
        scrollTrigger: {
            trigger: '.quran-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.9,
        opacity: 0,
        duration: 1
    });

    // Dhikr section parallax
    gsap.from('.dhikr-section', {
        scrollTrigger: {
            trigger: '.dhikr-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.85,
        opacity: 0,
        duration: 1.2
    });

    gsap.from('.counter-card', {
        scrollTrigger: {
            trigger: '.dhikr-section',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.7,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: 'back.out(1.7)'
    });

    // App preview zoom animation
    gsap.from('.app-preview', {
        scrollTrigger: {
            trigger: '.app-preview',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.9,
        opacity: 0,
        duration: 1
    });

    gsap.from('.phone-mockup', {
        scrollTrigger: {
            trigger: '.app-preview',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.5,
        opacity: 0,
        duration: 1.5,
        ease: 'back.out(1.7)'
    });

    // Testimonials zoom in
    gsap.from('.testimonials', {
        scrollTrigger: {
            trigger: '.testimonials',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.95,
        opacity: 0,
        duration: 1
    });

    gsap.from('.testimonial-card', {
        scrollTrigger: {
            trigger: '.testimonials',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // FAQ section
    gsap.from('.faq-section', {
        scrollTrigger: {
            trigger: '.faq-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.9,
        opacity: 0,
        duration: 1
    });

    // Footer fade up
    gsap.from('.footer', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.95,
        opacity: 0,
        duration: 1
    });

    // Scroll progress bar
    let scrollProgress = gsap.to('.progress-bar', {
        width: '0%',
        ease: 'none',
        paused: true,
        scrollTrigger: {
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        }
    });

    // Sticky navbar effect
    const navbar = document.querySelector('.navbar');
    ScrollTrigger.create({
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        onToggle: (self) => {
            if (self.isActive) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navLinksItems.forEach(item => {
            item.addEventListener('click', () => {
                if (mobileToggle.classList.contains('active')) {
                    mobileToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    // Active navigation link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinksAnchors = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinksAnchors.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Scroll to top button
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }

    // === Hero Animations ===
    animateHeroText();
    animateAppMockup();

    // === Stats Animation ===
    function animateNumbers() {
        const statNumbers = document.querySelectorAll('.stat-number[data-target]');

        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target').replace('k', '000').replace('+', ''));
            const animation = gsap.to(stat, {
                duration: 2,
                innerHTML: target,
                snap: { innerHTML: 1 },
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: stat.closest('.stat-item'),
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                }
            });
        });
    }
    animateNumbers();

    // === Prayer Times Widget ===
    initPrayerTimes();

    // === Qibla Finder ===
    initQiblaFinder();

    // === Quran Reader ===
    initQuranReader();

    // === Dhikr Counter ===
    initDhikrCounter();

    // === FAQ Accordion ===
    initFAQ();

    // === Feature Card Hover Effect ===
    initFeatureHoverEffects();
});

// === Hero Animations ===
function animateHeroText() {
    const heroText = document.querySelector('.hero-text');
    if (!heroText) return;

    const tl = gsap.timeline({ delay: 0.3 });

    tl.from('.hero-text .badge', {
        y: 30,
        opacity: 0,
        duration: 0.5
    })
    .from('.hero-text h1', {
        y: 30,
        opacity: 0,
        duration: 0.6
    }, '-=0.3')
    .from('.hero-text p', {
        y: 20,
        opacity: 0,
        duration: 0.6
    }, '-=0.3')
    .from('.hero-buttons .btn', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2
    }, '-=0.3');
}

// === App Mockup Animation ===
function animateAppMockup() {
    const mockup = document.querySelector('.app-mockup');
    if (!mockup) return;

    gsap.from(mockup, {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)'
    });
}

// === Prayer Times Widget Logic ===
function initPrayerTimes() {
    const currentTimeSpan = document.getElementById('current-time');
    const nextPrayerName = document.getElementById('next-prayer-name');
    const nextPrayerTime = document.getElementById('next-prayer-time');
    const countdownHours = document.getElementById('countdown-hours');
    const countdownMinutes = document.getElementById('countdown-minutes');
    const countdownSeconds = document.getElementById('countdown-seconds');
    const locationSpan = document.getElementById('user-location');

    const prayerTimes = {
        Fajr: '05:00 AM',
        Dhuhr: '12:30 PM',
        Asr: '03:45 PM',
        Maghrib: '06:15 PM',
        Isha: '07:45 PM'
    };

    const prayerOrder = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => { locationSpan.textContent = 'Your Location (Detected)'; },
            () => { locationSpan.textContent = 'New York, USA (Demo)'; }
        );
    } else {
        locationSpan.textContent = 'New York, USA (Demo)';
    }

    function calculateNextPrayer() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const currentTimeInMinutes = hours * 60 + minutes;

        let nextPrayer = 'Fajr';
        let nextTime = prayerTimes['Fajr'];

        for (let i = 0; i < prayerOrder.length; i++) {
            const prayerName = prayerOrder[i];
            const timeStr = prayerTimes[prayerName];
            const [timeHour, timeMinute, timePeriod] = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/).slice(1);
            let prayerMinutes = parseInt(timeHour) * 60 + parseInt(timeMinute);
            if (timePeriod === 'PM' && timeHour !== '12') prayerMinutes += 12 * 60;
            if (timePeriod === 'AM' && timeHour === '12') prayerMinutes = 0;

            if (currentTimeInMinutes < prayerMinutes) {
                nextPrayer = prayerName;
                nextTime = timeStr;
                break;
            }
        }

        return { nextPrayer, nextTime, nextMinutes: prayerMinutes };
    }

    function updatePrayerInfo() {
        const { nextPrayer, nextTime } = calculateNextPrayer();
        nextPrayerName.textContent = nextPrayer;
        nextPrayerTime.textContent = nextTime;
    }

    function updateCountdown() {
        const now = new Date();
        const { nextMinutes } = calculateNextPrayer();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();
        let minutesRemaining = nextMinutes - currentMinutes;

        if (minutesRemaining < 0) {
            minutesRemaining += 24 * 60;
        }

        const hours = Math.floor(minutesRemaining / 60);
        const minutes = Math.floor(minutesRemaining % 60);
        const seconds = Math.floor(now.getSeconds());

        countdownHours.textContent = hours.toString().padStart(2, '0');
        countdownMinutes.textContent = minutes.toString().padStart(2, '0');
        countdownSeconds.textContent = seconds.toString().padStart(2, '0');
    }

    function updateTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        const timeString = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + ampm;
        currentTimeSpan.textContent = timeString;
    }

    updateTime();
    updatePrayerInfo();
    setInterval(updateTime, 1000);
    setInterval(updateCountdown, 1000);
}

// === Qibla Finder Logic ===
function initQiblaFinder() {
    const compassNeedle = document.getElementById('compass-needle');
    const arrowIndicator = document.getElementById('arrow-indicator');
    const qiblaDirection = document.getElementById('qibla-direction');
    const kaabaDistance = document.getElementById('kaaba-distance');
    const qiblaStatus = document.getElementById('qibla-status');

    if (compassNeedle && arrowIndicator) {
        let currentRotation = Math.random() * 360;

        function rotateNeedle() {
            currentRotation = (currentRotation + 1) % 360;
            compassNeedle.style.transform = 'rotate(' + currentRotation + 'deg)';
            arrowIndicator.style.transform = 'rotate(' + (275 - currentRotation + 275) + 'deg)';
        }

        const rotationInterval = setInterval(rotateNeedle, 50);

        qiblaStatus.addEventListener('click', function() {
            clearInterval(rotationInterval);
            compassNeedle.style.transform = 'rotate(275deg)';
            arrowIndicator.style.transform = 'rotate(0deg)';
            currentRotation = 0;

            qiblaStatus.textContent = ' aligned! Direction: 275deg West-Northwest';
            qiblaStatus.style.color = 'var(--primary-color)';
            qiblaStatus.style.fontWeight = '600';

            setTimeout(function() {
                qiblaStatus.textContent = 'Move your device to align the arrow';
                qiblaStatus.style.color = 'var(--text-light)';
                qiblaStatus.style.fontWeight = 'normal';
                clearInterval(rotationInterval);
                rotateNeedle();
            }, 5000);
        });
    }

    const userLat = 40.7128;
    const userLng = -74.0060;
    const kaabaLat = 21.4225;
    const kaabaLng = 39.8262;

    function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371;
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                  Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
                  Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return Math.round(R * c);
    }

    const distance = calculateDistance(userLat, userLng, kaabaLat, kaabaLng);
    kaabaDistance.textContent = distance.toLocaleString() + ' km';
    qiblaDirection.textContent = '275deg';
}

// === Quran Reader Logic ===
function initQuranReader() {
    const surahSelect = document.getElementById('surah-select');
    const playBtn = document.getElementById('play-quran');
    const ayatList = document.getElementById('ayat-list');
    const bismillah = document.querySelector('.bismillah');

    const surahData = {
        1: {
            bismillah: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',
            ayat: [
                { number: 1, arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', translation: 'All praise is due to Allah, Lord of the worlds.' },
                { number: 2, arabic: 'الرَّحْمَٰنِ الرَّحِيمِ', translation: 'The Entirely Merciful, the Especially Merciful.' },
                { number: 3, arabic: 'مَالِكِ يَوْمِ الدِّينِ', translation: 'Sovereign of the Day of Recompense.' },
                { number: 4, arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', translation: 'It is You we worship and You we ask for help.' },
                { number: 5, arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', translation: 'Guide us to the straight path.' },
                { number: 6, arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ', translation: 'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.' }
            ]
        }
    };

    surahSelect.addEventListener('change', function() {
        const surahNum = parseInt(this.value);
        renderSurah(surahNum);
    });

    function renderSurah(surahNum) {
        if (surahNum === 1) {
            bismillah.textContent = surahData[1].bismillah;
            let html = '';
            surahData[1].ayat.forEach(ayat => {
                html += '<div class="ayat"><span class="ayat-number">' + ayat.number + '</span><span class="ayat-arabic">' + ayat.arabic + '</span><span class="ayat-translation">' + ayat.translation + '</span></div>';
            });
            ayatList.innerHTML = html;
        } else {
            bismillah.textContent = 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ';
            ayatList.innerHTML = '<div class="ayat"><span class="ayat-number">1</span><span class="ayat-arabic">أَنزَلَ فِيكُمُ ٱلْكِتَابَ</span><span class="ayat-translation">He has sent down upon you the Scripture...</span></div>';
        }
    }

    let isPlaying = false;
    playBtn.addEventListener('click', function() {
        isPlaying = !isPlaying;
        this.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
        if (isPlaying) {
            playBtn.style.animation = 'pulse 2s infinite';
        } else {
            playBtn.style.animation = 'none';
        }
    });

    renderSurah(1);
}

// === Dhikr Counter Logic ===
function initDhikrCounter() {
    const counters = {
        subhanallah: { count: 0, button: 'add-subhanallah', reset: 'reset-subhanallah' },
        alhamdulillah: { count: 0, button: 'add-alhamdulillah', reset: 'reset-alhamdulillah' },
        allahuakbar: { count: 0, button: 'add-allahu-akbar', reset: 'reset-allahu-akbar' }
    };

    function updateCounterDisplay() {
        document.getElementById('subhanallah-count').textContent = counters.subhanallah.count;
        document.getElementById('alhamdulillah-count').textContent = counters.alhamdulillah.count;
        document.getElementById('allahu-akbar-count').textContent = counters.allahuakbar.count;
    }

    document.getElementById('add-subhanallah').addEventListener('click', function() {
        counters.subhanallah.count += 100;
        animateCounter('subhanallah');
        updateCounterDisplay();
    });

    document.getElementById('add-alhamdulillah').addEventListener('click', function() {
        counters.alhamdulillah.count += 100;
        animateCounter('alhamdulillah');
        updateCounterDisplay();
    });

    document.getElementById('add-allahu-akbar').addEventListener('click', function() {
        counters.allahuakbar.count += 100;
        animateCounter('allahuakbar');
        updateCounterDisplay();
    });

    document.getElementById('reset-subhanallah').addEventListener('click', function() {
        counters.subhanallah.count = 0;
        updateCounterDisplay();
    });

    document.getElementById('reset-alhamdulillah').addEventListener('click', function() {
        counters.alhamdulillah.count = 0;
        updateCounterDisplay();
    });

    document.getElementById('reset-allahu-akbar').addEventListener('click', function() {
        counters.allahuakbar.count = 0;
        updateCounterDisplay();
    });

    function animateCounter(counterName) {
        const card = document.querySelector('#' + counterName.replace(/-/g, '') + '-card');
        if (card) {
            card.style.transform = 'scale(1.05)';
            setTimeout(function() { card.style.transform = ''; }, 200);
        }
    }

    updateCounterDisplay();
}

// === FAQ Accordion Logic ===
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function(item) {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', function() {
            faqItems.forEach(function(otherItem) {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                }
            });
            item.classList.toggle('active');
            const answer = item.querySelector('.faq-answer');
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
}

// === Feature Card Hover Effect ===
function initFeatureHoverEffects() {
    const cards = document.querySelectorAll('[data-features-hover]');
    cards.forEach(function(card) {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', x + 'px');
            card.style.setProperty('--mouse-y', y + 'px');
            const glow = card.querySelector('.glow-effect');
            if (glow) {
                glow.style.background = 'radial-gradient(circle at ' + x + 'px ' + y + 'px, var(--primary-color), var(--secondary-color))';
            }
        });
    });
}

// === Smooth Scrolling for Anchor Links ===
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// === Navbar Scroll Effect ===
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
