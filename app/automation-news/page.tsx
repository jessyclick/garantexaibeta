import Hero from "../components/automationNews/Hero";
import LostClientsSection from "../components/automationNews/LostClientsSection";
import WhySiteSection from "../components/automationNews/WhySiteSection";
import How from "../components/automationNews/how";
import PlatformsSection from "../components/automationNews/platforms";
import Tariffs from "../components/automationNews/tariffs";
import JustPhoto from "../components/automationNews/justPhoto";
import ImplementationSection from "../components/automationNews/implementation";
import FAQ from "../components/automationNews/FAQ";
import StandOutSection from "../components/automationNews/StandOutSection";
import ServicesExtendedSection from "../components/ServicesExtendedSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-overlay">
        <LostClientsSection />
        <WhySiteSection />
        <How />
        <PlatformsSection />
        <Tariffs />
        <JustPhoto />
        <ImplementationSection />
        <FAQ />
        <StandOutSection />
        <ServicesExtendedSection />
        <Footer />
      </div>
      
    </div>
  );
}