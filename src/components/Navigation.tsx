import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button onClick={handleLogoClick} className="focus:outline-none">
            <img src={logo} alt="103 Tactical" className="h-10 sm:h-12 md:h-14 w-auto" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate("/packages")}
              className="text-tactical-dark hover:text-accent transition-colors font-semibold"
            >
              CCW Packages
            </button>
            <button
              onClick={() => navigate("/nra-classes")}
              className="text-tactical-dark hover:text-accent transition-colors font-semibold"
            >
              NRA Classes
            </button>
            <button
              onClick={() => navigate("/private-classes")}
              className="text-tactical-dark hover:text-accent transition-colors font-semibold"
            >
              Private Classes
            </button>
            <button
              onClick={() => navigate("/application-assistance")}
              className="text-tactical-dark hover:text-accent transition-colors font-semibold"
            >
              Application Assistance
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-6 py-2 rounded font-bold transition-colors text-white"
              style={{ backgroundColor: '#0041FF' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0037DD'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0041FF'}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-tactical-dark p-3 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <div className="w-6 h-0.5 bg-tactical-dark"></div>
              <div className="w-6 h-0.5 bg-tactical-dark"></div>
              <div className="w-6 h-0.5 bg-tactical-dark"></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border/20 pb-4">
            <button
              onClick={() => {
                navigate("/packages");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-tactical-dark hover:bg-muted transition-colors font-semibold"
            >
              CCW Packages
            </button>
            <button
              onClick={() => {
                navigate("/nra-classes");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-tactical-dark hover:bg-muted transition-colors font-semibold"
            >
              NRA Classes
            </button>
            <button
              onClick={() => {
                navigate("/private-classes");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-tactical-dark hover:bg-muted transition-colors font-semibold"
            >
              Private Classes
            </button>
            <button
              onClick={() => {
                navigate("/application-assistance");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-tactical-dark hover:bg-muted transition-colors font-semibold"
            >
              Application Assistance
            </button>
            <button
              onClick={() => {
                navigate("/contact");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-3 font-bold mt-2 mx-4 rounded transition-colors text-white"
              style={{ width: 'calc(100% - 2rem)', backgroundColor: '#0041FF' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0037DD'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0041FF'}
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
