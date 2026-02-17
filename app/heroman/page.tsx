
import Hero from "../components/heroman/Hero";
import Problem from "../components/heroman/problem";
import TariffsSection from "../components/heroman/tariffs";
import WhySiteDesignSection from "../components/heroman/how";
import RealCases from "../components/heroman/realCases";
import Pricing from "../components/heroman/pricing";
import TariffsSection2 from "../components/heroman/tariffs-2";
import WhySiteSection from "../components/heroman/WhySiteSection";
import FAQ from "../components/heroman/FAQ";
import StandOutSection from "../components/heroman/StandOutSection";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
      <Hero />

      <div className="bg-overlay">
            <Problem />
        <TariffsSection />
        <WhySiteDesignSection />
        <RealCases />
        <TariffsSection2 />
        <Pricing />
        <WhySiteSection />
        <FAQ />
        <StandOutSection />
        <Footer />
      </div>
    </div>
  );
}