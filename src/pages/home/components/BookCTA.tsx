import { Link } from "react-router-dom";

const BookCTA: React.FC = () => {
  return (
    <section className="py-14 md:py-20 bg-white border-t border-black/[0.05]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#18001f] via-[#220035] to-[#100020]">
          {/* Decorative orbs */}
          <div
            className="absolute -top-24 -right-24 w-[380px] h-[380px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(232,160,32,0.12) 0%, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-[340px] h-[340px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(157,78,221,0.12) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 flex flex-col items-center text-center py-14 md:py-18 px-6 md:px-12">
            <p className="font-heading font-600 text-white/40 text-[10px] uppercase tracking-[0.4em] mb-4">
              Available Worldwide
            </p>
            <h2 className="font-heading font-900 text-4xl md:text-5xl lg:text-6xl text-white leading-none mb-4">
              READY TO CREATE
              <br />
              <span className="text-gradient-animated">MAGIC?</span>
            </h2>
            <p className="font-body font-300 text-white/45 text-sm md:text-base max-w-md leading-relaxed mb-3">
              Weddings &middot; Corporate events &middot; Club nights &middot; Festivals
            </p>
            <p className="font-body text-white/30 text-xs mb-8 md:mb-10">
              DJ ZIKI brings the energy. You bring the people.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                to="/booking"
                className="whitespace-nowrap inline-flex items-center justify-center gap-2 font-heading font-700 text-xs md:text-sm uppercase tracking-widest px-8 md:px-10 py-4 rounded-full bg-gradient-to-r from-ziki-gold to-ziki-purple text-white hover:opacity-90 transition-opacity cursor-pointer"
              >
                <i className="ri-calendar-check-line" />
                Book DJ ZIKI Now
              </Link>
              <a
                href="https://wa.me/27000000000"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="whitespace-nowrap inline-flex items-center justify-center gap-2 font-heading font-700 text-xs md:text-sm uppercase tracking-widest px-6 md:px-8 py-4 rounded-full bg-[#25D366] text-white hover:opacity-90 transition-opacity cursor-pointer"
              >
                <i className="ri-whatsapp-line" />WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCTA;
