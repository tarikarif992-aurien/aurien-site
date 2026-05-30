import { Link } from 'react-router-dom'
import './BookCard.css'

export default function BookCard({ book, variant = 'default' }) {
  return (
    <div className={`book-card book-card--${variant}`}>
      <div className="book-card__cover">
        <div className="book-card__spine" />
        <div className="book-card__face">
          <div className="book-card__ornament">❧</div>
          <div className="book-card__cover-title">{book.title}</div>
          <div className="book-card__cover-divider" />
          <div className="book-card__cover-author">Aurein Tarik</div>
        </div>
      </div>
      <div className="book-card__info">
        <p className="book-card__label">{book.label}</p>
        <h3 className="book-card__title">{book.title}</h3>
        <p className="book-card__desc">{book.desc}</p>
        <div className="book-card__meta">
          <span>{book.pages} pages</span>
          <span className="book-card__dot">·</span>
          <span>{book.year}</span>
          <span className="book-card__dot">·</span>
          <span className="book-card__price">{book.price}</span>
        </div>
        <div className="book-card__actions">
          <a href={book.buyLink || '#'} className="btn-primary">Buy Now</a>
          <Link to="/books" className="btn-text">Learn More</Link>
        </div>
      </div>
    </div>
  )
}
