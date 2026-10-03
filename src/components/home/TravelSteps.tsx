import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'

const steps = [
  { title: 'Изберете дестинација', text: 'Истражете ги местата, фотографиите и практичните информации. Пронајдете дестинација што одговара на вашата љубопитност.' },
  { title: 'Споделете ја вашата идеја', text: 'Кажете ни кога сакате да патувате, со кого и какви искуства барате. Секое добро патување започнува со разговор.' },
  { title: 'Создајте го вашиот план', text: 'Заедно ги избираме темпото, активностите и локалните искуства за патување по ваша мерка.' },
]

export function TravelSteps() {
  return (
    <section className="bg-cream-soft py-20 md:py-28">
      <Container>
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-rust">Како патуваме</span>
        <h2 className="mt-4 text-3xl md:text-5xl">Од љубопитност до следното патување.</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-card border border-ink/10 bg-cream p-7">
              <span className="text-sm font-semibold text-rust">0{index + 1}</span>
              <h3 className="mt-5 text-xl">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
        <Link to="/kontakt" className="mt-8 inline-block text-sm font-semibold text-rust hover:text-rust-dark">Да го испланираме патувањето →</Link>
      </Container>
    </section>
  )
}
