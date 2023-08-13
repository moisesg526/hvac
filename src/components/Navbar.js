import "../styles/Navbar.css";
function Navbar() {
    return(
        <nav>
            <div className="logo">HVAC</div>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Reviews</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    )
}

export default Navbar;