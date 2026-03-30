import { Link } from "react-router-dom";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import VideosSection from "./components/VideosSection";

const Mixes: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-10 md:pt-40 md:pb-12 bg-ziki-light overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,0,110,0.06) 0%, transparent 70%)", transform: "translate(20%,-20%)" }} />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <nav className="flex items-center gap-2 font-body text-xs text-gray-400 mb-6">
            <Link to="/" className="hover:text-gray-700 transition-colors cursor-pointer">Home</Link>
            <i className="ri-arrow-right-s-line text-gray-300" />
            <span className="text-ziki-gold">Video Mixes</span>
          </nav>
          <p className="font-heading font-600 text-ziki-gold text-[10px] md:text-xs uppercase tracking-[0.35em] mb-3">Watch &amp; Vibe</p>
          <div className="flex flex-col sm:flex-row sm:items-end gap-3 justify-between">
            <h1 className="font-heading font-900 text-4xl md:text-6xl text-gray-900 leading-none">
              Video <span className="text-gradient-pink-purple">Mixes</span>
            </h1>
            <Link to="/audio"
              className="whitespace-nowrap self-start sm:self-auto inline-flex items-center gap-1.5 font-heading font-600 text-xs uppercase tracking-widest text-ziki-purple hover:text-ziki-gold transition-colors border border-ziki-purple/20 hover:border-ziki-gold/30 px-4 py-2 rounded-full cursor-pointer">
              <i className="ri-music-2-line" />Audio Downloads<i className="ri-arrow-right-s-line" />
            </Link>
          </div>
        </div>
      </section>
      <main><VideosSection /></main>
      <Footer />
    </div>
  );
};

export default Mixes;
