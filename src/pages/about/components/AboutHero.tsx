import { Link } from "react-router-dom";

const AboutHero: React.FC = () => {
  return (
    <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-20 bg-ziki-light overflow-hidden">
      {/* Decorative orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(157,78,221,0.07) 0%, transparent 70%)", transform: "translate(20%,-20%)" }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <nav className="flex items-center gap-2 font-body text-xs text-gray-400 mb-8">
          <Link to="/" className="hover:text-gray-700 transition-colors cursor-pointer">Home</Link>
          <i className="ri-arrow-right-s-line text-gray-300" />
          <span className="text-ziki-gold">About</span>
        </nav>
        <p className="font-heading font-600 text-ziki-gold text-[10px] md:text-xs uppercase tracking-[0.35em] mb-4">
          The Artist Behind the Decks
        </p>
        <h1 className="font-heading font-900 text-5xl md:text-7xl lg:text-8xl text-gray-900 leading-none">
          DJ <span className="text-gradient-pink-purple">ZIKI</span>
        </h1>
        <p className="font-body font-300 italic text-gray-500 text-lg md:text-2xl mt-4">
          Afrobeats · Amapiano · Hip-Hop · House
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
