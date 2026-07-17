import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import LeadCard from '../components/LeadCard'
import CategoryFilter from '../components/CategoryFilter'
import { getLeadsCollection } from '../lib/mongodb'

export async function getServerSideProps({ query }) {
  const category = query.category || 'all'
  const search = query.search || ''

  const leadsCol = await getLeadsCollection()

  const filter = { is_active: true }
  if (category !== 'all') filter.category = category
  if (search) filter.$text = { $search: search }

  const leadDocs = await leadsCol.find(filter).sort({ published_at: -1 }).limit(60).toArray()
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
    }))
  }
}

export default function Home({ leads, counts, activeCategory, searchQuery }) {
  const router = useRouter()
  const [search, setSearch] = useState(searchQuery)
  const total = counts.reduce((s, c) => s + Number(c.count), 0)

  const handleSearch = (e) => {
    e.preventDefault()
    router.push({
      pathname: '/',
      query: { ...(activeCategory !== 'all' && { category: activeCategory }), ...(search && { search }) }
    })
  }

  return (
    <Layout
      title="RequestSignals — Real LinkedIn Service Requests"
      description="Businesses actively looking for freelancers and agencies. AI-filtered LinkedIn leads. No job posts, no noise."
    >
      {/* Hero */}
      <section style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb', padding: '48px 20px 32px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>

          <div style={{ display: 'inline-block', fontSize: 12, fontWeight: 600, color: '#2563eb', background: '#eff6ff', padding: '4px 12px', borderRadius: 20, marginBottom: 12 }}>
            Updated every 2 hours
          </div>

          <h1 style={{ fontSize: 32, fontWeight: 700, color: '#111827', margin: '0 0 12px' }}>
            Real LinkedIn Service Requests
          </h1>

          <p style={{ fontSize: 15, color: '#6b7280', margin: '0 0 24px' }}>
            Businesses actively looking for freelancers and agencies. AI-filtered. No job posts. No noise.
          </p>

          {/* Search */}
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search leads..."
              style={{
                flex: 1, padding: '9px 14px', borderRadius: 8, fontSize: 14,
                border: '1px solid #d1d5db', outline: 'none', color: '#111827'
              }}
            />
            <button type="submit" style={{ padding: '9px 20px', borderRadius: 8, border: 'none', background: '#2563eb', color: '#fff', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
              Search
            </button>
          </form>

          <div style={{ fontSize: 13, color: '#9ca3af' }}>
            {total.toLocaleString()} active leads · IT services only · Free to browse
          </div>

        </div>
      </section>

      {/* Sticky filters */}
      <div style={{ position: 'sticky', top: 0, zIndex: 10, background: '#fff', borderBottom: '1px solid #e5e7eb', padding: '10px 20px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <CategoryFilter active={activeCategory} counts={counts} />
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '24px 20px' }}>

        {/* Ad slot top */}
        <div style={{ textAlign: 'center', padding: '12px', marginBottom: 20, background: '#f9fafb', border: '1px dashed #e5e7eb', borderRadius: 8, color: '#9ca3af', fontSize: 12 }}>
          Advertisement
        </div>

        {leads.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '48px 20px', color: '#6b7280' }}>
            <p style={{ fontSize: 15, fontWeight: 500 }}>No leads found in this category yet.</p>
            <p style={{ fontSize: 13, marginTop: 8 }}>We update every 2 hours — check back soon.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {leads.map((lead, i) => (
              <LeadCard key={lead.id || i} lead={lead} />
            ))}
          </div>
        )}

        {/* Ad slot bottom */}
        <div style={{ textAlign: 'center', padding: '12px', marginTop: 20, background: '#f9fafb', border: '1px dashed #e5e7eb', borderRadius: 8, color: '#9ca3af', fontSize: 12 }}>
          Advertisement
        </div>

      </div>

      {/* SEO footer text */}
      <div style={{ borderTop: '1px solid #e5e7eb', background: '#f9fafb', padding: '32px 20px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontSize: 12, color: '#9ca3af', lineHeight: 1.6 }}>
            RequestSignals aggregates real service requests from LinkedIn — businesses looking for web developers,
            app developers, digital marketers, SEO experts, graphic designers, Shopify developers, DevOps engineers,
            data analysts, and cybersecurity consultants. Our AI filters out job posts so you only see genuine
            project and freelance opportunities. Updated every 2 hours automatically.
          </p>
        </div>
      </div>

    </Layout>
  )
}
