// Mobile menu toggle functionality + Smooth scrolling
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.createElement('button');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    menuToggle.className = 'menu-toggle text-xl md:hidden ml-auto';
    menuToggle.setAttribute('aria-label', 'Toggle menu');

    const headerContainer = document.querySelector('header .container');
    const nav = document.querySelector('nav ul');

    if (headerContainer && nav) {
        headerContainer.appendChild(menuToggle);

        // Add mobile class to nav for styling
        nav.classList.add('mobile-nav');
        
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    } else {
        console.warn('Header or nav element missing.');
    }

    // Smooth scrolling for anchor links (only if #id exists on page)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
