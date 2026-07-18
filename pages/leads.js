import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import LeadCard from '../components/LeadCard'
import CategoryFilter from '../components/CategoryFilter'
import { getLeadsCollection } from '../lib/mongodb'

export async function getServerSideProps({ query }) {
  const category = query.category || 'all'
  const search = query.search || ''
  const page = parseInt(query.page || '1')
  const PAGE_SIZE = 30

  const leadsCol = await getLeadsCollection()

  const filter = { is_active: true }
  if (category !== 'all') filter.category = category
  if (search) filter.$text = { $search: search }

  const total = await leadsCol.countDocuments(filter)
  const leadDocs = await leadsCol
    .find(filter)
    .sort({ published_at: -1 })
    .skip((page - 1) * PAGE_SIZE)
    .limit(PAGE_SIZE)
    .toArray()
  const leads = leadDocs.map(({ _id, ...rest }) => ({ id: _id.toString(), ...rest }))

  const countsAgg = await leadsCol.aggregate([
    { $match: { is_active: true } },
    { $group: { _id: '$category', count: { $sum: 1 } } },
  ]).toArray()
  const counts = countsAgg.map(c => ({ category: c._id, count: c.count }))

  return {
    props: JSON.parse(JSON.stringify({
      leads,
      counts,
      activeCategory: category,
      searchQuery: search,
      page,
      totalPages: Math.ceil(total / PAGE_SIZE),
      total,
    }))
  }
}

export default function Leads({ leads, counts, activeCategory, searchQuery, page, totalPages, total }) {
  const router = useRouter()
  const [search, setSearch] = useState(searchQuery)

  const handleSearch = (e) => {
    e.preventDefault()
    router.push({ pathname: '/leads', query: { ...(activeCategory !== 'all' && { category: activeCategory }), ...(search && { search }), page: 1 } })
  }

  const goPage = (p) => {
    router.push({ pathname: '/leads', query: { ...router.query, page: p } })
  }

  return (
    <Layout
      title="All Leads — RequestSignals"
      description="Browse every verified service request we've found across major social media platforms — filtered by AI, updated every 2 hours."
    >
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '24px 20px 8px' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: '#111827' }}>All Leads</h1>
          <span style={{ fontSize: 13, color: '#9ca3af' }}>
            {total.toLocaleString()} results
          </span>
        </div>

        <form onSubmit={handleSearch} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by keyword..."
            style={{ flex: 1, padding: '8px 12px', borderRadius: 8, fontSize: 14, border: '1px solid #d1d5db', outline: 'none' }}
          />
          <button type="submit" style={{ padding: '8px 20px', borderRadius: 8, border: 'none', background: '#2563eb', color: '#fff', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
            Search
          </button>
        </form>

      </div>

      <div style={{ position: 'sticky', top: 0, zIndex: 10, background: '#fff', borderBottom: '1px solid #e5e7eb', padding: '10px 20px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <CategoryFilter active={activeCategory} counts={counts} />
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '24px 20px' }}>

        {leads.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '48px 20px', color: '#6b7280' }}>
            <p style={{ fontSize: 15 }}>No leads found. Try a different search or category.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {leads.map(lead => <LeadCard key={lead.id} lead={lead} />)}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, marginTop: 24 }}>
            {page > 1 && (
              <button onClick={() => goPage(page - 1)} style={{ padding: '8px 16px', borderRadius: 8, border: '1px solid #e5e7eb', background: '#fff', cursor: 'pointer', fontSize: 14 }}>
                Previous
              </button>
            )}
            <span style={{ fontSize: 13, color: '#6b7280' }}>
              Page {page} of {totalPages}
            </span>
            {page < totalPages && (
              <button onClick={() => goPage(page + 1)} style={{ padding: '8px 16px', borderRadius: 8, border: '1px solid #e5e7eb', background: '#fff', cursor: 'pointer', fontSize: 14 }}>
                Next
              </button>
            )}
          </div>
        )}
      </div>
    </Layout>
  )
}
