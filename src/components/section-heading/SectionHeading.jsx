import { useEffect, useRef, useState } from "react";
import "./SectionHeading.css";

const SectionHeading = ({ title, highlight, subtitle }) => {

    const [show, setShow] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    setShow(true);
                    observer.disconnect();
                }
            },
             { threshold: 0.2}
        );

        if(sectionRef.current){
            observer.observe(sectionRef.current);
        }
    }, [])


  return (
    <div ref={sectionRef} className={`main-section-heading ${show ? "show" : ""}`}>
      <h2>{title} <span>{highlight}</span> </h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
