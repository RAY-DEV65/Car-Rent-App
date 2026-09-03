import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { vehicles } from "../../data";

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
import "./VehicleCollection.css";

const VehicleCollection = ({ searchData = {} }) => {
  const collectionRef = useRef(null);
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Cars");
  const [currentPage, setCurrentPage] = useState(1);

  /*
   * Get all vehicle categories automatically
   * from the shared vehicle data.
   */
  const categories = [
    "All Cars",
    ...new Set(vehicles.map((vehicle) => vehicle.category)),
  ];

  /*
   * Safely prepare search values.
   */
  const searchLocation =
    searchData.location?.toLowerCase().trim() || "";

  const searchVehicle =
    searchData.vehicle?.toLowerCase().trim() || "";

  const searchCategory =
    searchData.category?.toLowerCase().trim() || "";

  const searchSeats =
    searchData.seats?.toLowerCase().trim() || "";

  /*
   * Check whether the user entered
   * anything into the search form.
   */
  const hasSearch =
    Boolean(searchLocation) ||
    Boolean(searchVehicle) ||
    Boolean(searchCategory) ||
    Boolean(searchSeats);

  /*
   * Filter vehicles using:
   *
   * 1. Category selection
   * 2. Search form
   *
   * Search fields use OR logic.
   */
  const filteredVehicles = vehicles.filter((vehicle) => {
    /*
     * Category filtering.
     */
    const matchesActiveCategory =
      activeCategory === "All Cars" ||
      vehicle.category === activeCategory;

    if (!matchesActiveCategory) {
      return false;
    }

    /*
     * If there is no search,
     * show every vehicle in the category.
     */
    if (!hasSearch) {
      return true;
    }

    /*
     * Convert vehicle information to lowercase.
     */
    const vehicleName = vehicle.name.toLowerCase();
    const vehicleLocation = vehicle.location.toLowerCase();
    const vehicleCategory = vehicle.category.toLowerCase();
    const vehicleSeats = vehicle.seats.toLowerCase();

    /*
     * Check each search field.
     */
    const matchesLocation =
      Boolean(searchLocation) &&
      vehicleLocation.includes(searchLocation);

    const matchesVehicle =
      Boolean(searchVehicle) &&
      vehicleName.includes(searchVehicle);

    const matchesSearchCategory =
      Boolean(searchCategory) &&
      vehicleCategory.includes(searchCategory);

    const matchesSeats =
      Boolean(searchSeats) &&
      vehicleSeats.includes(searchSeats);

    /*
     * OR logic:
     * A vehicle only needs to match
     * one of the entered search fields.
     */
    return (
      matchesLocation ||
      matchesVehicle ||
      matchesSearchCategory ||
      matchesSeats
    );
  });

  /*
   * Display six vehicles per page.
   */
  const vehiclesPerPage = 6;

  const totalPages = Math.ceil(
    filteredVehicles.length / vehiclesPerPage
  );

  /*
   * Reset pagination whenever
   * the search or category changes.
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
   * Calculate the vehicles for the
   * current page.
   */
  const startIndex =
    (currentPage - 1) * vehiclesPerPage;

  const visibleVehicles = filteredVehicles.slice(
    startIndex,
    startIndex + vehiclesPerPage
  );

  /*
   * Reveal the section when it enters
   * the viewport.
   */
  useEffect(() => {
    const section = collectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
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
   * Handle category selection.
   */
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  /*
   * Handle pagination.
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
   * Send the selected vehicle to the
   * booking page.
   *
   * localStorage allows the Booking component
   * to retrieve the selected vehicle.
   */
  const handleBooking = (vehicle) => {
    localStorage.setItem(
      "selectedVehicle",
      JSON.stringify(vehicle)
    );

    navigate("/booking");
  };

  /*
   * Format Nigerian currency.
   */
  const formatPrice = (price) => {
    return `₦${price.toLocaleString()}`;
  };

  /*
   * Reset search/category filters.
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

        {/* ================================
            HEADER
        ================================= */}

        <div className="vehicle-collection-header">

          <div className="vehicle-collection-header-content">

            <span className="vehicle-collection-eyebrow">
              Explore Our Fleet
            </span>

            <h2>
              Find your
              <span> perfect ride.</span>
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

        {/* ================================
            CATEGORY BUTTONS
        ================================= */}

        <div className="vehicle-collection-category-bar">

          <div className="vehicle-collection-category-list">

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`vehicle-collection-category-button ${
                  activeCategory === category
                    ? "vehicle-collection-category-active"
                    : ""
                }`}
                onClick={() =>
                  handleCategoryChange(category)
                }
              >
                {category}
              </button>
            ))}

          </div>

          <span className="vehicle-collection-count">

            {filteredVehicles.length}{" "}

            {filteredVehicles.length === 1
              ? "vehicle"
              : "vehicles"}

          </span>

        </div>

        {/* ================================
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
                          handleBooking(vehicle)
                        }
                        disabled={!vehicle.available}
                      >
                        {vehicle.available
                          ? "Book Now"
                          : "Unavailable"}

                        {vehicle.available && (
                          <FiArrowRight />
                        )}

                      </button>

                    </div>

                  </div>

                </article>

              )
            )}

          </div>

        ) : (

          /* ================================
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

        {/* ================================
            PAGINATION
        ================================= */}

        {totalPages > 1 && (

          <div className="vehicle-collection-pagination">

            <button
              type="button"
              className="vehicle-collection-page-arrow"
              disabled={currentPage === 1}
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
                      currentPage === index + 1
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
                currentPage === totalPages
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

        {/* ================================
            PAGINATION INFORMATION
        ================================= */}

        {filteredVehicles.length > 0 && (

          <div className="vehicle-collection-pagination-info">

            Showing{" "}

            <strong>
              {startIndex + 1}
            </strong>

            {" "}-{" "}

            <strong>
              {Math.min(
                startIndex +
                  vehiclesPerPage,
                filteredVehicles.length
              )}
            </strong>

            {" "}of{" "}

            <strong>
              {filteredVehicles.length}
            </strong>

            {" "}vehicles

          </div>

        )}

      </div>
    </section>
  );
};

export default VehicleCollection;