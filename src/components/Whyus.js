import "../styles/style.css";

function Whyus() {
  return (
    <div className="whyus-container">
      <h3>Why choose HVAC?</h3>
      <div className="row1">
        <div className="reasons">
          <i class="fa-solid fa-award why-icon"></i> Licensed and HVAC ceritfied
        </div>
        <div className="reasons">
          <i class="fa-solid fa-trophy"></i> We beat our competitors estimates!
        </div>
        <div className="reasons"><i class="fa-solid fa-shield-halved"></i> Manufacturers Warranties</div>
      </div>
      <div className="row2">
        <div className="reasons"><i class="fa-solid fa-clock"></i> Quick and effient response.</div>
        <div className="reasons">
          <i class="fa-solid fa-shield-heart"></i>
          Years of experience with many happy customers
        </div>
        <div className="reasons">
          <i class="fa-solid fa-receipt"></i> Reasonable payment plans!
        </div>
      </div>
    </div>
  );
}
export default Whyus;
