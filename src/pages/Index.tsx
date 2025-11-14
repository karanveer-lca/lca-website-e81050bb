import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <WhyChooseUs />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
