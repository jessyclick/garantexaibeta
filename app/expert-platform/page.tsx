import Hero from "../components/expertPlatform/Hero";
import ProblemSection from "../components/expertPlatform/ProblemSection";
import PredlagaemSection from "../components/expertPlatform/PredlagaemSection";
import How from "../components/expertPlatform/how";
import PlatformsSection from "../components/expertPlatform/platforms";
import Tariffs from "../components/expertPlatform/tariffs";

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
      </div>
      
    </div>
  );
}