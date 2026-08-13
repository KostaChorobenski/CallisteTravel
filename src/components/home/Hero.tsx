import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { heroImage } from '../../data/destinations'

export function Hero() {
  return (
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
              src={heroImage}
              alt="Осамен залив со кристално бистра вода, гледан од воздух"
              className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/10" />
        </div>

        <Container className="flex min-h-[78svh] flex-col justify-end gap-5 py-14 sm:min-h-[82svh] sm:gap-6 sm:py-20 md:min-h-[90vh] md:gap-8 md:py-28">
        <span className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-cream/80 sm:text-sm">
          Calliste Travel
        </span>

          <h1 className="max-w-3xl text-4xl leading-[1.05] text-cream sm:text-5xl md:text-6xl">
            Таму каде мапите завршуваат
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-cream/85 md:text-lg">
            Откриваме скриени, непознати кутчиња од светот и ве водиме кон нив —
            со локални водичи, кураторски дестинации и приказни што траат
            подолго од патувањето.
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button to="/destinatsii" variant="primary">
              Истражи ги дестинациите
            </Button>

            <Button href="#featured-destinations" variant="outline-on-dark">
              Дознај повеќе
            </Button>
          </div>
        </Container>
      </section>
  )
}