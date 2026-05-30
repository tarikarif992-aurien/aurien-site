import { useState } from 'react'
import { posts } from '../data/posts'
import './Blog.css'

const categories = ['All', 'Essay', 'Reflection', 'Personal', 'Craft', 'Politics & Culture']

export default function Blog() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? posts : posts.filter(p => p.category === active)

  return (
    <div className="blog-page page-enter">

      <div className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow">Essays, Reflections & Craft</p>
          <h1 className="page-hero__title">The <em>Blog</em></h1>
          <p className="page-hero__sub">Irregular writing on love, power, language, and the South.</p>
        </div>
      </div>

      <div className="divider"><span>✦</span></div>

      <section className="blog-main">
        <div className="container">

          {/* FILTERS */}
          <div className="blog-filters reveal">
            {categories.map(cat => (
              <button
                key={cat}
                className={`blog-filter-btn ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FEATURED */}
          {active === 'All' && (
            <div className="blog-featured reveal">
              <div className="blog-featured__tag">Featured Essay</div>
              <h2 className="blog-featured__title">{posts[0].title}</h2>
              <p className="blog-featured__excerpt">{posts[0].excerpt}</p>
              <div className="blog-featured__meta">
                <span>{posts[0].date}</span>
                <span className="dot">·</span>
                <span>{posts[0].readTime}</span>
                <span className="dot">·</span>
                <span>{posts[0].category}</span>
              </div>
              <button className="btn-outline blog-featured__btn">Read Essay</button>
            </div>
          )}

          {/* GRID */}
          <div className="blog-grid">
            {(active === 'All' ? filtered.slice(1) : filtered).map((post, i) => (
              <div key={post.id} className={`blog-card reveal delay-${i % 3}`}>
                <div className="blog-card__top">
                  <span className="blog-card__cat">{post.category}</span>
                  <span className="blog-card__read">{post.readTime}</span>
                </div>
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <div className="blog-card__footer">
                  <span className="blog-card__date">{post.date}</span>
                  <button className="blog-card__link">Read →</button>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="blog-empty">
              <p>No posts in this category yet.</p>
            </div>
          )}

          <div className="blog-note reveal">
            <p>New essays published irregularly. Writing appears when the thinking is ready — not before.</p>
          </div>

        </div>
      </section>

    </div>
  )
}
