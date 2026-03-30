import { useState } from "react";
import { videoMixes } from "../../../mocks/mixes";

const ALL_GENRES = ["All", "Afrobeats", "Amapiano", "Hip-Hop", "House", "Fusion"];

const VideosSection: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const [playingId, setPlayingId] = useState<string | null>(null);

  const filtered = filter === "All" ? videoMixes : videoMixes.filter((v) => v.genre === filter);

  return (
    <section className="py-14 md:py-20 bg-white">      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Genre filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {ALL_GENRES.map((g) => (
            <button key={g} onClick={() => setFilter(g)}
              className={`whitespace-nowrap font-heading font-600 text-xs uppercase tracking-widest px-4 md:px-5 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                filter === g
                  ? "bg-gradient-to-r from-ziki-gold to-ziki-purple border-transparent text-white"
                  : "border-black/[0.08] text-gray-500 hover:border-ziki-gold/30 hover:text-ziki-gold"
              }`}>
              {g}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {filtered.map((video) => (
            <div key={video.id}
              className="relative group rounded-2xl overflow-hidden border border-black/[0.06] cursor-pointer bg-gray-50"
              style={{ aspectRatio: "16/9" }}
              onClick={() => setPlayingId(playingId === video.id ? null : video.id)}>
              {playingId === video.id ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen className="absolute inset-0 w-full h-full" />
              ) : (
                <>
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/90 group-hover:scale-110 transition-transform duration-300">
                      <i className="ri-play-fill text-xl text-ziki-gold ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-heading font-700 text-white text-sm mb-1">{video.title}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-ziki-gold text-xs font-body">{video.genre}</span>
                      <span className="text-white/50 text-xs">{video.views} views</span>
                      <span className="ml-auto font-heading font-600 text-xs bg-white/15 text-white px-2 py-0.5 rounded-full">{video.duration}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400 font-body">No mixes found for this genre yet.</div>
        )}
      </div>
    </section>
  );
};

export default VideosSection;
