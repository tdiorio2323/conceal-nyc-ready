import logo from "@/assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-6 sm:mb-8">
          {/* Logo and Description */}
          <div>
            <img src={logo} alt="103 Tactical" className="h-12 sm:h-14 md:h-16 w-auto mb-4" />
            <p className="text-black leading-relaxed">
              Professional firearms training with NY State DCJS certified instructors. Expert guidance for concealed carry licenses and comprehensive firearms education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-black">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("packages")}
                className="block text-black hover:text-accent transition-colors"
              >
                CCW Packages
              </button>
              <button
                onClick={() => navigate("/nra-classes")}
                className="block text-black hover:text-accent transition-colors"
              >
                NRA Classes
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-black hover:text-accent transition-colors"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection("why-choose-us")}
                className="block text-black hover:text-accent transition-colors"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-black hover:text-accent transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-black">Contact</h3>
            <div className="space-y-2 text-black">
              <p>
                <a
                  href="https://maps.app.goo.gl/E6rUnxebcQump2FW6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  2556 Arthur Kill Rd<br />
                  Staten Island, NY 10309
                </a>
              </p>
              <p>
                <a href="tel:+17188854353" className="hover:text-accent transition-colors">
                  (718) 885-4353
                </a>
              </p>
              <p>
                <a href="mailto:info@103tactical.com" className="hover:text-accent transition-colors">
                  info@103tactical.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-black text-sm">
            © {currentYear} 103 Tactical. All rights reserved.
          </p>
          <p className="text-black text-sm">
            Built with excellence for firearms training professionals
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
