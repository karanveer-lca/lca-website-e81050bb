import { Button } from "@/components/ui/button";
import heroMachine from "@/assets/hero-machine-3d.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Creating{" "}
              <span className="text-primary italic">COMPETITIVE</span>
              <br />
              Advantages
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              We design and deliver cutting-edge robots enhanced with built-in IIoT connectivity. 
              Get real-time data, important insights, and seamless integration for smarter, more productive automation.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-lg shadow-elevated"
            >
              Contact
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in lg:block hidden">
            <img
              src={heroMachine}
              alt="Industrial Machine with IoT"
              className="w-full h-auto max-w-2xl mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
