import { useState } from "react";

const WhatWhyHow = () => {
  const [activeTab, setActiveTab] = useState<"what" | "why" | "how">("what");

  const content = {
    what: {
      title: "What is an IIoT solution?",
      description:
        "Industrial IoT (IIoT) solutions monitor, collect, exchange, and analyze real-time sensor data from your equipment. They perform advanced analytics and deliver meaningful shop-floor insights to optimize operations.",
    },
    why: {
      title: "Why implement IIoT?",
      description:
        "IIoT transforms manufacturing by reducing downtime, optimizing energy consumption, improving product quality, and enabling predictive maintenance. It provides real-time visibility into operations, leading to faster decision-making and increased profitability.",
    },
    how: {
      title: "How does it work?",
      description:
        "Our IIoT platform connects to your existing machinery through sensors and edge devices. Data is collected in real-time, processed using AI algorithms, and presented through intuitive dashboards. Automated alerts notify you of anomalies, enabling proactive responses.",
    },
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex gap-0 mb-0">
            <button
              onClick={() => setActiveTab("what")}
              className={`px-8 py-4 text-lg font-semibold transition-all rounded-t-lg ${
                activeTab === "what"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              What
            </button>
            <button
              onClick={() => setActiveTab("why")}
              className={`px-8 py-4 text-lg font-semibold transition-all rounded-t-lg ${
                activeTab === "why"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Why
            </button>
            <button
              onClick={() => setActiveTab("how")}
              className={`px-8 py-4 text-lg font-semibold transition-all rounded-t-lg ${
                activeTab === "how"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              How
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-primary rounded-b-lg rounded-tr-lg p-8 md:p-12 shadow-elevated">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                  {content[activeTab].title}
                </h3>
                <p className="text-primary-foreground/90 text-lg leading-relaxed">
                  {content[activeTab].description}
                </p>
              </div>
              
              {activeTab === "what" && (
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                    What is Industry 4.0?
                  </h3>
                  <p className="text-primary-foreground/90 text-lg leading-relaxed">
                    Industry 4.0 refers to the integration of advanced technologies like IoT, AI, and robotics for enhanced manufacturing automation and industrial process connectivity.
                  </p>
                </div>
              )}
              
              {activeTab === "why" && (
                <div className="flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary-foreground/10 rounded-lg p-4 text-center backdrop-blur-sm">
                      <p className="text-3xl font-bold text-primary-foreground">30%</p>
                      <p className="text-sm text-primary-foreground/80">Cost Reduction</p>
                    </div>
                    <div className="bg-primary-foreground/10 rounded-lg p-4 text-center backdrop-blur-sm">
                      <p className="text-3xl font-bold text-primary-foreground">45%</p>
                      <p className="text-sm text-primary-foreground/80">Efficiency Gain</p>
                    </div>
                    <div className="bg-primary-foreground/10 rounded-lg p-4 text-center backdrop-blur-sm">
                      <p className="text-3xl font-bold text-primary-foreground">60%</p>
                      <p className="text-sm text-primary-foreground/80">Less Downtime</p>
                    </div>
                    <div className="bg-primary-foreground/10 rounded-lg p-4 text-center backdrop-blur-sm">
                      <p className="text-3xl font-bold text-primary-foreground">25%</p>
                      <p className="text-sm text-primary-foreground/80">Energy Savings</p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === "how" && (
                <div className="flex items-center justify-center">
                  <div className="space-y-3">
                    {["Connect Sensors", "Collect Data", "Analyze with AI", "Act on Insights"].map((step, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary-foreground text-primary font-bold flex items-center justify-center flex-shrink-0">
                          {idx + 1}
                        </div>
                        <p className="text-primary-foreground font-medium">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWhyHow;
