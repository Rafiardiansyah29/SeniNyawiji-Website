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

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
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

        <div className="premium-frame mt-12 overflow-hidden rounded-[1.75rem] p-5 sm:p-6">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="section-kicker">{copy.common.performanceTeam}</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-bone sm:text-[1.7rem]">{copy.common.artisticOps}</h3>
            </div>
            <p className="max-w-sm text-sm leading-6 text-bone/55">{copy.organization.teamNote}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {performanceMembers.map((member, index) => {
              const localizedMember = copy.organization.performanceMembers[index] || [member.name, member.role, member.group];
              const [name, role, group] = localizedMember;
              const Icon = roleIcons[member.group] || Users;
              return (
                <article key={`${member.name}-${member.role}`} className="group luxury-card card-reveal flex h-full flex-col overflow-hidden rounded-2xl border border-gold/15 bg-night/55 transition hover:-translate-y-1 hover:border-teal/45" style={{ animationDelay: `${index * 75}ms` }}>
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
    </section>
  );
}


