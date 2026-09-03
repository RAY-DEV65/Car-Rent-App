import { useEffect, useState } from "react";

import CarsHero from "../components/carsHero/CarsHero";
import CarSearch from "../components/carSearch/CarSearch";
import VehicleCollection from "../components/vehicleCollection/VehicleCollection";
import VehicleBenefits from "../components/vehicleBenefits/VehicleBenefits";
import CarsCTA from "../components/carsCTA/CarsCTA";

const Car = () => {
  
  const [searchData, setSearchData] = useState({});

  useEffect(() => {
    if (window.location.hash === "#vehicle-categories") {
      setTimeout(() => {
        document
          .getElementById("vehicle-categories")
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  return (
    <>
      {/* Cars hero */}
      <CarsHero />

      {/* Search form */}
      <CarSearch onSearch={setSearchData} />

      {/* Vehicle collection */}
      <VehicleCollection searchData={searchData} />

      {/* Rental benefits */}
      <VehicleBenefits />


      {/* Final CTA */}
      <CarsCTA />
    </>
  );
};

export default Car;
