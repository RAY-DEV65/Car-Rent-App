import { useState } from "react";

import {
  FiX,
  FiCalendar,
  FiMapPin,
  FiUser,
  FiMail,
  FiPhone,
  FiCheck,
} from "react-icons/fi";

import "./Booking.css";

// EDIT THIS: where booking requests should land.
const OWNER_EMAIL = "your-email@example.com";

const formatPrice = (price) => `₦${price.toLocaleString()}`;

const daysBetween = (start, end) => {
  if (!start || !end) return 0;
  const ms = new Date(end) - new Date(start);
  const days = Math.round(ms / 86400000);
  return days > 0 ? days : 0;
};

const Booking = ({ vehicle, isOpen, onClose }) => {
  const [form, setForm] = useState({
    pickupDate: "",
    returnDate: "",
    location: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !vehicle) return null;

  const today = new Date().toISOString().split("T")[0];
  const rentalDays = daysBetween(form.pickupDate, form.returnDate);
  const total = vehicle.price * rentalDays;

  const update = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = () => {
    const next = {};

    if (!form.pickupDate) next.pickupDate = "Pick a start date";
    if (!form.returnDate) next.returnDate = "Pick a return date";

    if (
      form.pickupDate &&
      form.returnDate &&
      rentalDays <= 0
    ) {
      next.returnDate = "Return date must be after pickup";
    }

    if (!form.name.trim()) next.name = "Enter your name";

    if (
      !form.email.trim() ||
      !/^\S+@\S+\.\S+$/.test(form.email)
    ) {
      next.email = "Enter a valid email";
    }

    if (!form.phone.trim()) next.phone = "Enter a phone number";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({
      pickupDate: "",
      returnDate: "",
      location: "",
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setErrors({});
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = `Booking request: ${vehicle.name} (${form.pickupDate} to ${form.returnDate})`;

    const body = [
      `Car: ${vehicle.name} (${vehicle.category})`,
      `Pickup: ${form.pickupDate}`,
      `Return: ${form.returnDate}`,
      `Duration: ${rentalDays} day${rentalDays === 1 ? "" : "s"}`,
      `Estimated total: ${formatPrice(total)}`,
      `Pickup location: ${form.location || "Not specified"}`,
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      "",
      form.message ? `Message:\n${form.message}` : "",
    ].join("\n");

    window.location.href = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  };

  return (
    <div className="booking-modal-overlay" onClick={handleClose}>
      <div
        className="booking-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="booking-modal-close"
          onClick={handleClose}
          aria-label="Close"
        >
          <FiX />
        </button>

        {submitted ? (
          <div className="booking-modal-confirm">
            <div className="booking-modal-confirm-icon">
              <FiCheck />
            </div>

            <h3>Request sent</h3>

            <p>
              Your email app should have opened with the booking
              details filled in. Just hit send and we'll confirm
              your reservation shortly.
            </p>

            <button type="button" onClick={handleClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="booking-modal-vehicle">
              <img src={vehicle.image} alt={vehicle.name} />

              <div>
                <h3>{vehicle.name}</h3>
                <span className="booking-modal-category">
                  {vehicle.category}
                </span>
                <p className="booking-modal-price">
                  {formatPrice(vehicle.price)}
                  <span> / day</span>
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="booking-modal-form">
              <div className="booking-modal-row">
                <div className="booking-modal-field">
                  <label>
                    <FiCalendar />
                    Pickup date
                  </label>
                  <input
                    type="date"
                    min={today}
                    value={form.pickupDate}
                    onChange={(e) =>
                      update("pickupDate", e.target.value)
                    }
                  />
                  {errors.pickupDate && (
                    <p className="booking-modal-error">
                      {errors.pickupDate}
                    </p>
                  )}
                </div>

                <div className="booking-modal-field">
                  <label>
                    <FiCalendar />
                    Return date
                  </label>
                  <input
                    type="date"
                    min={form.pickupDate || today}
                    value={form.returnDate}
                    onChange={(e) =>
                      update("returnDate", e.target.value)
                    }
                  />
                  {errors.returnDate && (
                    <p className="booking-modal-error">
                      {errors.returnDate}
                    </p>
                  )}
                </div>
              </div>

              <div className="booking-modal-field">
                <label>
                  <FiMapPin />
                  Pickup location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Lekki Phase 1"
                  value={form.location}
                  onChange={(e) => update("location", e.target.value)}
                />
              </div>

              <div className="booking-modal-field">
                <label>
                  <FiUser />
                  Full name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                />
                {errors.name && (
                  <p className="booking-modal-error">{errors.name}</p>
                )}
              </div>

              <div className="booking-modal-row">
                <div className="booking-modal-field">
                  <label>
                    <FiMail />
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                  {errors.email && (
                    <p className="booking-modal-error">{errors.email}</p>
                  )}
                </div>

                <div className="booking-modal-field">
                  <label>
                    <FiPhone />
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                  {errors.phone && (
                    <p className="booking-modal-error">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="booking-modal-field">
                <label>Message (optional)</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Anything else we should know?"
                />
              </div>

              {rentalDays > 0 && (
                <div className="booking-modal-summary">
                  <span>
                    {rentalDays} day{rentalDays === 1 ? "" : "s"}
                  </span>
                  <strong>{formatPrice(total)}</strong>
                </div>
              )}

              <button type="submit" className="booking-modal-submit">
                Send booking request
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Booking;