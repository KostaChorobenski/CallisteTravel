import {
  Compass,
  Sparkle,
  UsersThree,
  Leaf,
  type Icon,
} from '@phosphor-icons/react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { valuePillars } from '../../data/site'

const iconMap: Record<(typeof valuePillars)[number]['icon'], Icon> = {
  Compass,
  Sparkle,
  UsersThree,
  Leaf,
}

export function WhyCalliste() {
  return (
      <section className="bg-cream-soft py-16 sm:py-20 md:py-28">
        <Container className="flex flex-col gap-10 sm:gap-12">
          <SectionHeading
              eyebrow="Зошто Calliste"
              title="Патувања дизајнирани околу приказната, не околу чек-листата"
              align="center"
              description="Не сме класична агенција за пакет-аранжмани. Секое патување е грижливо составено да ве доближи до вистинскиот карактер на местото."
              className="mx-auto"
          />

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
            {valuePillars.map((pillar) => {
              const IconComponent = iconMap[pillar.icon]

              return (
                  <div
                      key={pillar.title}
                      className="group rounded-card p-5 transition-colors duration-300 hover:bg-cream sm:p-6"
                  >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-rust/10 text-rust transition-transform duration-300 group-hover:scale-105">
                  <IconComponent size={24} weight="regular" />
                </span>

                    <h3 className="mt-5 text-lg">
                      {pillar.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {pillar.description}
                    </p>
                  </div>
              )
            })}
          </div>
        </Container>
      </section>
  )
}