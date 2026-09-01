import { useEffect, useRef, useState } from "react";
import {
  FiArrowRight,
  FiCheck,
  FiClock,
  FiMapPin,
  FiShield,
  FiStar,
  FiUsers,
} from "react-icons/fi";

import "./About.css";

import car from "../../assets/car.jpeg";
import car7 from "../../assets/car7.jpeg";
import car8 from "../../assets/car8.jpeg";
import car9 from "../../assets/car9.jpeg";
import car12 from "../../assets/car12.jpeg";


// Reusable hook for revealing sections when they enter the viewport
const useScrollReveal = () => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, show };
};


// Animated statistics counter
const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const { ref, show } = useScrollReveal();

  useEffect(() => {
    if (!show) return;

    let start = 0;
    const duration = 1800;
    const increment = end / (duration / 30);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(timer);
  }, [show, end]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};


const About = () => {
  const hero = useScrollReveal();
  const whoWeAre = useScrollReveal();
  const whyChoose = useScrollReveal();
  const stats = useScrollReveal();
  const mission = useScrollReveal();
  const cta = useScrollReveal();

  const features = [
    {
      icon: <FiStar />,
      title: "Premium Vehicles",
      text: "Drive well-maintained vehicles selected for comfort, quality and reliability.",
    },
    {
      icon: <FiClock />,
      title: "Easy Booking",
      text: "Find your car and complete your booking without unnecessary complications.",
    },
    {
      icon: <FiMapPin />,
      title: "Flexible Locations",
      text: "Access convenient pickup locations and find the right vehicle for your journey.",
    },
    {
      icon: <FiShield />,
      title: "Reliable Service",
      text: "From booking to drop-off, we focus on making your experience smooth and dependable.",
    },
  ];

  return (
    <main className="about-page">

      {/* =================================
          ABOUT HERO
      ================================= */}

      <section
        ref={hero.ref}
        className={`about-hero ${hero.show ? "show" : ""}`}
      >
        <div className="about-hero-glow"></div>

        <div className="about-hero-content">

          <span className="about-label">
            ABOUT US
          </span>

          <h1>
            More than a car.
            <span>It's your journey.</span>
          </h1>

          <p>
            We make car rental simple, comfortable and reliable,
            giving you the freedom to focus on the road ahead.
          </p>

          <div className="about-hero-buttons">
            <a href="#who-we-are" className="about-main-btn">
              Discover Our Story
              <FiArrowRight />
            </a>

            <a href="#about-mission" className="about-outline-btn">
              Our Mission
            </a>
          </div>

        </div>

        <div className="about-hero-image">
          <div className="hero-image-circle"></div>

          <img
            src={car}
            alt="Premium rental car"
          />

          <div className="hero-floating-card">
            <div className="hero-card-icon">
              <FiUsers />
            </div>

            <div>
              <strong>10K+</strong>
              <span>Happy Customers</span>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <span></span>
          Scroll to explore
        </div>
      </section>


      {/* =================================
          WHO WE ARE
      ================================= */}

      <section
        ref={whoWeAre.ref}
        id="who-we-are"
        className={`who-section ${whoWeAre.show ? "show" : ""}`}
      >

        <div className="who-images">

          <div className="who-main-image">
            <img
              src={car7}
              alt="Luxury rental vehicle"
            />
          </div>

          <div className="who-small-image">
            <img
              src={car8}
              alt="Premium car"
            />
          </div>

          <div className="who-experience">
            <strong>10+</strong>
            <span>Years of<br />experience</span>
          </div>

        </div>

        <div className="who-content">

          <span className="section-label">
            WHO WE ARE
          </span>

          <h2>
            Making every
            <span>journey worth the drive.</span>
          </h2>

          <p>
            We believe renting a car should be more than simply
            picking up a vehicle. It should be an experience that
            gives you freedom, comfort and confidence wherever
            the road takes you.
          </p>

          <p>
            From everyday trips to important journeys, our goal is
            to connect you with reliable vehicles and a rental
            experience you can trust.
          </p>

          <div className="who-checks">

            <div>
              <FiCheck />
              <span>Quality vehicles</span>
            </div>

            <div>
              <FiCheck />
              <span>Simple experience</span>
            </div>

            <div>
              <FiCheck />
              <span>Customer focused</span>
            </div>

            <div>
              <FiCheck />
              <span>Reliable support</span>
            </div>

          </div>

        </div>

      </section>


      {/* =================================
          WHY CHOOSE US
      ================================= */}

      <section
        ref={whyChoose.ref}
        className={`why-section ${whyChoose.show ? "show" : ""}`}
      >

        <div className="section-heading">

          <span className="section-label">
            WHY CHOOSE US
          </span>

          <h2>
            Everything you need
            <span>for a better journey.</span>
          </h2>

          <p>
            We take care of the details so you can focus on
            enjoying the journey.
          </p>

        </div>

        <div className="why-grid">

          {features.map((feature, index) => (
            <div
              className="why-card"
              key={feature.title}
              style={{
                animationDelay: `${index * 0.12}s`,
              }}
            >

              <div className="why-icon">
                {feature.icon}
              </div>

              <span className="why-number">
                0{index + 1}
              </span>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>

              <div className="why-arrow">
                <FiArrowRight />
              </div>

            </div>
          ))}

        </div>

      </section>


      {/* =================================
          STATISTICS
      ================================= */}

      <section
        ref={stats.ref}
        className={`about-stats ${stats.show ? "show" : ""}`}
      >

        <div className="stats-background"></div>

        <div className="stats-heading">

          <span>
            OUR JOURNEY IN NUMBERS
          </span>

          <h2>
            Trust built one
            <br />
            journey at a time.
          </h2>

        </div>

        <div className="stats-grid">

          <div className="stat-item">
            <strong>
              <Counter end={10000} suffix="+" />
            </strong>
            <span>Happy Customers</span>
          </div>

          <div className="stat-item">
            <strong>
              <Counter end={250} suffix="+" />
            </strong>
            <span>Premium Vehicles</span>
          </div>

          <div className="stat-item">
            <strong>
              <Counter end={15} suffix="+" />
            </strong>
            <span>Locations</span>
          </div>

          <div className="stat-item">
            <strong>
              <Counter end={98} suffix="%" />
            </strong>
            <span>Customer Satisfaction</span>
          </div>

        </div>

      </section>


      {/* =================================
          OUR MISSION
      ================================= */}

      <section
        ref={mission.ref}
        id="about-mission"
        className={`mission-section ${mission.show ? "show" : ""}`}
      >

        <div className="mission-image">
          <img
            src={car9}
            alt="Car on the road"
          />
        </div>

        <div className="mission-content">

          <span className="section-label">
            OUR MISSION
          </span>

          <h2>
            Moving people
            <span>toward better journeys.</span>
          </h2>

          <p>
            Our mission is simple: to make mobility easier,
            more accessible and more enjoyable for everyone.
          </p>

          <p>
            We are committed to providing dependable vehicles,
            transparent service and a seamless rental experience
            that gives every customer the confidence to keep moving.
          </p>

          <div className="mission-quote">
            <span>"</span>
            <p>
              Wherever you're going, we're here to help you
              get there comfortably.
            </p>
          </div>

        </div>

      </section>


      {/* =================================
          FINAL CTA
      ================================= */}

      <section
        ref={cta.ref}
        className={`about-final-cta ${cta.show ? "show" : ""}`}
      >

        <div className="cta-light"></div>

        <div className="final-cta-content">

          <span>
            YOUR NEXT JOURNEY STARTS HERE
          </span>

          <h2>
            Ready to hit
            <br />
            the road?
          </h2>

          <p>
            Choose your perfect car and enjoy a smooth,
            comfortable journey wherever you're going.
          </p>

          <a href="#book" className="final-cta-btn">
            Book a Car
            <FiArrowRight />
          </a>

        </div>

        <div className="final-cta-car">

          <img
            src={car12}
            alt="Luxury car"
          />

        </div>

      </section>

    </main>
  );
};

export default About;