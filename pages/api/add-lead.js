import { supabase } from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const adminKey = req.headers['x-admin-key']
  if (adminKey !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const { title, content, link, category, budget_mentioned, urgent, ai_confidence, published_at } = req.body

  if (!title || !link) return res.status(400).json({ error: 'title and link are required' })

  const existing = await supabase.from('linkedin_posts').select('id').eq('link', link).single()
  if (existing.data) return res.status(409).json({ error: 'Lead already exists' })

  const { data, error } = await supabase.from('linkedin_posts').insert([{
    title,
    content: content?.substring(0, 1200),
    link,
    category: category || 'other',
    budget_mentioned: budget_mentioned || false,
    urgent: urgent || false,
    ai_confidence: ai_confidence || 0,
    published_at: published_at || new Date().toISOString(),
    processed_at: new Date().toISOString(),
    is_active: true,
  }]).select().single()

  if (error) {
    console.error('Insert error:', error)
    return res.status(500).json({ error: 'Failed to save lead' })
  }

  return res.status(201).json({ success: true, lead: data })
}