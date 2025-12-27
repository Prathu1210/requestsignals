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
  try {
    const res = await fetch("/api/leads");
    const data = await res.json();

    // ✅ API returns array directly
    setLeads(Array.isArray(data) ? data : []);
  } catch (err) {
    console.error("Fetch failed:", err);
    setLeads([]);
  }
};

  // ✅ DATE FILTER (YYYY-MM-DD from created_at)
  const safeLeads = Array.isArray(leads) ? leads : [];

const filteredLeads = selectedDate
  ? safeLeads.filter(
      (item) => item.created_at?.split("T")[0] === selectedDate
    )
  : safeLeads;

  const visibleLeads = filteredLeads.slice(0, visibleCount);

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
      setVisibleCount((prev) =>
        Math.min(prev + PAGE_SIZE, filteredLeads.length)
      );
    }
  };

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
                    {/* DATE */}
                    <td className={styles.dateCell}>
                      {item.created_at
                        ? (() => {
                            const d = new Date(item.created_at);
                            return `${d.getDate()} ${d.toLocaleString("en-GB", {
                              month: "short",
                            })}, ${d.getFullYear()}`;
                          })()
                        : "-"}
                    </td>

                    {/* TITLE */}
                    <td className={styles.requirement}>
                      {item.title || "-"}
                    </td>

                    {/* CONTENT – 2 LINE CLAMP */}
                    <td>
                      <div className={styles.twoLine}>
                        {item.content || ""}
                      </div>
                    </td>

                    {/* LINK */}
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

        {visibleCount < filteredLeads.length && (
          <div className={styles.footer}>
            Scroll to load more…
          </div>
        )}
      </div>
    </div>
  );
}
