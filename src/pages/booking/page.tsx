import { Link } from "react-router-dom";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import BookingForm from "./components/BookingForm";

const perks = [
  { icon: "ri-global-line", label: "Available Worldwide" },
  { icon: "ri-time-line", label: "24h Response Time" },
  { icon: "ri-shield-check-line", label: "Professionally Insured" },
  { icon: "ri-music-2-line", label: "All Genres Covered" },
];

const Booking: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-10 md:pt-40 md:pb-12 bg-ziki-light overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,0,110,0.07) 0%, transparent 70%)", transform: "translate(20%,-20%)" }} />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <nav className="flex items-center gap-2 font-body text-xs text-gray-400 mb-6">
            <Link to="/" className="hover:text-gray-700 transition-colors cursor-pointer">Home</Link>
            <i className="ri-arrow-right-s-line text-gray-300" />
            <span className="text-ziki-gold">Booking</span>
          </nav>
          <p className="font-heading font-600 text-ziki-gold text-[10px] md:text-xs uppercase tracking-[0.35em] mb-3">Let&apos;s Work Together</p>
          <h1 className="font-heading font-900 text-4xl md:text-6xl text-gray-900 leading-none">
            Book DJ <span className="text-gradient-pink-purple">ZIKI</span>
          </h1>
        </div>
      </section>

      <main>
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              {/* Left info */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {perks.map((p) => (
                    <div key={p.label} className="rounded-xl border border-black/[0.07] bg-white p-4">
                      <div className="w-8 h-8 flex items-center justify-center mb-2">
                        <i className={`${p.icon} text-xl text-ziki-gold`} />
                      </div>
                      <p className="font-heading font-700 text-gray-800 text-xs leading-tight">{p.label}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-black/[0.07] bg-white p-6 space-y-4 mb-6">
                  <h3 className="font-heading font-800 text-xs uppercase tracking-widest text-gray-400 mb-4">Direct Contact</h3>
                  {[
                    { icon: "ri-whatsapp-line", color: "#25D366", bg: "bg-[#25D366]/10", label: "WhatsApp", value: "+254794516856" },
                    { icon: "ri-mail-line", color: undefined, bg: "bg-ziki-gold/10", label: "Email", value: "djziki.ii@gmail.com" },
                    { icon: "ri-instagram-line", color: undefined, bg: "bg-ziki-purple/10", label: "Instagram DM", value: "@mitchell.riziki" },
                  ].map((c) => (
                    <div key={c.label} className="flex items-center gap-3">
                      <div className={`w-9 h-9 flex items-center justify-center rounded-full ${c.bg} shrink-0`}>
                        <i className={`${c.icon}`} style={{ color: c.color || "#FF006E" }} />
                      </div>
                      <div>
                        <p className="font-body text-gray-400 text-[10px] uppercase tracking-wide">{c.label}</p>
                        <p className="font-heading font-600 text-gray-800 text-sm">{c.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="font-body text-gray-400 text-xs leading-relaxed">
                  All bookings confirmed via WhatsApp or email. A deposit is required to secure your date.
                  DJ ZIKI is available globally.
                </p>
              </div>

              {/* Right form */}
              <div className="lg:col-span-3">
                <div className="rounded-2xl md:rounded-3xl border border-black/[0.07] bg-white p-6 md:p-10">
                  <h2 className="font-heading font-900 text-xl md:text-2xl text-gray-900 mb-1">Booking Request</h2>
                  <p className="font-body text-gray-400 text-xs mb-8">
                    Fill out the form — your details will be sent directly to DJ ZIKI via WhatsApp.
                  </p>
                  <BookingForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
