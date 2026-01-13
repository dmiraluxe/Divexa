// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Simple animation for bars
    mobileMenu.classList.toggle('is-active');
});

// Form Validation and Submission Simulation
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Basic validation
        if (name && phone && message) {
            alert(`Thank you ${name}! Your application for DIVEXA has been sent. Our HR team will contact you on ${phone} shortly.`);
            contactForm.reset();
        } else {
            alert("Please fill in all fields before submitting.");
        }
    });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
