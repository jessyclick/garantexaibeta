import Hero from "../../components/clone-voice/Hero";
import VoiceComparisonSection from "../../components/clone-voice/voiceComparison";
import ProblemSection from "../../components/clone-voice/Problem";
import WhySiteSection from "../../components/clone-voice/WhySiteSection";
import How from "../../components/clone-voice/how";
import PlatformsSection from "../../components/clone-voice/platforms";
import TariffsSection from "../../components/clone-voice/tariffs";
import JustPhoto from "../../components/clone-voice/justPhoto";
import Tariffs from "../../components/clone-voice/pricing";
import FAQ from "../../components/clone-voice/FAQ";
import StandOutSection from "../../components/clone-voice/StandOutSection";
import ServicesExtendedSection from "../../components/ServicesExtendedSection";
import Footer from "../../components/Footer";



export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-overlay">
<VoiceComparisonSection />
        <ProblemSection />
        <WhySiteSection />
        <How />
        <PlatformsSection />
        <TariffsSection />
        <JustPhoto />
        <Tariffs />
        <FAQ />
        <StandOutSection />
        <ServicesExtendedSection />
        <Footer />

      </div>
      
    </div>
  );
}