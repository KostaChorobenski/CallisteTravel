import { motion } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import type { Destination } from '../../data/destinations'

type DestinationCardProps = {
    destination: Destination
    index: number
}

export function DestinationCard({
                                    destination,
                                    index,
                                }: DestinationCardProps) {
    return (
        <motion.article
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
    )
}