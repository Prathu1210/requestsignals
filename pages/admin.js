import { useState, useEffect } from 'react'
import Head from 'next/head'
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
    const res = await fetch('/api/leads?limit=50&all=true')
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
    
      

        
Admin Login

         setPw(e.target.value)} placeholder="Password"
          style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #d1d5db', fontSize: 14, marginBottom: 12, boxSizing: 'border-box' }} />
        
          Login
        
        {msg && 

{msg}

}
      

    
  )

  return (
    
      
      

        

          
Admin Panel

          
            Refresh
          
        

        {msg && 

{msg}

}
        {loading ? (
          

Loading...


        ) : (
          

            {leads.map(lead => (
              

                

                  

{lead.title}


                  

{lead.content?.substring(0, 120)}...


                  

                    {lead.category}
                    ·
                    {lead.ai_confidence}% confidence
                    ·
                    {lead.is_active ? 'Active' : 'Archived'}
                  

                

                

                  
                    View
                  
                   deleteLead(lead.id)} style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid #fecaca', background: '#fef2f2', color: '#dc2626', fontSize: 12, cursor: 'pointer' }}>
                    Delete
                  
                

              

            ))}
          

        )}
      

    
  )
}