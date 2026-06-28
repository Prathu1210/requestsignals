import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../components/Layout'
import LeadCard from '../components/LeadCard'
import CategoryFilter from '../components/CategoryFilter'
import { supabase } from '../lib/supabase'

export async function getServerSideProps({ query }) {
  const category = query.category || 'all'
  const search = query.search || ''
  const page = parseInt(query.page || '1')
  const PAGE_SIZE = 30

  let q = supabase
    .from('linkedin_posts')
    .select('*', { count: 'exact' })
    .eq('is_active', true)
    .order('published_at', { ascending: false })
    .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1)

  if (category !== 'all') q = q.eq('category', category)
  if (search) q = q.textSearch('title', search, { type: 'websearch' })

  const { data: leads, count } = await q
  const { data: counts } = await supabase.from('category_counts').select('*')
  const totalPages = Math.ceil((count || 0) / PAGE_SIZE)

  return {
    props: {
      leads: leads || [],
      counts: counts || [],
      activeCategory: category,
      searchQuery: search,
      page,
      totalPages,
      total: count || 0,
    }
  }
}

export default function Leads({ leads, counts, activeCategory, searchQuery, page, totalPages, total }) {
  const router = useRouter()
  const [search, setSearch] = useState(searchQuery)

  const handleSearch = (e) => {
    e.preventDefault()
    router.push({ pathname: '/leads', query: { ...(activeCategory !== 'all' && { category: activeCategory }), ...(search && { search }), page: 1 } })
  }

  const goPage = (p) => {
    router.push({ pathname: '/leads', query: { ...router.query, page: p } })
  }

  return (
    
      
        
        
        
      

      

        

          

            All Leads
            
              {total.toLocaleString()} results
            
          

          

             setSearch(e.target.value)}
              placeholder="Search by keyword..."
              style={{ flex: 1, padding: '8px 12px', borderRadius: 8, fontSize: 14, border: '1px solid #d1d5db', outline: 'none' }}
            />
            
              Search
            
          

        

      


      

        

          
        

      


      

        {leads.length === 0 ? (
          

            

No leads found. Try a different search or category.


          

        ) : (
          

            {leads.map(lead => )}
          

        )}

        {/* Pagination */}
        {totalPages > 1 && (
          

            {page > 1 && (
               goPage(page - 1)} style={{ padding: '8px 16px', borderRadius: 8, border: '1px solid #e5e7eb', background: '#fff', cursor: 'pointer', fontSize: 14 }}>
                Previous
              
            )}
            
              Page {page} of {totalPages}
            
            {page < totalPages && (
               goPage(page + 1)} style={{ padding: '8px 16px', borderRadius: 8, border: '1px solid #e5e7eb', background: '#fff', cursor: 'pointer', fontSize: 14 }}>
                Next
              
            )}
          

        )}
      

    
  )
}