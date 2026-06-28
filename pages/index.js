import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../components/Layout'
import LeadCard from '../components/LeadCard'
import CategoryFilter from '../components/CategoryFilter'
import { supabase } from '../lib/supabase'

export async function getServerSideProps({ query }) {
  const category = query.category || 'all'
  const search = query.search || ''

  let q = supabase
    .from('linkedin_posts')
    .select('*')
    .eq('is_active', true)
    .order('published_at', { ascending: false })
    .limit(60)

  if (category !== 'all') q = q.eq('category', category)
  if (search) q = q.textSearch('title', search, { type: 'websearch' })

  const { data: leads } = await q
  const { data: counts } = await supabase.from('category_counts').select('*')

  return {
    props: {
      leads: leads || [],
      counts: counts || [],
      activeCategory: category,
      searchQuery: search,
    }
  }
}

export default function Home({ leads, counts, activeCategory, searchQuery }) {
  const router = useRouter()
  const [search, setSearch] = useState(searchQuery)
  const total = counts.reduce((s, c) => s + Number(c.count), 0)

  const handleSearch = (e) => {
    e.preventDefault()
    router.push({
      pathname: '/',
      query: { ...(activeCategory !== 'all' && { category: activeCategory }), ...(search && { search }) }
    })
  }

  return (
    
      
        
        
        
        
        
        
        
      

      {/* Hero */}
      

        

          

            
            Updated every 2 hours
          

          

            Real LinkedIn Service Requests
          

          


            Businesses actively looking for freelancers and agencies. AI-filtered. No job posts. No noise.
          



          {/* Search */}
          

             setSearch(e.target.value)}
              placeholder="Search leads..."
              style={{
                flex: 1, padding: '9px 14px', borderRadius: 8, fontSize: 14,
                border: '1px solid #d1d5db', outline: 'none', color: '#111827'
              }}
            />
            
              Search
            
          


          


            {total.toLocaleString()} active leads · IT services only · Free to browse
          


        

      


      {/* Sticky filters */}
      

        

          
        

      


      {/* Content */}
      


        {/* Ad slot top */}
        

          Advertisement
        


        {leads.length === 0 ? (
          

            

No leads found in this category yet.


            

We update every 2 hours — check back soon.


          

        ) : (
          

            {leads.map((lead, i) => (
              
            ))}
          

        )}

        {/* Ad slot bottom */}
        

          Advertisement
        

      


      {/* SEO footer text */}
      

        

          


            RequestSignals aggregates real service requests from LinkedIn — businesses looking for web developers,
            app developers, digital marketers, SEO experts, graphic designers, Shopify developers, DevOps engineers,
            data analysts, and cybersecurity consultants. Our AI filters out job posts so you only see genuine
            project and freelance opportunities. Updated every 2 hours automatically.
          


        

      

    
  )
}