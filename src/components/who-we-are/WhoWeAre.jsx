import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import "./WhoWeAre.css";
import aboutStoryCar from "../../assets/car8.jpeg";

const WhoWeAre = () => {
  return (
    <section className="about-story-section"  id="who-we-are">
      <div className="about-story-container">

        {/* Left visual area */}
        <div className="about-story-visual">

          <div className="about-story-image-frame">
            <img
              src={aboutStoryCar}
              alt="Premium vehicle available for rental"
              className="about-story-image"
            />
          </div>

          {/* Decorative number */}
          <div className="about-story-number">
            <span>01</span>
          </div>

          {/* Experience card */}
          <div className="about-story-experience">
            <span className="about-story-experience-number">
              10+
            </span>

            <div className="about-story-experience-text">
              <strong>Years</strong>
              <span>moving people forward</span>
            </div>
          </div>

          {/* Decorative circle */}
          <div className="about-story-decoration"></div>
        </div>

        {/* Right content area */}
        <div className="about-story-content">

          <span className="about-story-label">
            Who We Are
          </span>

          <h2 className="about-story-title">
            More than a car rental.
            <span>We're part of your journey.</span>
          </h2>

          <p className="about-story-description">
            We believe getting a car should be simple. Whether you're
            travelling across the city, heading out for a weekend trip,
            attending an important event, or simply need a reliable vehicle,
            we're here to make the experience easier.
          </p>

          <p className="about-story-description">
            Our goal is to give every customer access to quality vehicles,
            straightforward booking, and dependable service without making
            the process complicated.
          </p>

          {/* Values */}
          <div className="about-story-values">

            <div className="about-story-value">
              <span className="about-story-value-icon">
                <FiCheck />
              </span>

              <div>
                <strong>Quality First</strong>
                <span>Vehicles prepared for every journey.</span>
              </div>
            </div>

            <div className="about-story-value">
              <span className="about-story-value-icon">
                <FiCheck />
              </span>

              <div>
                <strong>People Focused</strong>
                <span>Service built around our customers.</span>
              </div>
            </div>

          </div>

          {/* Learn more */}
          <button className="about-story-link">
            Discover our story
            <span className="about-story-link-icon">
              <FiArrowUpRight />
            </span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;