import React, { useEffect } from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  setGridView,
  setListView,
  sorting,
  sortingProducts,
} from "../redux/modules/Product/FilterAction";
const Sort = () => {
  const dispatch = useDispatch();
  const productViewandSort = useSelector((state) => state.filter);
  // console.log(productViewandSort);
  const productDetail = useSelector((state) => state.filter.filter_products);
  // console.log(productDetail);

  const sortData = (e) => {
    dispatch(sorting(e));
    dispatch(sortingProducts());
  };

  return (
    <Wrapper className="sort-section">
      <div className="sorting-list--grid">
        <button
          className={
            productViewandSort.grid_view.true ? "active sort-btn" : "sort-btn"
          }
          onClick={() => dispatch(setGridView())}
        >
          <BsFillGridFill className="icon" />
        </button>

        <button
          className={
            productViewandSort.grid_view.false ? "active sort-btn" : "sort-btn"
          }
          onClick={() => dispatch(setListView())}
        >
          <BsList className="icon" />
        </button>
      </div>
      <div className="product-data">
        <p>{`${productDetail.length} Product Available`}</p>
      </div>
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onChange={sortData}
          >
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Alphabetically(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Alphabetically(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default Sort;
