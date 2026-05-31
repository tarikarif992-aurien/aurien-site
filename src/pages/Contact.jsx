import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    // In production, connect to Formspree / EmailJS
    setSent(true)
  }

  return (
    <div className="contact-page page-enter">

      <div className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow">Reach Out</p>
          <h1 className="page-hero__title">Get in <em>Touch</em></h1>
          <p className="page-hero__sub">For readers, press, collaborations, or to simply say something worth saying.</p>
        </div>
      </div>

      <div className="divider"><span>✦</span></div>

      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">

            <div className="contact-info reveal">
              <div className="section-label">Contact</div>
              <h2 className="contact-info__heading">Words reach<br /><em>further than silence.</em></h2>
              <p className="contact-info__desc">
                Whether you have read one of the books, want to discuss an idea, or are a publication, publisher, or researcher — all genuine messages are read and replied to.
              </p>

              <div className="contact-reasons">
                {[
                  { label: 'Readers', desc: 'Thoughts on the books. Questions. Disagreements welcome.' },
                  { label: 'Press & Media', desc: 'Interviews, reviews, and features.' },
                  { label: 'Collaboration', desc: 'Writing, research, or analytical projects.' },
                  { label: 'Publishers', desc: 'Rights, translations, or new work.' },
                ].map(r => (
                  <div key={r.label} className="contact-reason">
                    <span className="contact-reason__label">{r.label}</span>
                    <span className="contact-reason__desc">{r.desc}</span>
                  </div>
                ))}
              </div>

              <div className="contact-note">
                <div className="contact-direct">
  <h3>Direct Contact</h3>

  <p>
    Email:
    <a href="mailto:tarikind1992@gmail.com">
      tarikind1992@gmail.com
    </a>
  </p>

  <p>
    LinkedIn:
    <a
      href="https://www.linkedin.com/in/mohamed-tarik-6ba9a13a0"
      target="_blank"
      rel="noreferrer"
    >
      Mohamed Tarik LinkedIn
    </a>
  </p>
</div>
                <p>Published under pen name <em>Aurein Tarik</em>.<br />All correspondence treated with care and confidentiality.</p>
              </div>
            </div>

            <div className="contact-form-wrap reveal delay-1">
              {!sent ? (
                <form className="contact-form" onSubmit={submit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Name</label>
                      <input name="name" value={form.name} onChange={handle} required placeholder="Your name" />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input name="email" type="email" value={form.email} onChange={handle} required placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input name="subject" value={form.subject} onChange={handle} required placeholder="What is this regarding?" />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" value={form.message} onChange={handle} required rows={7} placeholder="Write your message here..." />
                  </div>
                  <button type="submit" className="btn-primary contact-submit">Send Message</button>
                </form>
              ) : (
                <div className="contact-success">
                  <div className="contact-success__ornament">❧</div>
                  <h3>Message received.</h3>
                  <p>Thank you for writing. Your message will be read and replied to in due time.</p>
                  <button className="btn-text" onClick={() => setSent(false)} style={{marginTop: '24px'}}>Send another</button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
