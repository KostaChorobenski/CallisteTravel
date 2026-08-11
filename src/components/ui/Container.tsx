import type { ReactNode } from 'react'
import { clsx } from 'clsx'

type ContainerProps = {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={clsx('mx-auto w-full max-w-6xl px-6 md:px-10', className)}>
      {children}
    </div>
  )
}
