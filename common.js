// Common JavaScript for all pages

// Social Links Hover
document.querySelectorAll('.social-link').forEach(link => {
    const color = link.getAttribute('data-color');
    
    if (color) {
        link.style.backgroundColor = `${color}20`;
        
        link.addEventListener('mouseenter', function() {
            this.style.borderColor = color;
            this.style.boxShadow = `0 0 20px ${color}`;
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.borderColor = 'transparent';
            this.style.boxShadow = 'none';
        });
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add glow effect to elements with data-color attribute on hover
function addGlowEffect(selector) {
    document.querySelectorAll(selector).forEach(element => {
        const color = element.getAttribute('data-color');
        
        if (color) {
            element.addEventListener('mouseenter', function() {
                this.style.borderColor = color;
                this.style.boxShadow = `0 0 30px ${color}80`;
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.borderColor = 'transparent';
                this.style.boxShadow = '';
            });
        }
    });
}

// Apply glow effects to common elements
addGlowEffect('.stat-item');
addGlowEffect('.mission-card');
addGlowEffect('.team-card');
addGlowEffect('.contact-info-card');
addGlowEffect('.social-link-large');

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.backgroundColor = 'rgba(5, 5, 5, 0.9)';
        header.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.2)';
    } else {
        header.style.backgroundColor = 'rgba(5, 5, 5, 0.3)';
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});
