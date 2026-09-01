import "./CustomerReview.css";
import car1 from "../../assets/car.jpeg";
import { useEffect, useRef, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "David Johnson",
    location: "Lagos, Nigeria",
    image: car1,
    rating: 5,
    review:
      "The whole experience was smooth from start to finish. The car was clean, comfortable, and exactly what I booked.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    location: "Ibadan, Nigeria",
    image: car1,
    rating: 5,
    review:
      "I was impressed with how easy it was to find and book a car. The service was excellent and the car was in great condition.",
  },
  {
    id: 3,
    name: "Michael Adams",
    location: "Abuja, Nigeria",
    image: car1,
    rating: 4,
    review:
      "Great service and very friendly staff. I will definitely use this platform again whenever I need a rental car.",
  },
  {
    id: 4,
    name: "John Williams",
    location: "Port Harcourt, Nigeria",
    image: car1,
    rating: 5,
    review:
      "Booking a car was incredibly easy. Everything was straightforward and the customer service was excellent.",
  },
  {
    id: 5,
    name: "Mary Johnson",
    location: "Oyo, Nigeria",
    image: car1,
    rating: 4,
    review:
      "I had a wonderful experience. The car was clean and delivered on time. I would definitely recommend this service.",
  },
  {
    id: 6,
    name: "James Anderson",
    location: "Enugu, Nigeria",
    image: car1,
    rating: 5,
    review:
      "The booking process was simple and the vehicle was exactly as described. I had a great experience.",
  },
  {
    id: 7,
    name: "Grace Williams",
    location: "Benin City, Nigeria",
    image: car1,
    rating: 4,
    review:
      "Everything went smoothly. The staff were helpful and the car was comfortable throughout my trip.",
  },
];

const CustomerReview = () => {
  const [current, setCurrent] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [slideWidth, setSlideWidth] = useState(0);


  const [show, setShow] = useState(false)
    const customerRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    setShow(true);
                    observer.disconnect();
                }
            },
             { threshold: 0.2}
        );

        if(customerRef.current){
            observer.observe(customerRef.current);
        }
    }, [])

  const windowRef = useRef(null);

  const GAP = 20;

  // Determine number of visible cards
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth <= 600) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 900) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateCards();

    window.addEventListener("resize", updateCards);

    return () => {
      window.removeEventListener("resize", updateCards);
    };
  }, []);

  // Calculate exact card + gap width
  useEffect(() => {
    const calculateSlideWidth = () => {
      if (!windowRef.current) return;

      const containerWidth = windowRef.current.clientWidth;

      const cardWidth =
        (containerWidth - GAP * (visibleCards - 1)) /
        visibleCards;

      setSlideWidth(cardWidth + GAP);
    };

    calculateSlideWidth();

    window.addEventListener("resize", calculateSlideWidth);

    return () => {
      window.removeEventListener("resize", calculateSlideWidth);
    };
  }, [visibleCards]);

  // Calculate maximum slide
  const maxSlide = Math.max(
    reviews.length - visibleCards,
    0
  );

  // Keep current slide valid when screen size changes
  useEffect(() => {
    if (current > maxSlide) {
      setCurrent(maxSlide);
    }
  }, [current, maxSlide]);

  const nextReview = () => {
    setCurrent((prev) =>
      prev >= maxSlide ? 0 : prev + 1
    );
  };

  const previousReview = () => {
    setCurrent((prev) =>
      prev <= 0 ? maxSlide : prev - 1
    );
  };

  const totalSlides = maxSlide + 1;

  return (
    <div  ref={customerRef} className={`customer-reviews ${show ? "show" : ""}`}>
      <div className="reviews-wrapper">

        {/* Previous Button */}
        <button
          className="review-arrow"
          onClick={previousReview}
          aria-label="Previous review"
        >
          <FaChevronLeft />
        </button>

        {/* Slider Window */}
        <div
          className="reviews-window"
          ref={windowRef}
        >
          <div
            className="review-track"
            style={{
              transform: `translateX(-${
                current * slideWidth
              }px)`,
            }}
          >
            {reviews.map((review) => (
              <div
                className="review-card"
                key={review.id}
              >
                <div className="customer-info">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="customer-image"
                  />

                  <div>
                    <h3>{review.name}</h3>
                    <p>{review.location}</p>
                  </div>
                </div>

                <div className="rating">
                  {[...Array(review.rating)].map(
                    (_, index) => (
                      <FaStar key={index} />
                    )
                  )}
                </div>

                <p className="customer-review">
                  "{review.review}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          className="review-arrow"
          onClick={nextReview}
          aria-label="Next review"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="review-dots">
        {Array.from({ length: totalSlides }).map(
          (_, index) => (
            <button
              key={index}
              className={`dot ${
                current === index ? "active" : ""
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Show reviews ${index + 1}`}
            />
          )
        )}
      </div>
    </div>
  );
};

export default CustomerReview;
