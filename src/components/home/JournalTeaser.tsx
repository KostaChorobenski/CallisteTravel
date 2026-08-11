import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { journalEntries } from '../../data/journal'

export function JournalTeaser() {
  return (
    <section className="py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Дневник"
          title="Каде вистинските приказни започнуваат"
          description="Кратки записи од патот — луѓето, местата и моментите што не можат да се стават во брошура."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {journalEntries.map((entry) => (
            <article
              key={entry.id}
              className="flex flex-col gap-3 border-t border-ink/15 pt-6"
            >
              <span className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-rust">
                {entry.category}
              </span>
              <h3 className="text-xl">{entry.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                {entry.excerpt}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
