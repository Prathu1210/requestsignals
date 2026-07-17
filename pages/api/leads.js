import { getLeadsCollection } from '../../lib/mongodb'

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  const { category, search, page = 1, limit = 30 } = req.query
  const PAGE_SIZE = Math.min(parseInt(limit), 100)
  const pageNum = parseInt(page)
  const isAdmin = req.headers['x-admin-key'] === process.env.ADMIN_KEY

  try {
    const leads = await getLeadsCollection()

    const filter = {}
    if (!isAdmin) filter.is_active = true
    if (category && category !== 'all') filter.category = category
    if (search) filter.$text = { $search: search }

    const total = await leads.countDocuments(filter)
    const docs = await leads
      .find(filter)
      .sort({ published_at: -1 })
      .skip((pageNum - 1) * PAGE_SIZE)
      .limit(PAGE_SIZE)
      .toArray()

    return res.status(200).json({
      leads: docs.map(({ _id, ...rest }) => ({ id: _id.toString(), ...rest })),
      total,
      page: pageNum,
      totalPages: Math.ceil(total / PAGE_SIZE),
    })
  } catch (err) {
    console.error('API error:', err)
    return res.status(500).json({ error: 'Failed to fetch leads' })
  }
}
