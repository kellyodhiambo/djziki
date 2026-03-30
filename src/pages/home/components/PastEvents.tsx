import { pastEvents } from "../../../mocks/events";

const PastEvents: React.FC = () => {
  return (
    <section className="py-14 md:py-20 bg-white border-t border-black/[0.05]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-12">
          <div>
            <p className="font-heading font-700 text-ziki-gold text-[10px] uppercase tracking-[0.35em] mb-2">
              Stage History
            </p>
            <h2 className="font-heading font-900 text-3xl md:text-4xl lg:text-5xl text-gray-900">
              Past <span className="text-gradient-purple-cyan">Events</span>
            </h2>
          </div>
          <p className="font-body text-gray-400 text-sm max-w-xs text-right hidden sm:block">
            Memories from stages across the world
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {pastEvents.map((event, i) => (
            <div
              key={event.id}
              className={`group relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer ${
                i === 0 ? "row-span-2" : ""
              }`}
              style={{ minHeight: i === 0 ? "320px" : "175px" }}
            >
              <img
                src={event.img}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/15 to-transparent" />

              {/* Hover gold overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ziki-gold/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <span className="font-body text-[9px] uppercase tracking-widest text-ziki-gold mb-1 block">
                  {event.genre}
                </span>
                <h3 className="font-heading font-700 text-white text-xs md:text-sm leading-tight mb-0.5">
                  {event.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-body text-white/45 text-[10px] flex items-center gap-1">
                    <i className="ri-map-pin-line text-[9px]" />
                    <span className="hidden sm:inline">{event.location}</span>
                    <span className="sm:hidden">{event.location.split(",")[0]}</span>
                  </span>
                  <span className="font-body text-white/35 text-[10px]">{event.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
