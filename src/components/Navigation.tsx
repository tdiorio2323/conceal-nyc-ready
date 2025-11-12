import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-tactical-dark/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <img src={logo} alt="103 Tactical" className="h-14 w-auto" />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("packages")}
              className="text-foreground hover:text-accent transition-colors font-semibold"
            >
              CCW Packages
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-accent transition-colors font-semibold"
            >
              NRA Classes
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-accent transition-colors font-semibold"
            >
              Private Classes
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-accent transition-colors font-semibold"
            >
              Application Assistance
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-accent text-accent-foreground px-6 py-2 rounded font-bold hover:bg-tactical-red-hover transition-colors"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
            <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
            <div className="w-6 h-0.5 bg-foreground"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-tactical-dark border-t border-border/20 pb-4">
            <button
              onClick={() => scrollToSection("packages")}
              className="block w-full text-left px-4 py-3 text-foreground hover:bg-secondary/50 transition-colors font-semibold"
            >
              CCW Packages
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-3 text-foreground hover:bg-secondary/50 transition-colors font-semibold"
            >
              NRA Classes
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-3 text-foreground hover:bg-secondary/50 transition-colors font-semibold"
            >
              Private Classes
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-3 text-foreground hover:bg-secondary/50 transition-colors font-semibold"
            >
              Application Assistance
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-3 bg-accent text-accent-foreground font-bold mt-2 mx-4 rounded hover:bg-tactical-red-hover transition-colors"
              style={{ width: 'calc(100% - 2rem)' }}
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
