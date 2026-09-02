import { useState, useEffect, useRef } from "react";
import "./WhyChooseUs.css";
import Jeep from "../../assets/jeep.png";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const [show, setShow] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <div ref={sectionRef} className={`why-choose-us ${show ? "show" : ""}`}>
      <div className="why-content">
        <p className="section-tag">WHY CHOOSE US</p>
        <h2>
          More Than Just a <span>Car rental</span>
        </h2>
        <p className="why-description">
          We make finding and booking the perfect vehicle simple,reliable, and
          convenient for every journey
        </p>

        <div className="why-features">
          <div className="feature">
            <div className="feature-icon">✔</div>
            <div>
              <h3>Wide Range of Cars</h3>
              <p>Choose from economy, luxury, SUVs and more.</p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">✔</div>
            <div>
              <h3>Easy Booking</h3>
              <p>Find your preferred vehicle and book in just a few steps.</p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">✔</div>
            <div>
              <h3>Trusted Servies</h3>
              <p>Enjoy a smooth and reliable car rental experience.</p>
            </div>
          </div>
        </div>

        <div className="why-buttons">
          <Link to="/car#vehicle-categories" className="primary-btn">
            Explore Cars
          </Link>
          <Link to="/about" className="secondary-btn">
            Learn More
          </Link>
        </div>
      </div>

      <div className="why-image">
        <img src={Jeep} alt="Luxury car" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
