import { useTranslation } from 'react-i18next'
import { Hero } from '../components/home/Hero'
import { FeaturedDestinations } from '../components/home/FeaturedDestinations'
import { WhyCalliste } from '../components/home/WhyCalliste'
import { JournalTeaser } from '../components/home/JournalTeaser'
import { Seo } from '../components/seo/Seo'

export function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Seo
        title={t('seo.home.title')}
        description={t('seo.home.description')}
        keywords={t('seo.home.keywords')}
      />
      <Hero />
      <FeaturedDestinations />
      <WhyCalliste />
      <JournalTeaser />
    </>
  )
}
