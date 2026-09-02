// AOS Initialization, Typing Effect, and Counter Logic
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS Library
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out'
        });
    }

    // Typing Animation Effect for Hero Section
    const textArray = ["SRI GLOBAL MOPARTS PVT LTD"];
    let textIndex = 0;
    let charIndex = 0;
    const typingElement = document.querySelector('.typing-text');

    function type() {
        if (typingElement && charIndex < textArray[textIndex].length) {
            typingElement.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        }
    }
    type();

    // Scroll-Triggered Counter Animation
    const counters = document.querySelectorAll('.counter');
    let animated = false;

    function runCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const speed = target / 50;

            const updateCount = () => {
                count += speed;
                if (count < target) {
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCount, 30);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }

    window.addEventListener('scroll', () => {
        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            const sectionPos = statsSection.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;

            if (sectionPos < screenPos && !animated) {
                runCounters();
                animated = true;
            }
        }
    });
});
