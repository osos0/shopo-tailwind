import React from "react";
import Ad from "../Components/Ad";
import NewArrivals from "../Components/cards/cards";
import PopularSales from "../Components/cards/popular-Sales";
import Discount from "../Components/Footers";

const Home = () => {
  return (
    <>
      <Ad />
      <NewArrivals />
      <PopularSales />
      <Discount />
    </>
  );
};

export default Home;
