import { useEffect, useState } from "react";
import api from "../api/api";

export default function Duas() {
  const [duas, setDuas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("duas/")
      .then(res => {
        setDuas(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p style={styles.status}>
        Loading duas...
      </p>
    );
  }

  if (!duas.length) {
    return (
      <p style={styles.status}>
        No duas available.
      </p>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.pageTitle}>Duas</h2>

      <div style={styles.grid}>
        {duas.map((dua) => (
          <div key={dua.id} style={styles.card}>
            <h3 style={styles.cardTitle}>
              {dua.name}
            </h3>

            <p dir="rtl" style={styles.arabicText}>
              {dua.description_arabic}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "24px",
    fontFamily: "system-ui, sans-serif",
    backgroundColor: "#f8fafc",
    minHeight: "100vh",
  },

  pageTitle: {
    textAlign: "center",
    fontSize: "28px",
    marginBottom: "32px",
    color: "#0f766e",
  },

  status: {
    textAlign: "center",
    marginTop: "60px",
    fontSize: "18px",
    color: "#6b7280",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  },

  cardTitle: {
    fontSize: "20px",
    marginBottom: "12px",
    color: "#065f46",
  },

  arabicText: {
    fontFamily: "'Amiri', serif",
    fontSize: "22px",
    lineHeight: "1.9",
    color: "#111827",
    textAlign: "right",
  },
};



