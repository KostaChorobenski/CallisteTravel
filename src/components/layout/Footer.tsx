import { NavLink } from 'react-router-dom'
import {
  EnvelopeSimple,
  InstagramLogo,
  FacebookLogo,
  Phone,
} from '@phosphor-icons/react'
import { Wordmark } from '../../assets/logo/Wordmark'
import { Container } from '../ui/Container'
import { brand, contact, navLinks, social } from '../../data/site'

const socialIcons = {
  Instagram: InstagramLogo,
  Facebook: FacebookLogo,
} as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
      <footer className="border-t border-ink/10 bg-cream-soft">
        <Container className="grid gap-10 py-12 sm:gap-12 sm:py-16 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Wordmark />

            <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
              {brand.shortBlurb}
            </p>

            <div className="flex gap-3 pt-1">
              {social.map((item) => {
                const Icon =
                    socialIcons[item.label as keyof typeof socialIcons]

                return (
                    <a
                        key={item.label}
                        href={item.href}
                        aria-label={item.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink-soft transition-colors hover:border-rust hover:text-rust"
                    >
                      <Icon size={18} weight="regular" />
                    </a>
                )
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-body text-sm font-semibold uppercase tracking-[0.14em] text-ink">
              Брзи линкови
            </h3>

            {navLinks.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    className="text-sm text-ink-soft transition-colors hover:text-rust"
                >
                  {link.label}
                </NavLink>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-body text-sm font-semibold uppercase tracking-[0.14em] text-ink">
              Контакт
            </h3>

            <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-rust"
            >
              <EnvelopeSimple size={18} />
              <span className="break-all">{contact.email}</span>
            </a>

            <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-rust"
            >
              <Phone size={18} />
              {contact.phone}
            </a>
          </div>
        </Container>

        <div className="border-t border-ink/10 py-5 sm:py-6">
          <Container>
            <p className="text-xs text-ink-soft">
              © {year} {brand.name}. Сите права задржани.
            </p>
          </Container>
        </div>
      </footer>
  )
}