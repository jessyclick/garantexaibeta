import ConsultationSection from "../components/about/consultation";
import InNumbers from "../components/about/inNumbers";
import Expertise from "../components/about/expertise";
import Clients from "../components/about/clients";
import Education from "../components/about/education";
import Team from "../components/about/team";
import Agency from "../components/about/agency";
import Partner from "../components/about/partner";
import ContactFooter from "../components/about/contactfooter";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <main>
      <ConsultationSection />
      <InNumbers />
      <Expertise />
      <Clients />
      <Education />
      <Team />
      <Agency />
      <Partner />
      <ContactFooter />
    </main>
  );
}