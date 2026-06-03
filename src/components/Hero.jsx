import { useEffect, useState } from "react";
import { MessageCircle, Play } from "lucide-react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { assets, socialMedia, whatsappUrl } from "../data/siteData";

const socialIcons = {
  TikTok: FaTiktok,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
};

function TypewriterText({ text, isActive = false, className = "" }) {
  return (
    <span className={`typewriter-text ${isActive ? "is-active" : ""} ${className}`} aria-label={text}>
      {text}
    </span>
  );
}

export default function Hero({ copy }) {
  const [typedHero, setTypedHero] = useState({
    kicker: "",
    title: "",
    subtitle: "",
  });
  const [activeTypedLine, setActiveTypedLine] = useState("kicker");

  useEffect(() => {
    let isCancelled = false;
    const wait = (duration) => new Promise((resolve) => window.setTimeout(resolve, duration));

    const typeInto = async (key, text, speed) => {
      setActiveTypedLine(key);
      for (let index = 1; index <= text.length; index += 1) {
        if (isCancelled) return;
        setTypedHero((current) => ({ ...current, [key]: text.slice(0, index) }));
        await wait(speed);
      }
    };

    const runSequence = async () => {
      while (!isCancelled) {
        setTypedHero({ kicker: "", title: "", subtitle: "" });
        await wait(350);
        await typeInto("kicker", copy.hero.kicker, 70);
        await wait(280);
        await typeInto("title", "NYAWIJI", 95);
        await wait(320);
        await typeInto("subtitle", copy.hero.subtitle, 48);
        setActiveTypedLine("subtitle");
        await wait(2600);
      }
    };

    runSequence();
    return () => {
      isCancelled = true;
    };
  }, [copy.hero.kicker, copy.hero.subtitle]);

  return (
    <section id="home" className="heritage-surface relative isolate min-h-screen overflow-hidden pt-[4.5rem] text-bone">
      <div className="absolute left-1/2 top-[18%] h-[20rem] w-[20rem] -translate-x-1/2 rounded-full border border-teal/10 opacity-40 animate-breathe sm:h-[28rem] sm:w-[28rem] lg:top-[14%] lg:h-[31rem] lg:w-[31rem] xl:h-[34rem] xl:w-[34rem]" />
      <div className="absolute bottom-16 left-12 hidden text-[0.68rem] font-black uppercase tracking-[0.7em] text-gold/35 vertical-word xl:block xl:left-14">Nyawiji</div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gold/10" />

      <div className="site-container relative py-10 sm:py-12 lg:min-h-[calc(100vh-4.5rem)] lg:py-6 xl:py-8">
        <div className="grid items-center gap-9 lg:min-h-[calc(100vh-7.25rem)] lg:grid-cols-[0.82fr_1fr_0.3fr] xl:gap-10">
          <div className="z-10 self-center text-center lg:-translate-y-5 lg:text-left xl:-translate-y-8">
            <p className="section-kicker reveal-up">
              <TypewriterText text={typedHero.kicker} isActive={activeTypedLine === "kicker"} />
            </p>
            <h1 className="reveal-up stagger-1 mx-auto mt-4 max-w-xl font-display text-[clamp(3rem,16vw,5rem)] font-black leading-[0.9] tracking-wide text-bone sm:text-[clamp(4.4rem,12vw,6rem)] lg:mx-0 lg:text-[clamp(3rem,6.2vw,6.1rem)] xl:mt-5">
              <TypewriterText text={typedHero.title} isActive={activeTypedLine === "title"} />
            </h1>
            <p className="hero-subtitle reveal-up stagger-2 mx-auto mt-5 max-w-lg font-display text-[1.45rem] leading-8 text-gold sm:text-[1.8rem] sm:leading-9 lg:mx-0 xl:mt-6">
              <TypewriterText text={typedHero.subtitle} isActive={activeTypedLine === "subtitle"} />
            </p>
            <div className="gold-line mx-auto my-6 max-w-sm lg:mx-0 xl:my-7" />
            <p className="reveal-up stagger-3 mx-auto max-w-md whitespace-pre-line text-[0.9rem] leading-7 text-bone/66 lg:mx-0 xl:text-[0.95rem] xl:leading-8">
              {copy.hero.body}
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start lg:pl-4 xl:mt-8">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-teal px-6 py-3 text-sm font-black uppercase tracking-wide text-night shadow-teal transition hover:bg-bone xl:py-3.5">
                <span className="absolute inset-y-0 left-0 w-1/2 bg-white/35 blur-xl animate-shimmer" />
                <MessageCircle size={19} />
                {copy.common.booking}
              </a>
              <a href="#galeri" className="inline-flex items-center justify-center gap-3 rounded-full border border-gold/30 bg-bone/[0.045] px-6 py-3 text-sm font-bold text-bone/78 backdrop-blur transition hover:bg-gold/10 hover:text-gold xl:py-3.5">
                <Play size={18} />
                {copy.common.gallery}
              </a>
            </div>
          </div>

          <div className="logo-aura relative z-10 mx-auto flex w-full max-w-[min(33rem,92vw)] items-center justify-center py-2 sm:py-4 lg:max-w-[560px] lg:py-5 xl:max-w-[620px] xl:py-6">
            <div className="absolute h-[22rem] w-[22rem] rounded-full border border-gold/10 animate-orbit sm:h-[30rem] sm:w-[30rem] lg:h-[32rem] lg:w-[32rem] xl:h-[36rem] xl:w-[36rem]">
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-teal shadow-[0_0_24px_rgba(32,199,201,.9)]" />
              <span className="absolute bottom-12 right-10 h-2 w-2 rounded-full bg-gold shadow-[0_0_24px_rgba(201,166,70,.9)]" />
            </div>
            <div className="wayang-stage-card group premium-frame relative w-full overflow-hidden rounded-[1.35rem] p-4 transition duration-500 hover:border-teal/45 sm:rounded-[1.75rem] sm:p-5 xl:rounded-[2rem] xl:p-6">
              <div className="absolute inset-x-8 top-0 h-px bg-gold/45" />
              <img src={assets.gunungan} alt="Logo Gunungan Majelis Seni Nyawiji" className="wayang-puppet relative mx-auto max-h-[min(34rem,62vh)] w-full object-contain drop-shadow-[0_34px_48px_rgba(0,0,0,0.82)] transition duration-700 group-hover:drop-shadow-[0_0_42px_rgba(32,199,201,0.3)] lg:max-h-[555px] xl:max-h-[620px]" />
            </div>
          </div>

          <div className="z-10 hidden gap-3 self-center lg:grid">
            {socialMedia.map((item) => {
              const Icon = socialIcons[item.platform] || FaInstagram;
              return (
                <a key={item.platform} href={item.href} target="_blank" rel="noreferrer" aria-label={item.platform} title={item.platform} className="luxury-card group grid h-14 w-14 place-items-center rounded-2xl p-3.5 xl:h-16 xl:w-16 xl:p-4">
                  <Icon className="text-teal transition duration-300 group-hover:scale-110 group-hover:text-gold" size={26} />
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
