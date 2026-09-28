import { useTranslation } from 'react-i18next'
import { contact } from '../../data/site'

export function ContactMap() {
  const { t } = useTranslation()
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(contact.mapsQuery)}&z=15&output=embed`

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card border border-ink/10 md:aspect-[21/9]">
      <iframe
        title={t('contact.mapTitle')}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  )
}
