import { useEffect, useState, useRef } from "react";
import styles from "../styles/Home.module.css";

const PAGE_SIZE = 20;

export default function Home() {
  const [leads, setLeads] = useState([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [selectedDate, setSelectedDate] = useState("");

  const containerRef = useRef(null);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    const res = await fetch("/api/leads");
    const json = await res.json();
    setLeads(json.data || []);
  };

  // ✅ DATE FILTER
  const filteredLeads = selectedDate
    ? leads.filter((item) => item.date === selectedDate)
    : leads;

  // ✅ VISIBLE ROWS (20 → 40 → 60 ...)
  const visibleLeads = filteredLeads.slice(0, visibleCount);

  // ✅ INFINITE SCROLL HANDLER
  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
      setVisibleCount((prev) =>
        Math.min(prev + PAGE_SIZE, filteredLeads.length)
      );
    }
  };

  // Reset scroll when date changes
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [selectedDate]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Latest Project Requirements from LinkedIn
          </h2>

          <input
            type="date"
            className={styles.dateFilter}
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        {/* ✅ SCROLLABLE TABLE */}
        <div
          className={styles.tableContainer}
          ref={containerRef}
          onScroll={handleScroll}
        >
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Requirement</th>
                <th>Details</th>
                <th>Link</th>
              </tr>
            </thead>

            <tbody>
              {visibleLeads.length === 0 ? (
                <tr>
                  <td colSpan="4" className={styles.empty}>
                    No data found
                  </td>
                </tr>
              ) : (
                visibleLeads.map((item) => (
                  <tr key={item.id}>
                    <td>{item.date}</td>
                    <td className={styles.requirement}>
                      {item.requirement}
                    </td>
                    <td>{item.details}</td>
                    <td>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className={styles.link}
                        >
                          View
                        </a>
                      ) : (
                        "-"
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Optional footer indicator */}
        {visibleCount < filteredLeads.length && (
          <div style={{ textAlign: "center", padding: "10px", color: "#666" }}>
            Scroll to load more…
          </div>
        )}
      </div>
    </div>
  );
}
