/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { CONTACT_EMAIL } from "../site-links"

type Status = `idle` | `sending` | `sent` | `error`

const FORM_NAME = `contact`
const FORM_ACTION = `/contact/`

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join(`&`)

const ContactForm = () => {
  const [status, setStatus] = React.useState<Status>(`idle`)
  const [error, setError] = React.useState(``)
  const [values, setValues] = React.useState({ name: ``, email: ``, subject: ``, message: `` })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  const mailtoHref = React.useMemo(() => {
    const body = [`Name: ${values.name}`, `Email: ${values.email}`, ``, values.message]
      .filter(Boolean)
      .join(`\n`)
    const params = new URLSearchParams()
    if (values.subject) params.set(`subject`, values.subject)
    if (body.trim()) params.set(`body`, body)
    return `mailto:${CONTACT_EMAIL}?${params.toString()}`
  }, [values])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus(`sending`)
    setError(``)

    const form = e.currentTarget
    const data = new FormData(form)
    const payload: Record<string, string> = { "form-name": FORM_NAME }
    data.forEach((value, key) => {
      payload[key] = String(value)
    })

    try {
      const res = await fetch(FORM_ACTION, {
        method: `POST`,
        headers: { "Content-Type": `application/x-www-form-urlencoded` },
        body: encode(payload),
      })
      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`)
      }
      setStatus(`sent`)
      form.reset()
      setValues({ name: ``, email: ``, subject: ``, message: `` })
    } catch {
      setStatus(`error`)
      setError(
        `Netlify form handoff failed — use “Open in email app” below, or write to ${CONTACT_EMAIL}.`
      )
    }
  }

  return (
    <div className="contact-form-wrap">
      <form
        name={FORM_NAME}
        method="POST"
        action={FORM_ACTION}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="contact-form"
      >
        <input type="hidden" name="form-name" value={FORM_NAME} />
        <p className="contact-form__honeypot" hidden>
          <label>
            Don&apos;t fill this out: <input name="bot-field" />
          </label>
        </p>

        <label className="contact-form__field">
          <span className="contact-form__label">Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="contact-form__input"
            value={values.name}
            onChange={handleChange}
          />
        </label>

        <label className="contact-form__field">
          <span className="contact-form__label">Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="contact-form__input"
            value={values.email}
            onChange={handleChange}
          />
        </label>

        <label className="contact-form__field">
          <span className="contact-form__label">Subject</span>
          <input
            type="text"
            name="subject"
            required
            className="contact-form__input"
            value={values.subject}
            onChange={handleChange}
          />
        </label>

        <label className="contact-form__field">
          <span className="contact-form__label">Message</span>
          <textarea
            name="message"
            required
            rows={6}
            className="contact-form__input contact-form__textarea"
            value={values.message}
            onChange={handleChange}
          />
        </label>

        <div className="contact-form__actions">
          <button type="submit" className="btn-primary contact-form__submit" disabled={status === `sending`}>
            {status === `sending` ? `Sending…` : `Send message`}
          </button>
          <a href={mailtoHref} className="btn-ghost contact-form__mailto">
            Open in email app
          </a>
        </div>

        {status === `sent` && (
          <p className="contact-form__status contact-form__status--ok" role="status">
            Message sent — I&apos;ll reply to the email you provided.
          </p>
        )}
        {status === `error` && (
          <p className="contact-form__status contact-form__status--err" role="alert">
            {error}
          </p>
        )}
      </form>

      <p className="contact-form__fallback">
        Direct: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
    </div>
  )
}

export default ContactForm
