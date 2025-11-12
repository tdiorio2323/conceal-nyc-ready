import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, ClipboardList, MapPin, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBackground from "@/assets/services-background.jpg";

const ApplicationAssistance = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: FileCheck,
      title: "NYC CCW License Application",
      description:
        "Complete guidance through the NYC concealed carry permit application process. We help ensure all paperwork is properly completed and submitted.",
    },
    {
      icon: MapPin,
      title: "Multi-State Licenses",
      description:
        "Assistance with obtaining non-resident carry licenses for New Jersey, Florida, and Utah to expand your carry privileges across state lines.",
    },
    {
      icon: ClipboardList,
      title: "License Renewal & Upgrades",
      description:
        "Support for renewing existing licenses or upgrading from premises permits to full carry licenses with all required documentation.",
    },
    {
      icon: CheckCircle,
      title: "Application Review",
      description:
        "Expert review of your application materials before submission to catch any errors or omissions that could delay your approval.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description:
        "Schedule a consultation to discuss your specific situation, eligibility, and goals for obtaining a firearms license.",
    },
    {
      step: "2",
      title: "Document Preparation",
      description:
        "We help you gather and organize all required documents, including proof of residence, character references, and training certificates.",
    },
    {
      step: "3",
      title: "Application Completion",
      description:
        "Our experts guide you through filling out all forms correctly, ensuring accuracy and completeness to avoid delays.",
    },
    {
      step: "4",
      title: "Submission Support",
      description:
        "We provide guidance on where and how to submit your application, including scheduling appointments and follow-up procedures.",
    },
    {
      step: "5",
      title: "Ongoing Support",
      description:
        "Continue to receive support throughout the approval process, including assistance with any additional requests from authorities.",
    },
  ];

  const scrollToContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <Helmet>
        <title>Application Assistance | 103 Tactical</title>
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
              License Application Assistance
            </h1>
            <p className="text-xl md:text-2xl text-accent font-bold mb-8">
              Expert Guidance Through the NYC Firearms License Process
            </p>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Navigate the complex NYC firearms licensing process with confidence.
              Our experienced team provides comprehensive support from application to approval.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Our Application Services
              </h2>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Comprehensive support for all your firearms licensing needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="bg-card border-border/20 hover:border-accent/50 transition-all hover:shadow-xl hover:shadow-accent/10"
                  >
                    <CardHeader>
                      <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                      <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-card-foreground leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-tactical-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Our Application Process
              </h2>
              <p className="text-xl text-white max-w-2xl mx-auto">
                A clear, step-by-step approach to getting your license
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {process.map((item, index) => (
                <div
                  key={index}
                  className="bg-secondary/30 border border-border/10 p-6 rounded-lg flex gap-6 hover:bg-secondary/50 transition-all"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-white leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-20 bg-tactical-darker">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
                What You'll Need
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border/20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-black">Basic Requirements</h3>
                  <ul className="space-y-2 text-black">
                    <li>• Must be 21 years of age or older</li>
                    <li>• NYC resident or business owner</li>
                    <li>• No disqualifying criminal record</li>
                    <li>• Good moral character</li>
                  </ul>
                </div>
                <div className="bg-card border border-border/20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-black">Required Documents</h3>
                  <ul className="space-y-2 text-black">
                    <li>• Proof of residence</li>
                    <li>• Character references</li>
                    <li>• Training certificate (16hrs + 2hrs live-fire)</li>
                    <li>• Photographs and fingerprints</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a consultation and begin your firearms license application
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-accent text-accent-foreground hover:bg-tactical-red-hover font-bold px-12 py-6 text-lg"
            >
              Schedule Consultation
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ApplicationAssistance;
