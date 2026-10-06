import { PageHero } from '../components/ui/PageHero'
import pageHeroImage from '../assets/images/hammock-cove.jpg'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from '@phosphor-icons/react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container } from '../components/ui/Container'
import { Seo } from '../components/seo/Seo'
import { journalEntryById } from '../data/journal'
import { NotFound } from './NotFound'

export function JournalEntry() {
    const { t } = useTranslation()
    const { id } = useParams()
    const entry = id ? journalEntryById(id) : undefined

    if (!entry) {
        return <NotFound />
    }

    return (
        <div>
            <Seo
                title={t('seo.journalEntry.title', { name: entry.title })}
                description={t('seo.journalEntry.description', {
                    excerpt: entry.excerpt,
                })}
                type="article"
            />
            <PageHero image={pageHeroImage}>
                <Container className="py-20 md:py-28">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-4xl"
                    >
                        <Link
                            to="/dnevnik"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-cream/80 transition-colors hover:text-cream"
                        >
                            <ArrowLeft size={17} />
                            Назад кон дневникот
                        </Link>

                        <div className="mt-10">
              <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-cream/75">
                {entry.category}
              </span>

                            <h1 className="text-cream mt-5 text-5xl leading-[1.05] md:text-7xl">
                                {entry.title}
                            </h1>

                            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/80 md:text-xl">
                                {entry.excerpt}
                            </p>
                        </div>
                    </motion.div>
                </Container>
            </PageHero>

            <section className="py-20 md:py-28">
                <Container>
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mx-auto max-w-3xl"
                    >
                        <div className="space-y-7 text-lg leading-[1.8] text-ink-soft">
                            {entry.content.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                    </motion.article>
                </Container>
            </section>

            <section className="bg-cream-soft py-20 md:py-24">
                <Container>
                    <div className="flex flex-col gap-8 rounded-card bg-rust p-8 text-cream md:flex-row md:items-center md:justify-between md:p-12">
                        <div>
              <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-cream/70">
                Продолжи да истражуваш
              </span>

                            <h2 className="mt-4 text-3xl md:text-4xl">
                                Следната приказна можеби е само еден клик подалеку.
                            </h2>
                        </div>

                        <Link
                            to="/dnevnik"
                            className="inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold text-cream transition-transform hover:translate-x-1"
                        >
                            Назад кон дневникот
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </Container>
            </section>
        </div>
    )
}