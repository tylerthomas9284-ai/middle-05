import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const blogPosts = [
  {
    image: "https://images.unsplash.com/photo-1758548157378-46bc8e6dc6c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMExFRCUyMGFjY2VudCUyMGxpZ2h0aW5nfGVufDF8fHx8MTc2OTUyOTA0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "How to Layer Neon Lighting",
    excerpt: "Master the art of creating depth with multi-layered LED installations.",
    date: "Jan 25, 2026",
    color: "#00ffff",
  },
  {
    image: "https://images.unsplash.com/photo-1767800766429-7179fd80948f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwb2ZmaWNlJTIwbmVvbiUyMHNldHVwfGVufDF8fHx8MTc2OTUyOTA0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Dark Mode Interior Trends 2026",
    excerpt: "Explore the latest trends in dark aesthetic interior design.",
    date: "Jan 20, 2026",
    color: "#ff00ff",
  },
  {
    image: "https://images.unsplash.com/photo-1758833502047-8f1c7dc5edd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbmVvbiUyMGZ1cm5pdHVyZSUyMG1vZGVybiUyMGludGVyaW9yfGVufDF8fHx8MTc2OTUyOTA0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Cyberpunk Home Office Setup",
    excerpt: "Create the ultimate futuristic workspace in your home.",
    date: "Jan 15, 2026",
    color: "#39ff14",
  },
];

export function Blog() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl mb-4 tracking-wide"
            style={{ 
              textShadow: '0 0 20px rgba(0, 255, 255, 0.6)' 
            }}
          >
            <span className="text-primary">The Modern</span>{" "}
            <span className="text-secondary">Journal</span>
          </h2>
          <p className="text-muted-foreground text-lg">Latest insights and trends in cyber-luxe design</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group cursor-pointer bg-card rounded-lg overflow-hidden border border-transparent transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: `0 5px 20px ${post.color}20`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = post.color;
                e.currentTarget.style.boxShadow = `0 10px 40px ${post.color}60`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = `0 5px 20px ${post.color}20`;
              }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to bottom, transparent, ${post.color}40)`,
                  }}
                ></div>
                
                {/* Neon overlay text */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-lg">
                  <span className="text-xs tracking-wide" style={{ color: post.color }}>
                    {post.date}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 
                  className="text-xl mb-3 transition-all duration-300"
                  style={{ 
                    color: post.color,
                    textShadow: '0 0 10px transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textShadow = `0 0 15px ${post.color}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textShadow = '0 0 10px transparent';
                  }}
                >
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center group/arrow">
                  <span className="text-sm mr-2" style={{ color: post.color }}>
                    Read More
                  </span>
                  <ArrowRight 
                    className="w-4 h-4 transition-transform duration-300 group-hover/arrow:translate-x-2" 
                    style={{ color: post.color }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
