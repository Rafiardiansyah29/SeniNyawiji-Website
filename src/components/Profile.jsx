import { MapPin, Sparkles } from "lucide-react";
import { assets } from "../data/siteData";

export default function Profile({ copy }) {
  return (
    <section id="profil" className="section-shell">
      <div className="absolute left-0 top-0 h-full w-px bg-gold/30" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="order-2 lg:order-1">
          <div className="luxury-card group overflow-hidden rounded-[1.75rem] p-3">
            <div className="relative overflow-hidden rounded-[1.35rem] bg-moss/75 px-5 pt-7">
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-night/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-gold backdrop-blur">
                <MapPin size={15} />
                Cilacap
              </div>
              <img src={assets.santri} alt="Ilustrasi santri dalam Wayang Santri" className="mx-auto h-[360px] w-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,.55)] transition duration-700 group-hover:scale-[1.035] lg:h-[430px]" />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="section-kicker">{copy.profile.kicker}</p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.05rem,3.2vw,3.55rem)] font-bold leading-[1.12] tracking-wide text-bone">
            {copy.profile.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-bone/72">
            {copy.profile.body}
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {copy.profile.cards.map(([title, text], index) => (
              <article key={title} className="group luxury-card rounded-2xl p-5" style={{ animationDelay: `${index * 90}ms` }}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-teal/20 bg-teal/10 text-teal transition group-hover:bg-gold/15 group-hover:text-gold">
                    <Sparkles size={18} />
                  </span>
                  <h3 className="font-display text-lg font-bold text-bone">{title}</h3>
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
