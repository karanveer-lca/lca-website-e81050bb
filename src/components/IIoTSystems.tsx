import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Zap } from "lucide-react";

const IIoTSystems = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our IIoT Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive monitoring systems designed to transform your manufacturing operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* PMS Card - Left Side (Pinkish tone) */}
          <Card className="border-none shadow-elevated overflow-hidden bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/20 dark:to-pink-900/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-7 w-7 text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Production Monitoring System
                  </h3>
                  <p className="text-sm text-pink-700 dark:text-pink-300 font-semibold">PMS</p>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Maximize productivity with real-time production tracking, OEE monitoring, and performance analytics. Get instant insights into your manufacturing efficiency.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-sm">Real-time OEE & Production Tracking</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-sm">Machine Performance Analytics</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-sm">Downtime Analysis & Alerts</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-sm">Production Planning Optimization</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-pink-100 dark:bg-pink-900/30 rounded-lg">
                <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">↑ 45%</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Average Productivity Increase</p>
              </div>
            </CardContent>
          </Card>

          {/* EMS Card - Right Side (Greenish tone) */}
          <Card className="border-none shadow-elevated overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-900/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="h-7 w-7 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Energy Management System
                  </h3>
                  <p className="text-sm text-green-700 dark:text-green-300 font-semibold">EMS</p>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Reduce costs and gain complete visibility into your energy consumption. Bird's-eye view of all energy metrics with actionable insights for savings.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Real-time Energy Monitoring</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Cost Analysis & Optimization</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Peak Demand Management</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Sustainability Reporting</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">↓ 30%</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Average Energy Cost Savings</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IIoTSystems;
