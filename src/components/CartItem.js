import React, { useState } from "react";
import FormatPrice from "../Helpers/FormatPrice";
import { FaTrash } from "react-icons/fa";
import CartToggleAmount from "./CartToggleAmount";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCartProduct,
  increaseCartProduct,
  removeCartProduct,
} from "../redux/modules/Product/FeatureProductAction";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();

  const setDecrease = () => {
    if (data.qty !== 1) {
      dispatch(decreaseCartProduct(data.id));
    }
  };

  const setIncrease = () => {
    if (data.qty < data.stock) {
      dispatch(increaseCartProduct(data.id));
    }
  };

  const removeItem = () => {
    dispatch(removeCartProduct(data.id));
  };

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div></div>
        <div>
          <p>{data.name}</p>
          <div className="color-div"></div>
        </div>
      </div>
      <div className="cart-hide">
        <p>
          <FormatPrice price={data.price} />
        </p>
      </div>
      <CartToggleAmount
        amount={data.qty}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <div className="cart-hide">
        <p>
          <FormatPrice price={data.price * data.qty} />
        </p>
      </div>
      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem()} />
      </div>
    </div>
  );
};

export default CartItem;
