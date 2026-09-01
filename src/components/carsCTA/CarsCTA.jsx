import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiMapPin } from "react-icons/fi";

import "./CarsCTA.css";

const CarsCTA = () => {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  /*
   * Reveal the CTA when it enters
   * the viewport.
   */
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

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

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * Scroll back to the vehicle collection.
   *
   * We can connect this to the actual
   * booking system later.
   */
  const handleExploreCars = () => {
    const section = document.getElementById(
      "vehicle-categories"
    );

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`cars-cta-section ${
        isVisible ? "cars-cta-visible" : ""
      }`}
    >
      <div className="cars-cta-container">

        {/* Decorative background elements */}
        <div className="cars-cta-glow cars-cta-glow-one"></div>

        <div className="cars-cta-glow cars-cta-glow-two"></div>

        {/* =================================
            CONTENT
        ================================= */}

        <div className="cars-cta-content">

          <span className="cars-cta-eyebrow">
            Ready to hit the road?
          </span>

          <h2>
            Your next journey
            <span>starts here.</span>
          </h2>

          <p>
            Choose the vehicle that fits your
            journey and get behind the wheel
            with confidence.
          </p>

          {/* =================================
              ACTIONS
          ================================= */}

          <div className="cars-cta-actions">

            <button
              type="button"
              className="cars-cta-primary-button"
              onClick={handleExploreCars}
            >
              Explore Our Cars

              <FiArrowRight />
            </button>

            <button
              type="button"
              className="cars-cta-secondary-button"
            >
              <FiMapPin />

              Find a Location
            </button>

          </div>

        </div>

        {/* =================================
            SIDE STAT
        ================================= */}

        <div className="cars-cta-side">

          <span className="cars-cta-side-number">
            01
          </span>

          <div className="cars-cta-side-line"></div>

          <span className="cars-cta-side-text">
            Drive with confidence.
          </span>

        </div>

      </div>
    </section>
  );
};

export default CarsCTA;