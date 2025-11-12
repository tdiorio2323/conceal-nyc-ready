import { Shield, User, Globe, UserPlus, BookOpen } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Highly Trained Staff",
      description:
        "Our team comprises male and female military and law-enforcement professionals, NY State DCJS certified firearms instructors, NRA-certified instructors and firearms-license experts.",
    },
    {
      icon: User,
      title: "Private Lessons",
      description:
        "Personalized one-on-one training in safety, proper usage, and live-fire practice. Our instructors adapt to your learning pace and specific needs.",
    },
    {
      icon: Globe,
      title: "Multi-State Conceal Carry License",
      description:
        "Training includes NJ resident & non-resident carry, Florida non-resident licenses, and Utah non-resident licenses for maximum coverage.",
    },
    {
      icon: UserPlus,
      title: "New Shooters Welcome",
      description:
        "We cater to beginners over 21 of good moral character, including US citizens or residents. No prior experience necessary.",
    },
    {
      icon: BookOpen,
      title: "Full Array of Specialty Courses",
      description:
        "NRA instructor classes, basic pistol/rifle classes, personal protection inside/outside the house, NRA CCW classes, and range safety officer training.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Why Choose <span className="text-accent">103 Tactical</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Professional, comprehensive firearms training backed by military and law enforcement expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-secondary/30 border border-border/10 p-6 sm:p-8 rounded-lg hover:bg-secondary/50 transition-all hover:border-accent/30 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-2 sm:p-3 rounded-lg group-hover:bg-accent/30 transition-colors flex-shrink-0">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white">{reason.title}</h3>
                    <p className="text-white leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
