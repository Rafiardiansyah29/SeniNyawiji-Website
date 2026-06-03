import { MessageCircle } from "lucide-react";
import { assets, whatsappUrl } from "../data/siteData";

export default function Contact({ copy }) {
  return (
    <section id="kontak" className="section-shell">
      <div className="site-container relative max-w-[78rem]">
        <div className="premium-frame relative overflow-hidden rounded-[1.35rem] p-6 text-center text-bone sm:rounded-[1.75rem] sm:p-11">
          <div className="batik-overlay absolute inset-0 opacity-25" />
          <img src={assets.lineGunungan} alt="" className="absolute -left-32 -top-32 w-80 opacity-[0.055] sm:w-96" />
          <img src={assets.lineGunungan} alt="" className="absolute -bottom-36 -right-28 w-80 opacity-[0.055] sm:w-[28rem]" />
          <div className="absolute inset-x-10 top-0 h-px bg-gold/35" />

          <div className="relative mx-auto max-w-3xl">
            <p className="section-kicker">{copy.common.directContact}</p>
            <h2 className="mt-4 font-display text-[2rem] font-black leading-tight sm:text-[2.75rem]">{copy.contact.title}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-[0.95rem] leading-8 text-bone/72">
              {copy.contact.body}
            </p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="relative mt-8 inline-flex max-w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gold px-6 py-3.5 text-center text-sm font-black uppercase tracking-wide text-night shadow-gold transition hover:-translate-y-0.5 hover:bg-bone sm:px-7">
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




