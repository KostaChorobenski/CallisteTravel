import { useTranslation } from 'react-i18next'
import { Seo } from '../components/seo/Seo'
import { StubPage } from './StubPage'

export function NotFound() {
  const { t } = useTranslation()

  return (
    <>
      <Seo
        title={t('seo.notFound.title')}
        description={t('seo.notFound.description')}
        noIndex
      />
    <StubPage
      eyebrow="404"
      title="Оваа страница излезе од мапата"
      description="Страницата што ја баравте не постои или е преместена. Врати се на почетната страница и продолжи да истражуваш."
    />
    </>
  )
}
