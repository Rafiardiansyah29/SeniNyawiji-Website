import { useEffect, useRef } from "react";
import { MapPin, Sparkles, Volume2 } from "lucide-react";
import { assets, profileCardAudio } from "../data/siteData";

export default function Profile({ copy }) {
  const audioRefs = useRef([]);

  useEffect(() => {
    audioRefs.current = profileCardAudio.map((src) => {
      const audio = new Audio(src);
      audio.preload = "auto";
      audio.volume = 0.72;
      return audio;
    });

    return () => {
      audioRefs.current.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
      });
    };
  }, []);

  const playCardAudio = (index) => {
    const selectedAudio = audioRefs.current[index];
    if (!selectedAudio) return;

    audioRefs.current.forEach((audio, audioIndex) => {
      if (audioIndex !== index) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    selectedAudio.currentTime = 0;
    selectedAudio.play().catch(() => {});
  };

  const stopCardAudio = (index) => {
    const selectedAudio = audioRefs.current[index];
    if (!selectedAudio) return;

    selectedAudio.pause();
    selectedAudio.currentTime = 0;
  };

  return (
    <section id="profil" className="section-shell">
      <div className="absolute left-0 top-0 h-full w-px bg-gold/30" />
      <div className="site-container relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="order-2 lg:order-1">
          <div className="luxury-card card-reveal group overflow-hidden rounded-[1.75rem] p-3">
            <div className="relative overflow-hidden rounded-[1.35rem] bg-moss/75">
              <img src={assets.wayang} alt="Panggung wayang santri Majelis Seni Nyawiji" className="h-[300px] w-full object-cover object-center transition duration-700 group-hover:scale-[1.035] sm:h-[340px] lg:h-[390px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/10 to-night/25" />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-night/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-gold backdrop-blur">
                <MapPin size={15} />
                Cilacap
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="section-kicker">{copy.profile.kicker}</p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(1.95rem,2.85vw,3.25rem)] font-bold leading-[1.12] tracking-wide text-bone">
            {copy.profile.title}
          </h2>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-8 text-bone/72">
            {copy.profile.body}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {copy.profile.cards.map(([title, text], index) => (
              <article
                key={title}
                className="group luxury-card card-reveal rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-teal/60"
                style={{ animationDelay: `${index * 90}ms` }}
                onMouseEnter={() => playCardAudio(index)}
                onMouseLeave={() => stopCardAudio(index)}
                onFocus={() => playCardAudio(index)}
                onBlur={() => stopCardAudio(index)}
                tabIndex={0}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-teal/20 bg-teal/10 text-teal transition group-hover:bg-gold/15 group-hover:text-gold">
                    <Sparkles size={18} />
                  </span>
                  <h3 className="font-display text-lg font-bold text-bone">{title}</h3>
                  <Volume2 size={16} className="ml-auto text-gold/50 opacity-70 transition group-hover:text-gold group-hover:opacity-100" aria-hidden="true" />
                </div>
                <p className="text-sm leading-7 text-bone/62">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
