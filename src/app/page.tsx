import Navigation from "./sections/Navigation";
import ProfileSection from "./sections/ProfileSection";
import StatisticsSection from "./sections/StatisticsSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <ProfileSection />
      <StatisticsSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
