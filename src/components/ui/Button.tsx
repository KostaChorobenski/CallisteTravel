import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { clsx } from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline-on-dark'

type BaseProps = {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
}

type ButtonAsLink = BaseProps & {
  to: string
  href?: never
  onClick?: never
}

type ButtonAsAnchor = BaseProps & {
  href: string
  to?: never
  onClick?: never
}

type ButtonAsButton = BaseProps & {
  onClick?: () => void
  to?: never
  href?: never
  type?: 'button' | 'submit'
  disabled?: boolean
}

type ButtonProps = ButtonAsLink | ButtonAsAnchor | ButtonAsButton

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-rust text-cream hover:bg-rust-dark shadow-soft hover:shadow-soft-lg',
  secondary:
    'bg-transparent text-ink border border-ink/20 hover:border-ink/40 hover:bg-ink/5',
  ghost: 'bg-transparent text-ink hover:bg-ink/5',
  'outline-on-dark':
    'bg-transparent text-cream border border-cream/40 hover:border-cream/70 hover:bg-cream/10',
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body font-semibold text-sm transition-all duration-200 ease-out cursor-pointer disabled:cursor-not-allowed disabled:opacity-60'

export function Button(props: ButtonProps) {
  const classes = clsx(baseClasses, variantClasses[props.variant ?? 'primary'], props.className)

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {props.children}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    return (
      <a href={props.href} className={classes}>
        {props.children}
      </a>
    )
  }

  const { onClick, type = 'button', disabled } = props as ButtonAsButton
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {props.children}
    </button>
  )
}
