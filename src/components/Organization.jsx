import { Crown, Mic2, Music2, ScrollText, ShieldCheck, Users } from "lucide-react";
import { organizationLeaders, performanceMembers } from "../data/siteData";

const roleIcons = {
  Pakeliran: Crown,
  Vokal: Mic2,
  Barzanji: Mic2,
  Hadrah: Music2,
  Musik: Music2,
  "Tim Kreatif": ScrollText,
  Produksi: ScrollText,
  Media: ShieldCheck,
  Operasional: Users,
};

function PersonPhoto({ src, alt, className = "", imageClassName = "object-contain p-3 group-hover:scale-110" }) {
  return (
    <div className={`relative overflow-hidden border border-gold/20 bg-night/65 ${className}`}>
      <img src={src} alt={alt} className={`h-full w-full transition duration-700 ${imageClassName}`} />
      <div className="absolute inset-0 border border-teal/0 transition group-hover:border-teal/50" />
    </div>
  );
}

export default function Organization({ copy }) {
  return (
    <section id="struktur" className="section-shell">
      <div className="absolute inset-x-0 top-0 h-px bg-teal/35" />
      <div className="absolute right-8 top-24 hidden text-[0.68rem] font-black uppercase tracking-[0.65em] text-gold/35 vertical-word lg:block">
        Struktur
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="section-kicker">{copy.organization.kicker}</p>
          <h2 className="section-title">{copy.organization.title}</h2>
          <p className="mt-6 text-base leading-8 text-bone/65">
            {copy.organization.body}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {organizationLeaders.map((person, index) => (
            <article key={person.role} className="group luxury-card relative overflow-hidden rounded-[1.75rem] p-5 sm:p-6">
              <div className="absolute inset-x-6 top-0 h-px bg-teal/25" />
              <div className="relative grid gap-5 sm:grid-cols-[11rem_1fr] sm:items-center">
                <PersonPhoto
                  src={person.photo}
                  alt={person.name}
                  className="aspect-[4/5] rounded-[1.2rem]"
                  imageClassName="object-cover object-center group-hover:scale-105"
                />
                <div>
                  <div className="mb-5 inline-grid h-14 w-14 place-items-center rounded-2xl border border-gold/30 bg-gold/10 text-gold shadow-gold">
                    <Crown size={26} />
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-teal">{copy.organization.leaderLabels[index] || copy.organization.leaderLabels[1]}</p>
                  <h3 className="mt-3 font-display text-2xl font-bold text-bone">{person.name}</h3>
                  <p className="mt-1 text-sm font-bold text-gold">{person.role}</p>
                  <p className="mt-4 text-sm leading-7 text-bone/62">{person.note}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="premium-frame mt-14 overflow-hidden rounded-[1.75rem] p-5 sm:p-7">
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="section-kicker">{copy.common.performanceTeam}</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-bone sm:text-3xl">{copy.common.artisticOps}</h3>
            </div>
            <p className="max-w-sm text-sm leading-6 text-bone/55">{copy.organization.teamNote}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {performanceMembers.map((member) => {
              const Icon = roleIcons[member.group] || Users;
              return (
                <article key={`${member.name}-${member.role}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gold/15 bg-night/55 transition hover:-translate-y-1 hover:border-teal/45">
                  <PersonPhoto
                    src={member.photo}
                    alt={member.name}
                    className="aspect-[4/3] rounded-none border-x-0 border-t-0 bg-moss/55"
                    imageClassName="object-cover object-center group-hover:scale-105"
                  />
                  <div className="p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal/10 text-teal">
                        <Icon size={20} />
                      </span>
                      <span className="rounded-full border border-gold/20 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-gold/75">{member.group}</span>
                    </div>
                    <h4 className="font-display text-lg font-bold text-bone">{member.name}</h4>
                    <p className="mt-2 text-sm font-semibold text-bone/58">{member.role}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


