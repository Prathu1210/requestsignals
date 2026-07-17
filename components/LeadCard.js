import { useState } from 'react'

const CATEGORY_META = {
  web_development:   { label: 'Web Dev',     bg: '#E6F1FB', color: '#0C447C', border: '#85B7EB' },
  app_development:   { label: 'App Dev',     bg: '#EEEDFE', color: '#3C3489', border: '#AFA9EC' },
  digital_marketing: { label: 'Marketing',   bg: '#EAF3DE', color: '#27500A', border: '#97C459' },
  design:            { label: 'Design',      bg: '#FBEAF0', color: '#72243E', border: '#ED93B1' },
  content_writing:   { label: 'Content',     bg: '#FAEEDA', color: '#633806', border: '#EF9F27' },
  ecommerce:         { label: 'E-commerce',  bg: '#FAECE7', color: '#712B13', border: '#F0997B' },
  software_dev:      { label: 'Software',    bg: '#E1F5EE', color: '#085041', border: '#5DCAA5' },
  devops_cloud:      { label: 'DevOps',      bg: '#E6F1FB', color: '#0C447C', border: '#85B7EB' },
  data_analytics:    { label: 'Data & AI',   bg: '#EAF3DE', color: '#27500A', border: '#97C459' },
  cybersecurity:     { label: 'Security',    bg: '#FCEBEB', color: '#791F1F', border: '#F09595' },
  other:             { label: 'Other',       bg: '#F1EFE8', color: '#444441', border: '#B4B2A9' },
}

function timeAgo(dateStr) {
  if (!dateStr) return ''
  const diff = Date.now() - new Date(dateStr).getTime()
  const h = Math.floor(diff / 3600000)
  const d = Math.floor(h / 24)
  if (h < 1) return 'Just now'
  if (h < 24) return `${h}h ago`
  if (d < 7) return `${d}d ago`
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

export default function LeadCard({ lead }) {
  const [expanded, setExpanded] = useState(false)
  const meta = CATEGORY_META[lead.category] || CATEGORY_META.other
  const preview = lead.content?.substring(0, 180) || ''
  const hasMore = (lead.content?.length || 0) > 180

  return (
    <div
      style={{
        border: '1px solid #e5e7eb', borderRadius: 10, padding: 16, background: '#fff',
        transition: 'border-color .15s',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = '#d1d5db'}
      onMouseLeave={e => e.currentTarget.style.borderColor = '#e5e7eb'}
    >
      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <span style={{
            fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 12,
            background: meta.bg, color: meta.color, border: `1px solid ${meta.border}`
          }}>
            {meta.label}
          </span>
          {lead.urgent && (
            <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 12, background: '#fef2f2', color: '#b91c1c', border: '1px solid #fca5a5' }}>
              Urgent
            </span>
          )}
          {lead.budget_mentioned && (
            <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 12, background: '#f0fdf4', color: '#15803d', border: '1px solid #86efac' }}>
              Budget mentioned
            </span>
          )}
        </div>

        <span style={{ fontSize: 12, color: '#9ca3af', whiteSpace: 'nowrap' }}>
          {timeAgo(lead.published_at)}
        </span>
      </div>

      {/* Title */}
      <div style={{ fontSize: 15, fontWeight: 600, color: '#111827', marginBottom: 6 }}>
        {lead.title}
      </div>

      {/* Content */}
      <div style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.5 }}>
        {expanded ? lead.content : preview}
        {hasMore && !expanded && '...'}
        {hasMore && (
          <button
            onClick={() => setExpanded(v => !v)}
            style={{ background: 'none', border: 'none', color: '#2563eb', fontSize: 12, cursor: 'pointer', marginLeft: 4, padding: 0, fontWeight: 500 }}
          >
            {expanded ? 'Show less' : 'Show more'}
          </button>
        )}
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12, paddingTop: 12, borderTop: '1px solid #f3f4f6' }}>
        <span style={{ fontSize: 12, color: '#9ca3af' }}>
          AI confidence: {Math.round((lead.ai_confidence || 0) * 100)}%
        </span>
        <a
          href={lead.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 12, fontWeight: 600, color: '#2563eb', textDecoration: 'none',
            padding: '5px 12px', borderRadius: 6, background: '#eff6ff'
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#dbeafe'}
          onMouseLeave={e => e.currentTarget.style.background = '#eff6ff'}
        >
          View on LinkedIn →
        </a>
      </div>
    </div>
  )
}
