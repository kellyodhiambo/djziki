import { Link } from "react-router-dom";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";

const socials = [
  {
    platform: "Instagram",
    handle: "@mitchell.riziki",
    url: "https://www.instagram.com/mitchell.riziki?igsh=M2cyY3AzeDJ4YjQ0&utm_source=qr",
    icon: "ri-instagram-line",
    description: "Behind the scenes, event highlights & lifestyle.",
    gradient: "from-[#f09433] via-[#dc2743] to-[#bc1888]",
    available: true,
  },
  {
    platform: "TikTok",
    handle: "@djziki.ii",
    url: "https://www.tiktok.com/@djziki.ii?_r=1&_t=ZS-94kFnOrKze0",
    icon: "ri-tiktok-line",
    description: "Short mixes, transitions & viral DJ moments.",
    gradient: "from-[#010101] to-[#69C9D0]",
    available: true,
  },
  {
    platform: "YouTube",
    handle: "@djziki.i",
    url: "https://youtube.com/@djziki.i?si=yGU0DDVr5FU0MiNE",
    icon: "ri-youtube-line",
    description: "Full sets, live recordings & music videos.",
    gradient: "from-[#FF0000] to-[#cc0000]",
    available: true,
  },
  {
    platform: "Facebook",
    handle: "Riziki Mitchell",
    url: "https://www.facebook.com/share/1CZ1VyYvYo/?mibextid=wwXIfr",
    icon: "ri-facebook-circle-line",
    description: "Events, updates & community.",
    gradient: "from-[#1877F2] to-[#0a5dc2]",
    available: true,
  },
];

const Social: React.FC = () => (
  <div className="min-h-screen bg-white">
    <Navbar />

    <section className="pt-32 pb-10 md:pt-40 md:pb-12 bg-ziki-light2 overflow-hidden relative">
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,160,32,0.08) 0%, transparent 70%)", transform: "translate(-20%,-20%)" }}
      />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <nav className="flex items-center gap-2 font-body text-xs text-gray-400 mb-6">
          <Link to="/" className="hover:text-gray-700 transition-colors cursor-pointer">Home</Link>
          <i className="ri-arrow-right-s-line text-gray-300" />
          <span className="text-ziki-gold">Social</span>
        </nav>
        <p className="font-heading font-600 text-ziki-gold text-[10px] md:text-xs uppercase tracking-[0.35em] mb-3">
          Stay Connected
        </p>
        <h1 className="font-heading font-900 text-4xl md:text-6xl text-gray-900 leading-none">
          Follow <span className="text-gradient-gold-purple">DJ ZIKI</span>
        </h1>
      </div>
    </section>

    <main>
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <p className="font-body text-gray-400 text-sm mb-10 max-w-xl">
            Follow DJ ZIKI across all platforms for the latest mixes, event updates and behind-the-scenes content.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {socials.map((s) => (
              <a
                key={s.platform}
                href={s.url ?? undefined}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 block ${
                  s.available
                    ? "border-black/[0.07] hover:border-ziki-gold/30 hover:shadow-md cursor-pointer"
                    : "border-black/[0.05] opacity-60 pointer-events-none"
                }`}
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${s.gradient}`} />
                <div className="p-6 flex flex-col gap-4">
                  <div className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${s.gradient} text-white`}>
                    <i className={`${s.icon} text-2xl`} />
                  </div>
                  <div>
                    <p className="font-heading font-900 text-lg text-gray-900">{s.platform}</p>
                    <p className="font-body text-xs text-ziki-gold mt-0.5">{s.handle}</p>
                    <p className="font-body text-xs text-gray-400 mt-2 leading-relaxed">{s.description}</p>
                  </div>
                  {s.available && s.url ? (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className={`whitespace-nowrap mt-auto inline-flex items-center justify-center gap-2 font-heading font-700 text-[11px] uppercase tracking-widest px-5 py-2.5 rounded-full bg-gradient-to-r ${s.gradient} text-white hover:opacity-90 transition-opacity cursor-pointer`}
                    >
                      <i className={s.icon} />Follow
                    </a>
                  ) : (
                    <span className="mt-auto inline-flex items-center justify-center font-heading font-700 text-[11px] uppercase tracking-widest px-5 py-2.5 rounded-full border border-black/[0.08] text-gray-300">
                      Coming Soon
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Social;
