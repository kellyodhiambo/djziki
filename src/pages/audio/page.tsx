import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import { audioMixes } from "../../mocks/mixes";

const Audio: React.FC = () => {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-10 md:pt-40 md:pb-12 bg-ziki-light2 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(157,78,221,0.07) 0%, transparent 70%)", transform: "translate(-20%,-20%)" }} />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <nav className="flex items-center gap-2 font-body text-xs text-gray-400 mb-6">
            <Link to="/" className="hover:text-gray-700 transition-colors cursor-pointer">Home</Link>
            <i className="ri-arrow-right-s-line text-gray-300" />
            <span className="text-ziki-gold">Audio</span>
          </nav>
          <p className="font-heading font-600 text-ziki-gold text-[10px] md:text-xs uppercase tracking-[0.35em] mb-3">Download &amp; Listen</p>
          <h1 className="font-heading font-900 text-4xl md:text-6xl text-gray-900 leading-none">
            Audio <span className="text-gradient-purple-cyan">Mixes</span>
          </h1>
        </div>
      </section>

      <main>
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <p className="font-body text-gray-400 text-sm mb-10">
              Download full mixes from{" "}
              <a href="https://hearthis.at" target="_blank" rel="noopener noreferrer nofollow" className="text-ziki-purple hover:underline cursor-pointer">HearThis.at</a>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {/* Featured */}
              <div className="group rounded-2xl overflow-hidden border border-black/[0.07] hover:border-ziki-purple/25 transition-all duration-400">
                <div className="w-full aspect-[4/3] overflow-hidden relative">
                  <img src={audioMixes[0].cover} alt={audioMixes[0].title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <button onClick={() => setPlaying(playing === audioMixes[0].id ? null : audioMixes[0].id)}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer">
                    <div className={`w-20 h-20 flex items-center justify-center rounded-full transition-all ${playing === audioMixes[0].id ? "bg-ziki-gold" : "bg-white/90 group-hover:bg-ziki-gold"}`}>
                      <i className={`${playing === audioMixes[0].id ? "ri-pause-fill text-white" : "ri-play-fill text-ziki-gold group-hover:text-white"} text-3xl ml-1`} />
                    </div>
                  </button>
                </div>
                <div className="p-6">
                  <span className="font-body text-[10px] text-ziki-gold uppercase tracking-widest mb-1 block">{audioMixes[0].genre} · {audioMixes[0].date}</span>
                  <h3 className="font-heading font-900 text-xl text-gray-900 mb-4">{audioMixes[0].title}</h3>
                  <div className="flex items-center gap-0.5 h-8 mb-5">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div key={i} className={`flex-1 rounded-sm ${playing === audioMixes[0].id ? "bg-ziki-gold/60" : "bg-gray-200"}`}
                        style={{ height: `${20 + Math.abs(Math.sin(i * 0.8) * 80)}%` }} />
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <a href={audioMixes[0].hearThisUrl} target="_blank" rel="noopener noreferrer nofollow"
                      className="whitespace-nowrap flex-1 flex items-center justify-center gap-2 font-heading font-700 text-xs uppercase tracking-widest py-3.5 rounded-xl bg-gradient-to-r from-ziki-purple to-ziki-gold text-white hover:opacity-90 cursor-pointer">
                      <i className="ri-download-2-line" />Download
                    </a>
                    <span className="font-body text-gray-400 text-xs">{audioMixes[0].duration}</span>
                  </div>
                </div>
              </div>

              {/* Other mixes stacked */}
              <div className="flex flex-col gap-3">
                {audioMixes.slice(1).map((mix) => (
                  <div key={mix.id} className="group flex items-center gap-4 rounded-2xl border border-black/[0.07] hover:border-ziki-purple/20 p-4 transition-all duration-300 bg-white">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => setPlaying(playing === mix.id ? null : mix.id)}>
                      <img src={mix.cover} alt={mix.title} className="w-full h-full object-cover object-top" />
                      <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                        <i className={`${playing === mix.id ? "ri-pause-fill text-ziki-gold" : "ri-play-fill text-white"} text-lg`} />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-700 text-gray-900 text-sm truncate">{mix.title}</h3>
                      <p className="font-body text-[10px] text-ziki-gold mt-0.5">{mix.genre}</p>
                      <div className="flex items-center gap-0.5 h-4 mt-2">
                        {Array.from({ length: 30 }).map((_, i) => (
                          <div key={i} className={`w-1 rounded-sm ${playing === mix.id ? "bg-ziki-gold/50" : "bg-gray-200"}`}
                            style={{ height: `${20 + Math.abs(Math.sin(i * 0.7) * 80)}%` }} />
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <a href={mix.hearThisUrl} target="_blank" rel="noopener noreferrer nofollow"
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-ziki-purple/25 text-ziki-purple hover:bg-ziki-purple/10 transition-colors cursor-pointer">
                        <i className="ri-download-2-line text-sm" />
                      </a>
                      <span className="font-body text-gray-400 text-[10px]">{mix.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Audio;
