import { Link } from "react-router-dom";
import { upcomingEvents } from "../../../mocks/events";

const AdvertBanner: React.FC = () => {
  const featured = upcomingEvents.find((e) => e.featured) || upcomingEvents[0];

  return (
    <section className="py-8 md:py-10 bg-white border-b border-black/[0.05]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-ziki-gold/10 via-white to-ziki-purple/8 border border-ziki-gold/20">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-ziki-gold to-ziki-purple rounded-l-2xl" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-5 md:px-8 py-5 md:py-6 pl-7 md:pl-10">
            {/* Left: Date + Info */}
            <div className="flex items-center gap-4">
              {/* Date badge */}
              <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-ziki-gold to-ziki-purple text-white">
                <span className="font-heading font-900 text-base md:text-lg leading-none">
                  {featured.date.split(" ")[1]}
                </span>
                <span className="font-heading font-600 text-[8px] md:text-[9px] uppercase tracking-wide opacity-80">
                  {featured.date.split(" ")[0]}
                </span>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1.5 bg-ziki-gold/10 text-ziki-gold font-heading font-700 text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                    <span className="w-1 h-1 rounded-full bg-ziki-gold animate-pulse" />
                    Upcoming Event
                  </span>
                  <span className="font-body text-gray-400 text-xs">{featured.genre}</span>
                </div>
                <h3 className="font-heading font-900 text-base md:text-lg text-gray-900 leading-tight mb-1">
                  {featured.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-0.5 text-xs font-body text-gray-400">
                  <span className="flex items-center gap-1">
                    <i className="ri-map-pin-2-line text-ziki-gold" />{featured.venue}, {featured.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="ri-time-line text-ziki-gold" />{featured.time}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/booking"
              className="whitespace-nowrap shrink-0 inline-flex items-center gap-2 font-heading font-700 text-xs uppercase tracking-widest px-6 py-3 rounded-full bg-gradient-to-r from-ziki-gold to-ziki-purple text-white hover:opacity-90 transition-opacity cursor-pointer"
            >
              <i className="ri-ticket-2-line" />Get Tickets
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertBanner;
