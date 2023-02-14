import React from "react";
import { useSelector } from "react-redux";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const productView = useSelector((state) => state.filter.grid_view);
  // console.log(productView);

  const productDetail = useSelector((state) => state.filter.filter_products);
  // console.log(productDetail);

  if (productView === true) {
    return <GridView data={productDetail} />;
  }
  if (productView === false) {
    return <ListView data={productDetail} />;
  }
};

export default ProductList;
