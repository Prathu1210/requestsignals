import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Theme.module.css";

export default function Admin() {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [leads, setLeads] = useState([]);
  const [form, setForm] = useState({
    date: "",
    requirement: "",
    details: "",
    link: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const rowsPerPage = 15;
  
  const [stats, setStats] = useState({
    totalLeads: 0,
    todayLeads: 0,
    activeLeads: 0
  });

  // ---- AUTH CHECK ----
  const checkPassword = (e) => {
    e?.preventDefault();
    // TEMPORARY PASSWORD - SET YOUR OWN
    if (password === "ambigA@1324") {
      setAuthorized(true);
    } else {
      alert("Wrong password");
      setPassword("");
    }
  };

  // ---- FETCH DATA ----
  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/leads");
      const json = await res.json();
      const leadsArray = Array.isArray(json) ? json : [];
      setLeads(leadsArray);
      
      // Calculate stats
      const today = new Date().toDateString();
      const todayCount = leadsArray.filter(item => {
        const itemDate = new Date(item.created_at).toDateString();
        return itemDate === today;
      }).length;
      
      setStats({
        totalLeads: leadsArray.length,
        todayLeads: todayCount,
        activeLeads: leadsArray.filter(item => item.status !== 'archived').length
      });
    } catch (error) {
      console.error("Failed to fetch leads:", error);
    }
  };

  useEffect(() => {
    if (authorized) fetchLeads();
  }, [authorized]);

  // ---- ADD DATA ----
  const addLead = async (e) => {
    e.preventDefault();
    if (!form.requirement || !form.details || !form.link) {
      alert("Requirement, Details and Link are required");
      return;
    }

    try {
      await fetch("/api/add-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.requirement,
          content: form.details,
          link: form.link,
        }),
      });

      setForm({ date: "", requirement: "", details: "", link: "" });
      fetchLeads();
      alert("Lead added successfully!");
    } catch (error) {
      alert("Failed to add lead");
    }
  };

  // ---- DELETE DATA ----
  const deleteLead = async (id) => {
    const ok = confirm("Delete this requirement?");
    if (!ok) return;

    try {
      await fetch("/api/delete-lead", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      fetchLeads();
      alert("Lead deleted successfully!");
    } catch (error) {
      alert("Failed to delete lead");
    }
  };

  // Handle Enter key for login
  useEffect(() => {
    const handleEnterKey = (e) => {
      if (e.key === 'Enter' && !authorized && password) {
        checkPassword();
      }
    };
    window.addEventListener('keydown', handleEnterKey);
    return () => window.removeEventListener('keydown', handleEnterKey);
  }, [authorized, password]);

  // Filter leads based on search term
  const filteredLeads = leads.filter(lead => {
    const searchLower = searchTerm.toLowerCase();
    return (
      lead.title?.toLowerCase().includes(searchLower) ||
      lead.content?.toLowerCase().includes(searchLower) ||
      lead.link?.toLowerCase().includes(searchLower)
    );
  });

  // Pagination
  const totalPages = Math.ceil(filteredLeads.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentLeads = filteredLeads.slice(startIndex, startIndex + rowsPerPage);

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // 🔒 PASSWORD SCREEN (SIMPLE)
  if (!authorized) {
    return (
      <>
        <Head>
          <title>Admin Login – RequestSignals</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        
        <Header />
        
        <section className={styles.hero}>
          <div className={`${styles.container}`} style={{ maxWidth: '400px', margin: '0 auto' }}>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.95)', 
              padding: '40px 30px', 
              borderRadius: '12px',
              border: '1px solid rgba(226, 232, 240, 0.8)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
            }}>
              <h2 style={{ textAlign: 'center', marginBottom: '10px', color: '#1f2937' }}>
                Admin Login
              </h2>
              
              <p style={{ 
                textAlign: 'center', 
                color: '#6b7280', 
                marginBottom: '30px',
                fontSize: '14px'
              }}>
                Enter admin password
              </p>

              <form onSubmit={checkPassword}>
                <div style={{ marginBottom: '20px' }}>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      borderRadius: '6px',
                      border: '1px solid #e2e8f0',
                      fontSize: '14px',
                      color: '#1f2937'
                    }}
                    autoFocus
                  />
                </div>

                <button 
                  type="submit" 
                  style={{
                    width: '100%',
                    background: '#6f7bf7',
                    border: 'none',
                    color: '#fff',
                    padding: '12px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: '500',
                    fontSize: '14px'
                  }}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </section>
        
        <Footer />
      </>
    );
  }

  // ✅ ADMIN PANEL (CLEAN & SIMPLE)
  return (
    <>
      <Head>
        <title>Admin Dashboard – RequestSignals</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Header />
      
      {/* SIMPLE ADMIN HEADER */}
      <section className={styles.hero} style={{ padding: '40px 0' }}>
        <div className={styles.container}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '30px'
          }}>
            <div>
              <h1 style={{ marginBottom: '10px', color: '#1f2937' }}>Admin Dashboard</h1>
              <p style={{ color: '#6b7280', fontSize: '14px' }}>Manage leads and data</p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {/* STATS */}
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '4px' }}>
                  Total Leads: <strong style={{ color: '#1f2937' }}>{stats.totalLeads}</strong>
                </div>
                <div style={{ fontSize: '13px', color: '#6b7280' }}>
                  Today: <strong style={{ color: '#1f2937' }}>{stats.todayLeads}</strong>
                </div>
              </div>
              
              {/* LOGOUT BUTTON - RED HIGHLIGHTED */}
              <button 
                onClick={() => {
                  setAuthorized(false);
                  setPassword("");
                }}
                style={{
                  background: '#dc2626',
                  border: 'none',
                  color: '#fff',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontWeight: '500',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#b91c1c'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#dc2626'}
              >
                <i className="fas fa-sign-out-alt"></i>
                Logout
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ADD LEAD FORM - SIMPLE */}
      <section className={styles.container} style={{ marginBottom: '40px' }}>
        <div style={{ 
          background: '#f9fafb', 
          padding: '25px',
          borderRadius: '8px',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{ marginBottom: '20px', color: '#1f2937', fontSize: '18px' }}>
            Add New Lead
          </h3>
          
          <form onSubmit={addLead}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 2fr 1fr',
              gap: '15px',
              marginBottom: '15px'
            }}>
              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '6px',
                  fontSize: '13px',
                  color: '#4b5563'
                }}>
                  Date
                </label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '4px',
                    border: '1px solid #d1d5db',
                    fontSize: '13px',
                    color: '#1f2937'
                  }}
                />
              </div>

              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '6px',
                  fontSize: '13px',
                  color: '#4b5563'
                }}>
                  Requirement *
                </label>
                <input
                  placeholder="e.g., Need web developer"
                  value={form.requirement}
                  onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '4px',
                    border: '1px solid #d1d5db',
                    fontSize: '13px',
                    color: '#1f2937'
                  }}
                />
              </div>

              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '6px',
                  fontSize: '13px',
                  color: '#4b5563'
                }}>
                  Link *
                </label>
                <input
                  placeholder="https://linkedin.com/..."
                  value={form.link}
                  onChange={(e) => setForm({ ...form, link: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '4px',
                    border: '1px solid #d1d5db',
                    fontSize: '13px',
                    color: '#1f2937'
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '6px',
                fontSize: '13px',
                color: '#4b5563'
              }}>
                Details *
              </label>
              <textarea
                placeholder="Full description..."
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                required
                rows="3"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '4px',
                  border: '1px solid #d1d5db',
                  fontSize: '13px',
                  color: '#1f2937',
                  resize: 'vertical'
                }}
              />
            </div>

            <button 
              type="submit" 
              style={{
                background: '#6f7bf7',
                border: 'none',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: '500'
              }}
            >
              Add Lead
            </button>
          </form>
        </div>
      </section>

      {/* LEADS TABLE - 15 ROWS ONLY */}
      <section className={styles.container}>
        <div style={{ 
          background: '#fff', 
          borderRadius: '8px',
          border: '1px solid #e5e7eb',
          overflow: 'hidden'
        }}>
          <div style={{ 
            padding: '20px',
            borderBottom: '1px solid #e5e7eb',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h3 style={{ margin: 0, color: '#1f2937', fontSize: '18px' }}>Manage Leads</h3>
            <div style={{ fontSize: '13px', color: '#6b7280' }}>
              Showing {currentPage} of {totalPages} pages • {filteredLeads.length} of {leads.length} leads
            </div>
          </div>
          
          {/* SEARCH BAR */}
          <div style={{ 
            padding: '15px 20px',
            borderBottom: '1px solid #e5e7eb',
            background: '#f9fafb'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: '10px'
            }}>
              <div style={{ 
                flex: 1,
                position: 'relative'
              }}>
                <input
                  type="text"
                  placeholder="Search leads by requirement, details, or link..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px 10px 36px',
                    borderRadius: '6px',
                    border: '1px solid #d1d5db',
                    fontSize: '13px',
                    color: '#1f2937',
                    boxSizing: 'border-box'
                  }}
                />
                <i className="fas fa-search" style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#9ca3af',
                  fontSize: '14px'
                }}></i>
              </div>
              
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  style={{
                    background: '#f3f4f6',
                    border: '1px solid #d1d5db',
                    color: '#6b7280',
                    padding: '10px 15px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <i className="fas fa-times"></i>
                  Clear
                </button>
              )}
            </div>
            
            {searchTerm && (
              <div style={{ 
                marginTop: '10px',
                fontSize: '12px',
                color: '#6b7280'
              }}>
                Found {filteredLeads.length} lead{filteredLeads.length !== 1 ? 's' : ''} matching "{searchTerm}"
              </div>
            )}
          </div>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '13px'
            }}>
              <thead>
                <tr style={{ 
                  background: '#f9fafb',
                  borderBottom: '2px solid #e5e7eb'
                }}>
                  <th style={{ padding: '12px 15px', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Date</th>
                  <th style={{ padding: '12px 15px', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Requirement</th>
                  <th style={{ padding: '12px 15px', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Details</th>
                  <th style={{ padding: '12px 15px', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Link</th>
                  <th style={{ padding: '12px 15px', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Action</th>
                </tr>
              </thead>

              <tbody>
                {currentLeads.length === 0 ? (
                  <tr>
                    <td colSpan="5" style={{ 
                      padding: '40px 20px', 
                      textAlign: 'center', 
                      color: '#9ca3af'
                    }}>
                      {searchTerm ? 'No leads found matching your search' : 'No leads found'}
                    </td>
                  </tr>
                ) : (
                  currentLeads.map((item, index) => (
                    <tr 
                      key={item.id}
                      style={{ 
                        borderBottom: '1px solid #f3f4f6',
                        backgroundColor: index % 2 === 0 ? '#fff' : '#f9fafb'
                      }}
                    >
                      <td style={{ padding: '12px 15px', color: '#6b7280' }}>
                        {item.created_at
                          ? new Date(item.created_at).toLocaleDateString()
                          : '-'}
                      </td>
                      <td style={{ padding: '12px 15px', color: '#1f2937', fontWeight: '500' }}>
                        {item.title}
                      </td>
                      <td style={{ padding: '12px 15px', color: '#4b5563', maxWidth: '300px' }}>
                        <div style={{ 
                          maxHeight: '40px', 
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}>
                          {item.content}
                        </div>
                      </td>
                      <td style={{ padding: '12px 15px' }}>
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noreferrer"
                          style={{
                            color: '#6f7bf7',
                            textDecoration: 'none',
                            fontSize: '12px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <i className="fas fa-external-link-alt" style={{ fontSize: '11px' }}></i>
                          View Post
                        </a>
                      </td>
                      <td style={{ padding: '12px 15px' }}>
                        <button
                          onClick={() => deleteLead(item.id)}
                          style={{
                            background: '#fee2e2',
                            border: '1px solid #fecaca',
                            color: '#dc2626',
                            padding: '5px 10px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <i className="fas fa-trash-alt" style={{ fontSize: '11px' }}></i>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          {/* PAGINATION */}
          {totalPages > 1 && (
            <div style={{ 
              padding: '15px 20px',
              borderTop: '1px solid #e5e7eb',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{ fontSize: '13px', color: '#6b7280' }}>
                Showing {startIndex + 1}-{Math.min(startIndex + rowsPerPage, filteredLeads.length)} of {filteredLeads.length} leads
              </div>
              
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  style={{
                    padding: '6px 12px',
                    border: '1px solid #d1d5db',
                    background: '#fff',
                    borderRadius: '4px',
                    cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                    opacity: currentPage === 1 ? 0.5 : 1,
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <i className="fas fa-chevron-left" style={{ fontSize: '10px' }}></i>
                  Previous
                </button>
                
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        style={{
                          padding: '6px 10px',
                          border: '1px solid #d1d5db',
                          background: currentPage === pageNum ? '#6f7bf7' : '#fff',
                          color: currentPage === pageNum ? '#fff' : '#374151',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '12px',
                          minWidth: '30px'
                        }}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  style={{
                    padding: '6px 12px',
                    border: '1px solid #d1d5db',
                    background: '#fff',
                    borderRadius: '4px',
                    cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                    opacity: currentPage === totalPages ? 0.5 : 1,
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  Next
                  <i className="fas fa-chevron-right" style={{ fontSize: '10px' }}></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </>
  );
}