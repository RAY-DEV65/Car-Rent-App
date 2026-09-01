import { useState, useRef, useEffect } from "react";
import "./HowItWorks.css";
import arrowIcon from "../../assets/right-arrow.png"
import {GrMapLocation} from "react-icons/gr"
import { BsCalendarDateFill } from "react-icons/bs";
import { FaCarRear } from "react-icons/fa6";
import { GiMassDriver } from "react-icons/gi";

const HowItWorks = () => {
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
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  const steps = [
    {
      id: 1,
      icon: <GrMapLocation/>,
      step: "Step 1",
      title: "Choose Location",
      text: "Select your preferred pickup location",
    },
    {
      id: 2,
      icon: <BsCalendarDateFill/>,
      step: "Step 2",
      title: "Select Date",
      text: "Choose the date that works for you",
    },
    {
      id: 3,
      icon: <FaCarRear/>,
      step: "Step 3",
      title: "Choose Car",
      text: "Find the perfect car for your journey",
    },
    {
      id: 4,
      icon: <GiMassDriver/>,
      step: "Step 4",
      title: "Book & Drive",
      text: "Complete your booking and enjoy ride",
    },
  ];

  return (
    <div ref={sectionRef} className={`how-it-works ${show ? "show" : ""}`}>
      <div className="steps-container">
        <div className="dotted-line"></div>

        {steps.map((item) => (
          <div className="step" key={item.id}>
            <div className="icon-wrapper">
              <div className="step-icon">{item.icon}</div>
            </div>

            <p className="step-number">{item.step}</p>

            <h3>{item.title}</h3>

            <p className="step-text">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="book-car-btn">
        <a  className="book-car">
         Book Your Car <img src={arrowIcon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default HowItWorks;
