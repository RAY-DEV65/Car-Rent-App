import { Link } from "react-router-dom";
import "./Hero.css";



const Hero = () => {

 
  return (
  
    <div className="hero">
      <div className="container">
        <div className="text">
          <h1>
            Drive <span>More</span> <br /> Worry Less.
          </h1>
          <p>
            Premium cars. Best prices <br /> Exceptional services
          </p>
          <Link to="/booking" className="hero-btn">Book Your Ride</Link>
        </div>

      </div>
    </div>

  
  );
};

export default Hero;
