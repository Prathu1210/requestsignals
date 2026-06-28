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
    
 e.currentTarget.style.borderColor = '#d1d5db'}
    onMouseLeave={e => e.currentTarget.style.borderColor = '#e5e7eb'}
    >
      {/* Top row */}
      

        

          {meta.label}
          {lead.urgent && (
            
              Urgent
            
          )}
          {lead.budget_mentioned && (
            
              Budget mentioned
            
          )}
        

        
          {timeAgo(lead.published_at)}
        
      


      {/* Title */}
      

        {lead.title}
      


      {/* Content */}
      


        {expanded ? lead.content : preview}
        {hasMore && !expanded && '...'}
        {hasMore && (
           setExpanded(v => !v)}
            style={{ background: 'none', border: 'none', color: '#2563eb', fontSize: 12, cursor: 'pointer', marginLeft: 4, padding: 0, fontWeight: 500 }}
          >
            {expanded ? 'Show less' : 'Show more'}
          
        )}
      



      {/* Footer */}
      

        
          AI confidence: {lead.ai_confidence}%
        
         e.currentTarget.style.background = '#dbeafe'}
          onMouseLeave={e => e.currentTarget.style.background = '#eff6ff'}
        >
          View on LinkedIn
          
        
      

    

  )
}