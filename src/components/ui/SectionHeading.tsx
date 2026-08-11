import type { ReactNode } from 'react'
import { clsx } from 'clsx'

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <span className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-rust">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl">{title}</h2>
      {description && (
        <p
          className={clsx(
            'text-ink-soft text-base md:text-lg leading-relaxed',
            align === 'center' ? 'max-w-2xl' : 'max-w-xl',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
