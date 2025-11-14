import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import IIoTBenefits from "@/components/IIoTBenefits";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <IIoTBenefits />
      <WhyChooseUs />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
