import { Languages, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { assets, whatsappUrl } from "../data/siteData";

export default function Header({ lang, setLang, copy }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const navItems = [
    { label: copy.nav.home, href: "#home" },
    { label: copy.nav.profile, href: "#profil" },
    { label: copy.nav.organization, href: "#struktur" },
    { label: copy.nav.gallery, href: "#galeri" },
    { label: copy.nav.contact, href: "#kontak" },
  ];
  useEffect(() => {
    const updateActiveSection = () => {
      const offset = 130;
      const current = navItems.reduce((active, item) => {
        const section = document.querySelector(item.href);
        if (!section) return active;
        return section.offsetTop - offset <= window.scrollY ? item.href : active;
      }, "#home");

      setActiveHref(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [copy]);

  const getNavClass = (href, isMobile = false) => {
    const isActive = activeHref === href;
    if (isMobile) {
      return `rounded-xl px-4 py-3 text-sm font-bold transition ${isActive ? "bg-teal/15 text-teal shadow-[inset_0_0_18px_rgba(32,199,201,0.08)]" : "text-bone/72 hover:bg-teal/10 hover:text-teal"}`;
    }

    return `rounded-full px-4 py-2 text-[0.82rem] font-semibold transition xl:px-5 xl:text-sm ${isActive ? "bg-teal/15 text-teal shadow-[inset_0_0_18px_rgba(32,199,201,0.08)]" : "text-bone/64 hover:bg-teal/10 hover:text-teal"}`;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/10 bg-night/72 shadow-2xl shadow-black/20 backdrop-blur-2xl">
      <nav className="site-container flex h-[4.5rem] items-center justify-between">
        <a href="#home" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" onClick={() => setIsOpen(false)}>
          <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-visible sm:h-12 sm:w-12 xl:h-14 xl:w-14">
            <img src={assets.gunungan} alt="Logo Majelis Seni Nyawiji" className="relative h-11 w-11 object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,.65)] transition duration-300 group-hover:scale-105 sm:h-12 sm:w-12 xl:h-14 xl:w-14" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-[0.9rem] font-bold leading-tight tracking-[0.04em] text-bone sm:text-[0.98rem] xl:text-[1.05rem]">Majelis Seni Nyawiji</span>
            <span className="hidden text-[0.68rem] font-bold uppercase tracking-[0.24em] text-gold/70 sm:block">{copy.footer.tagline}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-gold/15 bg-bone/[0.035] p-1.5 shadow-[inset_0_1px_0_rgba(239,230,209,.06)] lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setActiveHref(item.href)} className={getNavClass(item.href)}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <button type="button" onClick={() => setLang(lang === "id" ? "en" : "id")} className="inline-flex h-10 items-center gap-2 rounded-full border border-gold/20 bg-bone/[0.035] px-3.5 text-sm font-black text-bone/70 hover:border-teal/45 hover:text-teal xl:h-11 xl:px-4" aria-label="Switch language">
            <Languages size={17} />
            {lang === "id" ? "ID" : "EN"}
          </button>
        </div>

        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-bold text-night shadow-teal transition hover:bg-bone min-[1180px]:inline-flex">
          <MessageCircle size={17} />
          {copy.common.booking}
        </a>

        <button className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/25 bg-bone/[0.035] text-teal lg:hidden" aria-label="Menu" aria-expanded={isOpen} onClick={() => setIsOpen((value) => !value)}>
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <div className={`mx-4 overflow-hidden rounded-2xl border border-gold/15 bg-night/92 shadow-luxury backdrop-blur-2xl transition-all duration-300 sm:mx-5 lg:hidden ${isOpen ? "mb-4 max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="grid gap-1 p-2">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => { setActiveHref(item.href); setIsOpen(false); }} className={getNavClass(item.href, true)}>
              {item.label}
            </a>
          ))}
          <div className="grid gap-2 pt-1">
            <button type="button" onClick={() => setLang(lang === "id" ? "en" : "id")} className="inline-flex items-center justify-center gap-2 rounded-xl border border-gold/15 px-4 py-3 text-sm font-black text-bone/72 hover:border-teal/45 hover:text-teal">
              <Languages size={17} />
              {lang === "id" ? "ID" : "EN"}
            </button>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)} className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-4 py-3 text-sm font-black text-night shadow-teal hover:bg-bone">
            <MessageCircle size={17} />
            {copy.common.booking}
          </a>
        </div>
      </div>
    </header>
  );
}
