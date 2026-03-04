import ConsultationSection from "../components/contacts/consultation";
import WhyImportantSection from "../components/contacts/whyImportant";
import AboutsSection from "../components/contacts/AboutSection";
import ProjectsSection from "../components/contacts/projectsSection";
import Adress from "../components/contacts/Adress";
import Rekvizit from "../components/contacts/rekvizit";
import ContactFooter from "../components/contacts/contactfooter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <ConsultationSection />
        <WhyImportantSection />
        <AboutsSection />
        <ProjectsSection />
        <Adress />
        <Rekvizit />
        <ContactFooter />
        <Footer />
      <div className="bg-overlay">

      </div>
      
    </div>
  );
}