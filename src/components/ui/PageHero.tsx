import type { ReactNode } from 'react'

type PageHeroProps = {
  image: string
  children: ReactNode
}

export function PageHero({ image, children }: PageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[55vh] items-end overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/50 to-ink/20" />
      </div>
      {children}
    </section>
  )
}
