import StarBackground from "./components/StarBackground";
import MainLayout from "./layout/MainLayout";
import AboutPage from "./module/AboutMePage/pages/AboutPage";
import { EducationalPage } from "./module/EducationalPage/pages/EducationalPage";
import FooterPage from "./module/FooterPage/pages/FooterPage";
import MySkillPage from "./module/MySkillPage/pages/MySkillPage";
import OpeningPage from "./module/OpeningPage/pages/OpeningPage";
import PortofolioPage from "./module/PortofolioPage/pages/PortofolioPage";
import WorkExperiencePage from "./module/WorkExperiencePage/pages/WorkExperiencePage";

export default function App() {
  return (
    <div>
      <MainLayout>
        <StarBackground />
        <div className="mt-4">
          <OpeningPage />
        </div>
        <div className="mt-4">
          <AboutPage />
        </div>
        <div className="mt-4">
          <MySkillPage />
        </div>
        <div className="mt-4">
          <EducationalPage />
        </div>
        <div className="mt-4">
          <WorkExperiencePage />
        </div>
        <div className="mt-4">
          <PortofolioPage />
        </div>
        <div className="mt-4">
          <FooterPage />
        </div>
      </MainLayout>
    </div>
  );
}
