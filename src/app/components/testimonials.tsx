import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Tech Entrepreneur",
    content: "LuxeNest completely transformed my apartment into a cyberpunk paradise. The LED installations are absolutely stunning!",
    rating: 5,
    color: "#00ffff",
  },
  {
    name: "Morgan Chen",
    role: "Digital Artist",
    content: "The neon aesthetic brought my creative space to life. Every visitor is amazed by the vibe.",
    rating: 5,
    color: "#ff00ff",
  },
  {
    name: "Jordan Smith",
    role: "Content Creator",
    content: "From dull to dazzling! My home office setup has never looked better. Perfect for streaming.",
    rating: 5,
    color: "#39ff14",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl mb-4 tracking-wide"
            style={{ 
              textShadow: '0 0 20px rgba(255, 0, 255, 0.6)' 
            }}
          >
            <span className="text-secondary">Client</span>{" "}
            <span className="text-accent">Testimonials</span>
          </h2>
          <p className="text-muted-foreground text-lg">See what our clients say about their neon glow-up</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-lg border border-transparent transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                boxShadow: `0 5px 20px ${testimonial.color}20`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = testimonial.color;
                e.currentTarget.style.boxShadow = `0 10px 40px ${testimonial.color}60`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = `0 5px 20px ${testimonial.color}20`;
              }}
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current"
                    style={{ 
                      color: testimonial.color,
                      filter: `drop-shadow(0 0 5px ${testimonial.color})`
                    }}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t" style={{ borderColor: `${testimonial.color}40` }}>
                <p className="font-medium" style={{ color: testimonial.color }}>
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
