import { MessageCircle } from "lucide-react";
import { assets, whatsappUrl } from "../data/siteData";

export default function Contact({ copy }) {
  return (
    <section id="kontak" className="section-shell">
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="premium-frame relative overflow-hidden rounded-[1.75rem] p-8 text-center text-bone sm:p-14">
          <div className="batik-overlay absolute inset-0 opacity-25" />
          <img src={assets.lineGunungan} alt="" className="absolute -left-28 -top-32 w-96 opacity-[0.055]" />
          <img src={assets.lineGunungan} alt="" className="absolute -bottom-36 -right-24 w-[28rem] opacity-[0.055]" />
          <div className="absolute inset-x-10 top-0 h-px bg-gold/35" />

          <div className="relative mx-auto max-w-3xl">
            <p className="section-kicker">{copy.common.directContact}</p>
            <h2 className="mt-4 font-display text-3xl font-black leading-tight sm:text-5xl">{copy.contact.title}</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-bone/72">
              {copy.contact.body}
            </p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="relative mt-9 inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gold px-8 py-4 text-sm font-black uppercase tracking-wide text-night shadow-gold transition hover:-translate-y-0.5 hover:bg-bone">
              <span className="absolute inset-y-0 left-0 w-1/2 bg-white/35 blur-xl animate-shimmer" />
              <MessageCircle size={20} />
              {copy.contact.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}




