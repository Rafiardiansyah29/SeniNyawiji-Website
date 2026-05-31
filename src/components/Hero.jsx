import { MessageCircle, Play } from "lucide-react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { assets, socialMedia, whatsappUrl } from "../data/siteData";

const socialIcons = {
  TikTok: FaTiktok,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
};

export default function Hero({ copy }) {
  return (
    <section id="home" className="heritage-surface relative isolate min-h-screen overflow-hidden pt-20 text-bone">
      <div className="absolute left-1/2 top-[14%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-teal/10 opacity-40 animate-breathe" />
      <div className="absolute bottom-16 left-8 hidden text-[0.68rem] font-black uppercase tracking-[0.7em] text-gold/35 vertical-word lg:block">Nyawiji</div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gold/10" />

      <div className="relative mx-auto min-h-[calc(100vh-5rem)] max-w-7xl px-5 py-8 lg:px-8">
        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-9 lg:grid-cols-[0.86fr_1.08fr_0.42fr]">
          <div className="z-10 self-center pt-8 lg:-translate-y-8 lg:pt-0">
            <p className="section-kicker reveal-up">{copy.hero.kicker}</p>
            <h1 className="reveal-up stagger-1 mt-5 max-w-xl font-display text-[clamp(3rem,7vw,6.8rem)] font-black leading-[0.9] tracking-wide text-bone">
              NYAWIJI
            </h1>
            <p className="reveal-up stagger-2 mt-6 max-w-lg font-display text-2xl leading-9 text-gold sm:text-3xl">
              {copy.hero.subtitle}
            </p>
            <div className="gold-line my-7 max-w-sm" />
            <p className="reveal-up stagger-3 max-w-md text-[0.95rem] leading-8 text-bone/66">
              {copy.hero.body}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-teal px-6 py-3.5 text-sm font-black uppercase tracking-wide text-night shadow-teal transition hover:bg-bone">
                <span className="absolute inset-y-0 left-0 w-1/2 bg-white/35 blur-xl animate-shimmer" />
                <MessageCircle size={19} />
                {copy.common.booking}
              </a>
              <a href="#galeri" className="inline-flex items-center justify-center gap-3 rounded-full border border-gold/30 bg-bone/[0.045] px-6 py-3.5 text-sm font-bold text-bone/78 backdrop-blur transition hover:bg-gold/10 hover:text-gold">
                <Play size={18} />
                {copy.common.gallery}
              </a>
            </div>
          </div>

          <div className="logo-aura relative z-10 mx-auto flex w-full max-w-[620px] items-center justify-center py-6">
            <div className="absolute h-[36rem] w-[36rem] rounded-full border border-gold/10 animate-orbit">
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-teal shadow-[0_0_24px_rgba(32,199,201,.9)]" />
              <span className="absolute bottom-12 right-10 h-2 w-2 rounded-full bg-gold shadow-[0_0_24px_rgba(201,166,70,.9)]" />
            </div>
            <div className="wayang-stage-card group premium-frame relative w-full overflow-hidden rounded-[2rem] p-6 transition duration-500 hover:border-teal/45">
              <div className="absolute inset-x-8 top-0 h-px bg-gold/45" />
              <img src={assets.gunungan} alt="Logo Gunungan Majelis Seni Nyawiji" className="wayang-puppet relative mx-auto max-h-[620px] w-full object-contain drop-shadow-[0_34px_48px_rgba(0,0,0,0.82)] transition duration-700 group-hover:drop-shadow-[0_0_42px_rgba(32,199,201,0.3)]" />
            </div>
          </div>

          <div className="z-10 hidden gap-3 self-center lg:grid">
            {socialMedia.map((item) => {
              const Icon = socialIcons[item.platform] || FaInstagram;
              return (
                <a key={item.platform} href={item.href} target="_blank" rel="noreferrer" aria-label={item.platform} title={item.platform} className="luxury-card group grid h-16 w-16 place-items-center rounded-2xl p-4">
                  <Icon className="text-teal transition duration-300 group-hover:scale-110 group-hover:text-gold" size={28} />
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
