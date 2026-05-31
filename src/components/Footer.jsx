import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">

        <div className="footer__brand">
          <span className="footer__logo">Aurein Tarik</span>
          <p className="footer__tagline">
            Writing that refuses to look away.
          </p>
        </div>

        <nav className="footer__nav">

          <div className="footer__nav-col">
            <span className="footer__nav-title">Navigate</span>

            <Link to="/">Home</Link>
            <Link to="/books">Books</Link>
            <Link to="/author">Author</Link>
            <Link to="/research">Research</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>

          <div className="footer__nav-col">
            <span className="footer__nav-title">Research</span>

            <Link to="/research">Policy Analysis</Link>
            <Link to="/research">Criminal Justice</Link>
            <Link to="/research">Governance Studies</Link>
            <Link to="/research">Constitutional Research</Link>
          </div>

          <div className="footer__nav-col">
            <span className="footer__nav-title">Contact</span>

            <span className="footer__info">
              tarikind1992@gmail.com
            </span>

            <a
              href="https://www.linkedin.com/in/mohamed-tarik-6ba9a13a0"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>

            <span className="footer__info">
              Tamil Nadu, India
            </span>
          </div>

        </nav>
      </div>

      <div className="footer__bottom">
        <div className="footer__divider" />

        <div className="footer__copy">
          <span>
            © {new Date().getFullYear()} Aurein Tarik.
            All rights reserved.
          </span>

          <span className="footer__ornament">❧</span>

          <span>
            Independent Research & Publications
          </span>
        </div>
      </div>
    </footer>
  )
}
