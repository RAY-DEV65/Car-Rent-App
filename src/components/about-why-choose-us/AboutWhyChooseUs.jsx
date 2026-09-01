import {
  FiShield,
  FiClock,
  FiDollarSign,
  FiHeadphones,
  FiMapPin,
  FiCheckCircle,
} from "react-icons/fi";
import "./AboutWhyChooseUs.css";

const WhyChooseUs = () => {
  const benefits = [
    {
      number: "01",
      icon: <FiShield />,
      title: "Reliable Vehicles",
      description:
        "Every vehicle is carefully maintained and prepared before it reaches you.",
    },
    {
      number: "02",
      icon: <FiClock />,
      title: "Easy Booking",
      description:
        "Find and reserve your preferred vehicle without unnecessary steps.",
    },
    {
      number: "03",
      icon: <FiDollarSign />,
      title: "Fair Pricing",
      description:
        "Enjoy competitive rates with clear pricing and no unnecessary surprises.",
    },
    {
      number: "04",
      icon: <FiHeadphones />,
      title: "Customer Support",
      description:
        "Our team is ready to help whenever you need assistance with your rental.",
    },
    {
      number: "05",
      icon: <FiMapPin />,
      title: "Convenient Locations",
      description:
        "Access our vehicles from locations designed to make your journey easier.",
    },
    {
      number: "06",
      icon: <FiCheckCircle />,
      title: "Quality Service",
      description:
        "From booking to returning the car, we focus on making every step smooth.",
    },
  ];

  return (
    <section className="about-benefits-section" id="why-choose-us"d>
      {/* Decorative background elements */}
      <div className="about-benefits-orb about-benefits-orb-one"></div>
      <div className="about-benefits-orb about-benefits-orb-two"></div>

      <div className="about-benefits-container">

        {/* Section introduction */}
        <div className="about-benefits-intro">

          <span className="about-benefits-label">
            Why Choose Us
          </span>

          <h2 className="about-benefits-title">
            Everything you need
            <span>for a better ride.</span>
          </h2>

          <p className="about-benefits-description">
            Renting a car should feel simple from beginning to end. We focus
            on the details that make your experience comfortable, convenient,
            and dependable.
          </p>

          <div className="about-benefits-highlight">
            <span className="about-benefits-highlight-icon">
              <FiCheckCircle />
            </span>

            <div className="about-benefits-highlight-content">
              <strong>Built around you</strong>
              <span>
                A rental experience designed with your journey in mind.
              </span>
            </div>
          </div>

        </div>

        {/* Benefits grid */}
        <div className="about-benefits-grid">
          {benefits.map((benefit) => (
            <article
              className="about-benefits-card"
              key={benefit.number}
            >
              <div className="about-benefits-card-top">
                <span className="about-benefits-card-number">
                  {benefit.number}
                </span>

                <span className="about-benefits-card-icon">
                  {benefit.icon}
                </span>
              </div>

              <div className="about-benefits-card-content">
                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>
              </div>

              <span className="about-benefits-card-line"></span>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;