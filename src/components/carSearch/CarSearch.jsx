import { useState } from "react";
import {
  FiSearch,
  FiMapPin,
  FiChevronDown,
} from "react-icons/fi";
import "./CarSearch.css";

const CarSearch = ({ onSearch }) => {
  // Store each search field value.
  const [location, setLocation] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [category, setCategory] = useState("");
  const [seats, setSeats] = useState("");

  // These values must match VehicleCollection.
  const categories = [
    "SUV",
    "Economy",
    "Luxury",
  ];

  // Submit the search.
  const handleSearch = (event) => {
    event.preventDefault();

    // Send the current search values to the parent.
    onSearch({
      location: location.trim(),
      vehicle: vehicle.trim(),
      category,
      seats,
    });

    // Scroll to the vehicle collection.
    const vehicleSection = document.getElementById(
      "vehicle-categories"
    );

    if (vehicleSection) {
      vehicleSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Clear all search values.
  const handleClearSearch = () => {
    setLocation("");
    setVehicle("");
    setCategory("");
    setSeats("");

    onSearch({});
  };

  return (
    <section className="car-search-section">
      <div className="car-search-container">

        <form
          className="car-search-form"
          onSubmit={handleSearch}
        >

          {/* ================================
              LOCATION
          ================================= */}

          <div className="car-search-field">
            <div className="car-search-icon">
              <FiMapPin />
            </div>

            <div className="car-search-field-content">
              <label htmlFor="car-location">
                Location
              </label>

              <input
                id="car-location"
                type="text"
                placeholder="e.g. Ibadan"
                value={location}
                onChange={(event) =>
                  setLocation(event.target.value)
                }
              />
            </div>
          </div>

          {/* ================================
              VEHICLE
          ================================= */}

          <div className="car-search-field">
            <div className="car-search-icon">
              <FiSearch />
            </div>

            <div className="car-search-field-content">
              <label htmlFor="car-vehicle">
                Vehicle
              </label>

              <input
                id="car-vehicle"
                type="text"
                placeholder="e.g. Toyota"
                value={vehicle}
                onChange={(event) =>
                  setVehicle(event.target.value)
                }
              />
            </div>
          </div>

          {/* ================================
              CATEGORY
          ================================= */}

          <div className="car-search-field">
            <div className="car-search-icon">
              <FiChevronDown />
            </div>

            <div className="car-search-field-content">
              <label htmlFor="car-category">
                Category
              </label>

              <select
                id="car-category"
                value={category}
                onChange={(event) =>
                  setCategory(event.target.value)
                }
              >
                <option value="">
                  All Categories
                </option>

                {categories.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* ================================
              SEATS
          ================================= */}

          <div className="car-search-field">
            <div className="car-search-icon">
              <FiChevronDown />
            </div>

            <div className="car-search-field-content">
              <label htmlFor="car-seats">
                Seats
              </label>

              <select
                id="car-seats"
                value={seats}
                onChange={(event) =>
                  setSeats(event.target.value)
                }
              >
                <option value="">
                  Any Seats
                </option>

                <option value="5 Seats">
                  5 Seats
                </option>

                <option value="7 Seats">
                  7 Seats
                </option>
              </select>
            </div>
          </div>

          {/* ================================
              SEARCH BUTTON
          ================================= */}

          <button
            type="submit"
            className="car-search-button"
          >
            <FiSearch />

            <span>
              Search Cars
            </span>
          </button>
        </form>

        {/* ================================
            CLEAR SEARCH
        ================================= */}

        <button
          type="button"
          className="car-search-clear"
          onClick={handleClearSearch}
        >
          Clear search
        </button>

      </div>
    </section>
  );
};

export default CarSearch;