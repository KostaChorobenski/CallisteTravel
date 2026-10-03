import { Container } from '../ui/Container'

const questions = [
  { question: 'Дали може да добијам индивидуален план?', answer: 'Да. Планот го приспособуваме на вашите интереси, времето што го имате и темпото со кое сакате да патувате.' },
  { question: 'Дали патувањата се наменети за групи?', answer: 'Нашиот концепт опфаќа индивидуални патувања и мали групи. Големината на групата и активностите се договараат според дестинацијата.' },
  { question: 'Како да започнам со резервација?', answer: 'Изберете дестинација и испратете ни ги вашите желби преку контакт формата. Следниот чекор е договор за датумите и деталите на патувањето.' },
  { question: 'Што е вклучено во патувањето?', answer: 'Сместувањето, превозот, водичите и активностите зависат од конкретниот план. Деталите се договараат пред потврдување на патувањето.' },
  { question: 'Дали ми е потребно искуство за пешачење?', answer: 'Тоа зависи од избраната рута. Споделете го вашето искуство и ќе избереме активности што одговараат на вашите можности.' },
]

export function TravelFaq() {
  return (
    <section className="bg-cream-soft py-20 md:py-28">
      <Container>
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-rust">Пред да тргнете</span>
        <h2 className="mt-4 text-3xl md:text-5xl">Често поставувани прашања</h2>
        <div className="mt-10 max-w-3xl divide-y divide-ink/10">
          {questions.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="cursor-pointer rounded-sm text-lg font-semibold text-ink focus-visible:outline-2 focus-visible:outline-rust">{item.question}</summary>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}
