import { Link } from 'react-router-dom'
import './Author.css'

const timeline = [
  { year: '2024', event: 'Constitutional research submitted to the Law Commission of India and National SC/ST Commission' },
  { year: '2024', event: 'Began cybersecurity research and independent technical learning' },
  { year: '2025', event: 'Published Essence of Love under pen name Aurein Tarik — Iraivi Books' },
  { year: '2025', event: 'Published The Whip That Was Wrapped in Flowers — Iraivan Publishers' },
  { year: '2026', event: 'Ongoing investigative and analytical writing on Tamil Nadu politics and society' },
]

export default function Author() {
  return (
    <div className="author-page page-enter">

      <div className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow">The Writer Behind the Work</p>
          <h1 className="page-hero__title">Aurein <em>Tarik</em></h1>
          <p className="page-hero__sub">Pen name. Self-taught. Mayiladuthurai, Tamil Nadu.</p>
        </div>
      </div>

      <div className="divider"><span>✦</span></div>

      {/* MAIN BIO */}
      <section className="author-bio-section">
        <div className="container">
          <div className="author-bio-grid">
            <div className="author-portrait reveal">
              <div className="author-portrait__frame">
                <div className="author-portrait__initials">AT</div>
                <div className="author-portrait__glow" />
              </div>
              <div className="author-portrait__shadow" />
              <div className="author-aside">
                <div className="author-aside__item">
                  <span className="author-aside__key">Pen Name</span>
                  <span className="author-aside__val">Aurein Tarik</span>
                </div>
                <div className="author-aside__item">
                  <span className="author-aside__key">Location</span>
                  <span className="author-aside__val">Mayiladuthurai, Tamil Nadu</span>
                </div>
                <div className="author-aside__item">
                  <span className="author-aside__key">Publisher</span>
                  <span className="author-aside__val">Iraivi Books / Iraivan Publishers</span>
                </div>
                <div className="author-aside__item">
                  <span className="author-aside__key">Books</span>
                  <span className="author-aside__val">2 Published</span>
                </div>
              </div>
            </div>

            <div className="author-bio-text reveal delay-1">
              <div className="section-label">About</div>
              <h2 className="author-bio-text__heading">Writing without<br /><em>permission or precedent.</em></h2>
              <p>Aurein Tarik is entirely self-taught — no formal academic background, no institutional credentials, no university affiliation. What he has instead is the rare discipline of someone who has read deeply, thought independently, and refused easy answers for a long time.</p>
              <p>Born and rooted in Mayiladuthurai, Tamil Nadu, his thinking is shaped by the Dravidian political tradition, by Periyarist rationalism, by the particular way Tamil culture understands obligation, family, and power. He writes not from the outside looking in, but from inside the thing he is examining.</p>
              <p>His first book, <em>Essence of Love</em>, asks uncomfortable questions about what love actually is, as opposed to what we have been taught it should be. His second book, <em>The Whip That Was Wrapped in Flowers</em>, examines how patriarchy operates through affection and obligation — the mechanisms of control that hide inside warmth.</p>
              <p>Beyond fiction and essay, he is a constitutional researcher who has submitted work to the Law Commission of India and the National SC/ST Commission, and an investigative writer whose analysis covers Tamil Nadu politics, electoral data, and political economy.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"><span>✦</span></div>

      {/* INTERESTS / AREAS */}
      <section className="author-areas">
        <div className="container">
          <div className="section-label">Areas of Work</div>
          <div className="areas-grid">
            {[
              { num: '01', title: 'Literary Writing', desc: 'Books on love, identity, and the psychological structures that quietly govern human life.' },
              { num: '02', title: 'Constitutional Research', desc: 'Independent research submitted to national bodies on accountability, fundamental rights, and legislative gaps.' },
              { num: '03', title: 'Investigative Analysis', desc: 'Data-driven analysis of Tamil Nadu politics, electoral finance, and political economy.' },
              { num: '04', title: 'Dravidian Political History', desc: 'Deep study of DMK ideology, Periyarist thought, and the political history of Tamil Nadu.' },
            ].map(a => (
              <div key={a.num} className="area-card reveal">
                <span className="area-card__num">{a.num}</span>
                <h3 className="area-card__title">{a.title}</h3>
                <p className="area-card__desc">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"><span>✦</span></div>

      {/* TIMELINE */}
      <section className="author-timeline">
        <div className="container">
          <div className="section-label">Timeline</div>
          <div className="timeline">
            {timeline.map((t, i) => (
              <div key={i} className="timeline__item reveal">
                <div className="timeline__year">{t.year}</div>
                <div className="timeline__dot" />
                <div className="timeline__event">{t.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"><span>✦</span></div>

      {/* QUOTE */}
      <section className="author-quote-section">
        <div className="container">
          <div className="author-large-quote reveal">
            <blockquote>
              "I write with no academic credentials and no institutional backing — only the discipline of someone who refuses to stop asking questions. The questions themselves are the credential."
            </blockquote>
            <cite>— Aurein Tarik</cite>
          </div>
          <div className="author-cta reveal delay-1">
            <Link to="/books" className="btn-primary">Read the Books</Link>
            <Link to="/contact" className="btn-text">Get in Touch</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
