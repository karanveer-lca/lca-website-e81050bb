import { Mail, Phone, MapPin } from "lucide-react";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Production with Smart IIoT?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get in touch with our team to discuss how we can optimize your manufacturing processes with custom automation solutions and intelligent IIoT systems.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                  <a href="mailto:info@lcaforyou.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@lcaforyou.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                  <a href="tel:+919988111105" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 9988 111 105
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">
                    St.No.3, 1279, opposite Dhandari Flyover,<br />
                    Dhandari Kalan, Ludhiana,<br />
                    Punjab 141016
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose LCA */}
          <div className="bg-gradient-hero border border-border rounded-lg shadow-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose LCA?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-foreground text-sm font-bold">✓</span>
                </div>
                <span className="text-muted-foreground">Custom automation solutions tailored to your needs</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-foreground text-sm font-bold">✓</span>
                </div>
                <span className="text-muted-foreground">Expert IIoT integration and monitoring</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-foreground text-sm font-bold">✓</span>
                </div>
                <span className="text-muted-foreground">Proven track record with leading manufacturers</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-foreground text-sm font-bold">✓</span>
                </div>
                <span className="text-muted-foreground">Ongoing support and maintenance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
