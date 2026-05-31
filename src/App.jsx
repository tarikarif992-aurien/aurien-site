import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Books from './pages/Books'
import Author from './pages/Author'
import Research from './Research'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function Cursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  let rx = 0, ry = 0

  useEffect(() => {
    let mx = 0, my = 0
    const move = (e) => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', move)

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = mx + 'px'
        cursorRef.current.style.top = my + 'px'
      }
      rx += (mx - rx) * 0.13
      ry += (my - ry) * 0.13
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top = ry + 'px'
      }
      requestAnimationFrame(animate)
    }
    animate()

    const addHover = () => {
      document.querySelectorAll('a, button, .hoverable').forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursorRef.current?.classList.add('hovering')
          ringRef.current?.classList.add('hovering')
        })
        el.addEventListener('mouseleave', () => {
          cursorRef.current?.classList.remove('hovering')
          ringRef.current?.classList.remove('hovering')
        })
      })
    }
    addHover()

    return () => document.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}

function ScrollReveal() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    }, 100)
    return () => observer.disconnect()
  }, [location])
  return null
}

export default function App() {
  return (
    <>
      <Cursor />
      <ScrollReveal />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/books" element={<Books />} />
          <Route path="/author" element={<Author />} />
          <Route path="/research" element={<Research />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
