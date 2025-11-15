import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 pt-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
                About <span className="text-primary">LCA Industrial Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Pioneering industrial automation and IIoT solutions that transform manufacturing operations across India.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-soft">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower manufacturers with cutting-edge automation solutions that drive efficiency, 
                  reduce downtime, and create sustainable competitive advantages in the global market.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 shadow-soft">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be India's leading provider of intelligent industrial automation, enabling Industry 4.0 
                  transformation through innovative IIoT solutions and smart manufacturing technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  Founded in Ludhiana, Punjab, LCA Industrial Solutions emerged from a vision to revolutionize 
                  Indian manufacturing through advanced automation and intelligent systems. We recognized the 
                  growing need for custom industrial solutions that could adapt to the unique challenges faced 
                  by modern manufacturers.
                </p>
                <p className="mb-6">
                  Over the years, we've developed expertise in Special Purpose Machines (SPMs), 6-Axis Robotics, 
                  and Industrial IoT systems. Our flagship IIoT solutions—including Production Monitoring Systems 
                  (PMS) and Energy Management Systems (EMS)—have helped numerous clients achieve remarkable 
                  improvements in productivity and cost savings.
                </p>
                <p>
                  Today, we serve a diverse range of industries, from automotive to consumer goods, providing 
                  end-to-end automation solutions that deliver measurable results and lasting competitive advantages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  Committed to delivering world-class solutions that exceed expectations and industry standards.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Partnership</h3>
                <p className="text-muted-foreground">
                  Building long-term relationships based on trust, transparency, and mutual success.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Continuously evolving our solutions with the latest technologies and industry insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Manufacturing?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how our automation solutions can create competitive advantages for your business.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-background text-foreground hover:bg-background/90 rounded-full px-10 py-4 text-lg font-semibold shadow-elevated transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
