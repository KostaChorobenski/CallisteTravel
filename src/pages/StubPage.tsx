import { PageHero } from '../components/ui/PageHero'
import pageHeroImage from '../assets/images/destinations/azori/2.webp'
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
      <PageHero image={pageHeroImage}>
        <Container className="flex min-h-[65vh] items-center py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-cream/75">
              {eyebrow}
            </span>

            <h1 className="text-cream mt-5 text-5xl leading-[1.05] md:text-7xl">
              {title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/80 md:text-xl">
              {description}
            </p>

            <Link
              to="/"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-cream/75 transition-transform hover:-translate-x-1"
            >
              <ArrowLeft size={18} />
              Назад кон почетната
            </Link>
          </motion.div>
        </Container>
      </PageHero>
    </div>
  )
}