import { useId, useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { PaperPlaneTilt } from '@phosphor-icons/react'
import { Button } from '../ui/Button'

type FormValues = {
  name: string
  email: string
  subject: string
  message: string
}

type FieldName = keyof FormValues
type FormErrors = Partial<Record<FieldName, string>>
type TouchedFields = Partial<Record<FieldName, boolean>>

const initialValues: FormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const fieldInputClass =
  'mt-2 w-full min-h-11 rounded-xl border bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus-visible:border-rust'

export function ContactForm() {
  const { t } = useTranslation()
  const formId = useId()
  const [values, setValues] = useState<FormValues>(initialValues)
  const [touched, setTouched] = useState<TouchedFields>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  function validate(current: FormValues): FormErrors {
    const next: FormErrors = {}
    const name = current.name.trim()
    const email = current.email.trim()
    const subject = current.subject.trim()
    const message = current.message.trim()

    if (!name) {
      next.name = t('contact.form.errors.nameRequired')
    } else if (name.length < 2) {
      next.name = t('contact.form.errors.nameMin')
    }

    if (!email) {
      next.email = t('contact.form.errors.emailRequired')
    } else if (!EMAIL_PATTERN.test(email)) {
      next.email = t('contact.form.errors.emailInvalid')
    }

    if (!subject) {
      next.subject = t('contact.form.errors.subjectRequired')
    } else if (subject.length < 3) {
      next.subject = t('contact.form.errors.subjectMin')
    }

    if (!message) {
      next.message = t('contact.form.errors.messageRequired')
    } else if (message.length < 10) {
      next.message = t('contact.form.errors.messageMin')
    }

    return next
  }

  const errors = validate(values)

  function shouldShowError(field: FieldName) {
    return Boolean((touched[field] || submitted) && errors[field])
  }

  function updateField(field: FieldName, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    setSuccess(false)
  }

  function handleBlur(field: FieldName) {
    setTouched((current) => ({ ...current, [field]: true }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)

    if (Object.keys(validate(values)).length > 0) {
      return
    }

    setIsSubmitting(true)

    window.setTimeout(() => {
      setIsSubmitting(false)
      setSuccess(true)
      setValues(initialValues)
      setTouched({})
      setSubmitted(false)
    }, 600)
  }

  function fieldDescribedBy(field: FieldName) {
    return shouldShowError(field) ? `${formId}-${field}-error` : undefined
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {success ? (
        <p
          role="status"
          aria-live="polite"
          className="rounded-xl border border-sage/30 bg-sage/10 px-4 py-3 text-sm font-medium text-ink"
        >
          {t('contact.form.success')}
        </p>
      ) : null}

      <div>
        <label htmlFor={`${formId}-name`} className="text-sm font-semibold text-ink">
          {t('contact.form.name')}
        </label>
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(event) => updateField('name', event.target.value)}
          onBlur={() => handleBlur('name')}
          aria-invalid={shouldShowError('name')}
          aria-describedby={fieldDescribedBy('name')}
          placeholder={t('contact.form.namePlaceholder')}
          className={`${fieldInputClass} ${
            shouldShowError('name') ? 'border-rust' : 'border-ink/15'
          }`}
        />
        {shouldShowError('name') ? (
          <p id={`${formId}-name-error`} role="alert" className="mt-2 text-sm text-rust">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor={`${formId}-email`} className="text-sm font-semibold text-ink">
          {t('contact.form.email')}
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          value={values.email}
          onChange={(event) => updateField('email', event.target.value)}
          onBlur={() => handleBlur('email')}
          aria-invalid={shouldShowError('email')}
          aria-describedby={fieldDescribedBy('email')}
          placeholder={t('contact.form.emailPlaceholder')}
          className={`${fieldInputClass} ${
            shouldShowError('email') ? 'border-rust' : 'border-ink/15'
          }`}
        />
        {shouldShowError('email') ? (
          <p id={`${formId}-email-error`} role="alert" className="mt-2 text-sm text-rust">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor={`${formId}-subject`} className="text-sm font-semibold text-ink">
          {t('contact.form.subject')}
        </label>
        <input
          id={`${formId}-subject`}
          name="subject"
          type="text"
          value={values.subject}
          onChange={(event) => updateField('subject', event.target.value)}
          onBlur={() => handleBlur('subject')}
          aria-invalid={shouldShowError('subject')}
          aria-describedby={fieldDescribedBy('subject')}
          placeholder={t('contact.form.subjectPlaceholder')}
          className={`${fieldInputClass} ${
            shouldShowError('subject') ? 'border-rust' : 'border-ink/15'
          }`}
        />
        {shouldShowError('subject') ? (
          <p id={`${formId}-subject-error`} role="alert" className="mt-2 text-sm text-rust">
            {errors.subject}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className="text-sm font-semibold text-ink">
          {t('contact.form.message')}
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) => updateField('message', event.target.value)}
          onBlur={() => handleBlur('message')}
          aria-invalid={shouldShowError('message')}
          aria-describedby={fieldDescribedBy('message')}
          placeholder={t('contact.form.messagePlaceholder')}
          className={`${fieldInputClass} min-h-32 resize-y ${
            shouldShowError('message') ? 'border-rust' : 'border-ink/15'
          }`}
        />
        {shouldShowError('message') ? (
          <p id={`${formId}-message-error`} role="alert" className="mt-2 text-sm text-rust">
            {errors.message}
          </p>
        ) : null}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        <PaperPlaneTilt size={18} />
        {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
      </Button>
    </form>
  )
}
