export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} Deeni Website By Abdulazim
      </p>

      <p style={styles.textArabic} dir="rtl">
        ﴿ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ، مُحَمَّدٌ رَسُولُ ٱللَّٰهِ﴾
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "40px",
    padding: "24px",
    backgroundColor: "#064e3b",
    color: "#ffffff",
    textAlign: "center",
  },

  text: {
    margin: "6px 0",
    fontSize: "14px",
  },

  textArabic: {
    marginTop: "10px",
    fontSize: "20px",
    fontFamily: "'Amiri', serif",
  },
};
