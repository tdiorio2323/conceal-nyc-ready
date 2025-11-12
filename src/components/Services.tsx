import { Award, Users, Target, FileCheck } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import servicesBackground from "@/assets/services-background.jpg";

const Services = () => {
  const services = [
    {
      icon: Award,
      title: "Multiple NRA Classes",
      description: "Comprehensive NRA-certified courses including Basic Pistol, Basic Rifle, Personal Protection, and Range Safety Officer training.",
    },
    {
      icon: Users,
      title: "Private Lessons",
      description: "One-on-one personalized training focused on safety, proper usage, and live-fire practice tailored to your skill level.",
    },
    {
      icon: Target,
      title: "Private Group Classes",
      description: "Customized training sessions for your organization or group, perfect for team building and collective skill development.",
    },
    {
      icon: FileCheck,
      title: "Application Assistance",
      description: "Expert guidance through the NYC firearms license application process, ensuring all requirements are properly met.",
    },
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={servicesBackground}
          alt="American Flag"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tactical-darker/60 via-tactical-dark/50 to-tactical-darker/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Services
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Professional training and support for all your firearms education needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="bg-card/95 backdrop-blur-sm border-border/20 hover:border-accent/50 transition-all hover:shadow-xl hover:shadow-accent/10 group"
              >
                <CardHeader>
                  <div className="bg-accent/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
