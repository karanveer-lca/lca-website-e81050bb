import heroRobot from "@/assets/hero-robot-main.png";
import ContactDialog from "./ContactDialog";
import VideoDialog from "./VideoDialog";
import { TrendingUp, Wifi, AlertTriangle } from "lucide-react";

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
              Custom automation solutions with SPMs, 6-Axis Robots, and intelligent
              IIoT systems (PMS & EMS) that deliver real-time insights for manufacturing excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <ContactDialog 
                trigger={
                  <button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-lg shadow-elevated">
                    Get in Touch
                  </button>
                }
              />
              <VideoDialog videoUrl="https://www.youtube.com/shorts/oKt9c_7X0n8" />
            </div>
          </div>

          {/* Right Image with Floating Alerts */}
          <div className="relative animate-fade-in lg:block hidden">
            <img
              src={heroRobot}
              alt="6-Axis Industrial Robot with IoT monitoring alerts"
              className="w-full h-auto max-w-2xl mx-auto drop-shadow-2xl relative z-10"
            />
            
            {/* Floating Alert Cards */}
            {/* Machine Downtime Alert - Top Left */}
            <div className="absolute top-8 left-0 bg-background/95 backdrop-blur-sm rounded-xl p-4 w-52 animate-float border border-border z-10" style={{ boxShadow: '0 10px 40px -5px rgba(0, 0, 0, 0.25)' }}>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground mb-1">Alert</p>
                  <p className="text-sm font-semibold text-foreground mb-1">Machine Downtime</p>
                  <p className="text-2xl font-bold text-foreground">53.43</p>
                  <p className="text-xs text-muted-foreground">Minutes</p>
                </div>
              </div>
            </div>

            {/* Online Status - Top Right */}
            <div className="absolute top-12 right-8 bg-background/95 backdrop-blur-sm rounded-xl p-3 animate-float-delayed border border-border z-10" style={{ boxShadow: '0 10px 40px -5px rgba(0, 0, 0, 0.25)' }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Wifi className="w-3 h-3 text-green-500" />
                </div>
                <span className="text-xs font-medium text-foreground">Online</span>
              </div>
              <p className="text-sm font-semibold text-foreground mb-1">Machine Performance</p>
              <div className="w-32 h-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded flex items-end justify-around px-2 pb-1">
                <div className="w-1 bg-primary/40 h-6"></div>
                <div className="w-1 bg-primary/60 h-8"></div>
                <div className="w-1 bg-primary/50 h-5"></div>
                <div className="w-1 bg-primary/70 h-9"></div>
                <div className="w-1 bg-primary h-10"></div>
                <div className="w-1 bg-primary/80 h-7"></div>
              </div>
            </div>

            {/* Live OEE - Bottom Center */}
            <div className="absolute bottom-16 left-1/4 bg-background/95 backdrop-blur-sm rounded-xl p-4 w-44 animate-float-slow border border-border z-20" style={{ boxShadow: '0 10px 40px -5px rgba(0, 0, 0, 0.25)' }}>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-destructive animate-pulse"></div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-foreground mb-1">Live OEE</p>
                  <p className="text-3xl font-bold text-foreground">21.2%</p>
                  <div className="mt-2 relative w-16 h-16">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="16" fill="none" className="stroke-muted" strokeWidth="2"></circle>
                      <circle cx="18" cy="18" r="16" fill="none" className="stroke-primary" strokeWidth="2" strokeDasharray="21.2, 100"></circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
