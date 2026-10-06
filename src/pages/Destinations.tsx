import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Container } from '../components/ui/Container'
import { Seo } from '../components/seo/Seo'
import { DestinationsMap } from '../components/destinations/DestinationsMap'
import { DestinationCard } from '../components/destinations/DestinationCard'
import {
  featuredDestinations,
  heroImage,
} from '../data/destinations'

type RegionFilter = 'all' | 'Европа' | 'Азија' | 'Африка'
type TypeFilter = 'all' | 'nature' | 'culture' | 'adventure'

const regions: RegionFilter[] = [
  'all',
  'Европа',
  'Азија',
  'Африка',
]

const typeLabels: Record<TypeFilter, string> = {
  all: 'Сите',
  nature: 'Природа',
  culture: 'Култура',
  adventure: 'Авантура',
}

const types: TypeFilter[] = [
  'all',
  'nature',
  'culture',
  'adventure',
]

export function Destinations() {
  const { t } = useTranslation()
  const [region, setRegion] = useState<RegionFilter>('all')
  const [type, setType] = useState<TypeFilter>('all')

  const filteredDestinations = useMemo(() => {
    return featuredDestinations.filter((destination) => {
      const matchesRegion =
          region === 'all' || destination.region === region

      const matchesType =
          type === 'all' || destination.type === type

      return matchesRegion && matchesType
    })
  }, [region, type])

  const clearFilters = () => {
    setRegion('all')
    setType('all')
  }

  return (
      <div>
        <Seo
          title={t('seo.destinations.title')}
          description={t('seo.destinations.description')}
          keywords={t('seo.destinations.keywords')}
        />
        {/* Hero */}
        <section className="relative isolate min-h-[55vh] overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img
                src={heroImage}
                alt="Предел што повикува на истражување"
                className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/15" />
          </div>

          <Container className="flex min-h-[55vh] flex-col justify-end py-16 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl"
            >
            <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-cream/75">
              Дестинации
            </span>

              <h1 className="mt-5 text-5xl leading-[1.05] text-cream md:text-7xl">
                Места што не ги{' '}
                <span className="text-cream/75">
                среќавате секој ден.
              </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream/80 md:text-xl">
                Избираме места со карактер — тивки заливи, стари градови,
                планински патеки и крајбрежја што вреди да се откријат со свое
                темпо.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Destinations */}
        <section className="bg-cream-soft py-20 md:py-28">
          <Container>
            <div className="flex flex-col gap-4">
            <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
              Избрани места
            </span>

              <h2 className="max-w-2xl text-3xl md:text-5xl">
                Следете ја љубопитноста.
              </h2>
            </div>

            {/* Filters */}
            <div className="mt-10 flex flex-col gap-6 border-y border-ink/10 py-6 md:flex-row md:items-center md:justify-between">
              <div>
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.14em] text-ink/40">
                Регион
              </span>

                <div className="flex flex-wrap gap-2">
                  {regions.map((value) => (
                      <button
                          key={value}
                          type="button"
                          onClick={() => setRegion(value)}
                          aria-pressed={region === value}
                          className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                              region === value
                                  ? 'border-rust bg-rust text-cream'
                                  : 'border-ink/10 text-ink-soft hover:border-rust/40 hover:text-rust'
                          }`}
                      >
                        {value === 'all' ? 'Сите' : value}
                      </button>
                  ))}
                </div>
              </div>

              <div>
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.14em] text-ink/40">
                Тип
              </span>

                <div className="flex flex-wrap gap-2">
                  {types.map((value) => (
                      <button
                          key={value}
                          type="button"
                          onClick={() => setType(value)}
                          aria-pressed={type === value}
                          className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                              type === value
                                  ? 'border-rust bg-rust text-cream'
                                  : 'border-ink/10 text-ink-soft hover:border-rust/40 hover:text-rust'
                          }`}
                      >
                        {typeLabels[value]}
                      </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            {filteredDestinations.length > 0 ? (
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                  {filteredDestinations.map((destination, index) => (
                      <DestinationCard
                          key={destination.id}
                          destination={destination}
                          index={index}
                      />
                  ))}
                </div>
            ) : (
                <div className="mt-12 rounded-card border border-ink/10 bg-cream p-10 text-center">
                  <h3 className="text-2xl">
                    Нема дестинации со овие филтри.
                  </h3>

                  <p className="mt-3 text-sm text-ink-soft">
                    Обидете се со друга комбинација на регион и тип.
                  </p>

                  <button
                      type="button"
                      onClick={clearFilters}
                      className="mt-6 text-sm font-semibold text-rust transition-colors hover:text-rust-dark"
                  >
                    Исчисти филтри
                  </button>
                </div>
            )}
          </Container>
        </section>

        {/* Map */}
        <section className="py-20 md:py-28">
          <Container>
            <div className="mb-10">
            <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
              Нашата мапа
            </span>

              <h2 className="mt-4 text-3xl md:text-5xl">
                Погледнете каде започнува патувањето.
              </h2>
            </div>

            <DestinationsMap />
          </Container>
        </section>
      </div>
  )
}
