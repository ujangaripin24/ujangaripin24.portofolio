import StarBackground from "./components/StarBackground";
import MainLayout from "./layout/MainLayout";
import AboutPage from "./module/AboutMePage/pages/AboutPage";
import { EducationalPage } from "./module/EducationalPage/pages/EducationalPage";
import MySkillPage from "./module/MySkillPage/pages/MySkillPage";
import OpeningPage from "./module/OpeningPage/pages/OpeningPage";
import PortofolioPage from "./module/PortofolioPage/pages/PortofolioPage";
import WorkExperiencePage from "./module/WorkExperiencePage/pages/WorkExperiencePage";

export default function App() {
  return (
    <MainLayout>
      <StarBackground />
      <OpeningPage />
      <AboutPage />
      <MySkillPage />
      <PortofolioPage />
      <WorkExperiencePage />
      <EducationalPage />
    </MainLayout>
  );
}
