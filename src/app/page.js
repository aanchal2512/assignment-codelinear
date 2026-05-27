import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import CoreBankingSection from "@/components/CoreBankingSection";
import CBFeaturesSection from "@/components/CBFeaturesSection";
import CBCTASection from "@/components/CBCTASection";
import MarqueeSection from "@/components/MarqueeSection";
import DigitalBankingSection from "@/components/DigitalBankingSection";
import InsightsSection from "@/components/InsightsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import PaperlessCTA from "@/components/PaperlessCTA";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SolutionsSection />
        <CoreBankingSection />
        <CBFeaturesSection />
        <CBCTASection />
        <MarqueeSection />
        <DigitalBankingSection />
        <PaperlessCTA />
        <InsightsSection />
        <CaseStudiesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
