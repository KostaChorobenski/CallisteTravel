import { motion } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { DestinationsMap } from '../components/destinations/DestinationsMap'
import { featuredDestinations, heroImage } from '../data/destinations'

export function Destinations() {
  return (
      <main>
        <section className="relative isolate min-h-[55vh] overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img
                src={heroImage}
                alt="Предел што повикува на истражување"
                className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/15" />
          </div>

          <Container className="flex min-h-[55vh] flex-col justify-end py-16 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl"
            >
            <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-cream/75">
              Дестинации
            </span>

              <h1 className="mt-5 text-5xl leading-[1.05] text-cream md:text-7xl">
                Места што не ги
                <span className="text-cream/75">
                {' '}
                  среќавате секој ден.
              </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream/80 md:text-xl">
                Избираме места со карактер — тивки заливи, стари градови,
                планински патеки и крајбрежја што вреди да се откријат со свое
                темпо.
              </p>
            </motion.div>
          </Container>
        </section>

        <section className="bg-cream-soft py-20 md:py-28">
          <Container>
            <div className="flex flex-col gap-4">
            <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
              Избрани места
            </span>

              <h2 className="max-w-2xl text-3xl md:text-5xl">
                Следете ја љубопитноста.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {featuredDestinations.map((destination, index) => (
                  <motion.article
                      key={destination.id}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      className="group overflow-hidden rounded-card bg-cream shadow-soft"
                  >
                    <Link
                        to={`/destinatsii/${destination.id}`}
                        className="block"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                            src={destination.image}
                            alt={destination.title}
                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>

                      <div className="p-7 md:p-8">
                        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-rust">
                          <span>{destination.country}</span>
                          <span className="text-ink/30">·</span>
                          <span>{destination.region}</span>
                        </div>

                        <div className="mt-3 flex items-start justify-between gap-6">
                          <h3 className="text-2xl md:text-3xl">
                            {destination.title}
                          </h3>

                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/10 text-ink transition-all duration-200 group-hover:border-rust group-hover:bg-rust group-hover:text-cream">
                        <ArrowUpRight size={19} />
                      </span>
                        </div>

                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
                          {destination.excerpt}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {destination.tags.map((tag) => (
                              <span
                                  key={tag}
                                  className="rounded-full border border-ink/10 px-3 py-1.5 text-xs text-ink-soft"
                              >
                          {tag}
                        </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </motion.article>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20 md:py-28">
          <Container>
            <div className="mb-10">
            <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
              Нашата мапа
            </span>

              <h2 className="mt-4 text-3xl md:text-5xl">
                Погледнете каде започнува патувањето.
              </h2>
            </div>

            <DestinationsMap />
          </Container>
        </section>
      </main>
  )
}