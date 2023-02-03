import React from "react";
// import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProductContainer from "./redux/modules/Product/FeatureProductContainer";

const Home = () => {
  const data = {
    name: "Ecommerce Website",
  };
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProductContainer/>
      <Services/>
      <Trusted/>
    </>
  );
};

export default Home;