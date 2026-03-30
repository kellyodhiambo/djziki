import { useState } from "react";
import { galleryItems } from "../../../mocks/gallery";

type Category = "All" | "Club Night" | "Festival" | "Studio" | "Wedding" | "Private Event" | "Day Party" | "Tour";
const categories: Category[] = ["All", "Festival", "Club Night", "Private Event", "Studio", "Wedding", "Tour", "Day Party"];

interface LightboxProps { img: string; caption: string; onClose: () => void; onPrev: () => void; onNext: () => void; }

const Lightbox: React.FC<LightboxProps> = ({ img, caption, onClose, onPrev, onNext }) => (
  <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-sm" onClick={onClose}>
    <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
      <img src={img} alt={caption} className="max-w-[85vw] max-h-[80vh] object-contain rounded-xl" />
      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-xl">
        <p className="font-heading font-700 text-white text-sm">{caption}</p>
      </div>
      {/* Close */}
      <button onClick={onClose} aria-label="Close" className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center rounded-full bg-ziki-gold text-white cursor-pointer hover:opacity-90">
        <i className="ri-close-line text-lg" />
      </button>
      {/* Prev */}
      <button onClick={onPrev} aria-label="Previous" className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 text-ziki-cyan cursor-pointer hover:bg-black/80">
        <i className="ri-arrow-left-s-line text-xl" />
      </button>
      {/* Next */}
      <button onClick={onNext} aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 text-ziki-cyan cursor-pointer hover:bg-black/80">
        <i className="ri-arrow-right-s-line text-xl" />
      </button>
    </div>
  </div>
);

const GalleryGrid: React.FC = () => {
  const [filter, setFilter] = useState<Category>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevItem = () => setLightboxIdx((p) => (p === null ? 0 : (p - 1 + filtered.length) % filtered.length));
  const nextItem = () => setLightboxIdx((p) => (p === null ? 0 : (p + 1) % filtered.length));

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setFilter(cat)}
            className={`whitespace-nowrap font-heading font-700 text-[10px] md:text-xs uppercase tracking-widest px-4 md:px-5 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
              filter === cat
                ? "bg-gradient-to-r from-ziki-gold to-ziki-purple border-transparent text-white"
                : "border-black/[0.08] text-gray-500 hover:border-ziki-gold/30 hover:text-ziki-gold"
            }`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-2 md:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
        {filtered.map((item, idx) => (
          <div key={item.id} className="group relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer break-inside-avoid"
            onClick={() => openLightbox(idx)}>
            <img src={item.img} alt={item.caption}
              className="w-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ziki-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
              <p className="font-heading font-700 text-white text-xs md:text-sm">{item.caption}</p>
              <span className="font-body text-ziki-gold text-[9px] md:text-[10px] uppercase tracking-widest">{item.category}</span>
            </div>
            {/* Zoom icon */}
            <div className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <i className="ri-zoom-in-line text-xs" />
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 font-body py-20">No photos in this category yet.</p>
      )}

      {/* Lightbox */}
      {lightboxIdx !== null && filtered[lightboxIdx] && (
        <Lightbox
          img={filtered[lightboxIdx].img}
          caption={filtered[lightboxIdx].caption ?? ""}
          onClose={closeLightbox}
          onPrev={prevItem}
          onNext={nextItem}
        />
      )}
    </>
  );
};

export default GalleryGrid;
