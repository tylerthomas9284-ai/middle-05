import { ShoppingCart } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/30 border-b border-primary/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl tracking-wider" style={{ 
              textShadow: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.4)' 
            }}>
              <span className="text-primary">LuxeNest</span>{" "}
              <span className="text-secondary">Decor</span>
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About Us', 'Services', 'Contact Us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="relative text-sm tracking-wide transition-all duration-300 hover:text-primary group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                  style={{ boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)' }}
                ></span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}