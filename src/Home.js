import React from "react";
// import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import FeatureProductContainer from "./redux/modules/Product/FeatureProductContainer";

const Home = () => {
  const data = {
    name: "Ecommerce Website",
  };
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProductContainer/>
    </>
  );
};

export default Home;