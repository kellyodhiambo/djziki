import { Link } from "react-router-dom";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import GalleryGrid from "./components/GalleryGrid";

const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-10 md:pt-40 md:pb-12 bg-ziki-light overflow-hidden relative">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(157,78,221,0.06) 0%, transparent 70%)", transform: "translate(-20%,20%)" }} />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <nav className="flex items-center gap-2 font-body text-xs text-gray-400 mb-6">
            <Link to="/" className="hover:text-gray-700 transition-colors cursor-pointer">Home</Link>
            <i className="ri-arrow-right-s-line text-gray-300" />
            <span className="text-ziki-gold">Gallery</span>
          </nav>
          <p className="font-heading font-600 text-ziki-gold text-[10px] md:text-xs uppercase tracking-[0.35em] mb-3">Captured Moments</p>
          <h1 className="font-heading font-900 text-4xl md:text-6xl text-gray-900 leading-none">
            The <span className="text-gradient-pink-purple">Gallery</span>
          </h1>
        </div>
      </section>

      <main>
        <section className="py-14 md:py-20 bg-white pb-20 lg:pb-14">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <GalleryGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
