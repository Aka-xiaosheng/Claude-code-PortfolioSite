import { useParams, Link } from 'react-router-dom'
import LazyImage from '../components/LazyImage'
import projects from '../data/projects.json'

export default function WorkDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === parseInt(id))

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-semibold text-ink mb-4">作品未找到</h1>
        <Link to="/works" className="text-gold hover:underline text-lg">
          返回作品列表
        </Link>
      </div>
    )
  }

  return (
    <div className="px-6 py-24 md:px-12 lg:px-24 max-w-5xl mx-auto">
      {/* Back Link */}
      <Link
        to="/works"
        className="inline-flex items-center text-ink-muted hover:text-ink transition-colors mb-12 text-sm tracking-wide"
      >
        <span className="mr-2">←</span> 返回作品列表
      </Link>

      {/* Hero Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {project.images.map((img, i) => (
          <LazyImage
            key={i}
            src={img}
            alt={`${project.title} - 图片 ${i + 1}`}
            className={`w-full rounded-2xl ${i === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'}`}
          />
        ))}
      </div>

      {/* Project Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <div className="md:col-span-2">
          <span className="text-xs font-medium text-gold uppercase tracking-widest">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-ink mt-3 mb-8 tracking-tight">
            {project.title}
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="space-y-8">
          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-ink uppercase tracking-wider mb-4">
              使用工具
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 bg-surface-off text-ink-muted text-sm rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Date */}
          <div>
            <h3 className="text-sm font-semibold text-ink uppercase tracking-wider mb-2">
              项目日期
            </h3>
            <p className="text-ink-muted">{project.date}</p>
          </div>
        </div>
      </div>

      {/* Prev/Next Navigation */}
      <div className="flex justify-between pt-12 border-t border-border">
        {project.id > 1 ? (
          <Link
            to={`/works/${project.id - 1}`}
            className="group text-ink-muted hover:text-ink transition-colors"
          >
            <span className="text-sm block mb-1">← 上一个作品</span>
            <span className="font-medium group-hover:underline">
              {projects[project.id - 2]?.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {project.id < projects.length && (
          <Link
            to={`/works/${project.id + 1}`}
            className="group text-ink-muted hover:text-ink transition-colors text-right"
          >
            <span className="text-sm block mb-1">下一个作品 →</span>
            <span className="font-medium group-hover:underline">
              {projects[project.id]?.title}
            </span>
          </Link>
        )}
      </div>
    </div>
  )
}
