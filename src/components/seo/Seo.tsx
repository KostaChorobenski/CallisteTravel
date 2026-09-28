import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { brand } from '../../data/site'

const DEFAULT_OG_IMAGE = '/og-image.jpg'

type SeoProps = {
  title: string
  description: string
  keywords?: string
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}

export function Seo({
  title,
  description,
  keywords,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noIndex = false,
}: SeoProps) {
  const { i18n } = useTranslation()
  const { pathname } = useLocation()
  const origin = window.location.origin
  const url = `${origin}${pathname}`
  const imageUrl = image.startsWith('http') ? image : `${origin}${image}`

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta
        name="robots"
        content={noIndex ? 'noindex, nofollow' : 'index, follow'}
      />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={brand.name} />
      <meta property="og:locale" content={i18n.language.startsWith('en') ? 'en_US' : 'mk_MK'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  )
}
