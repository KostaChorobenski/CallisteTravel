import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  EnvelopeSimple,
  MapPin,
  PaperPlaneTilt,
} from '@phosphor-icons/react'
import { Container } from '../components/ui/Container'

export function Contact() {
  return (
      <main>
        {/* Hero */}
        <section className="border-b border-ink/10 bg-cream-soft">
          <Container className="py-20 md:py-28">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl"
            >
            <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
              Контакт
            </span>

              <h1 className="mt-4 text-5xl leading-[1.05] md:text-7xl">
                Да започнеме со
                <span className="text-rust"> следната приказна.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
                Имате прашање, идеја за патување или едноставно сакате да
                разговарате за некое место? Пишете ни. Ќе ни биде драго да ве
                слушнеме.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Contact content */}
        <section className="py-20 md:py-28">
          <Container>
            <div className="grid gap-14 md:grid-cols-[0.75fr_1.25fr] md:gap-20">
              {/* Information */}
              <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6 }}
              >
              <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
                Пишете ни
              </span>

                <h2 className="mt-4 text-3xl md:text-4xl">
                  Без комплицирање.
                </h2>

                <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
                  Кажете ни што имате на ум. Не мора да знаете точно каде сакате
                  да одите — понекогаш доволно е да ни кажете какво чувство
                  барате.
                </p>

                <div className="mt-10 flex flex-col gap-7">
                  <a
                      href="mailto:hello@callistetravel.mk"
                      className="group flex items-start gap-4"
                  >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rust/10 text-rust transition-colors group-hover:bg-rust group-hover:text-cream">
                    <EnvelopeSimple size={21} />
                  </span>

                    <div>
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink/40">
                      Email
                    </span>

                      <span className="mt-1 block font-medium transition-colors group-hover:text-rust">
                      hello@callistetravel.mk
                    </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rust/10 text-rust">
                    <MapPin size={21} />
                  </span>

                    <div>
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink/40">
                      Локација
                    </span>

                      <span className="mt-1 block font-medium">
                      Северна Македонија
                    </span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 border-t border-ink/10 pt-8">
                  <p className="text-sm leading-relaxed text-ink-soft">
                    Без разлика дали барате инспирација или веќе го знаете
                    следното место, отворени сме за разговор.
                  </p>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="rounded-card bg-cream-soft p-7 shadow-soft md:p-10"
              >
                <div className="mb-8">
                <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
                  Испратете порака
                </span>

                  <h2 className="mt-3 text-2xl md:text-3xl">
                    Како можеме да помогнеме?
                  </h2>
                </div>

                <form
                    action="mailto:hello@callistetravel.mk"
                    method="post"
                    encType="text/plain"
                    className="flex flex-col gap-6"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold">
                      Име
                    </span>

                      <input
                          type="text"
                          name="name"
                          required
                          placeholder="Вашето име"
                          className="rounded-lg border border-ink/10 bg-cream px-4 py-3 text-sm outline-none transition-colors placeholder:text-ink/35 focus:border-rust"
                      />
                    </label>

                    <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold">
                      Email
                    </span>

                      <input
                          type="email"
                          name="email"
                          required
                          placeholder="you@example.com"
                          className="rounded-lg border border-ink/10 bg-cream px-4 py-3 text-sm outline-none transition-colors placeholder:text-ink/35 focus:border-rust"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">
                    Тема
                  </span>

                    <input
                        type="text"
                        name="subject"
                        placeholder="За што сакате да разговараме?"
                        className="rounded-lg border border-ink/10 bg-cream px-4 py-3 text-sm outline-none transition-colors placeholder:text-ink/35 focus:border-rust"
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">
                    Порака
                  </span>

                    <textarea
                        name="message"
                        required
                        rows={6}
                        placeholder="Кажете ни малку повеќе..."
                        className="resize-none rounded-lg border border-ink/10 bg-cream px-4 py-3 text-sm outline-none transition-colors placeholder:text-ink/35 focus:border-rust"
                    />
                  </label>

                  <button
                      type="submit"
                      className="inline-flex w-fit items-center gap-2 rounded-lg bg-rust px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
                  >
                    Испрати порака
                    <PaperPlaneTilt size={17} />
                  </button>

                  <p className="text-xs leading-relaxed text-ink/40">
                    Со испраќањето ќе се отвори вашиот email клиент за да ја
                    испратите пораката.
                  </p>
                </form>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-ink/10 bg-ink py-20 text-cream md:py-24">
          <Container>
            <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
              <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-cream/50">
                Сè уште барате инспирација?
              </span>

                <h2 className="mt-3 text-3xl md:text-5xl">
                  Можеби следното место веќе ве чека.
                </h2>
              </div>

              <a
                  href="/destinatsii"
                  className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-cream transition-transform hover:translate-x-1"
              >
                Истражи дестинации
                <ArrowUpRight size={18} />
              </a>
            </div>
          </Container>
        </section>
      </main>
  )
}