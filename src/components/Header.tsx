import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/blogs", label: "Blogs" },
    { to: "/faq", label: "FAQ" },
    { to: "/reviews", label: "Reviews" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-105">
              Dr
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl font-bold text-primary">DrScribeO</span>
              <span className="text-xs text-muted-foreground">Crafting Knowledge</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="px-4 py-2 text-sm font-medium text-foreground/80 rounded-lg transition-colors hover:bg-muted hover:text-foreground"
                activeClassName="bg-primary/10 text-primary font-semibold"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <Button asChild variant="default" className="gradient-primary hover:opacity-90">
              <Link to="/contact">Join Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-foreground/80 rounded-lg transition-colors hover:bg-muted hover:text-foreground"
                  activeClassName="bg-primary/10 text-primary font-semibold"
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="px-4 pt-2">
                <Button asChild className="w-full gradient-primary hover:opacity-90">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Join Now
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
