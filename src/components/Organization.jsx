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
      <div className="absolute right-8 top-24 hidden text-[0.68rem] font-black uppercase tracking-[0.65em] text-gold/35 vertical-word xl:block">
        Struktur
      </div>

      <div className="site-container relative">
        <div className="max-w-3xl">
          <p className="section-kicker">{copy.organization.kicker}</p>
          <h2 className="section-title">{copy.organization.title}</h2>
          <p className="mt-5 text-[0.95rem] leading-8 text-bone/65">
            {copy.organization.body}
          </p>
        </div>

        <div className="relative mt-10">
          <div className="pointer-events-none absolute left-1/2 top-[calc(100%+0.65rem)] hidden h-8 w-[2px] -translate-x-1/2 rounded-full bg-gold/80 shadow-[0_0_12px_rgba(201,166,70,0.38)] lg:block" />
          <div className="pointer-events-none absolute left-[calc(25%+0.7rem)] top-[calc(100%+3.65rem)] hidden h-[2px] w-[calc(25%-1.4rem)] rounded-full bg-gold/80 shadow-[0_0_12px_rgba(201,166,70,0.38)] lg:block" />
          <div className="pointer-events-none absolute left-[calc(50%+0.7rem)] top-[calc(100%+3.65rem)] hidden h-[2px] w-[calc(25%-1.4rem)] rounded-full bg-gold/80 shadow-[0_0_12px_rgba(201,166,70,0.38)] lg:block" />
          <div className="pointer-events-none absolute left-1/4 top-[calc(100%+4.35rem)] hidden h-6 w-[2px] bg-gold/80 shadow-[0_0_12px_rgba(201,166,70,0.38)] lg:block" />
          <div className="pointer-events-none absolute right-1/4 top-[calc(100%+4.35rem)] hidden h-6 w-[2px] bg-gold/80 shadow-[0_0_12px_rgba(201,166,70,0.38)] lg:block" />
          <div className="pointer-events-none absolute left-1/2 top-[calc(100%+3.65rem)] z-10 hidden h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-night lg:block" />
          <div className="pointer-events-none absolute left-1/2 top-[calc(100%+3.65rem)] z-20 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-night bg-gold shadow-[0_0_14px_rgba(201,166,70,0.48)] lg:block" />
          <div className="pointer-events-none absolute left-1/4 top-[calc(100%+3.65rem)] z-10 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-night lg:block" />
          <div className="pointer-events-none absolute left-1/4 top-[calc(100%+3.65rem)] z-20 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-night bg-gold shadow-[0_0_12px_rgba(201,166,70,0.42)] lg:block" />
          <div className="pointer-events-none absolute right-1/4 top-[calc(100%+3.65rem)] z-10 hidden h-6 w-6 translate-x-1/2 -translate-y-1/2 rounded-full bg-night lg:block" />
          <div className="pointer-events-none absolute right-1/4 top-[calc(100%+3.65rem)] z-20 hidden h-3 w-3 translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-night bg-gold shadow-[0_0_12px_rgba(201,166,70,0.42)] lg:block" />

          <div className="grid gap-5 lg:grid-cols-2">
            {organizationLeaders.map((person, index) => (
              <article key={person.role} className="group luxury-card card-reveal relative overflow-hidden rounded-[1.75rem] p-5 sm:p-6" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="absolute inset-x-6 top-0 h-px bg-teal/25" />
                <div className="relative grid gap-5 sm:grid-cols-[10rem_1fr] sm:items-center">
                  <PersonPhoto
                    src={person.photo}
                    alt={person.name}
                    className="mx-auto aspect-[4/5] w-full max-w-[13rem] rounded-[1.2rem] sm:max-w-none"
                    imageClassName="object-cover object-center group-hover:scale-105"
                  />
                  <div>
                    <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-2xl border border-gold/30 bg-gold/10 text-gold shadow-gold">
                      <Crown size={24} />
                    </div>
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-teal">{copy.organization.leaderLabels[index] || copy.organization.leaderLabels[1]}</p>
                    <h3 className="mt-2 font-display text-[1.35rem] font-bold text-bone">{person.name}</h3>
                    <p className="mt-1 text-sm font-bold text-gold">{copy.organization.leaderRoles[index] || person.role}</p>
                    <p className="mt-3 text-sm leading-7 text-bone/62">{copy.organization.leaderNotes[index] || person.note}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="premium-frame relative mt-20 overflow-visible rounded-[1.75rem] p-5 sm:p-6">
          <div className="pointer-events-none absolute -top-9 left-1/4 hidden h-9 w-[2px] bg-gold/80 shadow-[0_0_12px_rgba(201,166,70,0.38)] lg:block" />
          <div className="pointer-events-none absolute -top-9 right-1/4 hidden h-9 w-[2px] bg-gold/80 shadow-[0_0_12px_rgba(201,166,70,0.38)] lg:block" />

          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="section-kicker">{copy.common.performanceTeam}</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-bone sm:text-[1.7rem]">{copy.common.artisticOps}</h3>
            </div>
            <p className="max-w-sm text-sm leading-6 text-bone/55">{copy.organization.teamNote}</p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute left-[calc(12.5%+0.65rem)] top-0 hidden h-[2px] w-[calc(25%-1.3rem)] rounded-full bg-gold/75 shadow-[0_0_12px_rgba(201,166,70,0.34)] lg:block" />
            <div className="pointer-events-none absolute left-[calc(37.5%+0.65rem)] top-0 hidden h-[2px] w-[calc(25%-1.3rem)] rounded-full bg-gold/75 shadow-[0_0_12px_rgba(201,166,70,0.34)] lg:block" />
            <div className="pointer-events-none absolute left-[calc(62.5%+0.65rem)] top-0 hidden h-[2px] w-[calc(25%-1.3rem)] rounded-full bg-gold/75 shadow-[0_0_12px_rgba(201,166,70,0.34)] lg:block" />
            <div className="pointer-events-none absolute left-[12.5%] top-3 hidden h-5 w-[2px] -translate-x-1/2 bg-gold/75 shadow-[0_0_12px_rgba(201,166,70,0.34)] lg:block" />
            <div className="pointer-events-none absolute left-[37.5%] top-3 hidden h-5 w-[2px] -translate-x-1/2 bg-gold/75 shadow-[0_0_12px_rgba(201,166,70,0.34)] lg:block" />
            <div className="pointer-events-none absolute left-[62.5%] top-3 hidden h-5 w-[2px] -translate-x-1/2 bg-gold/75 shadow-[0_0_12px_rgba(201,166,70,0.34)] lg:block" />
            <div className="pointer-events-none absolute left-[87.5%] top-3 hidden h-5 w-[2px] -translate-x-1/2 bg-gold/75 shadow-[0_0_12px_rgba(201,166,70,0.34)] lg:block" />
            <div className="pointer-events-none absolute left-[12.5%] top-0 z-10 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-night lg:block" />
            <div className="pointer-events-none absolute left-[12.5%] top-0 z-20 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-night bg-gold shadow-[0_0_12px_rgba(201,166,70,0.42)] lg:block" />
            <div className="pointer-events-none absolute left-[37.5%] top-0 z-10 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-night lg:block" />
            <div className="pointer-events-none absolute left-[37.5%] top-0 z-20 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-night bg-gold shadow-[0_0_12px_rgba(201,166,70,0.42)] lg:block" />
            <div className="pointer-events-none absolute left-[62.5%] top-0 z-10 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-night lg:block" />
            <div className="pointer-events-none absolute left-[62.5%] top-0 z-20 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-night bg-gold shadow-[0_0_12px_rgba(201,166,70,0.42)] lg:block" />
            <div className="pointer-events-none absolute left-[87.5%] top-0 z-10 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-night lg:block" />
            <div className="pointer-events-none absolute left-[87.5%] top-0 z-20 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-night bg-gold shadow-[0_0_12px_rgba(201,166,70,0.42)] lg:block" />
            <div className="grid gap-4 pt-0 sm:grid-cols-2 lg:grid-cols-4 lg:pt-8">
              {performanceMembers.map((member, index) => {
                const localizedMember = copy.organization.performanceMembers[index] || [member.name, member.role, member.group];
                const [name, role, group] = localizedMember;
                const Icon = roleIcons[member.group] || Users;
                return (
                  <article key={`${member.name}-${member.role}`} className="group luxury-card card-reveal relative flex h-full flex-col overflow-hidden rounded-2xl border border-gold/15 bg-night/55 transition hover:-translate-y-1 hover:border-teal/45" style={{ animationDelay: `${index * 75}ms` }}>
                    <PersonPhoto
                      src={member.photo}
                      alt={name}
                      className="mx-auto aspect-[4/3] w-full max-w-[15rem] rounded-b-2xl rounded-t-none border-x-0 border-t-0 bg-moss/55 sm:max-w-none sm:rounded-none"
                      imageClassName={`object-cover ${member.imagePosition || "object-center"} group-hover:scale-105`}
                    />
                    <div className="p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal/10 text-teal">
                          <Icon size={20} />
                        </span>
                        <span className="rounded-full border border-gold/20 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-gold/75">{group}</span>
                      </div>
                      <h4 className="font-display text-lg font-bold text-bone">{name}</h4>
                      <p className="mt-2 text-sm font-semibold text-bone/58">{role}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
