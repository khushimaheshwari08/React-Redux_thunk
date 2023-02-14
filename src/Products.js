import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import ProductList from "./components/ProductList";
import Sort from "./components/Sort";
import { productAction } from "./redux/modules/Product/FeatureProductAction";
import { getAllProductsData } from "./redux/modules/Product/FilterAction";
const Products = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.product.featureProducts);

  useEffect(() => {
    dispatch(productAction());
  }, []);

  useEffect(() => {
    dispatch(getAllProductsData(productList));
  }, [productList]);

  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>
        <section className="prouct-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
