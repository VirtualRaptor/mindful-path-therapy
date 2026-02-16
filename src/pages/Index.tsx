import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OfferSection from "@/components/OfferSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <OfferSection />
      <PricingSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
