import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'

type StubPageProps = {
  eyebrow: string
  title: string
  description: string
}

export function StubPage({ eyebrow, title, description }: StubPageProps) {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
        {eyebrow}
      </span>
      <h1 className="max-w-2xl text-3xl md:text-4xl">{title}</h1>
      <p className="max-w-xl text-base leading-relaxed text-ink-soft">
        {description}
      </p>
      <Button to="/" variant="secondary" className="mt-2">
        Назад кон почетна
      </Button>
    </Container>
  )
}
