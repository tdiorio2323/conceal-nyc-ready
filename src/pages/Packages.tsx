import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Packages from "@/components/Packages";
import Footer from "@/components/Footer";
import heroBackground from "@/assets/services-background.jpg";

const PackagesPage = () => {
  return (
    <>
      <Helmet>
        <title>CCW Packages | 103 Tactical</title>
      </Helmet>
      <div className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroBackground}
              alt="American Flag"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-tactical-darker/60 via-tactical-dark/50 to-tactical-darker/60"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 text-white">
              CCW Training Packages
            </h1>
            <p className="text-xl md:text-2xl text-accent font-bold mb-8">
              Professional Training for NYC Concealed Carry License
            </p>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Comprehensive training packages designed to meet New York State requirements
              for concealed carry permits, including classroom instruction and live-fire training.
            </p>
          </div>
        </section>

        {/* Packages Section */}
        <Packages />

        {/* Additional Info Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground text-center">
                What's Included
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border/20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">Classroom Training</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    16 hours of comprehensive in-person instruction covering firearms safety,
                    legal responsibilities, proper handling techniques, and NYC-specific regulations.
                  </p>
                </div>
                <div className="bg-card border border-border/20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">Live-Fire Training</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Two hours of hands-on range time with professional instructors. Ammunition
                    included for beginner package. Learn proper shooting techniques and safety protocols.
                  </p>
                </div>
                <div className="bg-card border border-border/20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">Expert Instructors</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our team includes military and law enforcement professionals, NY State DCJS
                    certified instructors, and firearms license experts.
                  </p>
                </div>
                <div className="bg-card border border-border/20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">Certification</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Written examination and official certification upon completion. We provide
                    all necessary documentation for your NYC CCW license application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PackagesPage;
