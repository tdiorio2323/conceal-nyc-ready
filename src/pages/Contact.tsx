import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import heroBackground from "@/assets/services-background.jpg";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | 103 Tactical</title>
      </Helmet>
      <div className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
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
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-accent font-bold mb-8">
              We're Here to Help
            </p>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Have questions about our training programs, licensing assistance, or scheduling?
              Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>
        </section>

        {/* Instagram Follow Strip */}
        <section className="bg-white py-8">
          <div className="container mx-auto px-4 text-center">
            <a
              href="https://www.instagram.com/103.tactical"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-xl md:text-4xl font-semibold hover:text-accent transition-colors inline-block"
            >
              Follow us on Instagram @103.tactical
            </a>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
