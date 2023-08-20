import "../styles/style.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="left-footer">
        <ul>
            <li><i className="fa-brands fa-facebook-f"></i></li>
            <li><i className="fa-brands fa-instagram"></i></li>
            <li><i className="fa-regular fa-envelope"></i></li>
            <li><i className="fa-regular fa-envelope"></i></li>
        </ul>
      </div>
      <div className="right-footer">
        <p>Terms of Service / Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;
