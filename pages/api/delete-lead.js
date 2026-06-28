import { supabase } from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method !== 'DELETE') return res.status(405).json({ error: 'Method not allowed' })

  const adminKey = req.headers['x-admin-key']
  if (adminKey !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const { id } = req.body
  if (!id) return res.status(400).json({ error: 'id is required' })

  const { error } = await supabase
    .from('linkedin_posts')
    .update({ is_active: false })
    .eq('id', id)

  if (error) {
    console.error('Delete error:', error)
    return res.status(500).json({ error: 'Failed to delete lead' })
  }

  return res.status(200).json({ success: true })
}