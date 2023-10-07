import { Link } from "react-router-dom";
import "../styles/style.css";
function Navbar() {
  return (
    <nav>
      <div className="logo">HVAC</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <div className="dropdown-btn">
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
}

export default Navbar;
