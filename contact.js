// Contact Page JavaScript

// Form Input Focus Effects
document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(input => {
    const color = input.getAttribute('data-color');
    
    if (color) {
        input.addEventListener('focus', function() {
            this.style.borderColor = color;
            this.style.boxShadow = `0 0 15px ${color}60`;
        });
        
        input.addEventListener('blur', function() {
            this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            this.style.boxShadow = 'none';
        });
    }
});

// Contact Info Cards Hover
document.querySelectorAll('.contact-info-card').forEach(card => {
    const color = card.getAttribute('data-color');
    const icon = card.querySelector('.info-icon');
    
    if (color && icon) {
        icon.style.backgroundColor = `${color}20`;
        card.style.boxShadow = `0 5px 20px ${color}20`;
        
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = color;
            this.style.boxShadow = `0 10px 40px ${color}60`;
            if (icon) {
                icon.style.boxShadow = `0 0 30px ${color}`;
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = 'transparent';
            this.style.boxShadow = `0 5px 20px ${color}20`;
            if (icon) {
                icon.style.boxShadow = 'none';
            }
        });
    }
});

// Social Links Large Hover
document.querySelectorAll('.social-link-large').forEach(link => {
    const color = link.getAttribute('data-color');
    
    if (color) {
        link.addEventListener('mouseenter', function() {
            this.style.borderColor = color;
            this.style.boxShadow = `0 0 20px ${color}`;
            this.style.color = color;
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.borderColor = 'transparent';
            this.style.boxShadow = 'none';
            this.style.color = '#ffffff';
        });
    }
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message show';
        successMessage.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#39ff14" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 8px;">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</span>
        `;
        
        contactForm.insertBefore(successMessage, contactForm.firstChild);
        
        // Reset form
        contactForm.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });
}
