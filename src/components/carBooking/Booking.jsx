import { useEffect, useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiUser,
  FiMail,
  FiPhone,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { vehicles } from "../../data";
import "./Booking.css";

const Booking = () => {
  // Get only vehicles that are available for booking
  const availableVehicles = vehicles.filter(
    (vehicle) => vehicle.available
  );

  // Get the vehicle selected from the VehicleCollection page
  const savedVehicle = JSON.parse(
    localStorage.getItem("selectedVehicle")
  );

  // Store all booking form information
  const [formData, setFormData] = useState({
    vehicleId: savedVehicle?.id || "",
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    returnDate: "",
    pickupTime: "",
    returnTime: "",
    name: "",
    email: "",
    phone: "",
  });

  // Store validation errors
  const [errors, setErrors] = useState({});

  // Store success/error toast
  const [toast, setToast] = useState(null);

  // Track email submission
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Find the selected vehicle
  const selectedVehicle = availableVehicles.find(
    (vehicle) =>
      String(vehicle.id) === String(formData.vehicleId)
  );

  // Automatically calculate rental days from pickup and return dates
  const rentalDays =
    formData.pickupDate && formData.returnDate
      ? Math.ceil(
          (new Date(formData.returnDate) -
            new Date(formData.pickupDate)) /
            (1000 * 60 * 60 * 24)
        )
      : 0;

  // Calculate the total rental price
  const totalPrice =
    selectedVehicle && rentalDays > 0
      ? selectedVehicle.price * rentalDays
      : 0;

  // Handle all input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    // Remove the error as soon as the user corrects the field
    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }
  };

  // Validate the booking form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.vehicleId) {
      newErrors.vehicleId = "Please select a vehicle.";
    }

    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation =
        "Please enter your pickup location.";
    }

    if (!formData.dropoffLocation.trim()) {
      newErrors.dropoffLocation =
        "Please enter your drop-off location.";
    }

    if (!formData.pickupDate) {
      newErrors.pickupDate =
        "Please select a pickup date.";
    }

    if (!formData.returnDate) {
      newErrors.returnDate =
        "Please select a return date.";
    }

    // Make sure the return date is after the pickup date
    if (
      formData.pickupDate &&
      formData.returnDate &&
      new Date(formData.returnDate) <=
        new Date(formData.pickupDate)
    ) {
      newErrors.returnDate =
        "Return date must be after the pickup date.";
    }

    if (!formData.pickupTime) {
      newErrors.pickupTime =
        "Please select a pickup time.";
    }

    if (!formData.returnTime) {
      newErrors.returnTime =
        "Please select a return time.";
    }

    if (!formData.name.trim()) {
      newErrors.name =
        "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email =
        "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone =
        "Please enter your phone number.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit booking to Web3Forms
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Stop submission if validation fails
    if (!validateForm()) {
      setToast({
        type: "error",
        message:
          "Please correct the errors and try again.",
      });

      return;
    }

    setIsSubmitting(true);

    // Prepare the booking information
    const bookingData = {
      access_key:
        "9c51eb1f-6022-4312-be49-ceede3fdbdb5",

      subject: `New Car Rental Booking - ${selectedVehicle.name}`,

      from_name: "Car Rental Website",

      name: formData.name,
      email: formData.email,
      phone: formData.phone,

      vehicle: selectedVehicle.name,
      category: selectedVehicle.category,
      vehicle_location: selectedVehicle.location,

      pickup_location: formData.pickupLocation,
      dropoff_location: formData.dropoffLocation,

      pickup_date: formData.pickupDate,
      pickup_time: formData.pickupTime,

      return_date: formData.returnDate,
      return_time: formData.returnTime,

      rental_days: rentalDays,

      price_per_day:
        `₦${selectedVehicle.price.toLocaleString()}`,

      total_price:
        `₦${totalPrice.toLocaleString()}`,
    };

    try {
      // Send booking information to Web3Forms
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );

      const data = await response.json();

      // Check whether Web3Forms successfully received the booking
      if (!data.success) {
        throw new Error(
          data.message || "Failed to send booking."
        );
      }

      // Show success message
      setToast({
        type: "success",
        message:
          "Your booking has been submitted successfully!",
      });

      // Remove the previously selected vehicle
      localStorage.removeItem("selectedVehicle");

      // Reset the form after successful submission
      setFormData({
        vehicleId: "",
        pickupLocation: "",
        dropoffLocation: "",
        pickupDate: "",
        returnDate: "",
        pickupTime: "",
        returnTime: "",
        name: "",
        email: "",
        phone: "",
      });

      // Clear validation errors
      setErrors({});
    } catch (error) {
      console.error(
        "Booking submission error:",
        error
      );

      // Show error message
      setToast({
        type: "error",
        message:
          "We couldn't send your booking. Please try again.",
      });
    } finally {
      // Stop loading state
      setIsSubmitting(false);
    }
  };

  // Automatically hide toast after 4 seconds
  useEffect(() => {
    if (!toast) {
      return;
    }

    const timer = setTimeout(() => {
      setToast(null);
    }, 4000);

    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <section className="booking-section">
      <div className="booking-container">

        {/* Booking page heading */}
        <div className="booking-heading">
          <span>BOOK YOUR RIDE</span>

          <h1>
            Reserve your perfect
            <em> vehicle</em>
          </h1>

          <p>
            Choose your vehicle, select your dates
            and tell us where your journey begins.
          </p>
        </div>

        <div className="booking-content">

          {/* =========================
              BOOKING FORM
          ========================== */}
          <form
            className="booking-form"
            onSubmit={handleSubmit}
          >

            {/* Vehicle selection */}
            <div className="booking-form-group full-width">
              <label>
                Select Vehicle
              </label>

              <select
                name="vehicleId"
                value={formData.vehicleId}
                onChange={handleChange}
              >
                <option value="">
                  Choose a vehicle
                </option>

                {availableVehicles.map(
                  (vehicle) => (
                    <option
                      key={vehicle.id}
                      value={vehicle.id}
                    >
                      {vehicle.name} — ₦
                      {vehicle.price.toLocaleString()}
                      /day
                    </option>
                  )
                )}
              </select>

              {errors.vehicleId && (
                <small className="booking-error">
                  {errors.vehicleId}
                </small>
              )}
            </div>

            {/* Pickup location */}
            <div className="booking-form-group">
              <label>
                <FiMapPin />
                Pickup Location
              </label>

              <input
                type="text"
                name="pickupLocation"
                placeholder="Enter pickup location"
                value={formData.pickupLocation}
                onChange={handleChange}
              />

              {errors.pickupLocation && (
                <small className="booking-error">
                  {errors.pickupLocation}
                </small>
              )}
            </div>

            {/* Drop-off location */}
            <div className="booking-form-group">
              <label>
                <FiMapPin />
                Drop-off Location
              </label>

              <input
                type="text"
                name="dropoffLocation"
                placeholder="Enter drop-off location"
                value={formData.dropoffLocation}
                onChange={handleChange}
              />

              {errors.dropoffLocation && (
                <small className="booking-error">
                  {errors.dropoffLocation}
                </small>
              )}
            </div>

            {/* Pickup date */}
            <div className="booking-form-group">
              <label>
                <FiCalendar />
                Pickup Date
              </label>

              <input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
              />

              {errors.pickupDate && (
                <small className="booking-error">
                  {errors.pickupDate}
                </small>
              )}
            </div>

            {/* Return date */}
            <div className="booking-form-group">
              <label>
                <FiCalendar />
                Return Date
              </label>

              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
              />

              {errors.returnDate && (
                <small className="booking-error">
                  {errors.returnDate}
                </small>
              )}
            </div>

            {/* Pickup time */}
            <div className="booking-form-group">
              <label>
                <FiClock />
                Pickup Time
              </label>

              <input
                type="time"
                name="pickupTime"
                value={formData.pickupTime}
                onChange={handleChange}
              />

              {errors.pickupTime && (
                <small className="booking-error">
                  {errors.pickupTime}
                </small>
              )}
            </div>

            {/* Return time */}
            <div className="booking-form-group">
              <label>
                <FiClock />
                Return Time
              </label>

              <input
                type="time"
                name="returnTime"
                value={formData.returnTime}
                onChange={handleChange}
              />

              {errors.returnTime && (
                <small className="booking-error">
                  {errors.returnTime}
                </small>
              )}
            </div>

            {/* Customer name */}
            <div className="booking-form-group">
              <label>
                <FiUser />
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />

              {errors.name && (
                <small className="booking-error">
                  {errors.name}
                </small>
              )}
            </div>

            {/* Customer email */}
            <div className="booking-form-group">
              <label>
                <FiMail />
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />

              {errors.email && (
                <small className="booking-error">
                  {errors.email}
                </small>
              )}
            </div>

            {/* Customer phone */}
            <div className="booking-form-group full-width">
              <label>
                <FiPhone />
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />

              {errors.phone && (
                <small className="booking-error">
                  {errors.phone}
                </small>
              )}
            </div>

            {/* Submit booking */}
            <button
              type="submit"
              className="booking-submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending Booking..."
              ) : (
                <>
                  Confirm Booking
                  <FiCheckCircle />
                </>
              )}
            </button>
          </form>

          {/* =========================
              BOOKING SUMMARY
          ========================== */}
          <aside className="booking-summary">
            <h2>Booking Summary</h2>

            {selectedVehicle ? (
              <>
                {/* Selected vehicle preview */}
                <div className="booking-vehicle">
                  <img
                    src={selectedVehicle.image}
                    alt={selectedVehicle.name}
                  />

                  <div>
                    <h3>
                      {selectedVehicle.name}
                    </h3>

                    <span>
                      {selectedVehicle.category}
                    </span>
                  </div>
                </div>

                {/* Vehicle location */}
                <div className="booking-summary-row">
                  <span>Location</span>

                  <strong>
                    {selectedVehicle.location}
                  </strong>
                </div>

                {/* Daily rental price */}
                <div className="booking-summary-row">
                  <span>Price per day</span>

                  <strong>
                    ₦
                    {selectedVehicle.price.toLocaleString()}
                  </strong>
                </div>

                {/* Automatically calculated rental days */}
                <div className="booking-summary-row">
                  <span>Rental days</span>

                  <strong>
                    {rentalDays > 0
                      ? rentalDays
                      : "--"}
                  </strong>
                </div>

                <div className="booking-summary-divider" />

                {/* Total rental cost */}
                <div className="booking-total">
                  <span>Total</span>

                  <strong>
                    ₦{totalPrice.toLocaleString()}
                  </strong>
                </div>
              </>
            ) : (
              /* Empty state when no vehicle is selected */
              <div className="booking-empty">
                <FiCalendar />

                <p>
                  Select a vehicle to see your
                  booking summary.
                </p>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* =========================
          SUCCESS / ERROR TOAST
      ========================== */}
      {toast && (
        <div
          className={`booking-toast ${toast.type}`}
        >
          {toast.type === "success" ? (
            <FiCheckCircle />
          ) : (
            <FiAlertCircle />
          )}

          <span>
            {toast.message}
          </span>
        </div>
      )}
    </section>
  );
};

export default Booking;