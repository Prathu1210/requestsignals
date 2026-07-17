import { getLeadsCollection } from '../../lib/mongodb'

// Cheap existence check by link, used by the scraper to skip AI classification
// entirely for posts already saved (no quota cost).
export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  const adminKey = req.headers['x-admin-key']
  if (adminKey !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const { link } = req.query
  if (!link) return res.status(400).json({ error: 'link is required' })

  try {
    const leads = await getLeadsCollection()
    const existing = await leads.findOne({ link }, { projection: { _id: 1 } })
    return res.status(200).json({ exists: !!existing })
  } catch (error) {
    console.error('Check-lead error:', error)
    return res.status(500).json({ error: 'Failed to check lead' })
  }
}
