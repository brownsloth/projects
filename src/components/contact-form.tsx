/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { CONTACT_EMAIL } from "../site-links"

type Status = `idle` | `sending` | `sent` | `error`

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join(`&`)

const ContactForm = () => {
  const [status, setStatus] = React.useState<Status>(`idle`)
  const [error, setError] = React.useState(``)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus(`sending`)
    setError(``)

    const form = e.currentTarget
    const data = new FormData(form)
    const payload: Record<string, string> = { "form-name": `contact` }
    data.forEach((value, key) => {
      payload[key] = String(value)
    })

    try {
      const res = await fetch(`/`, {
        method: `POST`,
        headers: { "Content-Type": `application/x-www-form-urlencoded` },
        body: encode(payload),
      })
      if (!res.ok) throw new Error(`Request failed`)
      setStatus(`sent`)
      form.reset()
    } catch {
      setStatus(`error`)
      setError(`Something went wrong. Email directly at ${CONTACT_EMAIL}.`)
    }
  }

  return (
    <div className="contact-form-wrap">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="contact-form"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="contact-form__honeypot" hidden>
          <label>
            Don&apos;t fill this out: <input name="bot-field" />
          </label>
        </p>

        <label className="contact-form__field">
          <span className="contact-form__label">Name</span>
          <input type="text" name="name" required autoComplete="name" className="contact-form__input" />
        </label>

        <label className="contact-form__field">
          <span className="contact-form__label">Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="contact-form__input"
          />
        </label>

        <label className="contact-form__field">
          <span className="contact-form__label">Subject</span>
          <input type="text" name="subject" required className="contact-form__input" />
        </label>

        <label className="contact-form__field">
          <span className="contact-form__label">Message</span>
          <textarea name="message" required rows={6} className="contact-form__input contact-form__textarea" />
        </label>

        <button type="submit" className="btn-primary contact-form__submit" disabled={status === `sending`}>
          {status === `sending` ? `Sending…` : `Send message`}
        </button>

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
        Or email directly:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
    </div>
  )
}

export default ContactForm
