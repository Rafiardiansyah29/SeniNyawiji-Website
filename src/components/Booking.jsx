import { CheckCircle2 } from "lucide-react";

export default function Booking({ copy }) {
  return (
    <section className="section-shell">
      <div className="batik-overlay absolute inset-0 opacity-25" />
      <div className="site-container relative">
        <div className="max-w-4xl">
          <p className="section-kicker">{copy.booking.kicker}</p>
          <h2 className="section-title">{copy.booking.title}</h2>
          <p className="mt-4 max-w-3xl text-[0.95rem] leading-8 text-bone/72">
            {copy.booking.body}
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2 lg:items-stretch">
          <div className="luxury-card card-reveal flex h-full flex-col rounded-[1.25rem] p-5">
            <h3 className="font-display text-xl font-bold text-bone">{copy.booking.eventSubtitle}</h3>
            <div className="mt-5 grid flex-1 gap-3">
              {copy.bookingEvents.map((event, index) => (
                <div
                  key={event}
                  className="flex items-start gap-3 border-b border-gold/10 pb-3 last:border-b-0 last:pb-0"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CheckCircle2 className="mt-1 shrink-0 text-teal" size={17} />
                  <span className="text-sm font-bold leading-6 text-bone/78">{event}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="luxury-card card-reveal flex h-full flex-col rounded-[1.25rem] p-5 text-bone">
            <h3 className="font-display text-xl font-bold text-bone">{copy.booking.flowTitle}</h3>
            <ol className="mt-5 grid flex-1 gap-3">
              {copy.booking.steps.map((step, index) => (
                <li key={step} className="flex items-start gap-3 border-b border-gold/10 pb-3 last:border-b-0 last:pb-0">
                  <span className="mt-0.5 shrink-0 text-sm font-black text-gold">{index + 1}.</span>
                  <p className="text-sm leading-6 text-bone/74">{step}</p>
                  </li>
                ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}
