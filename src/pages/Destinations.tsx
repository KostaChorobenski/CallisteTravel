import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from '@phosphor-icons/react'
import { featuredDestinations } from '../data/destinations'
import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/ui/SectionHeading'
import { DestinationsMap } from '../components/destinations/DestinationsMap'

export function Destinations() {
    return (
        <div className="pb-16 sm:pb-20 md:pb-28">
            {/* Header */}
            <section className="border-b border-ink/10 bg-cream-soft py-16 sm:py-20 md:py-28">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionHeading
                            eyebrow="Нашите дестинации"
                            title="Места што вреди да ги откриете"
                            description="Далеку од вообичаените туристички патеки. Истражете ги местата што ги избравме за оние кои сакаат патувањето да биде повеќе од само уште една точка на мапата."
                        />
                    </motion.div>
                </Container>
            </section>

            {/* Destinations */}
            <section className="py-16 sm:py-20 md:py-28">
                <Container>
                    <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {featuredDestinations.map((destination, index) => (
                            <motion.article
                                key={destination.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                            >
                                <Link
                                    to={`/destinatsii/${destination.id}`}
                                    className="group block h-full"
                                >
                                    <Card
                                        padded={false}
                                        className="flex h-full flex-col transition-transform duration-300 group-hover:-translate-y-1"
                                    >
                                        <div className="aspect-[4/5] overflow-hidden">
                                            <img
                                                src={destination.image}
                                                alt={destination.title}
                                                loading="lazy"
                                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            />
                                        </div>

                                        <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
                                            <h2 className="text-xl sm:text-2xl">
                                                {destination.title}
                                            </h2>

                                            <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
                                                {destination.excerpt}
                                            </p>

                                            <span className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-semibold text-rust">
                        Истражи
                        <ArrowUpRight
                            size={18}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                                        </div>
                                    </Card>
                                </Link>
                            </motion.article>
                        ))}
                    </div>

                    {/* Map */}
                    <div className="mt-16 sm:mt-20 md:mt-28">
                        <SectionHeading
                            eyebrow="На мапата"
                            title="Пронајдете ги нашите дестинации"
                            description="Истражете каде се наоѓаат местата што ги избравме."
                            className="mb-8 sm:mb-10"
                        />

                        <DestinationsMap />
                    </div>
                </Container>
            </section>
        </div>
    )
}