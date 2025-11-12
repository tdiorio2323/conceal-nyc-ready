import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>103 Tactical</title>
      </Helmet>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <Packages />
        <Services />
        <WhyChooseUs />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default Index;
