import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import AboutHero from "./components/AboutHero";
import BiographySection from "./components/BiographySection";
import AchievementsSection from "./components/AchievementsSection";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-ziki-dark">
      <Navbar />
      <main>
        <AboutHero />
        <BiographySection />
        <AchievementsSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
