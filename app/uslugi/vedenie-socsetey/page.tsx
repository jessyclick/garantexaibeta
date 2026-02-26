import Hero from "../../components/socmedia/automationHero";
import Lost from "../../components/socmedia/LostClientsSection";
import WhySiteSection from "../../components/socmedia/WhySiteSection";
import WhySiteDesignSection from "../../components/socmedia/WhySiteDesignSection";
import PremiumSection from "../../components/socmedia/PremiumSection";
import WhereClientsSection from "../../components/socmedia/WhereClientsSection";
import Facts from "../../components/socmedia/facts";
import JustPhoto from "../../components/socmedia/justPhoto";
import Tariffs from "../../components/socmedia/tariffs";
import FAQ from "../../components/socmedia/FAQ";
import PunctureSection from "../../components/socmedia/PunctureSection";
import ServicesExtendedSection from "../../components/ServicesExtendedSection";
import Footer from "../../components/Footer";




export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-overlay">
        <Lost />
        <WhySiteSection />
        <WhySiteDesignSection />
        <PremiumSection/>
        <WhereClientsSection />
        <Facts />
        <JustPhoto />
        <Tariffs />
        <FAQ />
        <PunctureSection />
        <ServicesExtendedSection />
        <Footer />
      </div>
      
    </div>
  );
}