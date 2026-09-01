import { useState, useRef, useEffect } from "react";
import "./PopularVehicles.css";
import car7 from "../../assets/car7.jpeg";
import car8 from "../../assets/car8.jpeg";
import car9 from "../../assets/car9.jpeg";
import car11 from "../../assets/car11.jpeg";
import car12 from "../../assets/car12.jpeg";
import car from "../../assets/car.jpeg";
import car5 from "../../assets/car5.jpeg";
import car4 from "../../assets/car4.jpeg";

const vehicles = [
  {
    id: 1,
    image: car7,
    name: "Toyota Camry",
    category: "Economy",
    location: "Lagos",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    price: "#50,000",
  },
  {
    id: 2,
    image: car8,
    name: "Range Rover Sport",
    category: "Luxury",
    location: "Abuja",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    price: "#150,000",
  },
  {
    id: 3,
    image: car,
    name: "Toyota Rav4",
    category: "SUV",
    location: "Lagos",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    price: "#80,000",
  },
  {
    id: 4,
    image: car11,
    name: "Honda Accord",
    category: "Economy",
    location: "Ibadan",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    price: "#45,000",
  },
  {
    id: 5,
    image: car12,
    name: "Mercedes-Benz GLE",
    category: "Luxury",
    location: "Lagos",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    price: "#180,000",
  },
  {
    id: 6,
    image: car9,
    name: "Toyota Highlander",
    category: "SUV",
    location: "Abuja",
    seats: 7,
    transmission: "Automatic",
    fuel: "Petrol",
    price: "#95,000",
  },
  {
    id: 7,
    image: car4,
    name: "Hyundai Elantra",
    category: "Economy",
    location: "Lagos",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    price: "#50,000",
  },
  {
    id: 8,
    image: car5,
    name: "BMW X5",
    category: "Luxury",
    location: "Port Harcout",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    price: "#150,000",
  },
];

const PopularVehicles = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVehicles =
    activeCategory === "All"
      ? vehicles
      : vehicles.filter((vehicle) => vehicle.category === activeCategory);

  const [show, setShow] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01},
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <div ref={sectionRef} className={`popular-vehicles ${show ? "show" : ""}`}>
      <div className="vehicle-categories">
        {["All", "SUV", "Luxury", "Economy"].map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="vehicle-grid">
        {filteredVehicles.slice(0, 6).map((vehicle, index) => (
          <div
            className="vehicle-card"
            key={vehicle.id}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="vehicle-image">
              <img src={vehicle.image} alt={vehicle.name} />
            </div>
            <div className="vehicle-content">
              <h3>{vehicle.name}</h3>
              <p className="vehicle-location">{vehicle.location}</p>
              <div className="vehicle-details">
                <span>👨🏿‍🤝‍👨🏿{vehicle.seats}</span>
                <span>🚍{vehicle.transmission}</span>
                <span>💦{vehicle.fuel}</span>
              </div>

              <div className="vehicle-footer">
                <div className="vehicle-price">
                  <strong>{vehicle.price}</strong>
                  <small>/day</small>
                </div>

                <button className="book-btn">Book Now </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularVehicles;
