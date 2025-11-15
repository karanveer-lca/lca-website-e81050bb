import { useEffect, useState } from "react";

const ClientLogos = () => {
  const [logos, setLogos] = useState<string[]>([]);

  useEffect(() => {
    // Dynamically import all images from the client-logos folder
    const importLogos = async () => {
      try {
        const logoModules = import.meta.glob('/src/assets/client-logos/*.(png|jpg|jpeg|svg|webp)');
        const logoPromises = Object.keys(logoModules).map(async (path) => {
          const module = await logoModules[path]() as { default: string };
          return module.default;
        });
        const loadedLogos = await Promise.all(logoPromises);
        setLogos(loadedLogos);
      } catch (error) {
        console.log("No logos found in client-logos folder");
      }
    };

    importLogos();
  }, []);

  if (logos.length === 0) return null;

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center text-foreground mb-12">
          Trusted by Industry Leaders
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-16 items-center">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
            {/* Third set for extra smoothness */}
            {logos.map((logo, index) => (
              <div
                key={`logo-3-${index}`}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
