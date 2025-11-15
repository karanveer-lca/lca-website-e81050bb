import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 pt-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have a project in mind? Let's discuss how we can help transform your manufacturing operations.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:info@lcaforyou.com" className="text-muted-foreground hover:text-primary transition-colors">
                        info@lcaforyou.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a href="tel:+919988111105" className="text-muted-foreground hover:text-primary transition-colors">
                        +91 9988 111 105
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                      <p className="text-muted-foreground">
                        St.No.3, 1279, opposite Dhandari Flyover,<br />
                        Dhandari Kalan, Ludhiana,<br />
                        Punjab 141016, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-8 bg-muted rounded-2xl h-64 flex items-center justify-center border border-border">
                  <MapPin className="w-12 h-12 text-muted-foreground" />
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-soft">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@company.com" 
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX" 
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <Input 
                      id="company" 
                      placeholder="Your company" 
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project requirements..."
                      rows={6}
                      required
                      className="w-full resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-8">Business Hours</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Monday - Saturday</h3>
                  <p className="text-muted-foreground">9:00 AM - 6:00 PM IST</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Sunday</h3>
                  <p className="text-muted-foreground">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
