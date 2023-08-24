import "../styles/style.css";

function Whyus() {
  return (
    <div className="whyus-container">
      <h3>Why choose HVAC?</h3>
      <div className="row">
        <div className="reasons">
          <i className="fa-solid fa-award why-icon"></i> <br />
          Licensed and HVAC ceritfied
        </div>
        <div className="reasons">
          <i className="fa-solid fa-trophy why-icon"></i> <br />
          We beat our competitors estimates!
        </div>
        <div className="reasons">
          <i className="fa-solid fa-shield-halved why-icon"></i>
          <br /> Manufacturers Warranties
        </div>
      </div>
      <div className="row">
        <div className="reasons">
          <i className="fa-solid fa-clock why-icon"></i>
          <br /> Quick and effient response.
        </div>
        <div className="reasons">
          <i className="fa-solid fa-shield-heart why-icon"></i>
          <br />
          Years of experience with many happy customers
        </div>
        <div className="reasons">
          <i className="fa-solid fa-receipt why-icon"></i> <br />
          Reasonable payment plans!
        </div>
      </div>
    </div>
  );
}
export default Whyus;
