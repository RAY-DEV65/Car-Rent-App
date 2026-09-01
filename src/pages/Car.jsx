import { useState } from "react";

import CarsHero from "../components/carsHero/CarsHero";
import CarSearch from "../components/carSearch/CarSearch";
import VehicleCollection from "../components/vehicleCollection/VehicleCollection";
import VehicleBenefits from "../components/vehicleBenefits/VehicleBenefits";
import CarsCTA from "../components/carsCTA/CarsCTA";

const Car = () => {
  /*
   * Keep the search state here so that
   * CarSearch can send information to
   * VehicleCollection.
   */
  const [searchData, setSearchData] =
    useState({});

  return (
    <>
      {/* Cars hero */}
      <CarsHero />

      {/* Search form */}
      <CarSearch
        onSearch={setSearchData}
      />

      {/* Vehicle collection */}
      <VehicleCollection
        searchData={searchData}
      />

      {/* Rental benefits */}
      <VehicleBenefits />

      {/* Final CTA */}
      <CarsCTA />
    </>
  );
};

export default Car;