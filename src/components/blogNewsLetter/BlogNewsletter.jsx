import { useEffect, useRef, useState } from "react";
import {
  FiArrowRight,
  FiMail,
  FiCheck,
} from "react-icons/fi";
import "./BlogNewsletter.css";

const BlogNewsletter = () => {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  /*
   * Reveal the newsletter when it enters
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
   * Handle newsletter submission.
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
  };

  /*
   * Allow the user to submit another email.
   */
  const handleReset = () => {
    setSubmitted(false);
    setEmail("");
  };

  return (
    <section
      ref={sectionRef}
      className={`blog-newsletter-section ${
        isVisible ? "blog-newsletter-visible" : ""
      }`}
    >
      <div className="blog-newsletter-container">

        {/* Newsletter introduction */}
        <div className="blog-newsletter-content">
          <span className="blog-newsletter-label">
            Stay in the Loop
          </span>

          <h2>
            Stories worth
            <span> reading.</span>
          </h2>

          <p>
            Get useful car tips, travel ideas and
            fresh stories from our journal delivered
            straight to your inbox.
          </p>
        </div>

        {/* Newsletter form */}
        <div className="blog-newsletter-action">
          {!submitted ? (
            <>
              <form
                className="blog-newsletter-form"
                onSubmit={handleSubmit}
              >
                <div className="blog-newsletter-input">
                  <FiMail />

                  <input
                    type="email"
                    value={email}
                    placeholder="Enter your email address"
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    required
                    aria-label="Email address"
                  />
                </div>

                <button
                  type="submit"
                  className="blog-newsletter-button"
                >
                  Subscribe
                  <FiArrowRight />
                </button>
              </form>

              <span className="blog-newsletter-note">
                No spam. Just useful stories and updates.
              </span>
            </>
          ) : (
            <div className="blog-newsletter-success">
              <div className="blog-newsletter-success-icon">
                <FiCheck />
              </div>

              <div className="blog-newsletter-success-content">
                <strong>
                  You're on the list.
                </strong>

                <span>
                  Thanks for subscribing to our journal.
                </span>

                <button
                  type="button"
                  onClick={handleReset}
                >
                  Subscribe another email
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default BlogNewsletter;