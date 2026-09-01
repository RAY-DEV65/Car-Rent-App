import "./HomeBlog.css";
import { useEffect, useState, useRef } from "react";
import car from "../../assets/car.jpeg";
import car8 from "../../assets/car8.jpeg";
import background from "../../assets/background.jpeg";
import { FaChevronCircleRight } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "How to Choose the Right Car for Your Journey",
    date: "August 25, 2026",
    category: "Car Dealer",
    categoryClass: "dealer",
    image: car,
    description:
      "Choosing the right vehicle can make your journey more comfortble, convenient , and enjoyable.",
  },
  {
    id: 2,
    title: "The Newest Cars You Should Know About",
    date: "August 20, 2026",
    category: "Newest",
    categoryClass: "newest",
    image: car8,
    description:
      "Take a look at some of the newest vehicles bringing fresh technology, style and performance to the road.",
  },
  {
    id: 3,
    title: "Simple Tips to Keep Your Car in Great Shape",
    date: "August 15, 2026",
    category: "Car Tips",
    categoryClass: "tips",
    image: background,
    description:
      "A few simple maintenance habits can help keep your vehicle reliable and looking its best.",
  },
];

const Blog = () => {

   const [show, setShow] = useState(false);
    const blogRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShow(true);
            observer.disconnect();
          }
        },
        { threshold: 0.05 },
      );
  
      if (blogRef.current) {
        observer.observe(blogRef.current);
      }
    }, []);




  return (
    <div ref={blogRef}  className={`blog-section ${show ? "show" : ""}`}>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <article className="blog-card" key={blog.id}>
            <div className="blog-image">
              <img src={blog.image} alt={blog.title} />

              <span className={`blog-category ${blog.categoryClass}`}>
                {blog.category}
              </span>
            </div>

            <div className="blog-content">
              <div className="blog-date">{blog.date}</div>

              <h3>{blog.title}</h3>

              <p>{blog.description}</p>

              <button className="read-more">
                Read More
                <span>
                  <FaChevronCircleRight />
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="all-blogs">
        <button className="view-all-blog">
          View All Blogs
          <span>
            {" "}
            <FaChevronCircleRight />{" "}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Blog;
