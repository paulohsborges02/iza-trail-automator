
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FunctionalitiesSection from "@/components/FunctionalitiesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import TestChatSection from "@/components/TestChatSection";
import Footer from "@/components/Footer";
import { TestWidget } from "@/components/TestWidget";
// import { IframeWidget } from "@/components/IframeWidget";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FunctionalitiesSection />
        <AdvantagesSection />
        <PricingSection />
        <TestChatSection />
        <FAQSection />
      </main>
      <Footer />
      {/* Using the script-based Zaia widget implementation */}
      <TestWidget />
      
      {/* Uncomment the line below and comment out TestWidget to use the iframe implementation instead */}
      {/* <IframeWidget /> */}
    </div>
  );
}
