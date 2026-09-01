import { useEffect, useRef, useState } from "react";
import {
  FiUsers,
  FiTruck,
  FiMapPin,
  FiHeart,
} from "react-icons/fi";
import "./Statistics.css";

const Statistics = () => {
  const statistics = [
    {
      icon: <FiUsers />,
      value: 10000,
      suffix: "+",
      label: "Happy Customers",
      description: "People who have trusted our service",
    },
    {
      icon: <FiTruck />,
      value: 250,
      suffix: "+",
      label: "Premium Vehicles",
      description: "Cars ready for your next journey",
    },
    {
      icon: <FiMapPin />,
      value: 25,
      suffix: "+",
      label: "Locations",
      description: "Convenient locations to serve you",
    },
    {
      icon: <FiHeart />,
      value: 98,
      suffix: "%",
      label: "Satisfaction Rate",
      description: "Customers satisfied with our service",
    },
  ];

  const statisticsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = statisticsRef.current;

    if (!element) return;

    // Start the counter animation when the section enters the viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="about-stats-section"
      ref={statisticsRef}
    >
      {/* Decorative background elements */}
      <div className="about-stats-glow about-stats-glow-one"></div>
      <div className="about-stats-glow about-stats-glow-two"></div>

      <div className="about-stats-container">

        {/* Section heading */}
        <div className="about-stats-heading">
          <span className="about-stats-label">
            By The Numbers
          </span>

          <h2 className="about-stats-title">
            Numbers that tell
            <span>our story.</span>
          </h2>

          <p className="about-stats-description">
            Every number represents a customer served, a journey completed,
            and another reason for us to keep raising the standard.
          </p>
        </div>

        {/* Statistics */}
        <div className="about-stats-grid">
          {statistics.map((stat, index) => (
            <StatisticCard
              key={stat.label}
              stat={stat}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

/*
 * Individual statistic card.
 * Keeping the counter separate makes the animation easier to manage
 * and keeps the main component clean.
 */
const StatisticCard = ({ stat, index, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1800;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Ease-out makes the counter slow down naturally near the end.
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(
        Math.floor(stat.value * easedProgress)
      );

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isVisible, stat.value]);

  return (
    <article
      className={`about-stats-card ${
        isVisible ? "about-stats-card-visible" : ""
      }`}
      style={{
        "--about-stats-delay": `${index * 120}ms`,
      }}
    >
      {/* Icon */}
      <div className="about-stats-icon">
        {stat.icon}
      </div>

      {/* Number */}
      <div className="about-stats-number">
        {count.toLocaleString()}
        <span>{stat.suffix}</span>
      </div>

      {/* Label */}
      <h3 className="about-stats-card-title">
        {stat.label}
      </h3>

      {/* Description */}
      <p className="about-stats-card-description">
        {stat.description}
      </p>

      {/* Decorative progress line */}
      <span className="about-stats-card-line"></span>
    </article>
  );
};

export default Statistics;