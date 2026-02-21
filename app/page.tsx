import Hero from "./components/Hero";
import ReasonsSection from "./components/ReasonsSection";
import ServicesSection from "./components/ServicesSection";
import ServicesSectionThree from "./components/ServicesSectionThree";
import ServicesSectionTwo from "./components/ServicesSectionTwo";
import AutomationSection from "./components/AutomationSection";
import GuaranteesSection from "./components/GuaranteesSection";
import StandOutSection from "./components/StandOutSection";
import ServicesExtendedSection from "./components/ServicesExtendedSection";
import { Reveal } from "./components/reveal";
import Footer from "./components/Footer";
import AvatarFeature from "./components/avatar/test";


export default function Home() {
  return (
    <div>
      <Hero />
      <div className={'bg-overlay'}>
  <Reveal>
    <ReasonsSection />
  </Reveal>
  
  <Reveal>
    <ServicesSection />
  </Reveal>
  

  
  <Reveal>
    <ServicesSectionTwo />
  </Reveal>
  
  <Reveal>
    <ServicesSectionThree />
  </Reveal>
  
  <Reveal>
    <GuaranteesSection />
  </Reveal>
  


  <Reveal>
    <AutomationSection />
  </Reveal>
  
  <Reveal>
    <StandOutSection />
  </Reveal>
  
  <Reveal>
    <ServicesExtendedSection />
  </Reveal>
  <Footer />
</div>
    </div>
  );
}
