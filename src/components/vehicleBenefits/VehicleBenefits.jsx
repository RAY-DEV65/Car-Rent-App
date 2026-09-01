import { useEffect, useRef, useState } from "react";
import {
  FiShield,
  FiClock,
  FiCreditCard,
  FiHeadphones,
  FiArrowUpRight,
} from "react-icons/fi";

import "./VehicleBenefits.css";

const VehicleBenefits = () => {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  /*
   * Benefits that focus specifically on
   * the vehicle rental experience.
   */
  const benefits = [
    {
      id: "01",
      icon: <FiShield />,
      title: "Well Maintained Cars",
      description:
        "Our vehicles are inspected and maintained regularly so you can enjoy a safer and smoother journey.",
    },
    {
      id: "02",
      icon: <FiClock />,
      title: "Flexible Rental",
      description:
        "Choose a rental period that fits your plans, whether you need a car for a day, a weekend, or longer.",
    },
    {
      id: "03",
      icon: <FiCreditCard />,
      title: "Transparent Pricing",
      description:
        "See clear rental prices before you book, with no confusing charges hidden along the way.",
    },
    {
      id: "04",
      icon: <FiHeadphones />,
      title: "Dedicated Support",
      description:
        "Our support team is ready to help you with questions and assistance throughout your rental.",
    },
  ];

  /*
   * Reveal the component when it enters
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

  return (
    <section
      ref={sectionRef}
      className={`vehicle-benefits-section ${
        isVisible
          ? "vehicle-benefits-visible"
          : ""
      }`}
    >
      <div className="vehicle-benefits-container">

        {/* =================================
            LEFT SIDE
        ================================= */}

        <div className="vehicle-benefits-intro">

          <span className="vehicle-benefits-eyebrow">
            Why Rent With Us
          </span>

          <h2>
            A better way
            <span>to rent a car.</span>
          </h2>

          <p>
            We believe renting a car should be
            simple, reliable, and comfortable.
            That's why every part of the rental
            experience is designed with you in mind.
          </p>

          {/* Small statistic */}
          <div className="vehicle-benefits-stat">

            <div className="vehicle-benefits-stat-number">
              <strong>100%</strong>

              <span>
                Customer focused
              </span>
            </div>

            <div className="vehicle-benefits-stat-divider"></div>

            <p>
              From selecting a vehicle to
              returning the keys, we keep
              the process simple.
            </p>

          </div>

        </div>

        {/* =================================
            RIGHT SIDE
        ================================= */}

        <div className="vehicle-benefits-list">

          {benefits.map(
            (benefit, index) => (
              <article
                key={benefit.id}
                className="vehicle-benefit-card"
                style={{
                  "--vehicle-benefit-delay":
                    `${index * 0.1}s`,
                }}
              >

                {/* Number */}
                <span className="vehicle-benefit-number">
                  {benefit.id}
                </span>

                {/* Icon */}
                <div className="vehicle-benefit-icon">
                  {benefit.icon}
                </div>

                {/* Content */}
                <div className="vehicle-benefit-content">

                  <h3>
                    {benefit.title}
                  </h3>

                  <p>
                    {benefit.description}
                  </p>

                </div>

                {/* Arrow */}
                <div className="vehicle-benefit-arrow">
                  <FiArrowUpRight />
                </div>

              </article>
            )
          )}

        </div>

      </div>
    </section>
  );
};

export default VehicleBenefits;