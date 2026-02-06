import Hero from "./components/Hero";
import ReasonsSection from "./components/ReasonsSection";
import ServicesSection from "./components/ServicesSection";
import ServicesSectionThree from "./components/ServicesSectionThree";
import ServicesSectionTwo from "./components/ServicesSectionTwo";
import AutomationSection from "./components/AutomationSection";
import GuaranteesSection from "./components/GuaranteesSection";
import StandOutSection from "./components/StandOutSection";
import ServicesExtendedSection from "./components/ServicesExtendedSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className={'bg-overlay'}>
        <ReasonsSection />
        <ServicesSection />
        <ServicesSectionTwo />
        <ServicesSectionThree />
        
        <GuaranteesSection />
        <AutomationSection />
        <StandOutSection />
        <ServicesExtendedSection />

      </div>
    </div>
  );
}
