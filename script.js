document.addEventListener('DOMContentLoaded', function () {
    const heroLogo = document.querySelector('.logo-container');
    const heroLinks = document.querySelector('.hero-links');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 250) { // Adjust the scroll position where you want the div to disappear
            heroLogo.classList.add('hidden');
            heroLinks.classList.add('hidden');
        } else {
            heroLogo.classList.remove('hidden');
            heroLinks.classList.remove('hidden');
        }
    });

    const navLogo = document.querySelector('.nav-logo');
    const navLinks = document.querySelector('.nav-links');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 250) { // Adjust the scroll position where you want the div to disappear
            navLogo.classList.remove('hidden');
            navLinks.classList.remove('hidden');
        } else {
            navLogo.classList.add('hidden');
            navLinks.classList.add('hidden');
        }
    });
});