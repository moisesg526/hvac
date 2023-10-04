import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
