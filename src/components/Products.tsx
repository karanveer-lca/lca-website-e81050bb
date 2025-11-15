import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Bot, Network } from "lucide-react";
import spmImage from "@/assets/spm-machine.jpg";
import iiotImage from "@/assets/iiot-dashboard.jpg";

const Products = () => {
  const products = [
    {
      icon: Network,
      title: "IIoT Solutions - Our Flagship Product",
      description: "Transform operations with our Production Monitoring System (PMS) and Energy Management System (EMS). Real-time insights, predictive analytics, and measurable ROI.",
      image: iiotImage,
      features: ["Real-time Monitoring & OEE", "Energy Analytics & Optimization", "Predictive Maintenance with AI"]
    },
    {
      icon: Bot,
      title: "6-Axis Robotic Solutions",
      description: "Advanced robotic automation systems tailored to your manufacturing needs, offering flexibility and efficiency.",
      image: heroImage,
      features: ["Custom Programming", "Fast Integration", "24/7 Support"]
    },
    {
      icon: Cpu,
      title: "Special Purpose Machines",
      description: "Custom-engineered SPMs designed to meet your unique production requirements with precision and reliability.",
      image: spmImage,
      features: ["Custom Design", "High Precision", "Scalable Solutions"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Products & Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive automation solutions designed to optimize your manufacturing processes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elevated transition-all duration-300 border-border overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
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
  );
};

// Import hero image for robot product
import heroImage from "@/assets/hero-robot.jpg";

export default Products;
