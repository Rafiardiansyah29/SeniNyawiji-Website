import { ArrowUp, Mail, MapPin, MessageCircle, Music2 } from "lucide-react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { socialMedia, whatsappUrl } from "../data/siteData";

const socialIcons = {
  Instagram: FaInstagram,
  TikTok: FaTiktok,
  YouTube: FaYoutube,
};

export default function Footer({ copy }) {
  const navItems = [
    { label: copy.nav.home, href: "#home" },
    { label: copy.nav.profile, href: "#profil" },
    { label: copy.nav.organization, href: "#struktur" },
    { label: copy.nav.gallery, href: "#galeri" },
    { label: copy.nav.contact, href: "#kontak" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-black px-5 py-12 text-bone lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-teal/35" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.7fr_0.9fr]">
        <div className="max-w-xl">
          <p className="section-kicker">Majelis Seni</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-gold">Nyawiji</h2>
          <p className="mt-4 text-sm leading-7 text-bone/62">{copy.footer.body}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-bold text-night shadow-teal hover:bg-bone">
              <MessageCircle size={17} />
              {copy.common.booking}
            </a>
            <a href="#home" className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/25 px-5 py-3 text-sm font-bold text-bone/75 hover:border-teal/55 hover:text-teal">
              <ArrowUp size={17} />
              {copy.common.backTop}
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-gold/80">{copy.common.navigation}</h3>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-semibold text-bone/60 hover:text-teal">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-gold/80">{copy.common.contactChannels}</h3>
          <div className="mt-5 space-y-3 text-sm text-bone/62">
            <p className="flex items-start gap-3 leading-6">
              <MapPin size={17} className="mt-1 shrink-0 text-teal" />
              {copy.footer.location}
            </p>
            <p className="flex items-center gap-3">
              <Mail size={17} className="shrink-0 text-teal" />
              kontak@majelisseninyawiji.id
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {socialMedia.map((item) => {
              const Icon = socialIcons[item.platform] || Music2;
              return (
                <a key={item.platform} href={item.href} target="_blank" rel="noreferrer" aria-label={item.platform} title={item.handle} className="grid h-11 w-11 place-items-center rounded-full border border-gold/25 bg-bone/[0.035] text-gold transition hover:-translate-y-1 hover:border-teal hover:bg-teal hover:text-night">
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-bone/10 pt-6 text-sm text-bone/45 sm:flex-row sm:items-center sm:justify-between">
        <span>&copy; 2026 Majelis Seni Nyawiji. {copy.common.rights}</span>
        <span>{copy.footer.tagline}</span>
      </div>
    </footer>
  );
}
