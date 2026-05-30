import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <span className="footer__logo">Aurein Tarik</span>
          <p className="footer__tagline">Writing that refuses to look away.</p>
        </div>
        <nav className="footer__nav">
          <div className="footer__nav-col">
            <span className="footer__nav-title">Navigate</span>
            <Link to="/">Home</Link>
            <Link to="/books">Books</Link>
            <Link to="/author">Author</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer__nav-col">
            <span className="footer__nav-title">Books</span>
            <Link to="/books">Essence of Love</Link>
            <Link to="/books">The Whip That Was Wrapped in Flowers</Link>
          </div>
          <div className="footer__nav-col">
            <span className="footer__nav-title">Publisher</span>
            <span className="footer__info">Iraivi Books</span>
            <span className="footer__info">Tamil Nadu, India</span>
          </div>
        </nav>
      </div>
      <div className="footer__bottom">
        <div className="footer__divider" />
        <div className="footer__copy">
          <span>© {new Date().getFullYear()} Aurein Tarik. All rights reserved.</span>
          <span className="footer__ornament">❧</span>
          <span>Published by Iraivi Books</span>
        </div>
      </div>
    </footer>
  )
}
