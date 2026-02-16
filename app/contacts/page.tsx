import ConsultationSection from "../components/contacts/consultation";
import WhyImportantSection from "../components/contacts/whyImportant";
import ProjectsSection from "../components/contacts/projectsSection";

export default function Home() {
  return (
    <div>
      <ConsultationSection />
        <WhyImportantSection />
        <ProjectsSection />
      <div className="bg-overlay">

      </div>
      
    </div>
  );
}