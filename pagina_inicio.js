// ==========================================
// NAVEGACIÓN MÓVIL
// ==========================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// ==========================================
// SCROLL SUAVE
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// NAVBAR AL HACER SCROLL
// ==========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ==========================================
// NAVEGACIÓN ACTIVA SEGÚN SECCIÓN
// ==========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// ANIMACIÓN DE APARICIÓN AL SCROLL
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observar elementos para animación
const fadeElements = document.querySelectorAll('.about-card, .class-card, .facility-item, .welcome-content, .welcome-image, .contact-card');
fadeElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Animación especial para las tarjetas de precios
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach((card, index) => {
    card.classList.add('price-fade-in');
    card.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(card);
});

// ==========================================
// DETECTAR DISPOSITIVO TÁCTIL
// ==========================================
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}

// ==========================================
// CONSOLE BRANDING
// ==========================================
console.log('%c🏋️ Barbell Training ', 'background: #CC0000; color: white; font-size: 20px; padding: 10px; font-weight: bold;');
console.log('%cPágina desarrollada para Barbell Training', 'color: #888; font-size: 12px;');