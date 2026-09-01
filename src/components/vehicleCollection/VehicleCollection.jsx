import { useEffect, useRef, useState } from "react";

import {
  FiArrowRight,
  FiStar,
  FiUsers,
  FiSettings,
  FiMapPin,
  FiHeart,
  FiChevronLeft,
  FiChevronRight,
  FiSearch,
} from "react-icons/fi";

import { FaGasPump } from "react-icons/fa";

import car7 from "../../assets/car7.jpeg";
import car8 from "../../assets/car8.jpeg";

import "./VehicleCollection.css";

const VehicleCollection = ({ searchData = {} }) => {
  const collectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const [activeCategory, setActiveCategory] =
    useState("All Cars");

  const [currentPage, setCurrentPage] =
    useState(1);

  /*
   * Temporary vehicle database.
   *
   * We currently have 18 vehicles so that
   * pagination can be tested properly.
   */
  const vehicles = [
    {
      id: 1,
      name: "Toyota Highlander",
      category: "SUV",
      image: car7,
      location: "Ibadan, Oyo",
      price: 65000,
      rating: 4.9,
      reviews: 24,
      transmission: "Automatic",
      seats: "7 Seats",
      fuel: "Petrol",
      available: true,
    },

    {
      id: 2,
      name: "Range Rover Evoque",
      category: "Luxury",
      image: car8,
      location: "Lagos, Nigeria",
      price: 120000,
      rating: 4.8,
      reviews: 18,
      transmission: "Automatic",
      seats: "5 Seats",
      fuel: "Petrol",
      available: true,
    },

    {
      id: 3,
      name: "Toyota RAV4",
      category: "SUV",
      image: car7,
      location: "Abuja, Nigeria",
      price: 55000,
      rating: 4.8,
      reviews: 31,
      transmission: "Automatic",
      seats: "5 Seats",
      fuel: "Petrol",
      available: true,
    },

    {
      id: 4,
      name: "Toyota Corolla",
      category: "Economy",
      image: car8,
      location: "Ibadan, Oyo",
      price: 40000,
      rating: 4.7,
      reviews: 42,
      transmission: "Automatic",
      seats: "5 Seats",
      fuel: "Petrol",
      available: true,
    },

    {
      id: 5,
      name: "Lexus RX 350",
      category: "Luxury",
      image: car7,
      location: "Lagos, Nigeria",
      price: 95000,
      rating: 4.9,
      reviews: 27,
      transmission: "Automatic",
      seats: "5 Seats",
      fuel: "Petrol",
      available: true,
    },

    {
      id: 6,
      name: "Honda Civic",
      category: "Economy",
      image: car8,
      location: "Port Harcourt, Rivers",
      price: 38000,
      rating: 4.7,
      reviews: 36,
      transmission: "Automatic",
      seats: "5 Seats",
      fuel: "Petrol",
      available: true,
    },

    {
      id: 7,
      name: "Mercedes-Benz GLE",
      category: "Luxury",
      image: car7,
      location: "Lagos, Nigeria",
      price: 135000,
      rating: 4.9,
      reviews: 16,
      transmission: "Automatic",
      seats: "5 Seats",
      fuel: "Petrol",
      available: true,
    },

    {
      id: 8,
      name: "Hyundai Tucson",
      category: "SUV",
      image: car8,
      location: "Ibadan, Oyo",
      price: 58000,
      rating: 4.8,
      reviews: 22,
      transmission: "Automatic",
      seats: "5 Seats",
      fuel: "Petrol",
      available: true,
    },

    {
      id: 9,
      name: "Kia Sportage",
      category: "SUV",
      image: car7,
      location: "Abuja, Nigeria",
      price: 60000,
      rating: 4.7,
      reviews: 19,
      transmission: "Automatic",
      seats: "5 Seats",
      fuel: "Petrol",
      available: true,
    },

    {
      id: 10,
      name: "Honda Accord",
      category: "Economy",
      image: car8,
      location: "Lagos, Nigeria",
      price: 45000,
      rating: 4.8,
      reviews: 38,
      transmission: "Automatic",
      seats: "5 Seats",
      fuel: "Petrol",
      available: true,
    },

    {
      id: 11,
      name: "Toyota Camry",
      category: "Economy",
      image: car7,
      location: "Ibadan, Oyo",
      price: 48000,
      rating: 4.8,
      reviews: 44,
      transmission: "Automatic",
      seats: "5 Seats",
      fuel: "Petrol",
      available: true,
    },

    {
      id: 12,
      name: "BMW X5",
      category: "Luxury",
      image: car8,
      location: "Abuja, Nigeria",
      price: 140000,
      rating: 4.9,
      reviews: 15,
      transmission: "Automatic",
      seats: "5 Seats",
      fuel: "Petrol",
      available: true,
    },

    {
      id: 13,
      name: "Ford Explorer",
      category: "SUV",
      image: car7,
      location: "Port Harcourt, Rivers",
      price: 75000,
      rating: 4.8,
      reviews: 21,
      transmission: "Automatic",
      seats: "7 Seats",
      fuel: "Petrol",
      available: true,
    },

    {
      id: 14,
      name: "Hyundai Elantra",
      category: "Economy",
      image: car8,
      location: "Ibadan, Oyo",
      price: 35000,
      rating: 4.6,
      reviews: 29,
      transmission: "Automatic",
      seats: "5 Seats",
      fuel: "Petrol",
      available: true,
    },

    {
      id: 15,
      name: "Mercedes-Benz C-Class",
      category: "Luxury",
      image: car7,
      location: "Lagos, Nigeria",
      price: 110000,
      rating: 4.9,
      reviews: 20,
      transmission: "Automatic",
      seats: "5 Seats",
      fuel: "Petrol",
      available: true,
    },

    {
      id: 16,
      name: "Nissan X-Trail",
      category: "SUV",
      image: car8,
      location: "Abuja, Nigeria",
      price: 57000,
      rating: 4.7,
      reviews: 17,
      transmission: "Automatic",
      seats: "5 Seats",
      fuel: "Petrol",
      available: true,
    },

    {
      id: 17,
      name: "Toyota Yaris",
      category: "Economy",
      image: car7,
      location: "Ibadan, Oyo",
      price: 32000,
      rating: 4.6,
      reviews: 25,
      transmission: "Automatic",
      seats: "5 Seats",
      fuel: "Petrol",
      available: true,
    },

    {
      id: 18,
      name: "Audi Q7",
      category: "Luxury",
      image: car8,
      location: "Lagos, Nigeria",
      price: 145000,
      rating: 4.9,
      reviews: 13,
      transmission: "Automatic",
      seats: "7 Seats",
      fuel: "Petrol",
      available: true,
    },
  ];

  /*
   * Available categories.
   */
  const categories = [
    "All Cars",
    "SUV",
    "Economy",
    "Luxury",
  ];

  /*
   * Safely prepare search values.
   */
  const searchLocation =
    searchData.location
      ?.toLowerCase()
      .trim() || "";

  const searchVehicle =
    searchData.vehicle
      ?.toLowerCase()
      .trim() || "";

  const searchCategory =
    searchData.category
      ?.toLowerCase()
      .trim() || "";

  const searchSeats =
    searchData.seats
      ?.toLowerCase()
      .trim() || "";

  /*
   * Check whether the user actually
   * entered something into the search.
   */
  const hasSearch =
    Boolean(searchLocation) ||
    Boolean(searchVehicle) ||
    Boolean(searchCategory) ||
    Boolean(searchSeats);

  /*
   * Filter the vehicles.
   *
   * There are TWO filtering systems:
   *
   * 1. Category buttons
   * 2. Search form
   *
   * The search form uses OR logic.
   */
  const filteredVehicles = vehicles.filter(
    (vehicle) => {
      /*
       * Category button.
       *
       * Clicking SUV should show only SUVs.
       */
      const matchesActiveCategory =
        activeCategory === "All Cars" ||
        vehicle.category === activeCategory;

      if (!matchesActiveCategory) {
        return false;
      }

      /*
       * No search = show all cars in
       * the selected category.
       */
      if (!hasSearch) {
        return true;
      }

      /*
       * Convert vehicle values to lowercase.
       */
      const vehicleName =
        vehicle.name.toLowerCase();

      const vehicleLocation =
        vehicle.location.toLowerCase();

      const vehicleCategory =
        vehicle.category.toLowerCase();

      const vehicleSeats =
        vehicle.seats.toLowerCase();

      /*
       * Check each search field.
       */
      const matchesLocation =
        Boolean(searchLocation) &&
        vehicleLocation.includes(
          searchLocation
        );

      const matchesVehicle =
        Boolean(searchVehicle) &&
        vehicleName.includes(
          searchVehicle
        );

      const matchesSearchCategory =
        Boolean(searchCategory) &&
        vehicleCategory.includes(
          searchCategory
        );

      const matchesSeats =
        Boolean(searchSeats) &&
        vehicleSeats.includes(
          searchSeats
        );

      /*
       * OR LOGIC:
       *
       * The vehicle only needs to match
       * one of the filled fields.
       */
      return (
        matchesLocation ||
        matchesVehicle ||
        matchesSearchCategory ||
        matchesSeats
      );
    }
  );

  /*
   * Six vehicles per page.
   */
  const vehiclesPerPage = 6;

  const totalPages = Math.ceil(
    filteredVehicles.length /
      vehiclesPerPage
  );

  /*
   * Reset pagination when the search or
   * category changes.
   */
  useEffect(() => {
    setCurrentPage(1);
  }, [
    searchLocation,
    searchVehicle,
    searchCategory,
    searchSeats,
    activeCategory,
  ]);

  /*
   * Calculate which six vehicles should
   * currently be displayed.
   */
  const startIndex =
    (currentPage - 1) *
    vehiclesPerPage;

  const visibleVehicles =
    filteredVehicles.slice(
      startIndex,
      startIndex + vehiclesPerPage
    );

  /*
   * Reveal the section when it enters
   * the viewport.
   */
  useEffect(() => {
    const section =
      collectionRef.current;

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

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * Category selection.
   */
  const handleCategoryChange = (
    category
  ) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  /*
   * Pagination.
   */
  const handlePageChange = (page) => {
    setCurrentPage(page);

    setTimeout(() => {
      collectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  /*
   * Temporary booking handler.
   */
  const handleBooking = (vehicle) => {
    console.log(
      "Selected vehicle:",
      vehicle
    );
  };

  /*
   * Format Nigerian currency.
   */
  const formatPrice = (price) => {
    return `₦${price.toLocaleString()}`;
  };

  /*
   * Reset everything.
   */
  const handleReset = () => {
    setActiveCategory("All Cars");
    setCurrentPage(1);
  };

  return (
    <section
      id="vehicle-categories"
      ref={collectionRef}
      className={`vehicle-collection-section ${
        isVisible
          ? "vehicle-collection-visible"
          : ""
      }`}
    >

      <div className="vehicle-collection-container">

        {/* =================================
            HEADER
        ================================= */}

        <div className="vehicle-collection-header">

          <div className="vehicle-collection-header-content">

            <span className="vehicle-collection-eyebrow">
              Explore Our Fleet
            </span>

            <h2>
              Find your
              <span>perfect ride.</span>
            </h2>

            <p>
              Browse our collection of reliable,
              comfortable and stylish vehicles
              for every journey.
            </p>

          </div>

          <div className="vehicle-collection-total">

            <strong>
              {filteredVehicles.length}
            </strong>

            <span>
              Matching Vehicles
            </span>

          </div>

        </div>

        {/* =================================
            CATEGORY BUTTONS
        ================================= */}

        <div className="vehicle-collection-category-bar">

          <div className="vehicle-collection-category-list">

            {categories.map(
              (category) => (
                <button
                  key={category}
                  type="button"
                  className={`vehicle-collection-category-button ${
                    activeCategory ===
                    category
                      ? "vehicle-collection-category-active"
                      : ""
                  }`}
                  onClick={() =>
                    handleCategoryChange(
                      category
                    )
                  }
                >
                  {category}
                </button>
              )
            )}

          </div>

          <span className="vehicle-collection-count">

            {filteredVehicles.length}{" "}
            {filteredVehicles.length === 1
              ? "vehicle"
              : "vehicles"}

          </span>

        </div>

        {/* =================================
            VEHICLE GRID
        ================================= */}

        {visibleVehicles.length > 0 ? (

          <div className="vehicle-collection-grid">

            {visibleVehicles.map(
              (vehicle, index) => (

                <article
                  key={vehicle.id}
                  className="vehicle-collection-card"
                  style={{
                    "--vehicle-card-delay":
                      `${index * 0.08}s`,
                  }}
                >

                  {/* IMAGE */}

                  <div className="vehicle-collection-image-wrapper">

                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="vehicle-collection-image"
                    />

                    {/* Availability */}

                    {vehicle.available && (
                      <span className="vehicle-collection-availability">

                        <span className="vehicle-collection-availability-dot"></span>

                        Available

                      </span>
                    )}

                    {/* Category */}

                    <span
                      className={`vehicle-collection-image-category vehicle-category-${vehicle.category.toLowerCase()}`}
                    >
                      {vehicle.category}
                    </span>

                    {/* Favourite */}

                    <button
                      type="button"
                      className="vehicle-collection-favourite"
                      aria-label={`Add ${vehicle.name} to favourites`}
                    >
                      <FiHeart />
                    </button>

                  </div>

                  {/* CARD BODY */}

                  <div className="vehicle-collection-card-body">

                    {/* TITLE */}

                    <div className="vehicle-collection-title-row">

                      <div className="vehicle-collection-title-information">

                        <h3>
                          {vehicle.name}
                        </h3>

                        {/* LOCATION */}

                        <div className="vehicle-collection-location">

                          <FiMapPin />

                          <span>
                            {vehicle.location}
                          </span>

                        </div>

                      </div>

                      {/* RATING */}

                      <div className="vehicle-collection-rating">

                        <FiStar />

                        <span>
                          {vehicle.rating}
                        </span>

                        <small>
                          ({vehicle.reviews})
                        </small>

                      </div>

                    </div>

                    {/* SPECIFICATIONS */}

                    <div className="vehicle-collection-specs">

                      <div className="vehicle-collection-spec">

                        <FiSettings />

                        <span>
                          {vehicle.transmission}
                        </span>

                      </div>

                      <div className="vehicle-collection-spec">

                        <FiUsers />

                        <span>
                          {vehicle.seats}
                        </span>

                      </div>

                      <div className="vehicle-collection-spec">

                        <FaGasPump />

                        <span>
                          {vehicle.fuel}
                        </span>

                      </div>

                    </div>

                    {/* PRICE + BOOKING */}

                    <div className="vehicle-collection-bottom">

                      <div className="vehicle-collection-price">

                        <strong>
                          {formatPrice(
                            vehicle.price
                          )}
                        </strong>

                        <span>
                          / day
                        </span>

                      </div>

                      <button
                        type="button"
                        className="vehicle-collection-book-button"
                        onClick={() =>
                          handleBooking(
                            vehicle
                          )
                        }
                      >
                        Book Now

                        <FiArrowRight />

                      </button>

                    </div>

                  </div>

                </article>

              )
            )}

          </div>

        ) : (

          /* =================================
             NO RESULTS
          ================================= */

          <div className="vehicle-collection-empty">

            <div className="vehicle-collection-empty-icon">
              <FiSearch />
            </div>

            <h3>
              No vehicles found
            </h3>

            <p>
              We couldn't find a vehicle
              matching your search. Try
              another location, vehicle,
              category or seat option.
            </p>

            <button
              type="button"
              onClick={handleReset}
            >
              View All Vehicles
            </button>

          </div>

        )}

        {/* =================================
            PAGINATION
        ================================= */}

        {totalPages > 1 && (

          <div className="vehicle-collection-pagination">

            <button
              type="button"
              className="vehicle-collection-page-arrow"
              disabled={
                currentPage === 1
              }
              onClick={() =>
                handlePageChange(
                  currentPage - 1
                )
              }
              aria-label="Previous page"
            >
              <FiChevronLeft />
            </button>

            <div className="vehicle-collection-page-numbers">

              {Array.from(
                {
                  length: totalPages,
                },
                (_, index) => (

                  <button
                    key={index + 1}
                    type="button"
                    className={`vehicle-collection-page-number ${
                      currentPage ===
                      index + 1
                        ? "vehicle-collection-page-active"
                        : ""
                    }`}
                    onClick={() =>
                      handlePageChange(
                        index + 1
                      )
                    }
                  >
                    {index + 1}
                  </button>

                )
              )}

            </div>

            <button
              type="button"
              className="vehicle-collection-page-arrow"
              disabled={
                currentPage ===
                totalPages
              }
              onClick={() =>
                handlePageChange(
                  currentPage + 1
                )
              }
              aria-label="Next page"
            >
              <FiChevronRight />
            </button>

          </div>

        )}

        {/* PAGINATION INFORMATION */}

        {filteredVehicles.length > 0 && (

          <div className="vehicle-collection-pagination-info">

            Showing{" "}
            <strong>
              {startIndex + 1}
            </strong>{" "}
            -{" "}
            <strong>
              {Math.min(
                startIndex +
                  vehiclesPerPage,
                filteredVehicles.length
              )}
            </strong>{" "}
            of{" "}
            <strong>
              {filteredVehicles.length}
            </strong>{" "}
            vehicles

          </div>

        )}

      </div>

    </section>
  );
};

export default VehicleCollection;