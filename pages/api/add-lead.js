import { getLeadsCollection } from '../../lib/mongodb'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const adminKey = req.headers['x-admin-key']
  if (adminKey !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const { title, content, link, category, budget_mentioned, urgent, ai_confidence, published_at } = req.body

  if (!title || !link) return res.status(400).json({ error: 'title and link are required' })

  try {
    const leads = await getLeadsCollection()

    const existing = await leads.findOne({ link })
    if (existing) return res.status(409).json({ error: 'Lead already exists' })

    const doc = {
      title,
      content: content?.substring(0, 1200),
      link,
      category: category || 'other',
      budget_mentioned: budget_mentioned || false,
      urgent: urgent || false,
      ai_confidence: ai_confidence || 0,
      published_at: published_at ? new Date(published_at) : new Date(),
      processed_at: new Date(),
      is_active: true,
    }

    const result = await leads.insertOne(doc)
    const { _id, ...docWithoutId } = doc

    return res.status(201).json({ success: true, lead: { id: result.insertedId.toString(), ...docWithoutId } })
  } catch (error) {
    console.error('Insert error:', error)
    return res.status(500).json({ error: 'Failed to save lead' })
  }
}
