import { useState } from "react";
import { Link } from "react-router-dom";

const LOGO_URL =
  "https://public.readdy.ai/ai/img_res/a5ea7785-24bf-4666-9794-ab65aa10fcec.png";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <footer
      className="pt-14 md:pt-18 pb-24 lg:pb-8"
      style={{
        background: "linear-gradient(135deg, #120520 0%, #1c0035 50%, #0a0015 100%)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-10 md:mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 flex items-center justify-center">
                <img src={LOGO_URL} alt="DJ ZIKI" className="w-full h-full object-contain" />
              </div>
              <span className="font-heading font-900 text-lg tracking-[0.2em] text-gradient-gold-purple">
                DJ ZIKI
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              {[
                { icon: "ri-instagram-line", href: "https://instagram.com", label: "Instagram" },
                { icon: "ri-tiktok-line", href: "https://tiktok.com", label: "TikTok" },
                { icon: "ri-youtube-line", href: "https://youtube.com", label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-white/35 hover:text-ziki-gold hover:border-ziki-gold/30 transition-all duration-300 cursor-pointer"
                >
                  <i className={`${s.icon} text-base`} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-700 text-[10px] uppercase tracking-[0.25em] text-ziki-gold mb-5">
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home", to: "/" },
                { label: "About DJ ZIKI", to: "/about" },
                { label: "Video Mixes", to: "/mixes" },
                { label: "Audio Downloads", to: "/audio" },
                { label: "Gallery", to: "/gallery" },
                { label: "Book Now", to: "/booking" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="font-body text-white/40 text-sm hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-700 text-[10px] uppercase tracking-[0.25em] text-ziki-gold mb-5">
              Stay in the Mix
            </h4>
            <p className="font-body text-white/35 text-sm leading-relaxed mb-5">
              Exclusive mixes, event updates &amp; behind-the-scenes content.
            </p>
            {subscribed ? (
              <p className="font-heading font-700 text-sm text-ziki-gold">
                Welcome to the ZIKI family!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-sm font-body text-white placeholder-white/25 outline-none focus:border-ziki-gold/40 transition-colors"
                />
                <button
                  type="submit"
                  className="whitespace-nowrap font-heading font-700 text-xs uppercase tracking-widest px-6 py-3 rounded-xl bg-gradient-to-r from-ziki-gold to-ziki-purple text-white hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/20 text-xs text-center sm:text-left">
            © 2025 DJ ZIKI. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-xs font-body text-white/20">
            <a href="#" className="hover:text-white/45 transition-colors cursor-pointer">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-white/45 transition-colors cursor-pointer">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
