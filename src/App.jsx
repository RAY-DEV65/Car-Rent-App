import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Car from "./pages/Car";
import Blog from "./pages/Blog";
import Booking from "./components/carBooking/Booking";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/car" element={<Car />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/booking" element={<Booking />} />
      </Route>
    </Routes>
  );
};

export default App;
