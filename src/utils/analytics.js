const STORAGE_KEY = 'portfolio_visits'

function getVisits() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveVisits(visits) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(visits))
}

async function fetchIP() {
  try {
    const res = await fetch('https://api.ipify.org?format=json')
    const data = await res.json()
    return data.ip
  } catch {
    return 'unknown'
  }
}

export async function trackPageView(path) {
  const visits = getVisits()
  const ip = await fetchIP()
  visits.push({
    path,
    ip,
    time: new Date().toISOString(),
  })
  saveVisits(visits)
}

export function getStats() {
  const visits = getVisits()

  const pageCounts = {}
  visits.forEach((v) => {
    pageCounts[v.path] = (pageCounts[v.path] || 0) + 1
  })

  const sortedPages = Object.entries(pageCounts)
    .map(([path, count]) => ({ path, count }))
    .sort((a, b) => b.count - a.count)

  const recent = visits.slice(-10).reverse()

  return {
    totalVisits: visits.length,
    topPages: sortedPages,
    recentVisits: recent,
  }
}
