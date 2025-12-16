import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        🌙 Deeni Website
      </div>

      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Surahs</Link>
        <Link to="/duas" style={styles.link}>Duas</Link>
        <Link to="/azan" style={styles.link}>Azan</Link>

      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    backgroundColor: "#0f766e",
    color: "#ffffff",
  },

  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },

  nav: {
    display: "flex",
    gap: "20px",
  },

  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
  },
};
