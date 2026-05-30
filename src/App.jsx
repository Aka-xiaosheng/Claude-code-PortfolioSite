import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { trackPageView } from './utils/analytics'
import Home from './pages/Home'
import Works from './pages/Works'
import WorkDetail from './pages/WorkDetail'
import About from './pages/About'
import Stats from './pages/Stats'

function PageTracker() {
  const location = useLocation()

  useEffect(() => {
    trackPageView(location.pathname)
  }, [location.pathname])

  return null
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-16">
        <a
          href="/"
          className="text-lg font-semibold text-ink tracking-tight font-[family-name:var(--font-heading)]"
        >
          Alex Chen
        </a>
        <nav className="flex items-center gap-8">
          <a
            href="/works"
            className="text-sm text-ink-muted hover:text-ink transition-colors tracking-wide"
          >
            作品
          </a>
          <a
            href="/about"
            className="text-sm text-ink-muted hover:text-ink transition-colors tracking-wide"
          >
            关于
          </a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface-off">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-ink-faint">
          &copy; 2025 Alex Chen. All rights reserved.
        </p>
        <p className="text-sm text-ink-faint">
          用热爱创造每一件作品
        </p>
      </div>
    </footer>
  )
}

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageTracker />
      <Header />
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:id" element={<WorkDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
