import { useEffect, useRef, useState } from "react";
import {
  FiArrowRight,
  FiBookOpen,
} from "react-icons/fi";

import "./BlogCTA.css";

const BlogCTA = () => {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] =
    useState(false);

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

    return () => observer.disconnect();
  }, []);

  /*
   * Scroll back to the article section.
   */
  const handleExploreArticles = () => {
    const articles =
      document.getElementById(
        "blog-articles"
      );

    if (articles) {
      articles.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`blog-cta-section ${
        isVisible
          ? "blog-cta-visible"
          : ""
      }`}
    >
      <div className="blog-cta-container">

        {/* =================================
            ICON
        ================================= */}

        <div className="blog-cta-icon">
          <FiBookOpen />
        </div>

        {/* =================================
            CONTENT
        ================================= */}

        <div className="blog-cta-content">

          <span className="blog-cta-label">
            Keep Exploring
          </span>

          <h2>
            There is always
            <span>more to discover.</span>
          </h2>

          <p>
            Keep exploring our journal for useful
            tips, travel ideas and stories about
            the road ahead.
          </p>

        </div>

        {/* =================================
            BUTTON
        ================================= */}

        <button
          type="button"
          className="blog-cta-button"
          onClick={handleExploreArticles}
        >
          Explore Articles

          <FiArrowRight />
        </button>

      </div>
    </section>
  );
};

export default BlogCTA;