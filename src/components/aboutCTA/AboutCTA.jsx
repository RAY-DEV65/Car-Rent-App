import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import "./AboutCTA.css";

const AboutCTA = () => {
  const ctaRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  
  useEffect(() => {
    const element = ctaRef.current;

    if (!element) return;

    // Start the CTA animation when the section enters the viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-cta-section" ref={ctaRef}>
      {/* Decorative background shapes */}
      <div className="about-cta-glow about-cta-glow-left"></div>
      <div className="about-cta-glow about-cta-glow-right"></div>

      <div className="about-cta-container">
        {/* Main CTA content */}
        <div
          className={`about-cta-content ${
            isVisible ? "about-cta-visible" : ""
          }`}
        >
          <span className="about-cta-label">Ready to hit the road?</span>

          <h2 className="about-cta-title">
            Your next journey
            <span>starts here.</span>
          </h2>

          <p className="about-cta-description">
            Find the right car, choose your dates, and get moving. Your journey
            deserves a car you can count on.
          </p>

          {/* CTA buttons */}
          <div className="about-cta-actions">
            <button className="about-cta-primary" type="button">
              Explore Cars
              <FiArrowRight />
            </button>

            <button
              type="button"
              className="about-cta-secondary"
              onClick={() => scrollToSection("why-choose-us")}
            >
              Learn More
            </button>
          </div>

          {/* Trust points */}
          <div className="about-cta-trust">
            <span>
              <FiCheck />
              Easy booking
            </span>

            <span>
              <FiCheck />
              Quality vehicles
            </span>

            <span>
              <FiCheck />
              Reliable service
            </span>
          </div>
        </div>

        {/* Decorative visual */}
        <div
          className={`about-cta-visual ${isVisible ? "about-cta-visible" : ""}`}
        >
          <div className="about-cta-ring about-cta-ring-one"></div>
          <div className="about-cta-ring about-cta-ring-two"></div>

          <div className="about-cta-orbit">
            <span></span>
          </div>

          <div className="about-cta-badge">
            <strong>Drive</strong>
            <span>with confidence.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
