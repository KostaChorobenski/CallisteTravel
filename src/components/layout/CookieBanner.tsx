import { useEffect, useState } from 'react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { cookieBanner } from '../../data/site'

const STORAGE_KEY = 'calliste-cookie-consent'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      setIsVisible(stored !== 'accepted' && stored !== 'rejected')
    } catch {
      setIsVisible(true)
    }
  }, [])

  function respond(choice: 'accepted' | 'rejected') {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice)
    } catch {
      // The banner can still be dismissed when browser storage is blocked.
    }
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-ink/10 bg-cream/95 backdrop-blur">
      <Container className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-relaxed text-ink-soft md:max-w-2xl">
          {cookieBanner.message}
        </p>

        <div className="flex shrink-0 gap-3">
          <Button
            variant="secondary"
            onClick={() => respond('rejected')}
          >
            {cookieBanner.reject}
          </Button>

          <Button
            variant="primary"
            onClick={() => respond('accepted')}
          >
            {cookieBanner.accept}
          </Button>
        </div>
      </Container>
    </div>
  )
}
