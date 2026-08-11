import type { ReactNode } from 'react'
import { clsx } from 'clsx'

type CardProps = {
  children: ReactNode
  className?: string
  padded?: boolean
}

export function Card({ children, className, padded = true }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-card bg-cream-soft shadow-soft overflow-hidden',
        padded && 'p-6',
        className,
      )}
    >
      {children}
    </div>
  )
}
