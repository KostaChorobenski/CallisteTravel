import { TravelFaq } from '../components/contact/TravelFaq'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { PageHero } from '../components/ui/PageHero'
import pageHeroImage from '../assets/images/shoreline-palms.jpg'
import { motion } from 'framer-motion'
import {
  EnvelopeSimple,
  InstagramLogo,
  FacebookLogo,
  Phone,
  Clock,
  MapPin,
  ArrowUpRight,
} from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'
import { Container } from '../components/ui/Container'
import { ContactForm } from '../components/contact/ContactForm'
import { ContactMap } from '../components/contact/ContactMap'
import { Seo } from '../components/seo/Seo'
import { contact, social } from '../data/site'

const socialIcons = {
  Instagram: InstagramLogo,
  Facebook: FacebookLogo,
} as const

export function Contact() {
  const { t } = useTranslation()
  const { hash } = useLocation()

  useEffect(() => {
    if (hash === '#contact-form') {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'instant' })
    }
  }, [hash])

  return (
    <>
      <Seo
        title={t('seo.contact.title')}
        description={t('seo.contact.description')}
        keywords={t('seo.contact.keywords')}
      />

      <PageHero image={pageHeroImage}>
        <Container className="py-16 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-cream/75">
              {t('contact.eyebrow')}
            </span>

            <h1 className="text-cream mt-5 text-4xl leading-[1.08] sm:text-5xl md:text-7xl">
              {t('contact.titleLine1')}
              <span className="text-cream/75"> {t('contact.titleLine2')}</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg md:text-xl">
              {t('contact.intro')}
            </p>
          </motion.div>
        </Container>
      </PageHero>

      <section id="contact-form" className="scroll-mt-24 py-16 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="min-w-0"
            >
              <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
                {t('contact.writeUs')}
              </span>

              <h2 className="mt-4 text-3xl md:text-5xl">
                {t('contact.writeUsTitle')}
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
                {t('contact.writeUsDescription')}
              </p>

              <div className="mt-10">
                <ContactForm />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex min-w-0 flex-col gap-4"
            >
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(contact.mapsQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-3 rounded-card border border-ink/10 bg-cream-soft p-5 transition-colors hover:border-rust/30 hover:bg-cream"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rust/10 text-rust">
                    <MapPin size={21} />
                  </span>

                  <div className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink/40">
                      {t('contact.location')}
                    </span>
                    <span className="mt-1 block text-sm font-medium break-words text-ink">
                      {t('contact.locationValue')}
                    </span>
                  </div>
                </div>

                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-ink/30 transition-colors group-hover:text-rust"
                />
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center justify-between gap-3 rounded-card border border-ink/10 bg-cream-soft p-5 transition-colors hover:border-rust/30 hover:bg-cream"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rust/10 text-rust">
                    <EnvelopeSimple size={21} />
                  </span>

                  <div className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink/40">
                      {t('contact.email')}
                    </span>
                    <span className="mt-1 block text-sm font-medium break-all text-ink">
                      {contact.email}
                    </span>
                  </div>
                </div>

                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-ink/30 transition-colors group-hover:text-rust"
                />
              </a>

              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="group flex items-center justify-between gap-3 rounded-card border border-ink/10 bg-cream-soft p-5 transition-colors hover:border-rust/30 hover:bg-cream"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rust/10 text-rust">
                    <Phone size={21} />
                  </span>

                  <div className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink/40">
                      {t('contact.phone')}
                    </span>
                    <span className="mt-1 block text-sm font-medium text-ink">
                      {contact.phone}
                    </span>
                  </div>
                </div>

                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-ink/30 transition-colors group-hover:text-rust"
                />
              </a>

              <div className="flex items-start gap-4 rounded-card border border-ink/10 bg-cream-soft p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rust/10 text-rust">
                  <Clock size={21} />
                </span>
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/40">Работно време</h2>
                  <p className="mt-2 text-sm font-medium text-ink">Понеделник – петок: 09:00–17:00</p>
                  <p className="mt-1 text-sm text-ink-soft">Сабота и недела: неработни денови</p>
                </div>
              </div>

              <div className="rounded-card bg-ink p-8 text-cream md:p-10">
                <span className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">
                  {t('contact.followUs')}
                </span>

                <h2 className="mt-5 font-display text-3xl leading-tight text-cream md:text-4xl">
                  {t('contact.followTitle')}
                </h2>

                <p className="mt-6 text-sm leading-relaxed text-cream/60">
                  {t('contact.followDescription')}
                </p>

                <div className="mt-8 flex flex-col gap-3">
                  {social.map((item) => {
                    const Icon =
                      socialIcons[item.label as keyof typeof socialIcons]

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                  onClick={(event) => { if (item.href === '#') event.preventDefault() }}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between rounded-full border border-cream/10 px-5 py-3.5 text-sm text-cream/75 transition-colors hover:border-rust hover:bg-rust hover:text-cream"
                      >
                        <span className="flex items-center gap-3">
                          <Icon size={19} />
                          {item.label}
                        </span>

                        <ArrowUpRight
                          size={17}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
              {t('contact.mapEyebrow')}
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl">{t('contact.mapHeading')}</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
              {t('contact.mapDescription')}
            </p>
            <div className="mt-8">
              <ContactMap />
            </div>
          </motion.div>
        </Container>
      </section>
      <TravelFaq />
    </>
  )
}
