import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Products from "@/components/Products";
import WhatWhyHow from "@/components/WhatWhyHow";
import IIoTSystems from "@/components/IIoTSystems";
import IIoTBenefits from "@/components/IIoTBenefits";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ClientLogos />
      <Products />
      <WhatWhyHow />
      <IIoTSystems />
      <IIoTBenefits />
      <WhyChooseUs />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
