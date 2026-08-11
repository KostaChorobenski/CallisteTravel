import { clsx } from 'clsx'

type WordmarkProps = {
  className?: string
  variant?: 'ink' | 'cream'
}

export function Wordmark({ className, variant = 'ink' }: WordmarkProps) {
  return (
    <span
      className={clsx(
        'font-display text-2xl tracking-tight',
        variant === 'ink' ? 'text-ink' : 'text-cream',
        className,
      )}
    >
      Calliste
      <span className={variant === 'ink' ? 'text-rust' : 'text-gold'}>.</span>
    </span>
  )
}
