import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBackground from "@/assets/services-background.jpg";

const PrivateClasses = () => {
  const navigate = useNavigate();

  const privateOptions = [
    {
      icon: Users,
      title: "One-on-One Training",
      description:
        "Personalized instruction tailored to your specific needs and skill level. Perfect for beginners or those looking to refine specific techniques.",
      features: [
        "Customized curriculum",
        "Flexible scheduling",
        "Individual attention",
        "Progress at your own pace",
      ],
    },
    {
      icon: Target,
      title: "Small Group Sessions",
      description:
        "Train with friends, family, or colleagues in a private group setting. Great for team building and shared learning experiences.",
      features: [
        "Groups of 2-9 participants",
        "Shared learning environment",
        "Discounted group rates",
        "Custom scheduling options",
      ],
    },
    {
      icon: Award,
      title: "Corporate Training",
      description:
        "Comprehensive firearms training programs for businesses and organizations. Ideal for security teams and corporate groups.",
      features: [
        "Groups of 10+ participants",
        "Sponsor receives FREE training",
        "On-site options available",
        "Customized corporate programs",
      ],
    },
    {
      icon: Calendar,
      title: "Advanced Training",
      description:
        "Specialized courses for experienced shooters looking to enhance their skills with advanced techniques and scenarios.",
      features: [
        "Tactical shooting drills",
        "Scenario-based training",
        "Advanced weapon handling",
        "Competition preparation",
      ],
    },
  ];

  const scrollToContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <Helmet>
        <title>Private Classes | 103 Tactical</title>
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
              Private Training Classes
            </h1>
            <p className="text-xl md:text-2xl text-accent font-bold mb-8">
              Personalized Instruction for Individuals and Groups
            </p>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Experience customized firearms training designed around your schedule, goals,
              and skill level with our expert instructors.
            </p>
          </div>
        </section>

        {/* Private Training Options */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {privateOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <Card
                    key={index}
                    className="bg-card border-border/20 hover:border-accent/50 transition-all hover:shadow-xl hover:shadow-accent/10"
                  >
                    <CardHeader>
                      <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                      <CardTitle className="text-2xl font-bold">{option.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed pt-2">
                        {option.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {option.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-card-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-tactical-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Why Choose Private Training?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-secondary/30 border border-border/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-white">Flexible Scheduling</h3>
                <p className="text-white leading-relaxed">
                  Train on your schedule, not ours. We work around your availability to
                  provide convenient training times that fit your busy lifestyle.
                </p>
              </div>

              <div className="bg-secondary/30 border border-border/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-white">Personalized Attention</h3>
                <p className="text-white leading-relaxed">
                  Get focused, one-on-one instruction from experienced professionals. Ask
                  questions freely and receive immediate feedback on your technique.
                </p>
              </div>

              <div className="bg-secondary/30 border border-border/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-white">Custom Curriculum</h3>
                <p className="text-white leading-relaxed">
                  Training tailored to your specific goals and skill level. Whether you're a
                  complete beginner or advanced shooter, we design the program for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-tactical-darker">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready to Start Your Private Training?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your training needs and schedule your first session
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-accent text-accent-foreground hover:bg-tactical-red-hover font-bold px-12 py-6 text-lg"
            >
              Schedule Your Training
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PrivateClasses;
