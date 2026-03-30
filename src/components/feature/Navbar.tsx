import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileBottomNav from "./MobileBottomNav";

const LOGO_URL =
  "https://i.postimg.cc/gJGJLFMr/1.png"
const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Mixes", path: "/mixes" },
  { label: "Social", path: "/social" },
  { label: "Gallery", path: "/gallery" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-black/[0.06]"
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between h-16 md:h-20 px-5 md:px-10 lg:px-14 max-w-[1400px] mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 cursor-pointer shrink-0">
            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
              <img src={LOGO_URL} alt="DJ ZIKI" className="w-full h-full object-contain" />
            </div>
            <span className="font-heading font-900 text-base md:text-lg tracking-[0.18em] text-gradient-gold-purple whitespace-nowrap">
              DJ ZIKI
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative font-heading font-600 text-xs uppercase tracking-[0.18em] transition-all duration-300 ${
                    isActive(link.path) ? "text-gray-900" : "text-gray-400 hover:text-gray-800"
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full bg-gradient-to-r from-ziki-gold to-ziki-purple" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/25494526856"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="whitespace-nowrap flex items-center gap-1.5 font-heading font-600 text-xs uppercase tracking-widest px-4 py-2.5 rounded-full border border-[#25D366]/35 text-[#25D366] hover:bg-[#25D366]/8 transition-all cursor-pointer"
            >
              <i className="ri-whatsapp-line text-sm" />WhatsApp
            </a>
            <Link
              to="/booking"
              className="whitespace-nowrap font-heading font-700 text-xs uppercase tracking-widest px-5 py-2.5 rounded-full bg-gradient-to-r from-ziki-gold to-ziki-purple text-white hover:opacity-90 transition-opacity cursor-pointer"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center cursor-pointer text-gray-700"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <i className={`text-xl ${mobileOpen ? "ri-close-line" : "ri-menu-3-line"}`} />
          </button>
        </nav>

        {/* Mobile dropdown menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } bg-white border-t border-black/[0.05]`}
        >
          <ul className="flex flex-col px-6 pt-3 pb-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center justify-between font-heading font-600 text-sm uppercase tracking-widest py-4 border-b border-black/[0.05] transition-colors ${
                    isActive(link.path) ? "text-ziki-gold" : "text-gray-600"
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && <i className="ri-arrow-right-s-line text-ziki-gold" />}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-6 py-4 grid grid-cols-2 gap-3">
            <a
              href="https://wa.me/25494526856"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="whitespace-nowrap flex items-center justify-center gap-1.5 font-heading font-600 text-xs uppercase tracking-widest py-3 rounded-full border border-[#25D366]/30 text-[#25D366] cursor-pointer"
            >
              <i className="ri-whatsapp-line" />WhatsApp
            </a>
            <Link
              to="/booking"
              className="whitespace-nowrap flex items-center justify-center font-heading font-700 text-xs uppercase tracking-widest py-3 rounded-full bg-gradient-to-r from-ziki-gold to-ziki-purple text-white cursor-pointer"
            >
              Book Now
            </Link>
          </div>
        </div>
      </header>
      <MobileBottomNav />
    </>
  );
};

export default Navbar;
