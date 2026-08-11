import { Hero } from '../components/home/Hero'
import { FeaturedDestinations } from '../components/home/FeaturedDestinations'
import { WhyCalliste } from '../components/home/WhyCalliste'
import { JournalTeaser } from '../components/home/JournalTeaser'

export function Home() {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <WhyCalliste />
      <JournalTeaser />
    </>
  )
}
