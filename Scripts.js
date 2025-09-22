function startPulse() {
    const bars = document.querySelectorAll('.wave-container > div');
    bars.forEach((bar, i) => {
        if (i < 57) {
            const randomDelay = (Math.random() * (0 - 10) + 0.1).toFixed(2);
            bar.style.animationDelay = `${randomDelay}s`;

            bar.classList.remove('animate'); // Remove antes de reaplicar
            void bar.offsetWidth; // força reflow
            bar.classList.add('animate'); // reaplica animação
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    startPulse();
});