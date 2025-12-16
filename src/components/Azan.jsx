export default function Azan() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Azan</h2>

      <p style={styles.subtitle}>
        Listen to the call to prayer
      </p>

      <audio controls style={styles.audio}>
        <source
          src="http://127.0.0.1:8000/media/azan/azan.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>

      <p style={styles.note} dir="rtl">
        ٱللَّٰهُ أَكْبَرُ ٱللَّٰهُ أَكْبَرُ
      </p>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px",
    backgroundColor: "#f8fafc",
    fontFamily: "system-ui, sans-serif",
  },

  title: {
    fontSize: "30px",
    color: "#0f766e",
    marginBottom: "8px",
  },

  subtitle: {
    fontSize: "16px",
    color: "#6b7280",
    marginBottom: "24px",
  },

  audio: {
    width: "100%",
    maxWidth: "400px",
    marginBottom: "24px",
  },

  note: {
    fontSize: "22px",
    fontFamily: "'Amiri', serif",
    color: "#065f46",
    textAlign: "center",
  },
};
