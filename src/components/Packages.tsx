import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Packages = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const packages = [
    {
      name: "CCW Beginner Package",
      price: "$600",
      features: [
        "16 hours in-person classroom training",
        "Two hours live-fire training",
        "Ammunition included",
        "Guest speakers from law enforcement",
        "Written examination",
        "Application assistance for NYC CCW License",
      ],
    },
    {
      name: "CCW Renewal Package",
      price: "$550",
      features: [
        "16 hours in-person classroom training",
        "Two hours live-fire training",
        "Guest speakers from law enforcement",
        "Written examination",
        "Renewal/Upgrade license assistance",
      ],
    },
  ];

  return (
    <section id="packages" className="py-20 bg-tactical-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Training Packages
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional firearms training designed to meet New York State requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={index} className="bg-card border-border/20 hover:border-accent/50 transition-all hover:shadow-xl hover:shadow-accent/10">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold mb-2">{pkg.name}</CardTitle>
                <CardDescription className="text-5xl font-extrabold text-accent">
                  {pkg.price}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-card-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-accent text-accent-foreground hover:bg-tactical-red-hover font-bold py-6 text-lg"
                >
                  Sign Up Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
