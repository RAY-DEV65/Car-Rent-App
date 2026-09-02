import { useEffect, useRef, useState } from "react";
import {
  FiArrowRight,
  FiClock,
} from "react-icons/fi";

import car7 from "../../assets/hero3.jpeg";

import "./BlogHero.css";

const BlogHero = () => {
  const heroRef = useRef(null);

  const [isVisible, setIsVisible] =
    useState(false);

  /*
   * Reveal the hero when it enters the viewport.
   */
  useEffect(() => {
    const section = heroRef.current;

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
   * Scroll to the articles section.
   */
  const handleExploreArticles = () => {
    const articles = document.getElementById(
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
      ref={heroRef}
      className={`blog-hero ${
        isVisible ? "blog-hero-visible" : ""
      }`}
    >
      <div className="blog-hero-container">

        {/* =================================
            LEFT CONTENT
        ================================= */}

        <div className="blog-hero-content">

          <span className="blog-hero-label">
            Our Blog
          </span>

          <h1>
            Helpful stories for
            <span>every journey.</span>
          </h1>

          <p>
            Get useful driving tips, travel ideas,
            car guides and practical advice to help
            you get more from every journey.
          </p>

          <button
            type="button"
            className="blog-hero-button"
            onClick={handleExploreArticles}
          >
            Explore Articles

            <FiArrowRight />
          </button>

        </div>

        {/* =================================
            FEATURED ARTICLE
        ================================= */}

        <article className="blog-hero-featured">

          <div className="blog-hero-image-wrap">

            <img
              src={car7}
              alt="Car on the road"
              className="blog-hero-image"
            />

          </div>

          <div className="blog-hero-featured-content">

            <div className="blog-hero-meta">

              <span>
                Featured
              </span>

              <span>
                <FiClock />
                5 min read
              </span>

            </div>

            <h2>
              How to choose the right
              rental car for your trip
            </h2>

            <p>
              A few simple things to consider before
              choosing a car for your next journey.
            </p>

            <button
              type="button"
              className="blog-hero-read-button"
              onClick={handleExploreArticles}
            >
              Read Article

              <FiArrowRight />
            </button>

          </div>

        </article>

      </div>
    </section>
  );
};

export default BlogHero;