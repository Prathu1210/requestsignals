import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Theme.module.css";

const PAGE_SIZE = 9;

// Date filter options
const DATE_FILTER_OPTIONS = [
  { value: "last14days", label: "Last 14 days" },
  { value: "today", label: "Today" },
  { value: "yesterday", label: "Yesterday" },
  { value: "last3days", label: "Last 3 days" },
  { value: "last7days", label: "Last 7 days" }
];

// ---- title formatter (ADD THIS) ----
const toTitleCase = (str = "") =>
  str
    .toLowerCase()
    .split(" ")
    .map(word => {
      if (word.length <= 2) return word.toUpperCase(); // AI, UI, API
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [dateFilter, setDateFilter] = useState("last14days"); // Default value
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [loading, setLoading] = useState(true);
  
  const containerRef = useRef(null);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      setLeads(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Fetch failed:", err);
      setLeads([]);
    } finally {
      setLoading(false);
    }
  };

  // Function to calculate date range based on selected filter
  const getDateRange = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const startDate = new Date(today);
    
    switch (dateFilter) {
      case "today":
        startDate.setHours(0, 0, 0, 0);
        return { start: startDate, end: new Date(today.getTime() + 24 * 60 * 60 * 1000) };
      
      case "yesterday":
        startDate.setDate(today.getDate() - 1);
        startDate.setHours(0, 0, 0, 0);
        return { 
          start: startDate, 
          end: new Date(startDate.getTime() + 24 * 60 * 60 * 1000) 
        };
      
      case "last3days":
        startDate.setDate(today.getDate() - 3);
        return { start: startDate, end: new Date(today.getTime() + 24 * 60 * 60 * 1000) };
      
      case "last7days":
        startDate.setDate(today.getDate() - 7);
        return { start: startDate, end: new Date(today.getTime() + 24 * 60 * 60 * 1000) };
      
      case "last14days":
      default:
        startDate.setDate(today.getDate() - 14);
        return { start: startDate, end: new Date(today.getTime() + 24 * 60 * 60 * 1000) };
    }
  };

  // Filter and sort leads
  const safeLeads = Array.isArray(leads) ? leads : [];

  const filteredLeads = safeLeads.filter(item => {
    // Date filtering
    if (dateFilter && dateFilter !== "last14days") {
      const itemDate = new Date(item.created_at);
      const { start, end } = getDateRange();
      
      if (itemDate < start || itemDate > end) {
        return false;
      }
    }
    
    // Search filtering
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const titleMatch = item.title?.toLowerCase().includes(searchLower);
      const contentMatch = item.content?.toLowerCase().includes(searchLower);
      if (!titleMatch && !contentMatch) return false;
    }
    
    return true;
  });

  // Sort leads
  const sortedLeads = [...filteredLeads].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.created_at) - new Date(a.created_at);
    } else if (sortBy === "oldest") {
      return new Date(a.created_at) - new Date(b.created_at);
    }
    return 0;
  });

  const visibleLeads = sortedLeads.slice(0, visibleCount);

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 50) {
      setVisibleCount((prev) =>
        Math.min(prev + 6, sortedLeads.length)
      );
    }
  };

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [dateFilter, searchTerm, sortBy]);

  return (
    <>
      <Head>
        <title>Latest LinkedIn Service Requests – RequestSignals</title>
        <meta name="description" content="Find real LinkedIn service requests for freelancers and agencies. Daily updated leads with direct LinkedIn links." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      
      <Header />
      
      {/* HERO SECTION - SPLIT LAYOUT */}
      <section className={styles.hero} style={{ padding: '40px 0 20px 0' }}>
        <div className={`${styles.container}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ flex: 1, maxWidth: '40%' }}>
            <h1 style={{ fontSize: '44px', lineHeight: '1.2', marginBottom: '16px', color: '#1f2937' }}>
              Find <span className={styles.gradientText}>Real Clients</span> on LinkedIn
            </h1>
          </div>
          
          <div style={{ flex: 1, maxWidth: '55%' }}>
            <p className={styles.subtitle} style={{ marginBottom: '20px', fontSize: '17px' }}>
              Discover people who are actively searching for freelancers and agencies. Connect directly with potential clients through LinkedIn.
            </p>
            <div className={styles.meta} style={{ marginBottom: '0' }}>
              <i className="fas fa-sync-alt"></i> Updated Daily 
              <i className="fas fa-search"></i> Fetch Leads 
              <i className="fab fa-linkedin"></i> Contact on LinkedIn
            </div>
          </div>
        </div>
      </section>

      {/* MINIMAL DIVIDER - REDUCED SPACE */}
      <div className={styles.minimalDivider} style={{ margin: '10px 0' }}>
        <div className={styles.minimalLine}></div>
      </div>

      {/* FILTERS SECTION - WITH CARD CLASS AND HOVER EFFECT */}
      <section style={{ marginBottom: '20px' }}>
        <div className={styles.container}>
          <div className={styles.card} style={{padding: '20px'}}
            onMouseEnter={(e) => {
              // ADD HOVER EFFECT TO SEARCH BAR CARD
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(111, 123, 247, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(111, 123, 247, 0.2)';
            }}
            onMouseLeave={(e) => {
              // RESET HOVER EFFECT
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.04)';
              e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.5)';
            }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '15px'
            }}>
              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#4b5563'
                }}>
                  <i className="fas fa-search" style={{ marginRight: '6px' }}></i>
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Search requirements or details..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '6px',
                    border: '1px solid #e2e8f0',
                    fontSize: '13px',
                    color: '#1f2937',
                    transition: 'all 0.3s',
                    background: 'rgba(255, 255, 255, 0.9)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#6f7bf7'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>
              
              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#4b5563'
                }}>
                  <i className="fas fa-calendar" style={{ marginRight: '6px' }}></i>
                  Filter by Date
                </label>
                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '6px',
                    border: '1px solid #e2e8f0',
                    fontSize: '13px',
                    color: '#1f2937',
                    background: 'rgba(255, 255, 255, 0.9)',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}
                >
                  {DATE_FILTER_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#4b5563'
                }}>
                  <i className="fas fa-sort" style={{ marginRight: '6px' }}></i>
                  Sort by
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '6px',
                    border: '1px solid #e2e8f0',
                    fontSize: '13px',
                    color: '#1f2937',
                    background: 'rgba(255, 255, 255, 0.9)',
                    transition: 'all 0.3s'
                  }}
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
            </div>
            
            {(dateFilter !== "last14days" || searchTerm) && (
              <div style={{ 
                marginTop: '15px',
                paddingTop: '15px',
                borderTop: '1px solid rgba(226, 232, 240, 0.5)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div style={{ fontSize: '13px', color: '#6b7280' }}>
                  Showing {sortedLeads.length} of {safeLeads.length} leads
                  {dateFilter !== "last14days" && (
                    <span style={{ marginLeft: '10px', fontSize: '12px', color: '#9ca3af' }}>
                      (Filtered by: {DATE_FILTER_OPTIONS.find(opt => opt.value === dateFilter)?.label || "Date"})
                    </span>
                  )}
                </div>
                <button
                  onClick={() => {
                    setDateFilter("last14days");
                    setSearchTerm("");
                    setSortBy("newest");
                  }}
                  style={{
                    background: 'none',
                    border: '1px solid #e2e8f0',
                    color: '#6b7280',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f3f4f6';
                    e.target.style.borderColor = '#d1d5db';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.borderColor = '#e2e8f0';
                  }}
                >
                  <i className="fas fa-times"></i>
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* MAIN LEADS CONTENT - 3 CARDS PER ROW */}
      <section className={styles.features}>
        <div className={styles.waterBg}>
          <div className={`${styles.waterDrop} ${styles.water9}`}></div>
          <div className={`${styles.waterDrop} ${styles.water10}`}></div>
          <div className={`${styles.waterDrop} ${styles.water11}`}></div>
        </div>
        
        <div className={styles.container}>
          {/* LEADS COUNT - NO HOVER EFFECT HERE */}
          <div style={{ 
            marginBottom: '25px', 
            textAlign: 'center'
          }}>
            <h2 style={{ 
              color: '#1f2937', 
              fontSize: '28px',
              marginBottom: '8px'
            }}>
              <span className={styles.gradientText}>{sortedLeads.length}</span> Opportunities Found
            </h2>
            <p style={{ color: '#6b7280', fontSize: '15px' }}>
              Browse through LinkedIn service requests and connect directly
            </p>
          </div>
          
          {/* MAIN SCROLLABLE CONTAINER - NO CARD CLASS, DIRECT STYLING */}
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '0',
            borderRadius: '18px',
            border: '1px solid rgba(226, 232, 240, 0.5)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.04)',
            overflow: 'hidden',
            height: '750px',
            position: 'relative',
            zIndex: 2,
            backdropFilter: 'blur(8px)'
          }}>
            {/* LOADING STATE */}
            {loading ? (
              <div style={{ 
                padding: '60px 20px', 
                textAlign: 'center', 
                color: '#9ca3af'
              }}>
                <div style={{ 
                  fontSize: '28px',
                  marginBottom: '20px',
                  background: 'linear-gradient(135deg, #6f7bf7, #9c6ff7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block'
                }}>
                  <i className="fas fa-spinner fa-spin"></i>
                </div>
                <h3 style={{ marginBottom: '10px', color: '#1f2937' }}>Loading Leads...</h3>
                <p style={{ color: '#6b7280', fontSize: '14px' }}>Fetching the latest service requests from LinkedIn</p>
              </div>
            ) : visibleLeads.length === 0 ? (
              <div style={{ 
                padding: '60px 20px', 
                textAlign: 'center', 
                color: '#9ca3af'
              }}>
                <div style={{ 
                  fontSize: '32px',
                  marginBottom: '20px',
                  background: 'linear-gradient(135deg, #6f7bf7, #9c6ff7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block'
                }}>
                  <i className="fas fa-inbox"></i>
                </div>
                <h3 style={{ marginBottom: '10px', color: '#1f2937' }}>No Leads Found</h3>
                <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '20px' }}>
                  {safeLeads.length === 0 
                    ? "No leads available yet. Check back soon!"
                    : "Try changing your filters or search terms."}
                </p>
                {safeLeads.length === 0 && (
                  <button 
                    onClick={fetchLeads}
                    className={styles.btnPrimary}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    <i className="fas fa-sync-alt"></i>
                    Refresh
                  </button>
                )}
              </div>
            ) : (
              <>
                {/* SCROLLABLE CONTENT AREA */}
                <div
                  ref={containerRef}
                  onScroll={handleScroll}
                  style={{ 
                    height: '690px',
                    overflowY: 'auto',
                    padding: '25px'
                  }}
                >
                  {/* LEADS GRID - 3 CARDS PER ROW */}
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '20px'
                  }}>
                    {visibleLeads.map((item) => (
                      <div key={item.id} style={{ 
                        background: 'rgba(255, 255, 255, 0.7)',
                        border: '1px solid rgba(226, 232, 240, 0.8)',
                        borderRadius: '12px',
                        padding: '20px',
                        height: '280px',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'all 0.3s',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        // INDIVIDUAL CARD HOVER EFFECT
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(111, 123, 247, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(111, 123, 247, 0.3)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                      }}
                      onMouseLeave={(e) => {
                        // INDIVIDUAL CARD HOVER EFFECT
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.03)';
                        e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.8)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)';
                      }}>
                        {/* LEAD HEADER */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
                          <div style={{ 
                            width: '44px',
                            height: '44px',
                            background: 'linear-gradient(135deg, #6f7bf7, #9c6ff7)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '16px',
                            flexShrink: 0,
                            marginRight: '12px'
                          }}>
                            <i className="fas fa-bullhorn"></i>
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <h3 style={{ 
                              margin: '0 0 5px 0',
                              fontSize: '16px',
                              color: '#1f2937',
                              fontWeight: '600',
                              lineHeight: '1.4',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical'
                            }}>
                               {toTitleCase(item.title || "Service Request")}
                            </h3>
                            <div style={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '8px'
                            }}>
                              <span style={{ 
                                fontSize: '12px',
                                color: '#6b7280',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px'
                              }}>
                                <i className="far fa-clock"></i>
                                {item.created_at
                                  ? (() => {
                                      const d = new Date(item.created_at);
                                      return `${d.getDate()} ${d.toLocaleString("en-GB", {
                                        month: "short",
                                      })}, ${d.getFullYear()}`;
                                    })()
                                  : "Recent"}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* LEAD CONTENT */}
                        <div style={{ 
                          flex: 1, 
                          marginBottom: '15px',
                          overflow: 'hidden'
                        }}>
                          <p style={{ 
                            color: '#4b5563', 
                            fontSize: '14px',
                            lineHeight: '1.5',
                            margin: 0,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: 'vertical'
                          }}>
                            {item.content || "No details provided"}
                          </p>
                        </div>
                        
                        {/* VIEW BUTTON */}
                        <div style={{ marginTop: 'auto' }}>
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noreferrer"
                            style={{
                              display: 'block',
                              width: '100%',
                              background: 'linear-gradient(135deg, #6f7bf7, #9c6ff7)',
                              border: 'none',
                              color: '#fff',
                              padding: '12px',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              fontSize: '14px',
                              fontWeight: '500',
                              textAlign: 'center',
                              textDecoration: 'none',
                              transition: 'all 0.3s',
                              boxShadow: '0 4px 12px rgba(111, 123, 247, 0.2)'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.transform = 'translateY(-2px)';
                              e.target.style.boxShadow = '0 6px 18px rgba(111, 123, 247, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.transform = 'translateY(0)';
                              e.target.style.boxShadow = '0 4px 12px rgba(111, 123, 247, 0.2)';
                            }}
                          >
                            <i className="fab fa-linkedin" style={{ marginRight: '8px' }}></i>
                            View on LinkedIn
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* LOAD MORE MESSAGE */}
                  {visibleCount < sortedLeads.length && (
                    <div style={{ 
                      textAlign: 'center', 
                      marginTop: '30px',
                      padding: '20px',
                      color: '#6b7280',
                      fontSize: '14px',
                      borderTop: '1px solid rgba(226, 232, 240, 0.5)'
                    }}>
                      <i className="fas fa-chevron-down" style={{ marginRight: '8px' }}></i>
                      Scroll down to load more leads ({sortedLeads.length - visibleCount} remaining)
                    </div>
                  )}
                </div>
                
                {/* BOTTOM BAR */}
                <div style={{ 
                  padding: '15px 25px',
                  borderTop: '1px solid rgba(226, 232, 240, 0.8)',
                  background: 'rgba(249, 250, 251, 0.8)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '13px',
                  color: '#6b7280'
                }}>
                  <div>
                    Showing {Math.min(visibleCount, sortedLeads.length)} of {sortedLeads.length} leads
                    {dateFilter !== "last14days" && (
                      <span style={{ marginLeft: '10px', fontSize: '11px', color: '#9ca3af', fontStyle: 'italic' }}>
                        (Filtered: {DATE_FILTER_OPTIONS.find(opt => opt.value === dateFilter)?.label || "Date"})
                      </span>
                    )}
                  </div>
                  <div>
                    {sortedLeads.length > 0 && (
                      <button
                        onClick={fetchLeads}
                        style={{
                          background: 'none',
                          border: '1px solid #e2e8f0',
                          color: '#6b7280',
                          padding: '6px 12px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <i className="fas fa-sync-alt"></i>
                        Refresh
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}