import { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const beforeAfterImages = [
  {
    before: "https://images.unsplash.com/photo-1557847211-a0be5b0ed242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGJlZm9yZSUyMGFmdGVyJTIwdHJhbnNmb3JtYXRpb258ZW58MXx8fHwxNzY5NTI5MDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    after: "https://images.unsplash.com/photo-1768141732026-55ea156f5aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwZGFyayUyMHJvb20lMjBuZW9uJTIwYW1iaWVudHxlbnwxfHx8fDE3Njk1MjkwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Living Room Transformation",
  },
];

export function Gallery() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl mb-4 tracking-wide"
            style={{ 
              textShadow: '0 0 20px rgba(57, 255, 20, 0.6)' 
            }}
          >
            <span className="text-accent">The Neon</span>{" "}
            <span className="text-primary">Glow-Up</span>
          </h2>
          <p className="text-muted-foreground text-lg">See the transformation with our before & after showcase</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {beforeAfterImages.map((item, index) => (
            <div key={index} className="mb-8">
              <div
                className="relative w-full h-[600px] overflow-hidden rounded-lg cursor-ew-resize select-none"
                onMouseMove={handleMouseMove}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchMove={handleTouchMove}
                onTouchStart={handleMouseDown}
                onTouchEnd={handleMouseUp}
                style={{
                  boxShadow: '0 0 40px rgba(0, 255, 255, 0.3)',
                }}
              >
                {/* After Image (Top Layer) */}
                <div 
                  className="absolute inset-0"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <ImageWithFallback
                    src={item.after}
                    alt="After"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 px-4 py-2 bg-accent/90 backdrop-blur-sm rounded-lg"
                    style={{ boxShadow: '0 0 20px rgba(57, 255, 20, 0.8)' }}
                  >
                    <span className="text-black tracking-wide">AFTER</span>
                  </div>
                </div>

                {/* Before Image (Bottom Layer) */}
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={item.before}
                    alt="Before"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-4 py-2 bg-muted/90 backdrop-blur-sm rounded-lg"
                    style={{ boxShadow: '0 0 20px rgba(160, 160, 160, 0.5)' }}
                  >
                    <span className="text-foreground tracking-wide">BEFORE</span>
                  </div>
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize"
                  style={{ 
                    left: `${sliderPosition}%`,
                    boxShadow: '0 0 20px rgba(0, 255, 255, 1), 0 0 40px rgba(0, 255, 255, 0.6)',
                  }}
                >
                  <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center"
                    style={{ boxShadow: '0 0 30px rgba(0, 255, 255, 1)' }}
                  >
                    <div className="flex space-x-1">
                      <div className="w-0.5 h-6 bg-background"></div>
                      <div className="w-0.5 h-6 bg-background"></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center mt-4 text-xl" style={{ color: '#00ffff' }}>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
