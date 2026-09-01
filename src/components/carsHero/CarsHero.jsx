import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import car7 from "../../assets/car7.jpeg";
import "./CarsHero.css";

const CarsHero = () => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = heroRef.current;

    if (!section) return;

    // Start the slide-in animation when the hero enters the viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const scrollToVehicles = () => {
    const section = document.getElementById("cars-collection");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      ref={heroRef}
      className={`cars-hero-section ${
        isVisible ? "cars-hero-active" : ""
      }`}
    >
      {/* Dark gradient overlay */}
      <div className="cars-hero-overlay"></div>

      {/* Decorative glow */}
      <div className="cars-hero-glow"></div>

      {/* Background grid */}
      <div className="cars-hero-grid"></div>

      <div className="cars-hero-container">

        {/* Hero text */}
        <div className="cars-hero-content">

          <span className="cars-hero-eyebrow">
            Explore Our Collection
          </span>

          <h1 className="cars-hero-title">
            Find the car
            <span>that moves you.</span>
          </h1>

          <p className="cars-hero-description">
            From smooth city drives to unforgettable road trips,
            discover vehicles designed to match your journey,
            your style, and your needs.
          </p>

          <div className="cars-hero-actions">

            <button
              type="button"
              className="cars-hero-primary-button"
              onClick={scrollToVehicles}
            >
              Explore Vehicles
              <FiArrowRight />
            </button>

            <button
              type="button"
              className="cars-hero-scroll-button"
              onClick={scrollToVehicles}
              aria-label="Scroll to vehicle collection"
            >
              <FiChevronDown />
            </button>

          </div>

          {/* Hero statistics */}
          <div className="cars-hero-stats">

            <div className="cars-hero-stat-item">
              <strong>250+</strong>
              <span>Vehicles</span>
            </div>

            <div className="cars-hero-stat-line"></div>

            <div className="cars-hero-stat-item">
              <strong>25+</strong>
              <span>Locations</span>
            </div>

            <div className="cars-hero-stat-line"></div>

            <div className="cars-hero-stat-item">
              <strong>10K+</strong>
              <span>Drivers</span>
            </div>

          </div>
        </div>

        {/* Car visual */}
        <div className="cars-hero-visual">

          <div className="cars-hero-image-container">

            <div className="cars-hero-image-glow"></div>

            <img
              src={car7}
              alt="Premium car available for rental"
              className="cars-hero-car-image"
            />

          </div>

          {/* Floating information card */}
          <div className="cars-hero-info-card">

            <span>Premium Collection</span>

            <strong>
              Your next
              <br />
              adventure starts here.
            </strong>

            <div className="cars-hero-info-line"></div>

          </div>

          {/* Decorative ring */}
          <div className="cars-hero-ring"></div>

        </div>

      </div>

      {/* Bottom scroll indicator */}
      <div className="cars-hero-scroll-indicator">

        <span>Scroll to explore</span>

        <div className="cars-hero-scroll-track">
          <span></span>
        </div>

      </div>
    </section>
  );
};

export default CarsHero;