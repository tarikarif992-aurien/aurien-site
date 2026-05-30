import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          <span className="navbar__logo-name">Aurein Tarik</span>
          <span className="navbar__logo-sub">Author</span>
        </Link>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/books" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Books</NavLink>
          <NavLink to="/author" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Author</NavLink>
          <NavLink to="/blog" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Blog</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <Link to="/books" className="navbar__cta" onClick={() => setMenuOpen(false)}>Buy Books</Link>
        </nav>

        <button
          className={`navbar__burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
