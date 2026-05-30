import { useState, useEffect } from 'react'
import { getStats } from '../utils/analytics'

const PASSWORD = 'myfolio2024'

function formatTime(iso) {
  const d = new Date(iso)
  return d.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

function StatsDashboard() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    setStats(getStats())
  }, [])

  if (!stats) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-ink-muted">加载中...</p>
      </div>
    )
  }

  return (
    <div>
      {/* Total Visits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        <div className="p-8 rounded-2xl bg-surface-off">
          <p className="text-sm text-ink-faint uppercase tracking-wider mb-2">总访问量</p>
          <p className="text-4xl font-semibold text-ink">{stats.totalVisits}</p>
        </div>
        <div className="p-8 rounded-2xl bg-surface-off md:col-span-2">
          <p className="text-sm text-ink-faint uppercase tracking-wider mb-2">独特页面</p>
          <p className="text-4xl font-semibold text-ink">{stats.topPages.length}</p>
        </div>
      </div>

      {/* Top Pages */}
      <div className="mb-14">
        <h2 className="text-2xl font-semibold text-ink mb-6">最受欢迎页面</h2>
        <div className="space-y-3">
          {stats.topPages.length === 0 && (
            <p className="text-ink-muted">暂无数据</p>
          )}
          {stats.topPages.map(({ path, count }) => (
            <div
              key={path}
              className="flex items-center justify-between p-4 rounded-xl bg-surface-off"
            >
              <span className="text-ink font-medium">{path}</span>
              <span className="text-ink-muted text-sm">{count} 次访问</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Visits */}
      <div>
        <h2 className="text-2xl font-semibold text-ink mb-6">最近访问记录</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 pr-6 text-sm text-ink-faint font-medium uppercase tracking-wider">
                  时间
                </th>
                <th className="py-3 pr-6 text-sm text-ink-faint font-medium uppercase tracking-wider">
                  页面
                </th>
                <th className="py-3 text-sm text-ink-faint font-medium uppercase tracking-wider">
                  IP
                </th>
              </tr>
            </thead>
            <tbody>
              {stats.recentVisits.length === 0 && (
                <tr>
                  <td colSpan={3} className="py-8 text-center text-ink-muted">
                    暂无访问记录
                  </td>
                </tr>
              )}
              {stats.recentVisits.map((visit, i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="py-3 pr-6 text-ink-muted text-sm">
                    {formatTime(visit.time)}
                  </td>
                  <td className="py-3 pr-6 text-ink text-sm">{visit.path}</td>
                  <td className="py-3 text-ink-muted text-sm font-mono">
                    {visit.ip}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default function Stats() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (password === PASSWORD) {
      setAuthenticated(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  if (!authenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-semibold text-ink text-center mb-2">
            访问统计
          </h1>
          <p className="text-ink-muted text-center mb-10 text-sm">
            请输入密码查看统计数据
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError(false)
              }}
              placeholder="输入密码"
              className="w-full px-4 py-3 rounded-xl border border-border bg-surface-off text-ink placeholder:text-ink-faint focus:outline-none focus:border-ink/30 transition-colors"
            />
            {error && (
              <p className="text-red-500 text-sm">密码错误，请重试</p>
            )}
            <button
              type="submit"
              className="w-full py-3 bg-ink text-white rounded-xl font-medium hover:bg-ink-light transition-colors"
            >
              确认
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="px-6 py-24 md:px-12 lg:px-24 max-w-4xl mx-auto">
      <h1 className="text-4xl font-semibold text-ink mb-12">访问统计</h1>
      <StatsDashboard />
    </div>
  )
}
