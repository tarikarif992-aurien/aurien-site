import { books } from '../data/books'
import './Books.css'

function BookCover({ title }) {
  return (
    <div className="books-cover">
      <div className="books-cover__spine" />
      <div className="books-cover__face">
        <div className="books-cover__ornament">❧</div>
        <div className="books-cover__title">{title}</div>
        <div className="books-cover__divider" />
        <div className="books-cover__author">Aurein Tarik</div>
      </div>
    </div>
  )
}

export default function Books() {
  return (
    <div className="books-page page-enter">

      <div className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow">Iraivi Books · Iraivan Publishers</p>
          <h1 className="page-hero__title">The <em>Books</em></h1>
          <p className="page-hero__sub">Two works. One thread — what we are taught to feel, and what we actually do.</p>
        </div>
      </div>

      <div className="divider"><span>✦</span></div>

      {books.map((book, i) => (
        <section key={book.id} className={`book-full ${i % 2 !== 0 ? 'book-full--alt' : ''}`}>
          <div className="container">
            <div className="book-full__inner">
              <div className="book-full__visual reveal">
                <BookCover title={book.title} />
              </div>
              <div className="book-full__content reveal delay-1">
                <p className="book-full__label">{book.label}</p>
                <h2 className="book-full__title">{book.title}</h2>
                {book.longDesc.split('\n\n').map((para, j) => (
                  <p key={j} className="book-full__para">{para}</p>
                ))}

                <div className="book-full__details">
                  {[
                    ['Publisher', book.publisher],
                    ['Pages', book.pages],
                    ['Year', book.year],
                    ['Price', book.price],
                  ].map(([k, v]) => (
                    <div key={k} className="book-full__detail">
                      <span className="book-full__detail-key">{k}</span>
                      <span className="book-full__detail-val">{v}</span>
                    </div>
                  ))}
                </div>

                <div className="book-full__actions">
                  {book.buyLink
                    ? <a href={book.buyLink} className="btn-primary">Buy Now · {book.price}</a>
                    : <span className="book-full__soon">Coming Soon</span>
                  }
                </div>
              </div>
            </div>

            {/* QUOTES */}
            <div className="book-quotes reveal">
              <p className="section-label" style={{marginBottom: '32px'}}>From the Pages</p>
              <div className="book-quotes__grid">
                {book.quotes.map((q, j) => (
                  <div key={j} className="book-quotes__item">
                    <span className="book-quotes__mark">"</span>
                    <p>{q}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {i < books.length - 1 && <div className="divider" style={{padding: '0 60px', marginTop: '80px'}}><span>✦</span></div>}
        </section>
      ))}

    </div>
  )
}
