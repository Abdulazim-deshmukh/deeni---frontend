import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Surahs from "./components/Surahs";
import Duas from "./components/Duas";


export default function App() {
  return (
    <>
      <Header />

      <main style={mainStyle}>
        <Routes>
          <Route path="/" element={<Surahs />} />
          <Route path="/duas" element={<Duas />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

const mainStyle = {
  minHeight: "80vh",
};
