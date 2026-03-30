// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    const color = slides[index].getAttribute('data-color');
    const button = slides[index].querySelector('.slide-btn');
    if (button) {
        button.style.borderColor = color;
        button.style.color = color;
        button.style.boxShadow = `0 0 20px ${color}`;
    }
    
    const activeDot = dots[index];
    activeDot.style.backgroundColor = color;
    activeDot.style.boxShadow = `0 0 15px ${color}`;
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

// Auto-advance slides
setInterval(() => {
    changeSlide(1);
}, 5000);

// Slide button hover effects
document.querySelectorAll('.slide-btn').forEach(btn => {
    const color = btn.getAttribute('data-color');
    
    btn.addEventListener('mouseenter', function() {
        this.style.backgroundColor = color + '20';
        this.style.boxShadow = `0 0 30px ${color}`;
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'transparent';
        this.style.boxShadow = `0 0 20px ${color}`;
    });
});

// Service Cards Hover
document.querySelectorAll('.service-card').forEach(card => {
    const color = card.getAttribute('data-color');
    const defaultShadow = '0 0 15px rgba(0, 255, 255, 0.1)';
    
    card.style.boxShadow = defaultShadow;
    
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = color;
        this.style.boxShadow = `0 0 30px ${color}80`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderColor = 'transparent';
        this.style.boxShadow = defaultShadow;
    });
});

// Why Choose Us Icon Hover
document.querySelectorAll('.why-icon').forEach(icon => {
    const color = icon.getAttribute('data-color');
    
    icon.style.backgroundColor = `${color}15`;
    icon.style.boxShadow = `0 0 30px ${color}40`;
    
    icon.addEventListener('mouseenter', function() {
        this.style.boxShadow = `0 0 50px ${color}`;
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.boxShadow = `0 0 30px ${color}40`;
    });
});

// Before/After Image Slider
const beforeAfterContainer = document.querySelector('.before-after-container');
const afterImage = document.getElementById('afterImage');
const sliderHandle = document.getElementById('sliderHandle');
let isDragging = false;

function updateSlider(x) {
    const rect = beforeAfterContainer.getBoundingClientRect();
    const position = Math.max(0, Math.min(x - rect.left, rect.width));
    const percentage = (position / rect.width) * 100;
    
    afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    sliderHandle.style.left = `${percentage}%`;
}

beforeAfterContainer.addEventListener('mousedown', () => {
    isDragging = true;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

beforeAfterContainer.addEventListener('mousemove', (e) => {
    if (isDragging) {
        updateSlider(e.clientX);
    }
});

beforeAfterContainer.addEventListener('touchstart', () => {
    isDragging = true;
});

document.addEventListener('touchend', () => {
    isDragging = false;
});

beforeAfterContainer.addEventListener('touchmove', (e) => {
    if (isDragging) {
        updateSlider(e.touches[0].clientX);
    }
});

// Testimonial Cards Hover
document.querySelectorAll('.testimonial-card').forEach(card => {
    const color = card.getAttribute('data-color');
    
    card.style.boxShadow = `0 5px 20px ${color}20`;
    card.querySelector('.testimonial-author').style.borderColor = `${color}40`;
    
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = color;
        this.style.boxShadow = `0 10px 40px ${color}60`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderColor = 'transparent';
        this.style.boxShadow = `0 5px 20px ${color}20`;
    });
});

// Blog Cards Hover
document.querySelectorAll('.blog-card').forEach(card => {
    const color = card.getAttribute('data-color');
    const title = card.querySelector('.blog-content h3');
    
    card.style.boxShadow = `0 5px 20px ${color}20`;
    
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = color;
        this.style.boxShadow = `0 10px 40px ${color}60`;
        if (title) {
            title.style.textShadow = `0 0 15px ${color}`;
        }
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderColor = 'transparent';
        this.style.boxShadow = `0 5px 20px ${color}20`;
        if (title) {
            title.style.textShadow = '0 0 10px transparent';
        }
    });
});

// Social Links Hover
document.querySelectorAll('.social-link').forEach(link => {
    const color = link.getAttribute('data-color');
    
    link.style.backgroundColor = `${color}20`;
    
    link.addEventListener('mouseenter', function() {
        this.style.borderColor = color;
        this.style.boxShadow = `0 0 20px ${color}`;
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.borderColor = 'transparent';
        this.style.boxShadow = 'none';
    });
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

// Initialize
window.addEventListener('load', () => {
    showSlide(0);
    // Set initial position for before/after slider
    afterImage.style.clipPath = 'inset(0 50% 0 0)';
    sliderHandle.style.left = '50%';
});
