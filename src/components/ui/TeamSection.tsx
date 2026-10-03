import { Container } from './Container'

const team = [
  { name: 'Сергеј Денковски', role: 'Корисничко искуство', description: 'Се грижи секое откривање да започне лесно — со јасни информации, инспирација и внимание кон деталите.' },
  { name: 'Ибрахим Феризи', role: 'Дестинации и патувања', description: 'Истражува места со карактер и ги поврзува природата, културата и локалните искуства во незаборавни патувања.' },
  { name: 'Коста Чоробенски', role: 'Координација на патувања', description: 'Ги поврзува сите делови од патувањето, од првата идеја до внимателно осмислен план и организација.' },
  { name: 'Филип Јовановски', role: 'Односи со патници', description: 'Ги слуша вашите желби, одговара на прашањата и ви помага да го пронајдете следното патување по ваша мерка.' },
]

export function TeamSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-rust">Луѓето зад Calliste</span>
        <h2 className="mt-4 text-3xl md:text-5xl">Нашиот тим</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">Четири различни улоги, една заедничка идеја — да ги доближиме местата што вреди да се откријат.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article key={member.name} className="rounded-card border border-ink/10 bg-cream-soft p-7">
              <div aria-hidden="true" className="flex h-16 w-16 items-center justify-center rounded-full bg-rust/10 font-display text-2xl text-rust">{member.name.split(' ').map((part) => part[0]).join('')}</div>
              <h3 className="mt-6 text-2xl">{member.name}</h3>
              <p className="mt-3 text-sm font-semibold text-rust">{member.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{member.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
