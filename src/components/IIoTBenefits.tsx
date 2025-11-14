import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, TrendingUp, Activity, Shield, Zap, BarChart3 } from "lucide-react";

const IIoTBenefits = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Cost Reduction",
      percentage: "35%",
      description: "Average reduction in operational costs through predictive maintenance and optimized resource allocation",
      color: "text-green-600"
    },
    {
      icon: TrendingUp,
      title: "Productivity Increase",
      percentage: "45%",
      description: "Boost in overall equipment effectiveness (OEE) with real-time monitoring and data-driven decisions",
      color: "text-primary"
    },
    {
      icon: Activity,
      title: "Downtime Prevention",
      percentage: "60%",
      description: "Reduction in unplanned downtime through predictive analytics and early fault detection",
      color: "text-orange-600"
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      percentage: "30%",
      description: "Lower energy consumption with smart monitoring and automated power management systems",
      color: "text-yellow-600"
    },
    {
      icon: BarChart3,
      title: "Quality Improvement",
      percentage: "40%",
      description: "Fewer defects and higher product quality through continuous process monitoring",
      color: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      percentage: "50%",
      description: "Reduction in safety incidents with real-time alerts and automated compliance monitoring",
      color: "text-purple-600"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            IIoT Solutions That Deliver Real Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our Production Monitoring System (PMS) and Energy Management System (EMS) transform your manufacturing operations with measurable benefits
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-elevated transition-all duration-300 border-border bg-card hover:scale-105"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className={`h-6 w-6 ${benefit.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className={`text-3xl font-bold ${benefit.color} mb-1`}>
                        {benefit.percentage}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {benefit.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary/5 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Ready to Transform Your Operations?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join industry leaders who've already revolutionized their manufacturing processes with our IIoT solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium transition-colors shadow-elevated">
              Schedule a Demo
            </button>
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-medium transition-colors">
              Download ROI Calculator
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IIoTBenefits;
