import { testimonials } from "../../../mocks/testimonials";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-14 md:py-20 bg-[#f8f5f0] border-t border-black/[0.05]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-12">
          <div>
            <p className="font-heading font-700 text-ziki-gold text-[10px] uppercase tracking-[0.35em] mb-2">
              Client Reviews
            </p>
            <h2 className="font-heading font-900 text-3xl md:text-4xl lg:text-5xl text-gray-900">
              They <span className="text-gradient-gold-purple">Said It Best</span>
            </h2>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <i key={s} className="ri-star-fill text-ziki-gold text-sm md:text-base" />
            ))}
            <span className="font-heading font-700 text-gray-800 text-sm ml-2">5.0</span>
            <span className="font-body text-gray-400 text-xs ml-1">avg rating</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="group relative rounded-2xl p-5 md:p-6 bg-white border border-black/[0.06] hover:border-ziki-gold/25 transition-all duration-300"
            >
              {/* Large quote mark */}
              <i className="ri-double-quotes-l absolute top-4 right-5 text-3xl text-gray-100" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <i key={j} className="ri-star-fill text-xs text-ziki-gold" />
                ))}
              </div>

              {/* Review text */}
              <p className="font-body text-gray-500 text-xs md:text-sm leading-relaxed mb-5">
                &quot;{t.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-black/[0.05]">
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-full font-heading font-700 text-white text-xs shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${t.avatarColor}, ${t.avatarColor}99)`,
                  }}
                >
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-heading font-700 text-gray-900 text-xs md:text-sm truncate">{t.name}</p>
                  <p className="font-body text-ziki-gold text-[10px] mt-0.5 truncate">{t.role}</p>
                </div>
                <span className="font-body text-gray-300 text-[9px] uppercase tracking-wide whitespace-nowrap">
                  {t.eventType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
