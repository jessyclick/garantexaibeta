import Hero from "../components/automationHero";
import WhySiteSection from "../components/WhySiteSection";
import PunctureSection from "../components/PunctureSection";
import AutomationServicesExtendedSection from "../components/AutomationServicesExtendedSection";
import SeoAutomation from "../components/automationSEO/tariffs";
import Results from "../components/automationSEO/results";
import CaseSection from "../components/automationSEO/cases";



export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-overlay">
        <WhySiteSection />
            <PunctureSection />
            <AutomationServicesExtendedSection/>
            <SeoAutomation />
            <Results />
            <CaseSection />
      </div>
      
    </div>
  );
}