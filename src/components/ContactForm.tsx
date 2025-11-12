import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";
import contactBackground from "@/assets/shooting-range.avif";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    toast.success("Message sent! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={contactBackground}
          alt="Shooting Range"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tactical-darker/60 via-tactical-dark/50 to-tactical-darker/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Ready to start your training? Contact us today to sign up or learn more
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Phone</p>
                    <a href="tel:+17188854353" className="text-white hover:text-accent transition-colors">
                      (718) 885-4353
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Email</p>
                    <a
                      href="mailto:info@103tactical.com"
                      className="text-white hover:text-accent transition-colors"
                    >
                      info@103tactical.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Location</p>
                    <a
                      href="https://maps.app.goo.gl/E6rUnxebcQump2FW6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-accent transition-colors"
                    >
                      2556 Arthur Kill Rd<br />
                      Staten Island, NY 10309
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 border border-border/10 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3 text-white">Office Hours</h4>
              <div className="space-y-2 text-white">
                <p>Tuesday: 10:00 AM - 5:00 PM</p>
                <p>Wednesday: 10:00 AM - 7:00 PM</p>
                <p>Thursday - Saturday: 10:00 AM - 5:00 PM</p>
                <p>Sunday - Monday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border/20 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-card-foreground font-semibold">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 bg-background border-border"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-card-foreground font-semibold">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 bg-background border-border"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-card-foreground font-semibold">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 bg-background border-border"
                  placeholder="(123) 456-7890"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-card-foreground font-semibold">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 bg-background border-border min-h-[150px]"
                  placeholder="Tell us about your training needs..."
                />
              </div>
              <Button
                type="submit"
                className="w-full font-bold py-6 text-lg text-white"
                style={{ backgroundColor: '#0041FF' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0037DD'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0041FF'}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
