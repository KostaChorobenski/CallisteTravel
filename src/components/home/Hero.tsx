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
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-ink/10" />
      </div>

      <Container className="flex min-h-[85vh] flex-col justify-end gap-6 py-20 md:min-h-[90vh] md:gap-8 md:py-28">
        <span className="font-body text-sm font-semibold uppercase tracking-[0.22em] text-cream/80">
          Calliste Travel
        </span>
        <h1 className="max-w-3xl text-4xl text-cream sm:text-5xl md:text-6xl">
          Таму каде мапите завршуваат
        </h1>
        <p className="max-w-xl text-base text-cream/85 md:text-lg">
          Откриваме скриени, непознати кутчиња од светот и ве водиме кон нив —
          со локални водичи, кураторски дестинации и приказни што трае подолго
          од патувањето.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
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
