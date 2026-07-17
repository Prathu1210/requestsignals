import { useState, useEffect } from 'react'
import Layout from '../components/Layout'

const ADMIN_KEY = process.env.NEXT_PUBLIC_ADMIN_KEY || 'changeme123'

export default function Admin() {
  const [authed, setAuthed] = useState(false)
  const [pw, setPw] = useState('')
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')

  const login = () => {
    if (pw === ADMIN_KEY) setAuthed(true)
    else setMsg('Wrong password')
  }

  const fetchLeads = async () => {
    setLoading(true)
    const res = await fetch('/api/leads?limit=50', { headers: { 'x-admin-key': ADMIN_KEY } })
    const data = await res.json()
    setLeads(data.leads || [])
    setLoading(false)
  }

  const deleteLead = async (id) => {
    if (!confirm('Delete this lead?')) return
    const res = await fetch('/api/delete-lead', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', 'x-admin-key': ADMIN_KEY },
      body: JSON.stringify({ id })
    })
    if (res.ok) {
      setLeads(l => l.filter(x => x.id !== id))
      setMsg('Deleted.')
    }
  }

  useEffect(() => { if (authed) fetchLeads() }, [authed])

  if (!authed) return (
    <Layout title="Admin Login">
      <div style={{ maxWidth: 360, margin: '80px auto', padding: '0 20px' }}>
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 10, padding: 24, background: '#fff' }}>
          <h1 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Admin Login</h1>
          <input
            type="password"
            value={pw}
            onChange={e => setPw(e.target.value)}
            placeholder="Password"
            style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #d1d5db', fontSize: 14, marginBottom: 12, boxSizing: 'border-box' }}
          />
          <button
            onClick={login}
            style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: 'none', background: '#2563eb', color: '#fff', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
          >
            Login
          </button>
          {msg && <div style={{ marginTop: 10, fontSize: 13, color: '#dc2626' }}>{msg}</div>}
        </div>
      </div>
    </Layout>
  )

  return (
    <Layout title="Admin Panel">
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '32px 20px' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h1 style={{ fontSize: 22, fontWeight: 700 }}>Admin Panel</h1>
          <button
            onClick={fetchLeads}
            style={{ padding: '8px 16px', borderRadius: 8, border: '1px solid #e5e7eb', background: '#fff', cursor: 'pointer', fontSize: 14 }}
          >
            Refresh
          </button>
        </div>

        {msg && <div style={{ marginBottom: 12, fontSize: 13, color: '#2563eb' }}>{msg}</div>}

        {loading ? (
          <div style={{ padding: 40, textAlign: 'center', color: '#6b7280' }}>Loading...</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {leads.map(lead => (
              <div
                key={lead.id}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', border: '1px solid #e5e7eb', borderRadius: 10, padding: 14, background: '#fff' }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#111827', marginBottom: 4 }}>{lead.title}</div>
                  <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 6 }}>{lead.content?.substring(0, 120)}...</div>
                  <div style={{ fontSize: 12, color: '#9ca3af' }}>
                    {lead.category} · {Math.round((lead.ai_confidence || 0) * 100)}% confidence · {lead.is_active ? 'Active' : 'Archived'}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8, flexShrink: 0, marginLeft: 12 }}>
                  <a
                    href={lead.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid #e5e7eb', background: '#f9fafb', color: '#374151', fontSize: 12, textDecoration: 'none' }}
                  >
                    View
                  </a>
                  <button
                    onClick={() => deleteLead(lead.id)}
                    style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid #fecaca', background: '#fef2f2', color: '#dc2626', fontSize: 12, cursor: 'pointer' }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}
