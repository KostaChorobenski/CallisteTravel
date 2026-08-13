import { motion } from 'framer-motion'
import {
  Compass,
  Heart,
  MapTrifold,
  Sparkle,
} from '@phosphor-icons/react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const reasons = [
  {
    icon: Compass,
    title: 'Љубопитност',
    description:
      'Секогаш бараме што се наоѓа зад следниот свиок, надвор од очигледните туристички рути.',
  },
  {
    icon: MapTrifold,
    title: 'Места со карактер',
    description:
      'Не избираме дестинации само затоа што изгледаат убаво. Бараме места со приказна и душа.',
  },
  {
    icon: Heart,
    title: 'Локално искуство',
    description:
      'Веруваме дека најдобрите спомени доаѓаат од луѓето, храната и малите детали што го прават местото посебно.',
  },
  {
    icon: Sparkle,
    title: 'Приказни што остануваат',
    description:
      'Патувањето завршува кога ќе се вратите дома. Приказната што сте ја создале не мора.',
  },
]

export function WhyCalliste() {
  return (
    <section className="bg-ink py-20 text-cream md:py-28">
      <Container>
        <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="Зошто Calliste?"
              title="Не сакаме само да ви покажеме каде да одите."
              description="Сакаме да ви дадеме причина да тргнете."
              className="[&>h2]:text-cream [&>p]:text-cream/60 [&>span]:text-rust"
            />
          </motion.div>

          <div className="grid gap-px overflow-hidden rounded-card border border-cream/10 bg-cream/10 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon

              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group bg-ink p-7 transition-colors duration-300 hover:bg-ink/80 md:p-8"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-rust/15 text-rust transition-colors duration-300 group-hover:bg-rust group-hover:text-cream">
                    <Icon size={22} />
                  </span>

                  <h3 className="mt-6 text-xl text-cream">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-cream/55">
                    {reason.description}
                  </p>

                  <span className="mt-8 block text-xs font-semibold uppercase tracking-[0.16em] text-cream/25">
                    0{index + 1}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}