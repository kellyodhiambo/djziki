import { Link } from "react-router-dom";

const events = [
  {
    year: "2025", title: "Pulse Of The Lake", location: "Kenya",
    desc: "Headlined main stage to 40,000+ fans", tag: "Festival",
    img: "https://i.postimg.cc/Qd4C9n2n/IMG_0195_JPG.jpg",
  },
];

const AchievementsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-ziki-light">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
{/* Events */}
        <div className="mb-12">
          <p className="font-heading font-600 text-ziki-gold text-[10px] md:text-xs uppercase tracking-[0.35em] mb-3">Career Highlights</p>
          <h2 className="font-heading font-900 text-3xl md:text-4xl text-gray-900">
            Defining <span className="text-gradient-pink-purple">Moments</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {events.map((ev) => (
            <div key={ev.title} className="group rounded-2xl overflow-hidden bg-white border border-black/[0.07] hover:border-ziki-gold/20 transition-all duration-300">
              <div className="w-full h-40 overflow-hidden relative">
                <img src={ev.img} alt={ev.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading font-700 text-xs text-ziki-gold">{ev.year}</span>
                  <span className="font-body text-xs text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-full">{ev.tag}</span>
                </div>
                <h3 className="font-heading font-700 text-gray-900 text-sm mb-1">{ev.title}</h3>
                <p className="font-body text-ziki-gold text-xs mb-2 flex items-center gap-1">
                  <i className="ri-map-pin-line" />{ev.location}
                </p>
                <p className="font-body text-gray-400 text-xs leading-relaxed">{ev.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/booking"
            className="whitespace-nowrap inline-flex items-center gap-2 font-heading font-700 text-sm uppercase tracking-widest px-8 py-4 rounded-full bg-gradient-to-r from-ziki-gold to-ziki-purple text-white hover:opacity-90 transition-opacity cursor-pointer">
            <i className="ri-calendar-line" />Book DJ ZIKI for Your Event
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
