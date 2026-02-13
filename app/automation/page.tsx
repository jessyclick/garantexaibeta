import Hero from "../components/automationHero";
import WhySiteSection from "../components/WhySiteSection";
import PunctureSection from "../components/PunctureSection";
import AutomationServicesExtendedSection from "../components/AutomationServicesExtendedSection";
import SeoAutomation from "../components/automationSEO/tariffs";
import Results from "../components/automationSEO/results";
import CaseSection from "../components/automationSEO/cases";
import FAQ from "../components/automationSEO/FAQ";
import ServicesExtendedSection from "../components/ServicesExtendedSection";
import Footer from "../components/Footer";


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
            <FAQ />
            <ServicesExtendedSection />
            <Footer />
      </div>
      
    </div>
  );
}