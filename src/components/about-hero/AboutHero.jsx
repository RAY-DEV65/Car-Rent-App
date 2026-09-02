import { FiArrowRight, FiCheck } from "react-icons/fi";
import "./AboutHero.css";
import aboutCar from "../../assets/hero5.jpeg";
import { Link } from "react-router-dom";

const AboutHero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="about-hero-section">
      {/* Decorative background elements */}
      <div className="about-hero-glow about-hero-glow-one"></div>
      <div className="about-hero-glow about-hero-glow-two"></div>

      <div className="about-hero-container">
        {/* Left content */}
        <div className="about-hero-content">
          <span className="about-hero-eyebrow">
            <span className="about-hero-eyebrow-line"></span>
            About Our Journey
          </span>

          <h1 className="about-hero-title">
            Driven by your
            <span> journey.</span>
          </h1>

          <p className="about-hero-description">
            We make car rental simple, reliable, and enjoyable by connecting you
            with the right vehicle for every journey.
          </p>

          <div className="about-hero-actions">
            <Link to="/car#vehicle-categories" className="about-hero-primary-btn">
              Explore Our Cars
              <FiArrowRight />
            </Link>

            <button
              type="button"
              className="about-hero-secondary-btn"
              onClick={() => scrollToSection("who-we-are")}
            >
              Get to Know Us
            </button>
          </div>

          {/* Small trust indicators */}
          <div className="about-hero-trust">
            <div className="about-hero-trust-item">
              <span className="about-hero-check">
                <FiCheck />
              </span>

              <span>Quality Vehicles</span>
            </div>

            <div className="about-hero-trust-item">
              <span className="about-hero-check">
                <FiCheck />
              </span>

              <span>Trusted Service</span>
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div className="about-hero-visual">
          <div className="about-hero-image-wrapper">
            <img
              src={aboutCar}
              alt="Premium rental car"
              className="about-hero-image"
            />
          </div>

          {/* Floating experience card */}
          <div className="about-hero-floating-card">
            <div className="about-hero-floating-number">10+</div>

            <div className="about-hero-floating-text">
              <strong>Years</strong>
              <span>of experience</span>
            </div>
          </div>

          {/* Decorative ring */}
          <div className="about-hero-ring"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
