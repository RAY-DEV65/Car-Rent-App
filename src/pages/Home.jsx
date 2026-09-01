import Blog from "../components/blog/Blog";
import CallToAction from "../components/call-to-action/CallToAction";
import CarBrands from "../components/car-brand/CarBrands";
import CarCategory from "../components/car-category/CarCategory";
import CustomerReview from "../components/customer-review/CustomerReview";
import Hero from "../components/hero/Hero";
import HowItWorks from "../components/how-it-work/HowItWorks";
import PopularVehicles from "../components/popular-vehicles/PopularVehicles";
import Search from "../components/search/search";
import SectionHeading from "../components/section-heading/SectionHeading";
import StatsSection from "../components/stats-section/StatsSection";
import WhyChooseUs from "../components/why-choose-us/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Hero />
      <Search />
      <SectionHeading
        title="Explore By"
        highlight="Category"
        subtitle="Choose your perfect car for your journey"
      />
      <CarCategory />
      <SectionHeading
        title="Popular"
        highlight="Vehicles"
        subtitle="Top picks from our premium collections"
      />
      <PopularVehicles />
      <WhyChooseUs />
      <SectionHeading
        title="How it"
        highlight="Works"
        subtitle="Renting a car has never been easier"
      />
      <HowItWorks />
      <StatsSection />
      <SectionHeading
        title="What Our"
        highlight="Customers Say"
        subtitle="Hear from our people who have enjoyed our services"
      />
      <CustomerReview />
      <SectionHeading
        title="Top Car"
        highlight="Brands"
        subtitle="We partner with the best in the industry"
      />
      <CarBrands />
      <SectionHeading
        title="Latest From"
        highlight="Our Blog"
        subtitle="Top guides & travel inspiration"
      />
      <Blog />
      <CallToAction/>
    </>
  );
};

export default Home;
