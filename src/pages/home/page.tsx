import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import HeroSection from "./components/HeroSection";
import AdvertBanner from "./components/AdvertBanner";
import UpcomingEvents from "./components/UpcomingEvents";
import PastEvents from "./components/PastEvents";
import TestimonialsSection from "./components/TestimonialsSection";
import BookCTA from "./components/BookCTA";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-ziki-dark">
      <Navbar />
      <main>
        <HeroSection />
        <AdvertBanner />
        <UpcomingEvents />
        <PastEvents />
        <TestimonialsSection />
        <BookCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
