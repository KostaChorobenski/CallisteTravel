import sergejPhoto from '../../assets/images/team/sergej.webp'
import ibrahimPhoto from '../../assets/images/team/ibrahim.webp'
import kostaPhoto from '../../assets/images/team/kosta.webp'
import filipPhoto from '../../assets/images/team/filip.webp'
import { Container } from './Container'

const team = [
  { name: 'Сергеј Денковски', photo: sergejPhoto, scale: 1.12, role: 'Корисничко искуство', description: 'Се грижи секое откривање да започне лесно — со јасни информации, инспирација и внимание кон деталите.' },
  { name: 'Ибрахим Феризи', photo: ibrahimPhoto, scale: 1.12, role: 'Дестинации и патувања', description: 'Истражува места со карактер и ги поврзува природата, културата и локалните искуства во незаборавни патувања.' },
  { name: 'Коста Чоробенски', photo: kostaPhoto, scale: 1.05, role: 'Координација на патувања', description: 'Ги поврзува сите делови од патувањето, од првата идеја до внимателно осмислен план и организација.' },
  { name: 'Филип Јовановски', photo: filipPhoto, scale: 1.12, role: 'Односи со патници', description: 'Ги слуша вашите желби, одговара на прашањата и ви помага да го пронајдете следното патување по ваша мерка.' },
]

export function TeamSection() {
  return (
    <section id="team" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-rust">Луѓето зад Calliste</span>
        <h2 className="mt-4 text-3xl md:text-5xl">Нашиот тим</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">Четири различни улоги, една заедничка идеја — да ги доближиме местата што вреди да се откријат.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article key={member.name} className="rounded-card border border-ink/10 bg-cream-soft p-7">
              <div className="h-16 w-16 overflow-hidden rounded-full">
                <img src={member.photo} alt={member.name} loading="lazy" className="h-full w-full object-cover object-[center_25%]" style={{ transform: `scale(${member.scale})` }} />
              </div>
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
