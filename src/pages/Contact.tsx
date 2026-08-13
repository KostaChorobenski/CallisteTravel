import { motion } from 'framer-motion'
import {
  EnvelopeSimple,
  InstagramLogo,
  FacebookLogo,
  Phone,
  ArrowUpRight,
} from '@phosphor-icons/react'
import { Container } from '../components/ui/Container'
import { contact, social } from '../data/site'

const socialIcons = {
  Instagram: InstagramLogo,
  Facebook: FacebookLogo,
} as const

export function Contact() {
  return (
    <main>
      <section className="border-b border-ink/10 bg-cream-soft">
        <Container className="py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
              Контакт
            </span>

            <h1 className="mt-5 text-5xl leading-[1.05] md:text-7xl">
              Да започнем со
              <span className="text-rust"> следната приказна.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              Имате прашање, идеја или едноставно сакате да разговарате за
              следното патување? Пишете ни. Со задоволство ќе ве слушнеме.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
                Пишете ни
              </span>

              <h2 className="mt-4 text-3xl md:text-5xl">
                Би сакале да ве слушнеме.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
                Во моментов најлесно можете да нè контактирате директно преку
                е-пошта или телефон. Формуларот за контакт ќе биде достапен
                наскоро.
              </p>

              <div className="mt-10 flex flex-col gap-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center justify-between rounded-card border border-ink/10 bg-cream-soft p-5 transition-colors hover:border-rust/30 hover:bg-cream"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-rust/10 text-rust">
                      <EnvelopeSimple size={21} />
                    </span>

                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink/40">
                        Е-пошта
                      </span>
                      <span className="mt-1 block text-sm font-medium text-ink">
                        {contact.email}
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-ink/30 transition-colors group-hover:text-rust"
                  />
                </a>

                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="group flex items-center justify-between rounded-card border border-ink/10 bg-cream-soft p-5 transition-colors hover:border-rust/30 hover:bg-cream"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-rust/10 text-rust">
                      <Phone size={21} />
                    </span>

                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink/40">
                        Телефон
                      </span>
                      <span className="mt-1 block text-sm font-medium text-ink">
                        {contact.phone}
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-ink/30 transition-colors group-hover:text-rust"
                  />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-card bg-ink p-8 text-cream md:p-10"
            >
              <span className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">
                Следете нè
              </span>

              <h2 className="mt-5 font-display text-3xl leading-tight md:text-4xl">
                Патувањето не завршува кога ќе се вратите дома.
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-cream/60">
                Следете ги нашите нови дестинации, приказни и инспирација од
                патот.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                {social.map((item) => {
                  const Icon =
                    socialIcons[item.label as keyof typeof socialIcons]

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-full border border-cream/10 px-5 py-3.5 text-sm text-cream/75 transition-colors hover:border-rust hover:bg-rust hover:text-cream"
                    >
                      <span className="flex items-center gap-3">
                        <Icon size={19} />
                        {item.label}
                      </span>

                      <ArrowUpRight
                        size={17}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  )
}