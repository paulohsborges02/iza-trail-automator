
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FunctionalitiesSection from "@/components/FunctionalitiesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FunctionalitiesSection />
        <AdvantagesSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
