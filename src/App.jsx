import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/footer.jsx";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="app-container">
      <Nav />
      <ScrollToTop />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
