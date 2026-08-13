import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { List, X } from '@phosphor-icons/react'
import { clsx } from 'clsx'
import { Wordmark } from '../../assets/logo/Wordmark'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { navLinks } from '../../data/site'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
        <Container className="flex h-16 items-center justify-between sm:h-20">
          <NavLink
              to="/"
              aria-label="Calliste Travel — почетна"
              onClick={() => setIsMenuOpen(false)}
          >
            <Wordmark />
          </NavLink>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                        clsx(
                            'font-body text-sm font-medium transition-colors',
                            isActive ? 'text-rust' : 'text-ink-soft hover:text-ink',
                        )
                    }
                >
                  {link.label}
                </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button to="/kontakt" variant="primary" className="text-sm">
              Контактирај нè
            </Button>
          </div>

          <button
              type="button"
              aria-label={isMenuOpen ? 'Затвори мени' : 'Отвори мени'}
              aria-expanded={isMenuOpen}
              className="cursor-pointer rounded-full p-2 text-ink transition-colors hover:bg-ink/5 md:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={26} /> : <List size={26} />}
          </button>
        </Container>

        {isMenuOpen && (
            <nav className="border-t border-ink/10 bg-cream md:hidden">
              <Container className="flex flex-col gap-1 py-4">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            clsx(
                                'rounded-lg px-3 py-3 font-body text-base font-medium transition-colors',
                                isActive
                                    ? 'bg-cream-soft text-rust'
                                    : 'text-ink-soft hover:bg-cream-soft hover:text-ink',
                            )
                        }
                    >
                      {link.label}
                    </NavLink>
                ))}

                <Button
                    to="/kontakt"
                    variant="primary"
                    className="mt-2 justify-center"
                >
                  Контактирај нè
                </Button>
              </Container>
            </nav>
        )}
      </header>
  )
}