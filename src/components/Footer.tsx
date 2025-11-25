import { Link } from "react-router-dom";
import { Instagram, Youtube, Phone, Mail } from "lucide-react";

const Footer = () => {
  const featureLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "All Services" },
    { to: "/contact", label: "Contact Us" },
    { to: "/blogs", label: "Blogs" },
    { to: "/faq", label: "FAQ" },
  ];

  const quickLinks = [
    { to: "/reviews", label: "Happy Clients" },
    { to: "/terms", label: "Terms and Conditions" },
    { to: "/refund-policy", label: "Refund Policy" },
    { to: "/disclaimer", label: "Disclaimer" },
  ];

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-white font-bold text-xl">
                Dr
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-xl font-bold text-primary">DrScribeO</span>
                <span className="text-xs text-muted-foreground">Crafting Knowledge</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Premium academic and clinical writing platform for medical, dental, and life-science professionals.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com/drscribeo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com/@Drscribeo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Feature Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Feature Links</h3>
            <ul className="space-y-2">
              {featureLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+918290712576"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={16} />
                  <span>+91 8290712576</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:drscribeo@gmail.com"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  <span>drscribeo@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DrScribeO. All rights reserved. | Crafting Knowledge With Precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
