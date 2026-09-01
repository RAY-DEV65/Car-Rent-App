import { useEffect, useRef, useState } from "react";
import {
  FiCompass,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";
import "./Mission.css";

const Mission = () => {
  const missionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const principles = [
    {
      icon: <FiCompass />,
      title: "Make It Simple",
      text: "Remove unnecessary steps from every rental.",
    },
    {
      icon: <FiUsers />,
      title: "Put People First",
      text: "Build every experience around our customers.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Keep Improving",
      text: "Continuously raise the standard of our service.",
    },
  ];

  useEffect(() => {
    const element = missionRef.current;

    if (!element) return;

    // Detect when the mission section enters the viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Stop observing after the first animation.
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="about-mission-section"
      ref={missionRef}
    >
      <div className="about-mission-container">

        {/* Left content */}
        <div
          className={`about-mission-content ${
            isVisible ? "about-mission-visible" : ""
          }`}
        >
          <span className="about-mission-label">
            Our Mission
          </span>

          <h2 className="about-mission-title">
            Making every journey
            <span>worth remembering.</span>
          </h2>

          <p className="about-mission-description">
            Our mission is simple: to make car rental easier, more reliable,
            and more enjoyable for everyone. We want every customer to feel
            confident from the moment they start searching to the moment they
            return their vehicle.
          </p>

          <p className="about-mission-description">
            We believe great service is not just about providing a car. It is
            about creating an experience people can trust.
          </p>

          {/* Mission principles */}
          <div className="about-mission-principles">
            {principles.map((principle) => (
              <div
                className="about-mission-principle"
                key={principle.title}
              >
                <span className="about-mission-principle-icon">
                  {principle.icon}
                </span>

                <div className="about-mission-principle-content">
                  <h3>{principle.title}</h3>

                  <p>{principle.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div
          className={`about-mission-visual ${
            isVisible ? "about-mission-visible" : ""
          }`}
        >
          <div className="about-mission-visual-frame">
            <div className="about-mission-quote-mark">
              “
            </div>

            <p className="about-mission-quote">
              Every journey begins with a choice.
              We want to make choosing us an easy one.
            </p>

            <div className="about-mission-quote-line"></div>

            <span className="about-mission-quote-caption">
              Our promise to every customer
            </span>
          </div>

          {/* Decorative circle */}
          <div className="about-mission-circle"></div>

          {/* Decorative dots */}
          <div className="about-mission-dot-pattern">
            {Array.from({ length: 25 }).map((_, index) => (
              <span key={index}></span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Mission;