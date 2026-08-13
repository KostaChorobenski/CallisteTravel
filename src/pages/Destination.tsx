import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, MapPin } from '@phosphor-icons/react'
import { featuredDestinations } from '../data/destinations'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { DestinationsMap } from '../components/destinations/DestinationsMap'

export function Destination() {
    const { id } = useParams()

    const destination = featuredDestinations.find(
        (item) => item.id === id,
    )

    if (!destination) {
        return (
            <section className="py-20 sm:py-24 md:py-32">
                <Container className="flex flex-col items-center text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
            Дестинацијата не е пронајдена
          </span>

                    <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
                        Ова место излезе од мапата
                    </h1>

                    <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-soft sm:mt-6 sm:text-base">
                        Дестинацијата што ја барате моментално не постои или повеќе не е
                        достапна.
                    </p>

                    <Button
                        to="/destinatsii"
                        variant="primary"
                        className="mt-7 sm:mt-8"
                    >
                        Назад кон дестинациите
                    </Button>
                </Container>
            </section>
        )
    }

    return (
        <article>
            {/* Hero */}
            <section className="relative isolate overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <img
                        src={destination.image}
                        alt={destination.title}
                        className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/10" />
                </div>

                <Container className="flex min-h-[72svh] flex-col justify-end py-14 sm:min-h-[75vh] sm:py-20 md:min-h-[82vh] md:py-28">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <Link
                            to="/destinatsii"
                            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-cream/80 transition-colors hover:text-cream sm:mb-10"
                        >
                            <ArrowLeft size={18} />
                            Сите дестинации
                        </Link>

                        <div className="flex max-w-4xl flex-col gap-4 sm:gap-5">
                            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cream/75 sm:text-sm">
                                <MapPin size={16} />
                                <span>
                  {destination.region}, {destination.country}
                </span>
                            </div>

                            <h1 className="text-4xl leading-[1.05] text-cream sm:text-5xl md:text-7xl">
                                {destination.title}
                            </h1>

                            <p className="max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg md:text-xl">
                                {destination.excerpt}
                            </p>
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* Introduction */}
            <section className="py-16 sm:py-20 md:py-28">
                <Container>
                    <div className="grid gap-10 md:grid-cols-[1fr_320px] md:gap-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
              <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
                За местото
              </span>

                            <h2 className="mt-4 max-w-3xl text-3xl leading-tight sm:text-4xl md:text-5xl">
                                Место создадено за оние што сакаат да тргнат подалеку.
                            </h2>

                            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:mt-8 sm:text-lg">
                                {destination.excerpt}
                            </p>

                            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
                                Далеку од вообичаените туристички патеки, ова е место каде
                                што пејзажот, тишината и локалниот карактер се поважни од
                                бројот на посетители. Токму затоа го избравме за Calliste
                                Travel.
                            </p>
                        </motion.div>

                        {/* Details */}
                        <motion.aside
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="h-fit rounded-card bg-cream-soft p-6 shadow-soft sm:p-7"
                        >
              <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
                Детали
              </span>

                            <dl className="mt-6 flex flex-col gap-5 sm:mt-7 sm:gap-6">
                                <div>
                                    <dt className="text-sm text-ink-soft">
                                        Земја
                                    </dt>
                                    <dd className="mt-1 text-lg font-semibold">
                                        {destination.country}
                                    </dd>
                                </div>

                                <div>
                                    <dt className="text-sm text-ink-soft">
                                        Регион
                                    </dt>
                                    <dd className="mt-1 text-lg font-semibold">
                                        {destination.region}
                                    </dd>
                                </div>

                                <div>
                                    <dt className="text-sm text-ink-soft">
                                        Координати
                                    </dt>
                                    <dd className="mt-1 font-mono text-xs sm:text-sm">
                                        {destination.latitude.toFixed(4)},{' '}
                                        {destination.longitude.toFixed(4)}
                                    </dd>
                                </div>
                            </dl>

                            <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                                {destination.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-cream px-3 py-1.5 text-xs font-semibold text-ink-soft"
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>
                        </motion.aside>
                    </div>
                </Container>
            </section>

            {/* Image feature */}
            <section className="px-4 sm:px-6 md:px-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto max-w-7xl overflow-hidden rounded-card"
                >
                    <img
                        src={destination.image}
                        alt={destination.title}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover sm:aspect-[16/8]"
                    />
                </motion.div>
            </section>

            {/* Location */}
            <section className="py-16 sm:py-20 md:py-28">
                <Container>
                    <div className="mb-8 sm:mb-10">
            <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
              Локација
            </span>

                        <h2 className="mt-3 text-3xl sm:text-4xl">
                            Каде се наоѓа?
                        </h2>

                        <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
                            Погледнете ја точната локација на мапата и добијте чувство
                            каде се наоѓа ова скриено место.
                        </p>
                    </div>

                    <DestinationsMap
                        latitude={destination.latitude}
                        longitude={destination.longitude}
                        title={destination.title}
                        description={destination.excerpt}
                        zoom={11}
                    />
                </Container>
            </section>

            {/* CTA */}
            <section className="border-t border-ink/10 bg-cream-soft py-16 sm:py-20 md:py-28">
                <Container>
                    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                        <div className="max-w-2xl">
              <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
                Продолжете да истражувате
              </span>

                            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl md:text-5xl">
                                Светот има повеќе од една приказна.
                            </h2>

                            <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                                Откријте ги останатите дестинации што ги избравме за
                                патници кои сакаат да тргнат по свој пат.
                            </p>
                        </div>

                        <Link
                            to="/destinatsii"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-rust"
                        >
                            Сите дестинации
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </Container>
            </section>
        </article>
    )
}