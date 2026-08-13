import { motion } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { featuredDestinations } from '../../data/destinations'

export function FeaturedDestinations() {
  return (
    <section id="featured-destinations" className="py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Избрани дестинации"
          title="Места што вреди да ги откриете"
          description="Некои места се убави на фотографија. Други имаат нешто што мора да го почувствувате лично."
        />

        <div className="grid gap-6 md:grid-cols-3">
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
              className="group"
            >
              <Link
                to={`/destinatsii/${destination.id}`}
                className="block"
              >
                <div className="overflow-hidden rounded-card bg-cream-soft shadow-soft">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-rust">
                      <span>{destination.country}</span>
                      <span className="text-ink/30">·</span>
                      <span>{destination.region}</span>
                    </div>

                    <h3 className="mt-3 text-2xl">
                      {destination.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {destination.excerpt}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-rust">
                      Откриј повеќе
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="flex justify-start md:justify-end">
          <Link
            to="/destinatsii"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-rust"
          >
            Погледни ги сите дестинации
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </Container>
    </section>
  )
}