import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1758833502047-8f1c7dc5edd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbmVvbiUyMGZ1cm5pdHVyZSUyMG1vZGVybiUyMGludGVyaW9yfGVufDF8fHx8MTc2OTUyOTA0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Illuminate Your Living Space",
    color: "#00ffff",
  },
  {
    image: "https://images.unsplash.com/photo-1758448755856-01d3add0177b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBsdXh1cnklMjBsaXZpbmclMjByb29tJTIwTEVEJTIwbGlnaHRzfGVufDF8fHx8MTc2OTUyOTA0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Modern Decor for the Digital Age",
    color: "#ff00ff",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10"></div>
          <ImageWithFallback
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          
          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center">
              <h2 
                className="text-5xl md:text-7xl mb-8 tracking-wide animate-pulse"
                style={{ 
                  color: slide.color,
                  textShadow: `0 0 30px ${slide.color}, 0 0 60px ${slide.color}80`
                }}
              >
                {slide.title}
              </h2>
              <button 
                className="px-8 py-4 bg-transparent border-2 rounded-lg tracking-wide transition-all duration-300 hover:scale-105"
                style={{ 
                  borderColor: slide.color,
                  color: slide.color,
                  boxShadow: `0 0 20px ${slide.color}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = slide.color + '20';
                  e.currentTarget.style.boxShadow = `0 0 30px ${slide.color}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.boxShadow = `0 0 20px ${slide.color}`;
                }}
              >
                Explore Now
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 p-3 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg hover:border-primary transition-all duration-300"
        style={{ boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)' }}
      >
        <ChevronLeft className="w-6 h-6 text-primary" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 p-3 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg hover:border-primary transition-all duration-300"
        style={{ boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)' }}
      >
        <ChevronRight className="w-6 h-6 text-primary" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8' : ''
            }`}
            style={{ 
              backgroundColor: index === currentSlide ? slides[index].color : '#ffffff40',
              boxShadow: index === currentSlide ? `0 0 15px ${slides[index].color}` : 'none'
            }}
          />
        ))}
      </div>
    </div>
  );
}
