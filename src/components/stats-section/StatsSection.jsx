import { useEffect, useState, useRef } from "react";
import { FaUser, FaCar, FaGlobe, FaSmile } from "react-icons/fa";
import sampleVideo from "../../assets/sample.mp4";
import "./StatsSection.css";

const stats = [
  {
    icon: <FaUser />,
    number: 1000,
    suffix: "+",
    title: "Happy Customers",
  },
  {
    icon: <FaCar />,
    number: 500,
    suffix: "+",
    title: "Premium Cars",
  },
  {
    icon: <FaGlobe />,
    number: 50,
    suffix: "+",
    title: "Cities Worldwide",
  },
  {
    icon: <FaSmile />,
    number: 98,
    suffix: "%",
    title: "Satisfaction Rate",
  },
];

const StatsSection = () => {
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  const [show, setShow] = useState(false);
  const statsRef = useRef(null);

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

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
  }, []);

  useEffect(() => {
    const section = document.querySelector(".stats-section");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 2000;
    const start = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);

      setCounts(stats.map((stat) => Math.floor(stat.number * progress)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started]);

  return (
    <div ref={statsRef} className={`stats-section ${show ? "show" : ""}`}>
      <video className="stats-video" autoPlay muted loop playsInline>
        <source src={sampleVideo} type="video/mp4" />
      </video>

      <div className="stats-overlay"></div>

      <div className="stats-content">
        <div className="stat-grid">
          {stats.map((stat, index) => (
            <div className="stat-item" key={stat.title}>
              <div className="stat-icon">{stat.icon}</div>

              <div className="stat number">
                {counts[index].toLocaleString()}
                {stat.suffix}
              </div>

              <p>{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
