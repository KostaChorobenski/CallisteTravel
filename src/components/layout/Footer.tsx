import { Link } from 'react-router-dom'
import { ArrowUpRight } from '@phosphor-icons/react'
import { Container } from '../ui/Container'
import { Wordmark } from '../../assets/logo/Wordmark'
import { social } from '../../data/site'

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <Container className="py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.6fr_0.6fr]">
          <div>
            <Link to="/" className="inline-block">
              <Wordmark variant="cream" />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/55">
              Откриваме места со карактер, далеку од очигледните туристички
              рути. Патувањето започнува таму каде што мапите завршуваат.
            </p>
          </div>

          <div>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-cream/35">
              Навигација
            </span>

            <nav className="mt-5 flex flex-col items-start gap-3">
              <Link
                to="/"
                className="text-sm text-cream/65 transition-colors hover:text-cream"
              >
                Почетна
              </Link>

              <Link
                to="/destinatsii"
                className="text-sm text-cream/65 transition-colors hover:text-cream"
              >
                Дестинации
              </Link>

              <Link
                  to="/dnevnik"
                  className="text-sm text-cream/65 transition-colors hover:text-cream"
              >
                Дневник
              </Link>

              <Link
                to="/za-nas"
                className="text-sm text-cream/65 transition-colors hover:text-cream"
              >
                За нас
              </Link>

              <Link
                to="/kontakt"
                className="text-sm text-cream/65 transition-colors hover:text-cream"
              >
                Контакт
              </Link>
            </nav>
          </div>

          <div>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-cream/35">
              Следете нè
            </span>

            <div className="mt-5 flex flex-col items-start gap-3">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-cream/65 transition-colors hover:text-cream"
                >
                  {item.label}
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Calliste Travel.</span>
          <span>Патувај подалеку од мапата.</span>
        </div>
      </Container>
    </footer>
  )
}
