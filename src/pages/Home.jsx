import { Link } from 'react-router-dom'

const skills = [
  '品牌设计', 'UI/UX 设计', '插画', '平面设计',
  '包装设计', 'Figma', 'Adobe Creative Suite', 'Webflow',
  'Cinema 4D', '动态图形', '排版设计', '摄影',
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 py-24 md:px-12 lg:px-24">
        <p className="text-ink-muted text-lg font-light tracking-widest mb-6 font-[family-name:var(--font-heading)]">
          HI, I&apos;M
        </p>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-ink tracking-tight mb-8">
          Alex Chen
        </h1>
        <p className="text-2xl md:text-3xl font-light text-ink-muted mb-10 max-w-lg leading-relaxed">
          平面设计师 / 视觉艺术家
        </p>
        <p className="text-lg text-ink-muted max-w-xl leading-relaxed mb-14">
          致力于通过设计讲述品牌故事，创造令人难忘的视觉体验。
          拥有 6 年设计经验，与来自科技、时尚、文化领域的客户合作。
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link
            to="/works"
            className="inline-block px-8 py-4 bg-ink text-white font-medium rounded-full hover:bg-ink-light transition-colors duration-300"
          >
            查看作品
          </Link>
          <Link
            to="/about"
            className="inline-block px-8 py-4 border border-ink/20 text-ink font-medium rounded-full hover:border-ink/40 transition-colors duration-300"
          >
            了解更多
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-24 md:px-12 lg:px-24 bg-surface-off">
        <h2 className="text-3xl md:text-4xl font-semibold text-ink mb-12 tracking-tight">
          技能专长
        </h2>
        <div className="flex flex-wrap gap-3 max-w-2xl">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2.5 bg-white border border-border rounded-full text-sm text-ink-muted hover:text-ink hover:border-ink/30 transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
