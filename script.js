// Set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = mobileMenuBtn.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const spans = mobileMenuBtn.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Scroll Reveal Animation (Micro-animations)
const revealElements = document.querySelectorAll('.skill-card, .project-card, .service-item, .contact-text, .contact-form-wrapper');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) translateX(0)';
            observer.unobserve(entry.target);
        }
    });
};

const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

// Set initial state and observe
revealElements.forEach(el => {
    el.style.opacity = '0';
    
    if (el.classList.contains('service-item')) {
        el.style.transform = 'translateX(-30px)';
    } else {
        el.style.transform = 'translateY(30px)';
    }
    
    el.style.transition = 'all 0.6s cubic-bezier(0.5, 0, 0, 1)';
    revealObserver.observe(el);
});

// Smooth scrolling for anchor links (fallback for browsers that don't support scroll-behavior: smooth in CSS)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Only prevent default if it's not a generic "#" link
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Read More Toggle Logic
const readMoreBtn = document.getElementById('read-more-btn');
const aboutMoreText = document.getElementById('about-more-text');

if (readMoreBtn && aboutMoreText) {
    readMoreBtn.addEventListener('click', () => {
        aboutMoreText.classList.toggle('expanded');
        readMoreBtn.classList.toggle('active');
        
        const btnText = readMoreBtn.childNodes[0];
        if (aboutMoreText.classList.contains('expanded')) {
            btnText.nodeValue = 'Read Less ';
        } else {
            btnText.nodeValue = 'Read More ';
        }
    });
}
