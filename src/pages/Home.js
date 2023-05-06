import React from "react";
// import Ad from "../Components/Ad";
import NewArrivals from "../Components/cards/cards";
import PopularSales from "../Components/cards/popular-Sales";
// import Discount from "../Components/Footers";
import EAds from "../Components/EAds";
import Ad2ShopByBrand from "../Components/Ad2ShopByBrand";
import Ad3TopSellingProducts from "../Components/Ad3TopSellingProducts";
import Ad4BestSaller from "../Components/Ad4BestSaller";
import Ad5PopulerSales from "../Components/Ad5PopulerSales";
import AdOffer from "../Components/Ad1Offer";

const Home = () => {
  return (
    <>
      <EAds />
      <AdOffer />
      <Ad2ShopByBrand />
      <Ad3TopSellingProducts />
      <Ad4BestSaller />
      <Ad5PopulerSales />
      <NewArrivals />
      <PopularSales />
      {/* <Discount /> */}
    </>
  );
};

export default Home;
