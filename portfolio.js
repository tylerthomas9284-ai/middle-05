// Portfolio Page JavaScript

// Filter Buttons
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    const color = button.getAttribute('data-color');
    
    // Set initial button styles
    if (button.classList.contains('active')) {
        button.style.borderColor = color;
        button.style.backgroundColor = `${color}20`;
        button.style.color = color;
        button.style.boxShadow = `0 0 20px ${color}60`;
    }
    
    button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Remove active class from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            const btnColor = btn.getAttribute('data-color');
            btn.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            btn.style.backgroundColor = '#0a0a0a';
            btn.style.color = '#ffffff';
            btn.style.boxShadow = 'none';
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        this.style.borderColor = color;
        this.style.backgroundColor = `${color}20`;
        this.style.color = color;
        this.style.boxShadow = `0 0 20px ${color}60`;
        
        // Filter portfolio items
        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                item.classList.remove('hidden');
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.classList.add('hidden');
                }, 300);
            }
        });
    });
    
    // Button hover effect
    button.addEventListener('mouseenter', function() {
        if (!this.classList.contains('active')) {
            this.style.borderColor = color;
            this.style.boxShadow = `0 0 15px ${color}40`;
        }
    });
    
    button.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
            this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            this.style.boxShadow = 'none';
        }
    });
});

// Portfolio Item Hover Effects
portfolioItems.forEach(item => {
    const color = item.getAttribute('data-color');
    
    item.addEventListener('mouseenter', function() {
        this.style.boxShadow = `0 10px 40px ${color}60`;
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// Stats Banner Hover Effects
document.querySelectorAll('.stat-item-banner').forEach(stat => {
    const color = stat.getAttribute('data-color');
    
    stat.addEventListener('mouseenter', function() {
        const number = this.querySelector('.stat-number-banner');
        if (number) {
            number.style.textShadow = `0 0 40px ${color}`;
        }
    });
    
    stat.addEventListener('mouseleave', function() {
        const number = this.querySelector('.stat-number-banner');
        if (number) {
            number.style.textShadow = `0 0 30px ${color}`;
        }
    });
});
