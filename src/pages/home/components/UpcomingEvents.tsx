import { Link } from "react-router-dom";
import { upcomingEvents } from "../../../mocks/events";

const UpcomingEvents: React.FC = () => {
  return (
    <section className="py-14 md:py-20 bg-[#f8f5f0]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-12">
          <div>
            <p className="font-heading font-700 text-ziki-gold text-[10px] uppercase tracking-[0.35em] mb-2">
              Don&apos;t Miss Out
            </p>
            <h2 className="font-heading font-900 text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
              Upcoming <span className="text-gradient-gold-purple">Events</span>
            </h2>
          </div>
          <Link
            to="/booking"
            className="whitespace-nowrap self-start sm:self-auto inline-flex items-center gap-1.5 font-heading font-600 text-xs uppercase tracking-widest text-gray-400 hover:text-ziki-gold transition-colors cursor-pointer"
          >
            Book for Your Event <i className="ri-arrow-right-line" />
          </Link>
        </div>

        {/* Event List */}
        <div className="flex flex-col gap-3 md:gap-4">
          {upcomingEvents.map((event, i) => (
            <div
              key={event.id}
              className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-5 bg-white rounded-2xl border border-black/[0.07] hover:border-ziki-gold/30 hover:shadow-sm transition-all duration-300 p-4 md:p-6 overflow-hidden"
            >
              {/* Subtle background image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <img src={event.img} alt="" className="w-full h-full object-cover object-top opacity-5" />
                <div className="absolute inset-0 bg-white/90" />
              </div>

              {/* Row Number */}
              <span className="hidden md:block font-heading font-900 text-4xl text-gray-100 w-10 shrink-0 leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Date block */}
              <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-ziki-gold to-ziki-purple text-white">
                <span className="font-heading font-900 text-lg leading-none">{event.date.split(" ")[1]}</span>
                <span className="font-heading font-600 text-[8px] uppercase tracking-wide opacity-80">{event.date.split(" ")[0]}</span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0 relative z-10">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-body text-[10px] text-ziki-gold border border-ziki-gold/25 bg-ziki-gold/8 rounded-full px-2.5 py-0.5">
                    {event.genre}
                  </span>
                  {event.featured && (
                    <span className="font-heading font-700 text-[9px] uppercase tracking-widest text-ziki-purple bg-ziki-purple/10 rounded-full px-2.5 py-0.5">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="font-heading font-900 text-sm md:text-lg text-gray-900 leading-snug mb-1 truncate">
                  {event.title}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-0.5">
                  <span className="font-body text-xs text-gray-400 flex items-center gap-1">
                    <i className="ri-map-pin-line text-ziki-gold text-xs" />{event.venue}, {event.location}
                  </span>
                  <span className="font-body text-xs text-gray-400 flex items-center gap-1">
                    <i className="ri-time-line text-ziki-gold text-xs" />{event.time}
                  </span>
                </div>
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
