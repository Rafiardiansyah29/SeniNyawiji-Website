import { CalendarDays, Music2 } from "lucide-react";
export default function Booking({ copy }) {
  return (
    <section className="section-shell">
      <div className="batik-overlay absolute inset-0 opacity-25" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_0.82fr] lg:px-8">
        <div>
          <p className="section-kicker">{copy.booking.kicker}</p>
          <h2 className="section-title">{copy.booking.title}</h2>
          <p className="mt-7 text-base leading-8 text-bone/72">
            {copy.booking.body}
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {copy.bookingEvents.map((event) => (
              <div key={event} className="luxury-card flex items-start gap-4 rounded-2xl p-5 transition hover:border-gold/55">
                <CalendarDays className="mt-1 shrink-0 text-teal" size={21} />
                <span className="text-sm font-bold leading-6 text-bone/78">{event}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="premium-frame relative overflow-hidden rounded-[1.75rem] p-8 text-bone">
          <div className="absolute inset-x-0 top-0 h-px bg-gold/35" />
          <div className="absolute bottom-0 left-8 right-8 h-px bg-teal/20" />
          <div className="relative">
            <Music2 className="text-gold" size={42} />
            <h3 className="mt-6 font-display text-3xl font-bold">{copy.booking.flowTitle}</h3>
            <ol className="mt-7 space-y-6 text-sm leading-7 text-bone/72">
              {copy.booking.steps.map((step, index) => (
                <li key={step}><strong className="mr-2 text-gold">{String(index + 1).padStart(2, "0")}.</strong> {step}</li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </section>
  );
}



