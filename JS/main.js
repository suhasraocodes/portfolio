let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Toggle menu icon and navbar visibility
menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle('active');
}

// Handle scroll events
window.onscroll = () => {
    // Add 'active' class to nav links based on scroll position
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });

    // Add 'sticky' class to header based on scroll position
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close menu when scrolling
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

// Initialize ScrollReveal for animations
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

// Example of ScrollReveal usage for different elements
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js initialization
const typed = new Typed('.multiple-text', {
    strings: ['Computer Science Engineer', 'Tech Enthusiast', 'Problem Solver'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});
