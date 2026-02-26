import Hero from "../../components/translator/Hero";
import VoiceComparisonSection from "../../components/translator/voiceComparison";
import PlatformsSection from "../../components/translator/platforms";
import ProblemSection from "../../components/translator/Problem";
import WhoSection from "../../components/translator/who";
import How from "../../components/translator/how";
import TariffsSection from "../../components/translator/tariffs";
import TariffsSectionS from "../../components/translator/tariffsSection";
import FAQ from "../../components/translator/FAQ";
import StandOutSection from "../../components/translator/StandOutSection";
import ServicesExtendedSection from "../../components/ServicesExtendedSection";
import Footer from "../../components/Footer";



export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-overlay">
<VoiceComparisonSection />
        <PlatformsSection />
        <ProblemSection />
        <WhoSection />
        <How />
        <TariffsSection />
        <TariffsSectionS />
        <FAQ />
        <StandOutSection />
        <ServicesExtendedSection />
        <Footer />
      </div>
      
    </div>
  );
}