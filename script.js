document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    const hour = new Date().getHours();
    let timeGreeting = '';

    if (hour >= 5 && hour < 12) {
        timeGreeting = 'Selamat Pagi';
    } else if (hour >= 12 && hour < 15) {
        timeGreeting = 'Selamat Siang';
    } else if (hour >= 15 && hour < 18) {
        timeGreeting = 'Selamat Sore';
    } else {
        timeGreeting = 'Selamat Malam';
    }

    greetingElement.textContent = `${timeGreeting}, selamat datang di profil saya!`;

    // Add staggered animation to list items
    const items = document.querySelectorAll('.detail-item');
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `all 0.5s ease ${index * 0.2 + 0.5}s`;

        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 100);
    });
});
