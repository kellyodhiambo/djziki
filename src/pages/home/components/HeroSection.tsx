import { Link } from "react-router-dom";

const HERO_BG =
  "https://i.postimg.cc/8PyNtfZk/IMG_1849_JPG.jpg";

const socials = [
  { icon: "ri-instagram-line", href: "https://instagram.com", label: "Instagram" },
  { icon: "ri-tiktok-line", href: "https://tiktok.com", label: "TikTok" },
  { icon: "ri-youtube-line", href: "https://youtube.com", label: "YouTube" },
];

const stats = [
  { value: "500+", label: "Events" },
  { value: "20+", label: "Countries" },
  { value: "10K+", label: "Fans" },
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Background Photo */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="DJ ZIKI performing"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/35" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 25% 65%, rgba(232,160,32,0.12) 0%, transparent 55%)",
          }}
        />
      </div>

      {/* Social sidebar — desktop only */}
      <div className="hidden lg:flex absolute right-9 top-1/2 -translate-y-1/2 flex-col gap-3.5 z-20">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={s.label}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-white/40 hover:text-ziki-gold hover:border-ziki-gold/50 transition-all duration-300 cursor-pointer"
          >
            <i className={`${s.icon} text-base`} />
          </a>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-20 pt-28 pb-10 w-full max-w-[1400px] mx-auto">
        {/* Label badge */}
        <div
          className="inline-flex items-center gap-2.5 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-8 w-fit animate-slide-in"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-ziki-gold animate-pulse shrink-0" />
          <span className="font-heading font-600 text-[10px] md:text-xs uppercase tracking-[0.28em] text-white/70 whitespace-nowrap">
            Official DJ &amp; Recording Artist
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading font-900 leading-[0.86] tracking-tight mb-6">
          <span
            className="block text-white text-[clamp(70px,10.5vw,155px)] animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            DJ
          </span>
          <span
            className="block text-gradient-animated text-[clamp(70px,10.5vw,155px)] animate-scale-in"
            style={{ animationDelay: "0.4s" }}
          >
            ZIKI.
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="font-heading font-300 italic text-white/50 text-base md:text-xl lg:text-2xl tracking-wide mb-8 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Feel the Vibe. Book the Energy.
        </p>

        {/* Genre chips */}
        <div
          className="flex flex-wrap gap-2 mb-8 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          {["Afrobeats", "Amapiano", "Hip-Hop", "House", "R&B"].map((g) => (
            <span
              key={g}
              className="font-body text-[11px] text-white/45 border border-white/12 rounded-full px-3.5 py-1 hover:border-ziki-gold/50 hover:text-white/75 transition-all duration-300"
            >
              {g}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-3 mb-10 animate-fade-up"
          style={{ animationDelay: "0.85s" }}
        >
          <Link
            to="/booking"
            className="whitespace-nowrap inline-flex items-center gap-2 font-heading font-700 text-xs md:text-sm uppercase tracking-widest px-7 md:px-9 py-3.5 md:py-4 rounded-full bg-gradient-to-r from-ziki-gold to-ziki-purple text-white hover:opacity-90 transition-opacity cursor-pointer"
          >
            <i className="ri-calendar-check-line" />
            Book Now
          </Link>
          <Link
            to="/mixes"
            className="whitespace-nowrap inline-flex items-center gap-2 font-heading font-700 text-xs md:text-sm uppercase tracking-widest px-7 md:px-9 py-3.5 md:py-4 rounded-full border border-white/25 text-white/75 hover:border-ziki-gold/55 hover:text-white transition-all duration-300 cursor-pointer"
          >
            <i className="ri-play-circle-line" />
            Watch Mixes
          </Link>
        </div>

        {/* Stats row */}
        <div
          className="flex items-center gap-6 md:gap-10 animate-fade-up"
          style={{ animationDelay: "1s" }}
        >
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-4">
              <div>
                <p className="font-heading font-900 text-xl md:text-2xl text-white leading-none">{s.value}</p>
                <p className="font-body text-[10px] text-white/35 uppercase tracking-widest mt-0.5">{s.label}</p>
              </div>
              {i < stats.length - 1 && <div className="w-px h-7 bg-white/10 shrink-0" />}
            </div>
          ))}
        </div>

        {/* Social icons — mobile only */}
        <div
          className="flex lg:hidden items-center gap-3 mt-7 animate-fade-up"
          style={{ animationDelay: "1.1s" }}
        >
          <span className="font-body text-xs text-white/25 mr-1">Follow</span>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={s.label}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-white/15 text-white/35 hover:text-ziki-gold hover:border-ziki-gold/40 transition-all cursor-pointer"
            >
              <i className={`${s.icon} text-sm`} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-7 animate-float">
        <div className="flex flex-col items-center gap-1.5">
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-white/20">Scroll</span>
          <i className="ri-arrow-down-line text-white/20 text-sm" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
