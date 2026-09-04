import React, { useState } from "react";

import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
  FiChevronDown,
  FiArrowRight,
} from "react-icons/fi";

import "./Contact.css";

const Contact = () => {
  // Stores all values entered into the contact form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Controls the loading/submitting state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Controls the small toast notification
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "",
  });

  // Stores which FAQ is currently open
  const [openFaq, setOpenFaq] = useState(null);

  // Your Web3Forms access key
  const WEB3FORMS_ACCESS_KEY =
    "239a8574-b933-4829-b0ac-6123c4f4d7d7";

  // ==========================================
  // HANDLE FORM INPUT CHANGES
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // ==========================================
  // SHOW TOAST MESSAGE
  // ==========================================

  const showToast = (message, type) => {
    setToast({
      show: true,
      message,
      type,
    });

    // Automatically hide the toast
    setTimeout(() => {
      setToast({
        show: false,
        message: "",
        type: "",
      });
    }, 4000);
  };

  // HANDLE CONTACT FORM SUBMISSION
const handleSubmit = async (e) => {
  e.preventDefault();

  if (isSubmitting) return;

  setIsSubmitting(true);

  showToast("Sending your message...", "sending");

  try {
    // Create FormData directly from the form
    const formDataToSend = new FormData(e.target);

    // Add the Web3Forms access key
    formDataToSend.append(
      "access_key",
      WEB3FORMS_ACCESS_KEY
    );

    // Send the form without manually setting Content-Type
    // The browser automatically sets the correct multipart boundary.
    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formDataToSend,
      }
    );

    const result = await response.json();

    console.log("Web3Forms response:", result);

    if (result.success) {
      showToast(
        "Message sent successfully!",
        "success"
      );

      // Clear the form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      showToast(
        result.message ||
          "Something went wrong. Please try again.",
        "error"
      );
    }
  } catch (error) {
    console.error(
      "Web3Forms submission error:",
      error
    );

    showToast(
      "Unable to send message. Please try again.",
      "error"
    );
  } finally {
    setIsSubmitting(false);
  }
};

  // ==========================================
  // FAQ DATA
  // ==========================================

  const faqItems = [
    {
      question: "How do I book a vehicle?",
      answer:
        "Choose your preferred vehicle, select your pickup and return details, then complete the booking form. Our team will confirm your reservation.",
    },

    {
      question:
        "What documents do I need to rent a car?",
      answer:
        "You will generally need a valid driver's licence and a valid means of identification. Additional requirements may apply depending on the vehicle.",
    },

    {
      question:
        "Can I cancel or change my booking?",
      answer:
        "Yes. Contact our team as soon as possible if you need to change or cancel your reservation. Cancellation terms may vary depending on your booking.",
    },

    {
      question: "Do you offer long-term rentals?",
      answer:
        "Yes. We offer rental options for customers who need a vehicle for an extended period. Contact us to discuss the best option for your journey.",
    },

    {
      question:
        "Where can I pick up my vehicle?",
      answer:
        "Pickup options depend on the locations currently served by our rental service. Contact us if you have a specific pickup location in mind.",
    },

    {
      question:
        "How quickly will you respond?",
      answer:
        "Our team normally responds to enquiries within one business day.",
    },
  ];

  // ==========================================
  // TOGGLE FAQ
  // ==========================================

  const toggleFaq = (index) => {
    setOpenFaq(
      openFaq === index ? null : index
    );
  };

  return (
    <main className="contact-page">

      {/* =====================================
          SMALL TOAST NOTIFICATION
      ====================================== */}

      <div
        className={`contact-toast ${
          toast.show ? "show" : ""
        } ${toast.type}`}
      >
        <span className="toast-dot"></span>

        <span className="toast-message">
          {toast.message}
        </span>
      </div>

      {/* =====================================
          HERO
      ====================================== */}

      <section className="contact-hero">

        {/* Animated background grid */}
        <div className="hero-grid"></div>

        {/* Background glowing elements */}
        <div className="hero-glow hero-glow-one"></div>

        <div className="hero-glow hero-glow-two"></div>

        <div className="hero-circle"></div>

        <div className="contact-hero-content">

          <div className="hero-badge">
            <span></span>
            WE'RE HERE TO HELP
          </div>

          <p className="section-label">
            CONTACT US
          </p>

          <h1>
            Let's talk about
            <br />
            <span>your journey.</span>
          </h1>

          <p className="hero-description">
            Have a question, need help choosing a
            vehicle, or ready to start your journey?
            Our team is here to help you every step
            of the way.
          </p>

          <div className="hero-scroll">
            <span className="scroll-line"></span>

            <span>
              Scroll to explore
            </span>
          </div>

        </div>

      </section>

      {/* =====================================
          CONTACT INFORMATION
      ====================================== */}

      <section className="contact-intro">

        <div className="contact-container">

          <div className="contact-intro-heading">

            <p className="section-label">
              GET IN TOUCH
            </p>

            <h2>
              We're only a
              <span> message away.</span>
            </h2>

            <p>
              Whether you're planning a weekend
              getaway, a business trip, or need a
              vehicle for longer, we're ready to
              assist.
            </p>

          </div>

          <div className="contact-info-grid">

            {/* Phone card */}
            <div className="contact-info-card">

              <div className="contact-icon">
                <FiPhone />
              </div>

              <div className="contact-info-content">

                <span>
                  CALL US
                </span>

                <h3>
                  +234 800 000 0000
                </h3>

                <p>
                  Speak directly with our team.
                </p>

              </div>

              <FiArrowRight
                className="info-arrow"
              />

            </div>

            {/* Email card */}
            <div className="contact-info-card">

              <div className="contact-icon">
                <FiMail />
              </div>

              <div className="contact-info-content">

                <span>
                  EMAIL US
                </span>

                <h3>
                  hello@yourrental.com
                </h3>

                <p>
                  Send us your questions anytime.
                </p>

              </div>

              <FiArrowRight
                className="info-arrow"
              />

            </div>

            {/* Location card */}
            <div className="contact-info-card">

              <div className="contact-icon">
                <FiMapPin />
              </div>

              <div className="contact-info-content">

                <span>
                  VISIT US
                </span>

                <h3>
                  Lagos, Nigeria
                </h3>

                <p>
                  Come and speak with us.
                </p>

              </div>

              <FiArrowRight
                className="info-arrow"
              />

            </div>

            {/* Opening hours card */}
            <div className="contact-info-card">

              <div className="contact-icon">
                <FiClock />
              </div>

              <div className="contact-info-content">

                <span>
                  OPENING HOURS
                </span>

                <h3>
                  Mon - Sat
                </h3>

                <p>
                  8:00 AM - 7:00 PM
                </p>

              </div>

              <FiArrowRight
                className="info-arrow"
              />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================
          MESSAGE SECTION
      ====================================== */}

      <section className="contact-message-section">

        <div className="contact-container contact-message-grid">

          {/* Left content */}
          <div className="contact-message-content">

            <p className="section-label">
              SEND A MESSAGE
            </p>

            <h2>
              Tell us
              <span> what's on your mind.</span>
            </h2>

            <p className="message-description">
              Fill out the form and our team will
              get back to you as soon as possible.
            </p>

            <div className="message-points">

              <div className="message-point">

                <span>
                  01
                </span>

                <div>

                  <h4>
                    Quick response
                  </h4>

                  <p>
                    We aim to respond to enquiries
                    within one business day.
                  </p>

                </div>

              </div>

              <div className="message-point">

                <span>
                  02
                </span>

                <div>

                  <h4>
                    Personal assistance
                  </h4>

                  <p>
                    Get help from a real member of
                    our rental team.
                  </p>

                </div>

              </div>

              <div className="message-point">

                <span>
                  03
                </span>

                <div>

                  <h4>
                    Easy communication
                  </h4>

                  <p>
                    Ask anything about our vehicles,
                    bookings or services.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* =================================
              CONTACT FORM
          ================================== */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* Name and email */}
            <div className="form-row">

              <div className="form-group">

                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            {/* Phone and subject */}
            <div className="form-row">

              <div className="form-group">

                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+234 800 000 0000"
                  value={formData.phone}
                  onChange={handleChange}
                />

              </div>

              <div className="form-group">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            {/* Message */}
            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="7"
                placeholder="Tell us how we can help..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

            </div>

            {/* =================================
                SEND BUTTON
            ================================== */}

            <button
              type="submit"
              className={`contact-submit-btn ${
                isSubmitting ? "sending" : ""
              }`}
              disabled={isSubmitting}
            >

              {isSubmitting ? (
                <>
                  {/* Plane animation container */}
                  <span className="plane-stage">

                    <FiSend className="send-plane" />

                  </span>

                  <span className="sending-text">
                    Sending...
                  </span>
                </>
              ) : (
                <>
                  <span>
                    Send Message
                  </span>

                  <FiSend
                    className="normal-send-icon"
                  />
                </>
              )}

            </button>

          </form>

        </div>

      </section>

      {/* =====================================
          FAQ SECTION
      ====================================== */}

      <section className="contact-faq">

        <div className="contact-container">

          <div className="faq-heading">

            <p className="section-label">
              FREQUENTLY ASKED QUESTIONS
            </p>

            <h2>
              Questions?
              <span> We've got answers.</span>
            </h2>

            <p>
              Here are some of the questions our
              customers ask most often.
            </p>

          </div>

          <div className="faq-list">

            {faqItems.map((item, index) => (

              <div
                className={`faq-item ${
                  openFaq === index
                    ? "active"
                    : ""
                }`}
                key={index}
              >

                <button
                  type="button"
                  className="faq-question"
                  onClick={() =>
                    toggleFaq(index)
                  }
                >

                  <span>
                    {item.question}
                  </span>

                  <span className="faq-icon">
                    <FiChevronDown />
                  </span>

                </button>

                <div className="faq-answer">

                  <p>
                    {item.answer}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================
          LOCATION
      ====================================== */}

      <section className="contact-location">

        <div className="contact-container">

          <div className="location-box">

            <div className="map-grid"></div>

            <div className="map-pulse"></div>

            <div className="map-pin">
              <FiMapPin />
            </div>

            <div className="map-label">

              <span>
                OUR LOCATION
              </span>

              <strong>
                Lagos, Nigeria
              </strong>

            </div>

            <div className="location-content">

              <p className="section-label">
                FIND US
              </p>

              <h2>
                Ready when
                <span> you are.</span>
              </h2>

              <p>
                Visit our location and let us
                help you find the perfect vehicle
                for your journey.
              </p>

              <button
                type="button"
                className="location-button"
              >
                Get Directions
                <FiArrowRight />
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================
          FINAL CTA
      ====================================== */}

      <section className="contact-final-cta">

        <div className="cta-circle"></div>

        <div className="contact-container">

          <div className="cta-content">

            <span>
              YOUR JOURNEY STARTS HERE
            </span>

            <h2>
              Let's get you moving.
            </h2>

            <p>
              Find your perfect vehicle and start
              your next adventure today.
            </p>

            <a
              href="/car"
              className="cta-button"
            >
              Explore Vehicles

              <FiArrowRight />

            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Contact;