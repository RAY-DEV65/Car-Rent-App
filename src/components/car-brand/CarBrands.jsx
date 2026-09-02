import "./CarBrands.css";
import toyota from "../../assets/toyota.jpeg";
import jeep from "../../assets/jeep.png"
import Lexus from "../../assets/Lexus.jpeg"
import Nissan from "../../assets/Nissan.jpeg"
import Porsche from "../../assets/Porsche.jpeg"
import ford from "../../assets/ford.jpeg"
import bmw from "../../assets/bmw.jpeg"
import benz from "../../assets/benz.jpeg"
import audi from "../../assets/audi.jpeg"
import Chevrolet from "../../assets/Chevrolet.jpeg"

const brands = [
  { name: "Toyota", logo: toyota },
  { name: "BMW", logo: bmw },
  { name: "Mercedes-Benz", logo: benz },
  { name: "Audi", logo: audi },
  { name: "Lexus", logo: Lexus },
  { name: "Chevrolet", logo: Chevrolet },
  { name: "Porsche", logo: Porsche },
  { name: "Ford", logo: ford },
  { name: "Nissan", logo: Nissan },
];

const CarBrands = () => {
  return (
    <div className="car-brands">
      <div className="brands-track">
        {[...brands, ...brands].map((brand, index) => (
          <div className="brand" key={index}>
            <img src={brand.logo} alt={brand.name} />
            <span>{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarBrands;
