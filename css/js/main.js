/**
 * DIVEXA GLOBAL - Animation Engine 2026
 * Powered by Nomee Solutions
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Loader Removal
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }, 1500); // 1.5 second loading feel
    }

    // 2. Sticky Glass Header Effect
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.background = 'rgba(5, 5, 5, 0.95)';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            header.style.padding = '20px 0';
            header.style.background = 'rgba(5, 5, 5, 0.85)';
            header.style.boxShadow = 'none';
        }
    });

    // 3. Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply reveal to cards and headers
    const revealElements = document.querySelectorAll('.vertical-card, .glass-morph, .section-main-title, .hero-content-box');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';
        observer.observe(el);
    });

    // 4. Mouse Move Parallax (Subtle 3D Background movement)
    document.addEventListener('mousemove', (e) => {
        const spheres = document.querySelectorAll('.gradient-sphere, .gradient-sphere-2');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        spheres.forEach(sphere => {
            const speed = 30;
            const xShift = (x - 0.5) * speed;
            const yShift = (y - 0.5) * speed;
            sphere.style.transform = `translate(${xShift}px, ${yShift}px)`;
        });
    });

    // 5. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 6. Live Counter (Optional Fun Fact)
    console.log("DIVEXA System Initialized: Global Operations Active.");
});
