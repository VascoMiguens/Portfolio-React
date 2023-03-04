import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/portfolio-react">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/*" element={<Navigate to="/about" />} />
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
