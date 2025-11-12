import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Target, BookOpen, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NRAClasses = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const courses = [
    {
      icon: Target,
      title: "NRA Basic Pistol Course",
      description:
        "Students will learn the fundamentals of safe handgun ownership and operation. In addition to accurate shooting, students are taught how to properly handle, clean, and store firearms, including a complete guide to disassembling and reassembling their handgun.",
      details:
        "Our knowledgeable instructors ensure that all students leave this with not just skills and knowledge, but a proper attitude for safe firearm handling.",
    },
    {
      icon: Shield,
      title: "NRA Personal Protection in / out of the Home Course",
      description:
        "In the NRA Personal Protection in the Home class, is an introduction to the proper skills and attitude required for safe and efficient use of a handgun for protection of self and family the home.",
      details:
        "Students will leave with confidence in safe tactics to apply in a home defense situation, and our NYPD veteran instructors provide guidance for interacting with the police during and after the event of an intruder.",
    },
    {
      icon: Award,
      title: "NRA Instructor Course",
      description:
        "NRA Instructor courses are discipline specific. During the course candidates will learn NRA policies and procedures; basic public speaking skills; training methodology; use of a training team and training aids; organizing a course, building a budget; and finally preparing to teach.",
      details:
        "In addition, candidates will be provided the appropriate lesson plans and basic course student packets.",
    },
    {
      icon: BookOpen,
      title: "NRA Basic Rifle Course",
      description:
        "Students will learn the fundamentals of safe rifle ownership and operation. In addition to accurate shooting, students are taught how to properly handle, clean, and store firearms, including a complete guide to disassembling and reassembling their rifle.",
      details:
        "Our knowledgeable instructors ensure that all students leave this with not just skills and knowledge, but a proper attitude for safe firearm handling.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-tactical-dark to-tactical-darker">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
            NRA Classes
          </h1>
          <p className="text-xl md:text-2xl text-accent font-bold mb-8">
            with LIVE FIRE TRAINING
          </p>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Comprehensive NRA-certified firearms training courses designed for all skill levels
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <Card
                  key={index}
                  className="bg-card border-border/20 hover:border-accent/50 transition-all hover:shadow-xl hover:shadow-accent/10"
                >
                  <CardHeader>
                    <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-card-foreground leading-relaxed">{course.description}</p>
                    <p className="text-muted-foreground leading-relaxed">{course.details}</p>
                    <Button
                      onClick={scrollToContact}
                      className="w-full bg-accent text-accent-foreground hover:bg-tactical-red-hover font-bold mt-4"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-tactical-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Why Choose <span className="text-accent">103 Tactical</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-secondary/30 border border-border/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-foreground">Highly Trained Staff</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our dedicated team is made up of male & female military and law enforcement
                professionals, NY State DCJS Certified firearm instructors, NRA Certified
                Instructors, and Firearms License Experts
              </p>
            </div>

            <div className="bg-secondary/30 border border-border/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-foreground">Private Lessons</h3>
              <p className="text-muted-foreground leading-relaxed">
                Receive one on one personal training in firearms safety, use, carry as well as
                "Live Fire Training".
              </p>
            </div>

            <div className="bg-secondary/30 border border-border/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-foreground">
                Multi-state Conceal Carry License
              </h3>
              <ul className="text-muted-foreground leading-relaxed space-y-2">
                <li>• New Jersey resident & non-resident carry licenses</li>
                <li>• Florida non-resident licenses</li>
                <li>• Utah non-resident conceal carry licenses</li>
              </ul>
            </div>

            <div className="bg-secondary/30 border border-border/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-foreground">
                We Cater to NEW Shooters / Licensees
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Train to learn / learn to train.
              </p>
              <p className="text-muted-foreground text-sm">
                You must be 21 years of age, be of good moral character and be a US Citizen or
                Resident
              </p>
            </div>

            <div className="bg-secondary/30 border border-border/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-foreground">Private Classes</h3>
              <p className="text-muted-foreground leading-relaxed">
                We provide private group / corporate classes. Anyone who sponsors a group of 10 or
                more receives their training for FREE.
              </p>
            </div>

            <div className="bg-secondary/30 border border-border/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-foreground">
                Full Array of Specialty Courses
              </h3>
              <ul className="text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>• NRA instructor classes</li>
                <li>• NRA basic pistol classes</li>
                <li>• NRA basic rifle classes</li>
                <li>• Personal protection inside / outside of the house</li>
                <li>• NRA CCW classes</li>
                <li>• Range safety officer classes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-tactical-darker">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our NRA classes and schedule your training
          </p>
          <Button
            onClick={scrollToContact}
            className="bg-accent text-accent-foreground hover:bg-tactical-red-hover font-bold px-12 py-6 text-lg"
          >
            Contact Us Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NRAClasses;
