import { useEffect, useState } from "react";
import styles from "../styles/Admin.module.css";

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

  // ---- AUTH CHECK ----
  const checkPassword = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAuthorized(true);
    } else {
      alert("Wrong password");
    }
  };

  // ---- FETCH DATA ----
  const fetchLeads = async () => {
    const res = await fetch("/api/leads");
    const json = await res.json();
    setLeads(json.data || []);
  };

  useEffect(() => {
    if (authorized) fetchLeads();
  }, [authorized]);

  // ---- ADD DATA ----
  const addLead = async () => {
    if (!form.date || !form.requirement) return;

    await fetch("/api/add-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ date: "", requirement: "", details: "", link: "" });
    fetchLeads();
  };

  // ---- DELETE DATA ----
  const deleteLead = async (id) => {
    const ok = confirm("Delete this requirement?");
    if (!ok) return;

    await fetch("/api/delete-lead", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    fetchLeads();
  };

  // 🔒 PASSWORD SCREEN
  if (!authorized) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h2 className={styles.title}>Admin Access</h2>

          <input
            type="password"
            placeholder="Enter admin password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className={styles.button} onClick={checkPassword}>
            Login
          </button>
        </div>
      </div>
    );
  }

  // ✅ ADMIN PANEL
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2 className={styles.title}>Admin Panel</h2>

        {/* FORM */}
        <div className={styles.formRow}>
          <input
            type="date"
            className={styles.input}
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />

          <input
            placeholder="Requirement"
            className={styles.input}
            value={form.requirement}
            onChange={(e) =>
              setForm({ ...form, requirement: e.target.value })
            }
          />

          <textarea
            placeholder="Details"
            className={styles.textarea}
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
          />

          <input
            placeholder="Link"
            className={styles.input}
            value={form.link}
            onChange={(e) => setForm({ ...form, link: e.target.value })}
          />

          <button className={styles.button} onClick={addLead}>
            Add
          </button>
        </div>

        {/* TABLE */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Requirement</th>
                <th>Details</th>
                <th>Link</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {leads.length === 0 ? (
                <tr>
                  <td colSpan="5" className={styles.empty}>
                    No data
                  </td>
                </tr>
              ) : (
                leads.map((item) => (
                  <tr key={item.id}>
                    <td>{item.date}</td>
                    <td>{item.requirement}</td>
                    <td>{item.details}</td>
                    <td>
                      <a href={item.link} target="_blank" rel="noreferrer">
                        View
                      </a>
                    </td>
                    <td>
                      <button
                        className={styles.delete}
                        onClick={() => deleteLead(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
