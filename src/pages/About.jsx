export default function About() {
  return (
    <div className="px-6 py-24 md:px-12 lg:px-24 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-semibold text-ink tracking-tight mb-16">
        关于我
      </h1>

      {/* Bio */}
      <section className="mb-24">
        <p className="text-xl leading-relaxed text-ink-muted mb-6">
          你好，我是 Alex Chen，一名常驻上海的平面设计师。
          我相信好的设计不仅仅是美观——它应该能够传达思想，引发共鸣，并最终服务于品牌的商业目标。
        </p>
        <p className="text-lg leading-relaxed text-ink-muted max-w-2xl">
          从中国美术学院毕业后，我先后在多家知名设计工作室工作，
          服务过的客户涵盖科技、时尚、文化和生活方式等多个领域。
        </p>
      </section>

      {/* Design Philosophy */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold text-ink mb-12 tracking-tight">设计理念</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-surface-off hover:shadow-lg transition-shadow duration-300">
            <div className="w-10 h-10 rounded-full bg-ink mb-6 flex items-center justify-center">
              <span className="text-white text-lg font-light">1</span>
            </div>
            <h3 className="text-xl font-semibold text-ink mb-3">极简主义</h3>
            <p className="text-ink-muted leading-relaxed">
              少即是多。用最少的元素传达最清晰的信息，让设计回归本质。
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-surface-off hover:shadow-lg transition-shadow duration-300">
            <div className="w-10 h-10 rounded-full bg-ink mb-6 flex items-center justify-center">
              <span className="text-white text-lg font-light">2</span>
            </div>
            <h3 className="text-xl font-semibold text-ink mb-3">功能优先</h3>
            <p className="text-ink-muted leading-relaxed">
              设计不仅是装饰，更是解决问题的手段。形式永远追随功能。
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-surface-off hover:shadow-lg transition-shadow duration-300">
            <div className="w-10 h-10 rounded-full bg-ink mb-6 flex items-center justify-center">
              <span className="text-white text-lg font-light">3</span>
            </div>
            <h3 className="text-xl font-semibold text-ink mb-3">文化融合</h3>
            <p className="text-ink-muted leading-relaxed">
              在全球化视角中融入东方美学的独特韵味，创造有深度的设计。
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-8 md:px-16 rounded-2xl bg-ink text-white text-center">
        <h2 className="text-3xl font-semibold mb-6 tracking-tight">联系方式</h2>
        <p className="text-white/60 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          欢迎合作洽谈，让我们一起创造令人兴奋的作品。
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:alex@example.com"
            className="px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors duration-300"
          >
            alex@example.com
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors duration-300"
          >
            Dribbble
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors duration-300"
          >
            Behance
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors duration-300"
          >
            Instagram
          </a>
        </div>
      </section>
    </div>
  )
}
