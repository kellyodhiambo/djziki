const PROFILE_IMG =
  "https://readdy.ai/api/search-image?query=elegant%20professional%20female%20DJ%20portrait%20studio%20pink%20purple%20neon%20soft%20lighting%20headphones%20around%20neck%20confident%20stylish%20pose%20white%20light%20background%20editorial%20photography%20high%20fashion&width=500&height=620&seq=djziki_bio_v2&orientation=portrait";

const BiographySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl -m-3 blur-2xl"
                style={{ background: "linear-gradient(135deg, rgba(255,0,110,0.12), rgba(157,78,221,0.12))" }} />
              <div className="relative w-full max-w-[400px] aspect-[5/6] rounded-3xl overflow-hidden border border-black/[0.07]">
                <img src={PROFILE_IMG} alt="DJ ZIKI Portrait" className="w-full h-full object-cover object-top" />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white border border-black/[0.08] rounded-2xl px-5 py-3">
                <p className="font-heading font-900 text-2xl text-gradient-pink-purple leading-none">8+</p>
                <p className="font-body text-gray-400 text-xs mt-0.5">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="font-heading font-600 text-ziki-gold text-[10px] md:text-xs uppercase tracking-[0.35em] mb-4">
              Biography
            </p>
            <h2 className="font-heading font-900 text-3xl md:text-4xl text-gray-900 mb-6 leading-tight">
              More Than Music —<br />
              <span className="text-gradient-pink-purple">A Full Experience</span>
            </h2>

            <div className="space-y-4 font-body text-gray-500 text-sm leading-relaxed">
              <p>
                DJ Ziki is an emerging force in the DJ scene, known for blending Afrohouse, 
                Amapiano, Afrobeats, and international sounds into electrifying, high energy sets. 
                She’s also open and good to playing other music genre. With a passion for music and a natural ability to connect with her audience, she creates an atmosphere that is both vibrant and luxurious.
              </p>
              <p>Her sound is versatile and adaptable, allowing her to perform across a wide range of events from intimate gatherings to high-energy parties and upscale experiences. DJ Ziki’s mission is to not just play music, but to curate unforgettable moments where rhythm, energy and style come together seamlessly.{" "}
                <strong className="text-gray-800 font-600">Afrobeats</strong> and{" "}
                <strong className="text-gray-800 font-600">Amapiano</strong>
              </p>
              <p>
                With a growing presence and a unique vibe that balances hype and elegance, DJ Ziki is quickly becoming a name to watch.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {["Afrobeats", "Amapiano", "Hip-Hop", "House", "R&B", "Dancehall", "Afro Pop"].map((g) => (
                <span key={g}
                  className="font-heading font-600 text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-black/[0.08] text-gray-500 hover:border-ziki-gold/40 hover:text-ziki-gold transition-all duration-300">
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
