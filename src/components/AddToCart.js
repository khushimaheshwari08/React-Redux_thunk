import { Button } from "../styles/Button";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CartToggleAmount from "./CartToggleAmount";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../redux/modules/Product/FeatureProductAction";

const AddToCart = () => {
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  const productDetail = useSelector(
    (state) => state.singleProduct.singleProducts
  );
  //   console.log(productDetail)

  const setDecrease = () => {
    if (amount !== 1) {
      setAmount(amount - 1);
    }
  };

  const setIncrease = () => {
    if (amount < productDetail.stock) {
      setAmount(amount + 1);
    }
  };

  return (
    <Wrapper>
      <div>
        <CartToggleAmount
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />
        <NavLink to="/cart">
          <Button
            className="btn"
            onClick={() => dispatch(addToCartAction(productDetail, amount))}
          >
            Add To Cart
          </Button>
        </NavLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;
