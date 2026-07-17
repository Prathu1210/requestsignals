import { useRouter } from 'next/router'

const CATEGORIES = [
  { key: 'all',              label: 'All Leads' },
  { key: 'web_development',  label: 'Web Dev' },
  { key: 'app_development',  label: 'App Dev' },
  { key: 'digital_marketing',label: 'Marketing' },
  { key: 'design',           label: 'Design' },
  { key: 'software_dev',     label: 'Software' },
  { key: 'ecommerce',        label: 'E-commerce' },
  { key: 'devops_cloud',     label: 'DevOps' },
  { key: 'data_analytics',   label: 'Data & AI' },
  { key: 'cybersecurity',    label: 'Security' },
  { key: 'content_writing',  label: 'Content' },
]

export { CATEGORIES }

export default function CategoryFilter({ active = 'all', counts = [] }) {
  const router = useRouter()

  const getCount = (key) => {
    if (key === 'all') return counts.reduce((s, c) => s + Number(c.count), 0)
    return counts.find(c => c.category === key)?.count || 0
  }

  const handleClick = (key) => {
    const query = key === 'all' ? {} : { category: key }
    // Not shallow: category filtering happens in getServerSideProps, so the
    // navigation needs to actually re-run data fetching, not just change the
    // URL client-side.
    router.push({ pathname: router.pathname, query })
  }

  return (
    <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
      {CATEGORIES.map(cat => {
        const isActive = active === cat.key
        const count = getCount(cat.key)
        return (
          <button
            key={cat.key}
            onClick={() => handleClick(cat.key)}
            style={{
              flexShrink: 0, padding: '6px 14px', borderRadius: 20,
              border: isActive ? '1px solid #2563eb' : '1px solid #e5e7eb',
              background: isActive ? '#2563eb' : '#f9fafb',
              color: isActive ? '#fff' : '#374151',
              fontSize: 13, fontWeight: 500, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 5,
              transition: 'all .15s', whiteSpace: 'nowrap'
            }}
          >
            {cat.label}
            {count > 0 && (
              <span style={{
                fontSize: 11, fontWeight: 600, padding: '1px 6px', borderRadius: 10,
                background: isActive ? 'rgba(255,255,255,0.25)' : '#e5e7eb',
                color: isActive ? '#fff' : '#6b7280'
              }}>
                {count}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
