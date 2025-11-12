import { Award, Users, Target, FileCheck } from "lucide-react";

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
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional training and support for all your firearms education needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border/20 p-8 rounded-lg hover:border-accent/50 transition-all hover:shadow-lg group"
              >
                <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
