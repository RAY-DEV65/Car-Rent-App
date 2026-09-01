
import { useEffect, useRef, useState } from "react";

import "./BlogCategories.css";

const BlogCategories = ({
  activeCategory,
  onCategoryChange,
}) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Blog categories
  const categories = [
    "All",
    "Car Tips",
    "Travel",
    "Maintenance",
    "Driving",
    "News",
  ];

  // Reveal the section when it enters the viewport
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Stop observing after the animation has been triggered
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

  // Change the selected category
  const handleCategoryChange = (category) => {
    onCategoryChange(category);

    // Move the visitor to the article section
    // after selecting a category
    setTimeout(() => {
      const articles = document.getElementById("blog-articles");

      if (articles) {
        articles.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);
  };

  return (
    <section
      ref={sectionRef}
      className={`blog-categories-section ${
        isVisible ? "blog-categories-visible" : ""
      }`}
    >
      <div className="blog-categories-container">

        {/* =================================
            HEADING
        ================================= */}
        <div className="blog-categories-heading">
          <div className="blog-categories-heading-content">
            <span className="blog-categories-label">
              Browse Topics
            </span>

            <h2>
              Find something{" "}
              <span>worth reading.</span>
            </h2>
          </div>

          <p className="blog-categories-description">
            Explore useful stories, travel ideas,
            driving advice and car knowledge.
          </p>
        </div>

        {/* =================================
            CATEGORY BUTTONS
        ================================= */}
        <div className="blog-categories-list">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`blog-category-button ${
                activeCategory === category
                  ? "blog-category-button-active"
                  : ""
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogCategories;
