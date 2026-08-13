import { ArrowUpRight } from '@phosphor-icons/react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { journalEntries } from '../../data/journal'

export function JournalTeaser() {
    return (
        <section className="py-16 sm:py-20 md:py-28">
            <Container className="flex flex-col gap-10 sm:gap-12">
                <SectionHeading
                    eyebrow="Дневник"
                    title="Каде вистинските приказни започнуваат"
                    description="Кратки записи од патот — луѓето, местата и моментите што не можат да се стават во брошура."
                />

                <div className="grid gap-8 md:grid-cols-3 md:gap-6">
                    {journalEntries.map((entry) => (
                        <article
                            key={entry.id}
                            className="group flex flex-col gap-3 border-t border-ink/15 pt-5 transition-colors duration-300 hover:border-rust sm:pt-6"
                        >
              <span className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-rust">
                {entry.category}
              </span>

                            <h3 className="text-xl leading-snug">
                                {entry.title}
                            </h3>

                            <p className="text-sm leading-relaxed text-ink-soft">
                                {entry.excerpt}
                            </p>

                            <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-ink-soft transition-colors group-hover:text-rust">
                Прочитај
                <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    )
}