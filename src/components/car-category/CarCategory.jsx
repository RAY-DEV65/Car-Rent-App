import { useEffect, useState, useRef } from "react";
import "./CarCategory.css";
import car1 from "../../assets/car1.jpeg"
import car2 from "../../assets/car2.jpeg"
import car3 from "../../assets/car3.jpeg"
import car4 from "../../assets/car4.jpeg"
import car5 from "../../assets/car5.jpeg"
import car6 from "../../assets/car6.jpeg"
import arrowIcon from "../../assets/right-arrow.png"

const categories = [
  {
    id: 1,
    image: car1,
    name: "SUV",
    location: "Lagos",
  },
  {
    id: 2,
    image: car2,
    name: "Sedan",
    location: "Abuja",
  },
  {
    id: 3,
    image: car3,
    name: "Pickup",
    location: "Abuja",
  },
  {
    id: 4,
    image: car4,
    name: "Sport Car",
    location: "Ibadan",
  },
  {
    id: 5,
    image: car5,
    name: "Luxury Car",
    location: "Port Harcout",
  },
  {
    id: 6,
    image: car6,
    name: "Electric Car",
    location: "Lagos",
  },
];

const CarCategory = () => {

    const [show, setShow] = useState(false)
    const cardRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    setShow(true);
                    observer.disconnect();
                }
            },
             { threshold: 0.05}
        );

        if(cardRef.current){
            observer.observe(cardRef.current);
        }
    }, [])


  return (
    <div ref={cardRef}  className={`categories ${show ? "show" : ""}`}>
      <div className="category-grid">
        {categories.map((category) => (
          <div className="category-card" key={category.id}>
            <img src={category.image} alt={category.name} />
            <div className="category-info">
              <h3>{category.name}</h3>
              <p>{category.location}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-container">
        <a  className="view-all">
          View all vehicles <img src={arrowIcon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default CarCategory;
