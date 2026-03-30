import { Zap, Globe, Users, Leaf } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Next-Gen Aesthetics",
    description: "Cutting-edge design that pushes boundaries",
    color: "#00ffff",
  },
  {
    icon: Globe,
    title: "Global Shipping",
    description: "Worldwide delivery to your doorstep",
    color: "#ff00ff",
  },
  {
    icon: Users,
    title: "Expert Stylists",
    description: "Professional consultation and support",
    color: "#39ff14",
  },
  {
    icon: Leaf,
    title: "Eco-Tech Materials",
    description: "Sustainable technology-driven solutions",
    color: "#ffaa00",
  },
];

export function WhyChooseUs() {
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
            <span className="text-secondary">Why Choose</span>{" "}
            <span className="text-accent">Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer"
            >
              <div 
                className="inline-flex w-24 h-24 mb-6 rounded-full items-center justify-center transition-all duration-500 group-hover:scale-110"
                style={{
                  backgroundColor: `${feature.color}15`,
                  boxShadow: `0 0 30px ${feature.color}40`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 50px ${feature.color}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${feature.color}40`;
                }}
              >
                <feature.icon 
                  className="w-12 h-12" 
                  style={{ 
                    color: feature.color,
                    filter: `drop-shadow(0 0 10px ${feature.color})`
                  }}
                />
              </div>
              <h3 className="text-xl mb-3" style={{ color: feature.color }}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
