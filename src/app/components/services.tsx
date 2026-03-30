import { Palette, Lightbulb, Home, Sofa } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Interior Design",
    description: "Transform your space with cutting-edge aesthetics and personalized design solutions.",
    color: "#00ffff",
  },
  {
    icon: Lightbulb,
    title: "Custom LED Installations",
    description: "Illuminate your home with custom neon and LED lighting systems.",
    color: "#ff00ff",
  },
  {
    icon: Home,
    title: "Smart Home Integration",
    description: "Connect your living space with the latest smart home technology.",
    color: "#39ff14",
  },
  {
    icon: Sofa,
    title: "Luxury Furniture Sourcing",
    description: "Access exclusive designer pieces from around the globe.",
    color: "#ffaa00",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl mb-4 tracking-wide"
            style={{ 
              textShadow: '0 0 20px rgba(0, 255, 255, 0.6)' 
            }}
          >
            <span className="text-primary">Our</span>{" "}
            <span className="text-secondary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">Next-generation decor solutions for the modern home</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 bg-card rounded-lg border border-transparent transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                borderColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = service.color;
                e.currentTarget.style.boxShadow = `0 0 30px ${service.color}80`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.1)';
              }}
            >
              <div 
                className="w-16 h-16 mb-4 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: `${service.color}20`,
                  boxShadow: `0 0 20px ${service.color}40`,
                }}
              >
                <service.icon 
                  className="w-8 h-8 transition-all duration-300" 
                  style={{ color: service.color }}
                />
              </div>
              <h3 className="text-xl mb-3" style={{ color: service.color }}>
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
