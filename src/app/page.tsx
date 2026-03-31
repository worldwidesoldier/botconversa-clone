import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { LogoMarquee } from "@/components/LogoMarquee";
import { DarkFeaturesSection } from "@/components/DarkFeaturesSection";
import { SpecialToolsSection } from "@/components/SpecialToolsSection";
import { CRMKanbanSection } from "@/components/CRMKanbanSection";
import { IntegratorSection } from "@/components/IntegratorSection";
import { SolutionComparison } from "@/components/SolutionComparison";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <LogoMarquee />
      <DarkFeaturesSection />
      <SpecialToolsSection />
      <CRMKanbanSection />
      <IntegratorSection />
      <SolutionComparison />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
