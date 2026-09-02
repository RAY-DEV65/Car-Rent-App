import { useEffect, useRef, useState } from "react";
import {
  FiArrowRight,
  FiClock,
  FiX,
  FiSearch,
} from "react-icons/fi";

import car7 from "../../assets/car7.jpeg";
import car8 from "../../assets/car8.jpeg";
import blog2 from "../../assets/blog2.jpeg";
import blog3 from "../../assets/blog3.jpeg";
import blog4 from "../../assets/blog4.jpeg";
import blog5 from "../../assets/blog5.jpeg";
import blog6 from "../../assets/blog6.jpeg";
import blog7 from "../../assets/blog7.jpeg";
import blog8 from "../../assets/blog8.jpeg";
import blog9 from "../../assets/blog9.jpeg";
import blog10 from "../../assets/blog10.jpeg";
import blog11 from "../../assets/blog11.jpeg";
import blog12 from "../../assets/blog12.jpeg";
import blog13 from "../../assets/blog13.jpeg";

import "./BlogArticle.css";

const BlogArticles = ({
  activeCategory,
}) => {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] =
    useState(false);

  const [selectedArticle, setSelectedArticle] =
    useState(null);

  /*
   * Temporary blog article data.
   *
   * Later, these articles can come from
   * your backend or CMS.
   */
  const articles = [
    {
      id: 1,
      title:
        "How to choose the right rental car for your trip",
      category: "Car Tips",
      image: blog2,
      date: "September 1, 2026",
      readTime: "5 min read",
      excerpt:
        "Choosing a rental car is about more than appearance. Here are the things worth considering before you book.",
      content: `
Choosing a rental car should start with the journey you are planning.

Think about the number of passengers, the amount of luggage, the roads you will be using and how long you will be travelling.

A smaller car can be ideal for city trips, while an SUV may be a better choice for longer journeys or larger groups.

It is also worth checking the vehicle's fuel type, transmission, comfort and overall condition before making your decision.

The best rental car is not always the most expensive one. It is the vehicle that fits your journey comfortably and reliably.
      `,
    },

    {
      id: 2,
      title:
        "Planning a comfortable city-to-city journey",
      category: "Travel",
      image: blog3,
      date: "August 28, 2026",
      readTime: "5 min read",
      excerpt:
        "Good planning can turn a long drive between cities into a much more enjoyable experience.",
      content: `
City-to-city travel can be enjoyable when you plan around the journey instead of only the destination.

Choose a vehicle that gives passengers enough space, plan sensible rest stops and leave room in your schedule for unexpected delays.

It is also helpful to understand the roads you will be using and identify fuel stations along the way.

Comfortable travel is usually the result of simple preparation rather than complicated planning.
      `,
    },

    {
      id: 3,
      title:
        "Why regular car maintenance matters",
      category: "Maintenance",
      image: blog4,
      date: "August 24, 2026",
      readTime: "6 min read",
      excerpt:
        "Regular maintenance protects your vehicle, improves reliability and can help you avoid expensive repairs.",
      content: `
Regular maintenance is one of the simplest ways to keep a vehicle reliable.

Oil changes, tyre checks, brake inspections, battery checks and fluid checks should not be ignored.

Small maintenance problems can become much more expensive when they are left unresolved.

Whether you own a car or rent one regularly, understanding basic maintenance helps you make better decisions and spot problems early.
      `,
    },

    {
      id: 4,
      title:
        "5 things to check before starting a road trip",
      category: "Driving",
      image: blog5,
      date: "August 20, 2026",
      readTime: "4 min read",
      excerpt:
        "A few simple checks before you leave can help prevent avoidable problems during your journey.",
      content: `
Before starting a long road trip, take a few minutes to check the basics.

Inspect your tyres, fuel level, lights, brakes and windscreen. Make sure your documents and emergency items are also within reach.

It is equally important to plan your route and know where you can stop for fuel and rest.

A little preparation can make a long drive more comfortable and reduce unnecessary stress on the road.
      `,
    },

    {
      id: 5,
      title:
        "How to get better value from your car rental",
      category: "Car Tips",
      image: blog6,
      date: "August 17, 2026",
      readTime: "4 min read",
      excerpt:
        "A few smart decisions can help you get more value without choosing a vehicle that does not suit your needs.",
      content: `
Getting good value from a rental does not simply mean choosing the cheapest car.

Think about what you actually need from the vehicle and compare the rental period, vehicle size and expected fuel usage.

Booking the right vehicle for the journey can often be more valuable than choosing a cheaper option that is uncomfortable or impractical.

Always consider the whole trip rather than looking at the daily price alone.
      `,
    },

    {
      id: 6,
      title:
        "Keeping your rental car clean during your trip",
      category: "Maintenance",
      image: blog7,
      date: "August 13, 2026",
      readTime: "3 min read",
      excerpt:
        "Simple habits can keep a rental vehicle clean and comfortable throughout your journey.",
      content: `
Keeping a rental car clean does not require much effort.

Avoid eating messy foods inside the vehicle, dispose of rubbish regularly and clean up spills as soon as possible.

Keeping the interior tidy also makes returning the vehicle easier.

Treating a rental car carefully is part of being a responsible renter and helps keep the experience pleasant for everyone.
      `,
    },

    {
      id: 7,
      title:
        "The best way to prepare for a weekend getaway",
      category: "Travel",
      image: blog8,
      date: "August 10, 2026",
      readTime: "5 min read",
      excerpt:
        "A good weekend road trip starts with choosing the right vehicle and keeping your plans realistic.",
      content: `
Weekend getaways are easier when your travel plans leave room for flexibility.

Choose a vehicle that fits your passengers and luggage, plan your route and identify a few interesting stops along the way.

Avoid packing your schedule too tightly. The journey itself can be part of the experience.

With the right preparation, even a short weekend trip can feel refreshing and memorable.
      `,
    },

    {
      id: 8,
      title:
        "What makes an SUV a good family rental?",
      category: "Driving",
      image: blog9,
      date: "August 7, 2026",
      readTime: "4 min read",
      excerpt:
        "Space, visibility and comfort are some of the reasons families often prefer SUVs for longer journeys.",
      content: `
SUVs are often a practical choice for family travel because they provide useful passenger and luggage space.

Their higher driving position can also give drivers a clearer view of the road.

However, size is not everything. Consider fuel use, parking conditions and the kind of roads you will encounter.

The right SUV should give your family enough room without adding unnecessary cost to the journey.
      `,
    },

    {
      id: 9,
      title:
        "Understanding the warning lights on your dashboard",
      category: "News",
      image: blog10,
      date: "August 3, 2026",
      readTime: "6 min read",
      excerpt:
        "Dashboard warning lights can tell you a lot about what your vehicle needs. Here is what some common ones mean.",
      content: `
Dashboard warning lights are designed to alert drivers when a vehicle needs attention.

Some lights are simple reminders, while others can indicate problems that should be addressed quickly.

Never ignore an unfamiliar warning light. Check the vehicle manual or speak with a qualified professional when necessary.

Understanding the basics can help you react appropriately instead of guessing when something changes.
      `,
    },

    {
      id: 10,
      title:
        "Simple habits that make long drives easier",
      category: "Driving",
      image: blog11,
      date: "July 30, 2026",
      readTime: "4 min read",
      excerpt:
        "Comfortable seating, sensible breaks and a little preparation can make a big difference on long journeys.",
      content: `
Long drives are easier when you take care of yourself as well as the vehicle.

Adjust your seat and mirrors before leaving, stay hydrated and take regular breaks.

Avoid driving when you are extremely tired and give yourself enough time to reach your destination safely.

Small habits can make a significant difference over several hours behind the wheel.
      `,
    },

    {
      id: 11,
      title:
        "When should you choose a luxury rental?",
      category: "Car Tips",
      image: blog13,
      date: "July 26, 2026",
      readTime: "5 min read",
      excerpt:
        "Luxury rentals can make sense for special occasions, business travel and journeys where comfort matters most.",
      content: `
A luxury rental can be a practical choice when comfort, presentation or additional features are important.

Business trips, special events and longer journeys are common situations where travellers may prefer a premium vehicle.

Before booking, consider whether the extra cost provides something valuable for your particular journey.

The goal should always be to choose a vehicle that improves the experience rather than simply choosing the most expensive option.
      `,
    },

    {
      id: 12,
      title:
        "Road trip essentials every driver should carry",
      category: "News",
      image: blog12,
      date: "July 22, 2026",
      readTime: "4 min read",
      excerpt:
        "A few useful items can make an unexpected delay or minor road problem much easier to handle.",
      content: `
Every driver should think about the basics before setting out.

Useful items can include water, a phone charger, basic first-aid supplies and important vehicle documents.

For longer trips, it is also sensible to know where you can stop safely if a problem occurs.

Good preparation does not guarantee a trouble-free journey, but it can make unexpected situations much easier to manage.
      `,
    },
  ];

  /*
   * Filter articles according to the
   * selected category.
   */
  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter(
          (article) =>
            article.category ===
            activeCategory
        );

  /*
   * Reveal the article section when
   * it enters the viewport.
   */
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);

            observer.unobserve(section);
          }
        },
        {
          threshold: 0.1,
        }
      );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /*
   * Close the modal with the Escape key.
   */
  useEffect(() => {
    const handleEscape = (event) => {
      if (
        event.key === "Escape" &&
        selectedArticle
      ) {
        setSelectedArticle(null);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [selectedArticle]);

  /*
   * Prevent the background page from
   * scrolling while the article is open.
   */
  useEffect(() => {
    document.body.style.overflow =
      selectedArticle ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedArticle]);

  /*
   * Turn category names into CSS classes.
   */
  const getCategoryClass = (category) => {
    return `blog-article-${category
      .toLowerCase()
      .replace(/\s+/g, "-")}`;
  };

  return (
    <>
      <section
        id="blog-articles"
        ref={sectionRef}
        className={`blog-articles-section ${
          isVisible
            ? "blog-articles-visible"
            : ""
        }`}
      >
        <div className="blog-articles-container">

          {/* =================================
              HEADING
          ================================= */}

          <div className="blog-articles-heading">

            <div className="blog-articles-heading-main">

              <span className="blog-articles-label">
                Latest Stories
              </span>

              <h2>
                From our
                <span>journal.</span>
              </h2>

            </div>

            <p>
              Showing{" "}
              <strong>
                {filteredArticles.length}
              </strong>{" "}
              {filteredArticles.length === 1
                ? "article"
                : "articles"}
            </p>

          </div>

          {/* =================================
              ARTICLES
          ================================= */}

          {filteredArticles.length > 0 ? (
            <div className="blog-articles-grid">

              {filteredArticles.map(
                (article, index) => (
                  <article
                    key={article.id}
                    className={`blog-article-card ${getCategoryClass(
                      article.category
                    )}`}
                    style={{
                      "--blog-article-delay":
                        `${index * 0.08}s`,
                    }}
                  >

                    {/* =========================
                        IMAGE
                    ========================== */}

                    <div className="blog-article-image-wrap">

                      <img
                        src={article.image}
                        alt={article.title}
                        className="blog-article-image"
                      />

                      {/* Category span */}
                      <span className="blog-article-category">
                        {article.category}
                      </span>

                    </div>

                    {/* =========================
                        CONTENT
                    ========================== */}

                    <div className="blog-article-body">

                      <div className="blog-article-meta">

                        <span>
                          {article.date}
                        </span>

                        <span>
                          <FiClock />

                          {article.readTime}
                        </span>

                      </div>

                      <h3>
                        {article.title}
                      </h3>

                      <p>
                        {article.excerpt}
                      </p>

                      <button
                        type="button"
                        className="blog-article-read-button"
                        onClick={() =>
                          setSelectedArticle(
                            article
                          )
                        }
                      >
                        Read More

                        <FiArrowRight />
                      </button>

                    </div>

                  </article>
                )
              )}

            </div>
          ) : (

            /* =========================
               EMPTY STATE
            ========================== */

            <div className="blog-articles-empty">

              <div className="blog-articles-empty-icon">
                <FiSearch />
              </div>

              <h3>
                No articles found
              </h3>

              <p>
                There are currently no articles
                in this category.
              </p>

            </div>

          )}

        </div>
      </section>

      {/* =====================================
          ARTICLE MODAL
      ====================================== */}

      {selectedArticle && (
        <div
          className="blog-article-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="blog-modal-title"
          onMouseDown={(event) => {
            /*
             * Clicking the dark area outside
             * the article closes the modal.
             */
            if (
              event.target ===
              event.currentTarget
            ) {
              setSelectedArticle(null);
            }
          }}
        >

          <div className="blog-article-modal-content">

            {/* Close icon */}

            <button
              type="button"
              className="blog-article-modal-close"
              onClick={() =>
                setSelectedArticle(null)
              }
              aria-label="Close article"
            >
              <FiX />
            </button>

            {/* Article image */}

            <div className="blog-article-modal-image">

              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
              />

            </div>

            {/* Article content */}

            <div className="blog-article-modal-body">

              <div className="blog-article-modal-meta">

                <span>
                  {selectedArticle.category}
                </span>

                <span>
                  {selectedArticle.date}
                </span>

                <span>
                  {selectedArticle.readTime}
                </span>

              </div>

              <h2 id="blog-modal-title">
                {selectedArticle.title}
              </h2>

              <div className="blog-article-modal-divider"></div>

              <div className="blog-article-modal-text">

                {selectedArticle.content
                  .trim()
                  .split("\n\n")
                  .map(
                    (paragraph, index) => (
                      <p key={index}>
                        {paragraph.trim()}
                      </p>
                    )
                  )}

              </div>

              <button
                type="button"
                className="blog-article-modal-close-button"
                onClick={() =>
                  setSelectedArticle(null)
                }
              >
                Close Article
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default BlogArticles;