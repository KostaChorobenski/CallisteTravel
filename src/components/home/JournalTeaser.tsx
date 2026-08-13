import { motion } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { journalEntries } from '../../data/journal'

export function JournalTeaser() {
  return (
    <section className="py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Дневник"
            title="Каде вистинските приказни започнуваат"
            description="Кратки записи од патот — луѓето, местата и моментите што не можат да се стават во брошура."
          />

          <Link
            to="/dnevnik"
            className="inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-rust"
          >
            Види го дневникот
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {journalEntries.map((entry, index) => (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group flex flex-col border-t border-ink/15 pt-6"
            >
              <span className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-rust">
                {entry.category}
              </span>

              <h3 className="mt-3 text-xl transition-colors duration-200 group-hover:text-rust">
                {entry.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {entry.excerpt}
              </p>

                <Link
                    to={`/dnevnik/${entry.id}`}
                    className="mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink/40 transition-colors group-hover:text-rust"
                >
                    Прочитај повеќе
                    <ArrowUpRight
                        size={15}
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                </Link>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}