import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Reviews from "./components/pages/Reviews";
import Contact from "./components/pages/Contact";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Services" element={<Services />} />
        <Route path="Reviews" element={<Reviews />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
