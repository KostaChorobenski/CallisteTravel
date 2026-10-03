import { motion } from 'framer-motion'
import { ArrowLeft } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'

type StubPageProps = {
  eyebrow: string
  title: string
  description: string
}

export function StubPage({
  eyebrow,
  title,
  description,
}: StubPageProps) {
  return (
    <div>
      <section className="min-h-[65vh] border-b border-ink/10 bg-cream-soft">
        <Container className="flex min-h-[65vh] items-center py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
              {eyebrow}
            </span>

            <h1 className="mt-5 text-5xl leading-[1.05] md:text-7xl">
              {title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              {description}
            </p>

            <Link
              to="/"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-rust transition-transform hover:-translate-x-1"
            >
              <ArrowLeft size={18} />
              Назад кон почетната
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}