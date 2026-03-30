import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "#", color: "#ff00ff" },
    { icon: Facebook, href: "#", color: "#00ffff" },
    { icon: Twitter, href: "#", color: "#39ff14" },
  ];

  return (
    <footer className="bg-black border-t border-primary/20">
      {/* Neon line separator */}
      <div 
        className="h-0.5 w-full"
        style={{
          background: 'linear-gradient(to right, #00ffff, #ff00ff, #39ff14, #00ffff)',
          boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
        }}
      ></div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 
              className="text-2xl mb-4 tracking-wider"
              style={{ 
                textShadow: '0 0 15px rgba(0, 255, 255, 0.8)' 
              }}
            >
              <span className="text-primary">LuxeNest</span>{" "}
              <span className="text-secondary">Decor</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Illuminating spaces with next-gen design solutions for the digital age.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg flex items-center justify-center border border-transparent transition-all duration-300"
                  style={{
                    backgroundColor: `${social.color}20`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = social.color;
                    e.currentTarget.style.boxShadow = `0 0 20px ${social.color}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <social.icon className="w-5 h-5" style={{ color: social.color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg mb-4 text-secondary">Legal</h4>
            <ul className="space-y-2">
              {['Terms & Conditions', 'Privacy Policy', 'Cookie Policy', 'Disclaimer'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-4 text-accent">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  371 7th Ave, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+13833889939" className="text-muted-foreground hover:text-accent transition-colors">
                  +1-383-388-9939
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:help@LuxeNestDecor.in" className="text-muted-foreground hover:text-accent transition-colors">
                  help@LuxeNestDecor.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary/20 text-center">
          <p className="text-muted-foreground">
            © 2026 <span className="text-primary">LuxeNest Decor</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
