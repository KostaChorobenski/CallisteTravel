import { motion } from 'framer-motion'
import {
  Compass,
  Heart,
  MapTrifold,
  Sparkle,
  ArrowUpRight,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container } from '../components/ui/Container'
import { Seo } from '../components/seo/Seo'

const values = [
  {
    icon: Compass,
    title: 'Љубопитност пред сè',
    description:
      'Не патуваме само за да пристигнеме. Патуваме за да откриеме што се наоѓа зад следниот свиок.',
  },
  {
    icon: MapTrifold,
    title: 'Подалеку од мапата',
    description:
      'Ги бараме местата што не се секогаш на првата страница од туристичкиот водич.',
  },
  {
    icon: Heart,
    title: 'Со почит кон местото',
    description:
      'Веруваме дека доброто патување остава спомени, а не трага. Локалниот карактер секогаш доаѓа прв.',
  },
  {
    icon: Sparkle,
    title: 'Моменти што остануваат',
    description:
      'Најдобрите патувања не се мерат со бројот на посетени места, туку со приказните што ги носите дома.',
  },
]

export function About() {
  const { t } = useTranslation()

  return (
    <main>
      <Seo
        title={t('seo.about.title')}
        description={t('seo.about.description')}
      />
      <section className="border-b border-ink/10 bg-cream-soft">
        <Container className="py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
              За Calliste
            </span>

            <h1 className="mt-5 text-5xl leading-[1.05] md:text-7xl">
              Патувањето започнува
              <span className="text-rust">
                {' '}
                таму каде што мапата завршува.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              Calliste Travel е создаден за луѓе кои не сакаат само да посетат
              место. Сакаат да го почувствуваат.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 md:py-32">
        <Container>
          <div className="grid gap-14 md:grid-cols-[1fr_0.8fr] md:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
                Нашата приказна
              </span>

              <h2 className="mt-4 text-3xl md:text-5xl">
                Не веруваме дека патувањето треба да биде чек-листа.
              </h2>

              <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-ink-soft">
                <p>
                  Постојат места што ги посетувате, фотографирате и ги
                  заборавате. А постојат и места што ви остануваат во глава
                  долго откако ќе си заминете.
                </p>

                <p>
                  Calliste е создаден околу втората категорија. Околу малите
                  заливи, тивките улици, локалните приказни и оние моменти што
                  не можат да се испланираат до последна минута.
                </p>

                <p>
                  Затоа внимателно ги избираме местата што ги споделуваме. Не
                  бараме само убави фотографии. Бараме карактер.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center"
            >
              <div className="w-full rounded-card bg-ink p-8 text-cream md:p-10">
                <span className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">
                  Нашата идеја
                </span>

                <p className="mt-6 font-display text-3xl leading-tight md:text-4xl">
                  „Најдоброто место не е секогаш она за кое сите веќе
                  зборуваат.“
                </p>

                <div className="mt-8 h-px w-16 bg-rust" />

                <p className="mt-6 text-sm leading-relaxed text-cream/65">
                  Патувањето е лично. Затоа и местата што ги бараме треба да
                  бидат доволно посебни за секој да создаде своја приказна.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="bg-cream-soft py-20 md:py-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
              Во што веруваме
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl">
              Четири работи што го водат Calliste.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group bg-cream-soft p-7 transition-colors duration-300 hover:bg-cream md:p-8"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-rust/10 text-rust transition-all duration-300 group-hover:bg-rust group-hover:text-cream">
                    <Icon size={24} />
                  </span>

                  <h3 className="mt-6 text-lg">{value.title}</h3>

                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {value.description}
                  </p>

                  <span className="mt-8 block text-xs font-semibold uppercase tracking-[0.16em] text-ink/35">
                    0{index + 1}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 rounded-card bg-rust p-8 text-cream md:flex-row md:items-end md:justify-between md:p-12"
          >
            <div className="max-w-2xl">
              <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-cream/70">
                Следното место
              </span>

              <h2 className="mt-4 text-3xl md:text-5xl">
                Можеби вашата следна приказна е веќе на мапата.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
                Истражете ги местата што ги избравме и пронајдете нешто што
                вреди да се открие.
              </p>
            </div>

            <Link
              to="/destinatsii"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-cream transition-transform hover:translate-x-1"
            >
              Истражи дестинации
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </Container>
      </section>
    </main>
  )
}