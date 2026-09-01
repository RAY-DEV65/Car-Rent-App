
import "./CallToAction.css";
import jeep from "../../assets/jeep.png";

const CallToAction = () => {
  return (
    <section className="cta-section">

      <div className="cta-content">
        <span className="cta-subtitle">
          YOUR JOURNEY STARTS HERE
        </span>

        <h2>Ready to hit the road?</h2>

        <p>
          Choose your perfect car and enjoy a smooth, comfortable journey
          wherever you're going.
        </p>

        <button className="cta-button">
          Book a Car
        </button>
      </div>

      <div className="cta-car">
        <div className="cta-glow"></div>

        <img src={jeep} alt="Luxury car" />
      </div>

    </section>
  );
};

export default CallToAction;

