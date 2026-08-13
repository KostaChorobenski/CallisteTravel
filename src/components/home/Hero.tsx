import { motion } from 'framer-motion'
import { ArrowDown } from '@phosphor-icons/react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { heroImage } from '../../data/destinations'

export function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100dvh-5rem)] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Осамен залив со кристално бистра вода, гледан од воздух"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />
      </div>

      <Container className="flex min-h-[calc(100dvh-5rem)] flex-col justify-end py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.24em] text-cream/75 md:text-sm">
            Calliste Travel
          </span>

          <h1 className="mt-5 max-w-4xl text-5xl leading-[0.98] text-cream sm:text-6xl md:text-7xl lg:text-8xl">
            Таму каде
            <br />
            <span className="text-cream/80">мапите завршуваат.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-cream/80 md:text-lg">
            Откриваме скриени, непознати кутчиња од светот и ве водиме кон нив —
            со локални приказни, внимателно избрани дестинации и моменти што
            остануваат долго по патувањето.
          </p>

          <div className="flex flex-wrap gap-4 pt-8">
            <Button to="/destinatsii" variant="primary">
              Истражи ги дестинациите
            </Button>

            <Button href="#featured-destinations" variant="outline-on-dark">
              Дознај повеќе
            </Button>
          </div>
        </motion.div>

        <motion.a
          href="#featured-destinations"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-14 flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-cream/60 transition-colors hover:text-cream"
        >
          Скролувај за да истражиш
          <ArrowDown size={16} className="animate-bounce" />
        </motion.a>
      </Container>
    </section>
  )
}