import Hero from "../../components/expertPlatform/Hero";
import ProblemSection from "../../components/expertPlatform/ProblemSection";
import PredlagaemSection from "../../components/expertPlatform/PredlagaemSection";
import How from "../../components/expertPlatform/how";
import PlatformsSection from "../../components/expertPlatform/platforms";
import Tariffs from "../../components/expertPlatform/tariffs";
import JustPhoto from "../../components/expertPlatform/justPhoto";
import ImplementationSection from "../../components/expertPlatform/implementation";
import StandOutSection from "../../components/expertPlatform/StandOutSection";
import ServicesExtendedSection from "../../components/ServicesExtendedSection";
import Footer from "../../components/Footer";
// На странице:





export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-overlay">
        <ProblemSection />
        <PredlagaemSection />
        <How />
        <PlatformsSection />
        <Tariffs />
        <JustPhoto />
        <ImplementationSection />
        <StandOutSection />
        <ServicesExtendedSection />
        <Footer />
      </div>
      
    </div>
  );
}