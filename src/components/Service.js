import "../styles/style.css";

function Service() {
  return (
    <div className="services-block">
      <div className="services-heading">
        <h1>Services</h1>
        <h3>Trusted Work with reasonalble prices</h3>
      </div>
      <div className="services-provided">
        <div className="service">
          <img src="ac.jpg" alt="air conditioning" />
          <h3>Air Conditioning</h3>
          <h4>
            We provide services for commercial properties or for your home. We
            can maintain, repair or replace your existing one. We work on all
            types of units ductless, central AC and rooftops
          </h4>
        </div>
        <div className="service">
          <img src="" alt="Heating" />
          <h3>Heating</h3>
          <h4>
            We service, maintain and replace all types of heating systems. We
            can get your place heated and warm as quick and effienct as
            possible. Whether its a furnace, boilers, radiant heating, or forced
            hot air our services provided will be top notch.
          </h4>
        </div>
        <div className="service">
          <img src="" alt="Water Heaters" />
          <h3>Water Heaters</h3>
          <h4>
            We service and replace all types of water heaters includint gas,
            electric tanks, tankless, and heat pump water heaters. We are
            trained and provide multiple years of skills and experience to
            satisfy your needs.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Service;