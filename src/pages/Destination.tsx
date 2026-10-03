import { travelInfo } from '../data/travelInfo'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
} from '@phosphor-icons/react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container } from '../components/ui/Container'
import { Seo } from '../components/seo/Seo'
import { DestinationsMap } from '../components/destinations/DestinationsMap'
import { destinationById } from '../data/destinations'
import { NotFound } from './NotFound'

export function Destination() {
  const { t } = useTranslation()
  const { id } = useParams()
  const destination = id ? destinationById(id) : undefined

  if (!destination) {
    return <NotFound />
  }

  const practical = travelInfo[destination.id]

  return (
    <div>
      <Seo
        title={t('seo.destination.title', { name: destination.title })}
        description={t('seo.destination.description', {
          name: destination.title,
        })}
      />
      {/* Hero */}
      <section className="relative isolate min-h-[65vh] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={destination.image}
            alt={destination.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />
        </div>

        <Container className="flex min-h-[65vh] flex-col justify-end py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <Link
              to="/destinatsii"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cream/70 transition-colors hover:text-cream"
            >
              <ArrowLeft size={17} />
              Сите дестинации
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-cream/70">
              <span>{destination.country}</span>
              <span className="text-cream/30">·</span>
              <span>{destination.region}</span>
            </div>

            <h1 className="mt-4 text-5xl leading-[1] text-cream md:text-7xl">
              {destination.title}
            </h1>
          </motion.div>
        </Container>
      </section>

      {/* Description + location card */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-14 md:grid-cols-[1fr_0.75fr] md:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
                За местото
              </span>

              <h2 className="mt-4 text-3xl md:text-5xl">
                Повеќе од точка на мапата.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
                {destination.description}
              </p>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {destination.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-ink/10 px-4 py-2 text-sm text-ink-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <div className="mt-10">
                <h3 className="text-xl">
                  Што да не пропуштите
                </h3>

                <div className="mt-5 grid gap-3">
                  {destination.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3 rounded-xl bg-cream-soft px-5 py-4"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rust" />

                      <p className="text-sm leading-relaxed text-ink-soft">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Location card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-fit rounded-card bg-cream-soft p-7 shadow-soft md:p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-rust/10 text-rust">
                <MapPin size={22} />
              </div>

              <h3 className="mt-5 text-xl">
                {destination.title}
              </h3>

              <p className="mt-2 text-sm text-ink-soft">
                {destination.region}, {destination.country}
              </p>

              <div className="mt-6 h-px bg-ink/10" />
              {practical ? (
                <div className="mt-6">
                  <h4 className="text-lg">Практични информации</h4>
                  <dl className="mt-4 space-y-4 text-sm">
                    <div><dt className="font-semibold text-ink">Период за посета</dt><dd className="mt-1 text-ink-soft">{practical.season}</dd></div>
                    <div><dt className="font-semibold text-ink">Предложено времетраење</dt><dd className="mt-1 text-ink-soft">{practical.duration}</dd></div>
                    <div><dt className="font-semibold text-ink">Тип на патување</dt><dd className="mt-1 text-ink-soft">{practical.style}</dd></div>
                  </dl>
                  <a href={practical.source} target="_blank" rel="noreferrer" className="mt-4 inline-block text-xs font-semibold text-rust hover:text-rust-dark">Повеќе за сезоната ↗</a>
                </div>
              ) : null}


              <p className="mt-6 text-sm leading-relaxed text-ink-soft">
                Откријте го местото со свое темпо. Најубавите детали често се
                наоѓаат подалеку од главната рута.
              </p>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${destination.latitude},${destination.longitude}`}
    target="_blank"
rel="noreferrer"
className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-rust transition-colors hover:text-rust-dark"
    >
    Отвори во Google Maps
<ArrowUpRight size={17} />
</a>
</motion.div>
</div>
</Container>
</section>

{/* Gallery */}
<section className="bg-cream-soft py-20 md:py-28">
    <Container>
        <div className="mb-10">
            <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
              Галерија
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl">
                Погледнете го местото.
            </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-card md:row-span-2"
            >
                <img
                    src={destination.gallery[0]}
                    alt={`${destination.title} — фотографија 1`}
                    className="h-full min-h-[300px] w-full object-cover transition-transform duration-700 hover:scale-105 md:min-h-[620px]"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="overflow-hidden rounded-card"
            >
                <img
                    src={destination.gallery[1]}
                    alt={`${destination.title} — фотографија 2`}
                    className="h-[300px] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="overflow-hidden rounded-card"
            >
                <img
                    src={destination.gallery[2]}
                    alt={`${destination.title} — фотографија 3`}
                    className="h-[300px] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
            </motion.div>
        </div>
    </Container>
</section>

{/* Map */}
<section className="py-20 md:py-28">
    <Container>
        <div className="mb-10">
            <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
              Локација
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl">
                Каде се наоѓа {destination.title}?
            </h2>
        </div>

        <DestinationsMap
            latitude={destination.latitude}
            longitude={destination.longitude}
            title={destination.title}
            description={destination.excerpt}
            zoom={12}
        />
    </Container>
</section>

{/* CTA */}
<section className="py-20 md:py-28">
    <Container>
        <div className="flex flex-col gap-8 rounded-card bg-rust p-8 text-cream md:flex-row md:items-center md:justify-between md:p-12">
            <div>
              <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-cream/70">
                Продолжи да истражуваш
              </span>

                <h2 className="mt-4 text-3xl md:text-4xl">
                    Следното место можеби е само еден клик подалеку.
                </h2>
            </div>

            <Link
                to="/destinatsii"
                className="inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold text-cream transition-transform hover:translate-x-1"
            >
                Сите дестинации
                <ArrowUpRight size={18} />
            </Link>
        </div>
    </Container>
</section>
</div>
)
}
