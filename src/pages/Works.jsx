import { useState } from 'react'
import { Link } from 'react-router-dom'
import LazyImage from '../components/LazyImage'
import projects from '../data/projects.json'

export default function Works() {
  const [activeCategory, setActiveCategory] = useState('全部')
  const categories = ['全部', ...new Set(projects.map((p) => p.category))]

  const filtered =
    activeCategory === '全部'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="px-6 py-24 md:px-12 lg:px-24">
      {/* Header */}
      <h1 className="text-5xl md:text-6xl font-semibold text-ink tracking-tight mb-4">
        作品集
      </h1>
      <p className="text-lg text-ink-muted mb-14 max-w-lg leading-relaxed">
        精选设计作品，涵盖品牌、UI/UX、插画等多个领域
      </p>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-3 mb-14">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-ink text-white'
                : 'bg-surface-off text-ink-muted hover:text-ink hover:bg-surface-off/80'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {filtered.map((project) => (
          <Link key={project.id} to={`/works/${project.id}`} className="block group break-inside-avoid">
            <div className="overflow-hidden rounded-2xl bg-surface-off transition-all duration-500 hover:shadow-2xl hover:shadow-ink/10 hover:-translate-y-1">
              <LazyImage
                src={project.thumbnail}
                alt={project.title}
                className="w-full aspect-[4/3]"
              />
              <div className="p-6">
                <span className="text-xs font-medium text-gold uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-ink mt-2 group-hover:text-ink-light transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
