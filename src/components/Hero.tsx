import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Firearms Training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tactical-dark/80 via-tactical-dark/70 to-tactical-dark/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white leading-tight">
          NYC Concealed Carry Classes
          <span className="block text-accent mt-2">with LIVE FIRE TRAINING</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white max-w-3xl mx-auto leading-relaxed">
          New York State DCJS requires <strong>16 hours of classroom instruction</strong> plus{" "}
          <strong>two hours of live-fire training</strong> to qualify for a concealed-carry license.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("packages")}
            className="bg-accent text-accent-foreground px-10 py-4 rounded-md text-lg font-bold hover:bg-tactical-red-hover transition-all transform hover:scale-105 shadow-lg"
          >
            View Packages
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-secondary text-secondary-foreground px-10 py-4 rounded-md text-lg font-bold hover:bg-secondary/80 transition-all border-2 border-border"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-foreground/60"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
