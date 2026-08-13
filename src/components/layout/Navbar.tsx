import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { List, X } from '@phosphor-icons/react'
import { clsx } from 'clsx'
import { Wordmark } from '../../assets/logo/Wordmark'

const links = [
  { to: '/', label: 'Почетна' },
  { to: '/destinatsii', label: 'Дестинации' },
  { to: '/dnevnik', label: 'Дневник' },
  { to: '/za-nas', label: 'За нас' },
  { to: '/kontakt', label: 'Контакт' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 md:px-10">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                clsx(
                  'text-sm font-semibold transition-colors',
                  isActive ? 'text-rust' : 'text-ink-soft hover:text-ink',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          aria-label={isOpen ? 'Затвори мени' : 'Отвори мени'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 md:hidden"
        >
          {isOpen ? <X size={23} /> : <List size={23} />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-ink/10 bg-cream px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  clsx(
                    'rounded-xl px-4 py-3 text-sm font-semibold transition-colors',
                    isActive
                      ? 'bg-rust/10 text-rust'
                      : 'text-ink-soft hover:bg-ink/5 hover:text-ink',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
