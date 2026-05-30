import { Link } from 'react-router-dom'
import { books } from '../data/books'
import { posts } from '../data/posts'
import './Home.css'

function BookCover({ title, small }) {
  return (
    <div className={`home-book-cover ${small ? 'small' : ''}`}>
      <div className="home-book-spine" />
      <div className="home-book-face">
        <div className="home-book-ornament">❧</div>
        <div className="home-book-title">{title}</div>
        <div className="home-book-divider" />
        <div className="home-book-author">Aurein Tarik</div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="home page-enter">

      {/* HERO */}
      <section className="hero">
        <div className="hero__bg-text">Love</div>
        <div className="container">
          <div className="hero__inner">
            <div className="hero__left">
              <p className="hero__eyebrow">Aurein Tarik · Author</p>
              <h1 className="hero__title">
                Writing that<br />
                <em>refuses to</em><br />
                look away.
              </h1>
              <p className="hero__sub">
                Two books. A lifetime of questions about love, power, and what we owe each other.
              </p>
              <div className="hero__actions">
                <Link to="/books" className="btn-primary">Explore Books</Link>
                <Link to="/author" className="btn-text">About the Author</Link>
              </div>
            </div>
            <div className="hero__right">
              <div className="hero__books">
                <div className="hero__book-1">
                  <BookCover title="Essence of Love" />
                  <div className="hero__book-tag">₹120 · Available Now</div>
                </div>
                <div className="hero__book-2">
                  <BookCover title="The Whip That Was Wrapped in Flowers" small />
                  <div className="hero__book-tag muted">Coming Soon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* QUOTE BAND */}
      <div className="quote-band">
        <div className="quote-band__inner">
          <blockquote>
            "We call it love when we cannot bear to lose someone. But that is not love — that is the fear of an empty space where a person used to be."
          </blockquote>
          <cite>— Essence of Love</cite>
        </div>
      </div>

      {/* BOOKS PREVIEW */}
      <section className="home-books">
        <div className="container">
          <div className="section-label">The Books</div>
          <div className="home-books__grid">
            {books.map((book, i) => (
              <div key={book.id} className={`reveal delay-${i}`}>
                <div className="home-book-card">
                  <div className="home-book-card__num">0{i + 1}</div>
                  <BookCover title={book.title} />
                  <div className="home-book-card__info">
                    <p className="home-book-card__label">{book.label}</p>
                    <h3 className="home-book-card__title">{book.title}</h3>
                    <p className="home-book-card__desc">{book.desc}</p>
                    <div className="home-book-card__footer">
                      <span className="home-book-card__price">{book.price}</span>
                      {book.buyLink
                        ? <a href={book.buyLink} className="btn-outline">Buy Now</a>
                        : <span className="home-book-card__soon">Coming Soon</span>
                      }
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="home-books__cta">
            <Link to="/books" className="btn-text">View All Books</Link>
          </div>
        </div>
      </section>

      <div className="divider"><span>✦</span></div>

      {/* AUTHOR STRIP */}
      <section className="author-strip">
        <div className="container">
          <div className="author-strip__inner reveal">
            <div className="author-strip__text">
              <div className="section-label">The Author</div>
              <h2>Aurein <em>Tarik</em></h2>
              <p>Self-taught. Unconventional. From Mayiladuthurai, Tamil Nadu — writing about love, patriarchy, political power, and the particular silence that surrounds things nobody wants to name.</p>
              <Link to="/author" className="btn-outline" style={{marginTop: '32px', display: 'inline-block'}}>Read More</Link>
            </div>
            <div className="author-strip__quote">
              <blockquote>
                "I write with no academic credentials and no institutional backing — only the discipline of someone who refuses to stop asking questions."
              </blockquote>
              <cite>— Aurein Tarik</cite>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"><span>✦</span></div>

      {/* BLOG PREVIEW */}
      <section className="home-blog">
        <div className="container">
          <div className="section-label">Recent Writing</div>
          <div className="home-blog__grid">
            {posts.slice(0, 3).map((post, i) => (
              <Link to="/blog" key={post.id} className={`home-blog-card reveal delay-${i}`}>
                <span className="home-blog-card__cat">{post.category}</span>
                <h4 className="home-blog-card__title">{post.title}</h4>
                <p className="home-blog-card__excerpt">{post.excerpt}</p>
                <div className="home-blog-card__meta">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="home-blog__cta">
            <Link to="/blog" className="btn-text">All Essays & Writing</Link>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-band__inner reveal">
            <p className="cta-band__label">Iraivi Books · 2025</p>
            <h2 className="cta-band__title">Begin with <em>Essence of Love</em></h2>
            <p className="cta-band__sub">62 pages. ₹120. A book that asks you to see what you have been trained not to see.</p>
            <div className="cta-band__actions">
              <a href="#" className="btn-primary">Order Now · ₹120</a>
              <Link to="/contact" className="btn-text">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
