import { motion } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { journalEntries } from '../data/journal'

export function Journal() {
  return (
      <main>
        <section className="border-b border-ink/10 bg-cream-soft">
          <Container className="py-24 md:py-32">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-4xl"
            >
            <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
              Дневник
            </span>

              <h1 className="mt-5 text-5xl leading-[1.05] md:text-7xl">
                Приказни од
                <span className="text-rust"> патот.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
                Места, луѓе и моменти што заслужуваат да бидат запаметени.
                Записи од светот што постои подалеку од туристичките рути.
              </p>
            </motion.div>
          </Container>
        </section>

        <section className="py-20 md:py-28">
          <Container>
            <div className="grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {journalEntries.map((entry, index) => (
                  <motion.article
                      key={entry.id}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.5, delay: index * 0.06 }}
                      className="group flex flex-col border-t border-ink/15 pt-6"
                  >
                    <div className="flex items-center justify-between gap-4">
                  <span className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-rust">
                    {entry.category}
                  </span>

                      <span className="font-mono text-xs text-ink/35">
                    0{index + 1}
                  </span>
                    </div>

                    <h2 className="mt-5 text-2xl leading-tight transition-colors group-hover:text-rust md:text-3xl">
                      {entry.title}
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">
                      {entry.excerpt}
                    </p>

                    <Link
                        to={`/dnevnik/${entry.id}`}
                        className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-rust"
                    >
                      Прочитај повеќе
                      <ArrowUpRight
                          size={17}
                          className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </Link>
                  </motion.article>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-t border-ink/10 bg-cream-soft py-20 md:py-24">
          <Container>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
              <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
                Следната приказна
              </span>

                <h2 className="mt-3 text-3xl md:text-4xl">
                  Не само читајте за местата. Откријте ги.
                </h2>
              </div>

              <Link
                  to="/destinatsii"
                  className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-rust transition-transform hover:translate-x-1"
              >
                Истражи дестинации
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </Container>
        </section>
      </main>
  )
}