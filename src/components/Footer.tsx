import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tactical-dark border-t border-border/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Logo and Description */}
          <div>
            <img src={logo} alt="103 Tactical" className="h-16 w-auto mb-4" />
            <p className="text-muted-foreground leading-relaxed">
              Professional firearms training with NY State DCJS certified instructors. Expert guidance for concealed carry licenses and comprehensive firearms education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("packages")}
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                CCW Packages
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection("why-choose-us")}
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>New York City, NY</p>
              <p>
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  (123) 456-7890
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
        <div className="border-t border-border/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} 103 Tactical. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with excellence for firearms training professionals
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
