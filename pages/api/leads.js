import { supabase } from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  const { category, search, page = 1, limit = 30, all } = req.query
  const PAGE_SIZE = Math.min(parseInt(limit), 100)
  const pageNum = parseInt(page)
  const isAdmin = req.headers['x-admin-key'] === process.env.ADMIN_KEY

  try {
    let q = supabase
      .from('linkedin_posts')
      .select('*', { count: 'exact' })
      .order('published_at', { ascending: false })
      .range((pageNum - 1) * PAGE_SIZE, pageNum * PAGE_SIZE - 1)

    if (!isAdmin) q = q.eq('is_active', true)
    if (category && category !== 'all') q = q.eq('category', category)
    if (search) q = q.textSearch('title', search, { type: 'websearch' })

    const { data, count, error } = await q
    if (error) throw error

    return res.status(200).json({
      leads: data || [],
      total: count || 0,
      page: pageNum,
      totalPages: Math.ceil((count || 0) / PAGE_SIZE),
    })
  } catch (err) {
    console.error('API error:', err)
    return res.status(500).json({ error: 'Failed to fetch leads' })
  }
}