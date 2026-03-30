// Services Page JavaScript

// Service Detail Hover Effects
document.querySelectorAll('.service-detail').forEach(detail => {
    const color = detail.getAttribute('data-color');
    const imageBorder = detail.querySelector('.image-border');
    const button = detail.querySelector('.service-btn');
    
    if (color) {
        if (imageBorder) {
            imageBorder.style.boxShadow = `inset 0 0 60px ${color}30`;
        }
        
        if (button) {
            button.style.borderColor = color;
            button.style.color = color;
            button.style.boxShadow = `0 0 20px ${color}40`;
            
            button.addEventListener('mouseenter', function() {
                this.style.boxShadow = `0 0 30px ${color}`;
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.boxShadow = `0 0 20px ${color}40`;
            });
        }
        
        detail.addEventListener('mouseenter', function() {
            this.style.borderColor = color;
            this.style.boxShadow = `0 10px 50px ${color}40`;
        });
        
        detail.addEventListener('mouseleave', function() {
            this.style.borderColor = 'transparent';
            this.style.boxShadow = 'none';
        });
    }
});

// Process Steps Hover Effects
document.querySelectorAll('.process-step').forEach(step => {
    const number = step.querySelector('.step-number');
    const color = step.getAttribute('data-color');
    
    if (color && number) {
        number.style.borderColor = color;
        number.style.backgroundColor = `${color}15`;
        number.style.boxShadow = `0 0 20px ${color}40`;
        
        step.addEventListener('mouseenter', function() {
            if (number) {
                number.style.backgroundColor = `${color}30`;
                number.style.boxShadow = `0 0 40px ${color}`;
            }
        });
        
        step.addEventListener('mouseleave', function() {
            if (number) {
                number.style.backgroundColor = `${color}15`;
                number.style.boxShadow = `0 0 20px ${color}40`;
            }
        });
    }
});

// Process Connector Colors
document.querySelectorAll('.process-connector').forEach(connector => {
    const color = connector.getAttribute('data-color');
    if (color) {
        connector.style.color = color;
        connector.style.opacity = '0.5';
    }
});
