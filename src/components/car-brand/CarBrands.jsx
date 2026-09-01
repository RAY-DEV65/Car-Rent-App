import "./CarBrands.css";
import jeep from "../../assets/jeep.png";

const brands = [
  { name: "Toyota", logo: jeep },
  { name: "BMW", logo: jeep },
  { name: "Mercedes-Benz", logo: jeep },
  { name: "Audi", logo: jeep },
  { name: "Lexus", logo: jeep },
  { name: "Honda", logo: jeep },
  { name: "Porsche", logo: jeep },
  { name: "Ford", logo: jeep },
  { name: "Nissan", logo: jeep },
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
