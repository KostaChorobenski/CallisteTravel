import { Link } from 'react-router-dom'
import { ArrowUpRight } from '@phosphor-icons/react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { featuredDestinations } from '../../data/destinations'

export function FeaturedDestinations() {
  return (
    <section id="featured-destinations" className="py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Кутчиња на светот"
          title="Дестинации кои не се на нивниот вообичаен пат"
          description="Секоја дестинација е избрана рачно — далеку од преполните тргови и пренаселените плажи, поблиску до вистинскиот карактер на местото."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {featuredDestinations.map((destination) => (
              <Link
                  key={destination.id}
                  to={`/destinatsii/${destination.id}`}
                  aria-label={`${destination.title} — прочитај повеќе`}
              >
              <Card padded={false} className="group flex h-full flex-col">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <h3 className="text-xl">{destination.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {destination.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-semibold text-rust">
                    Прочитај повеќе
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
