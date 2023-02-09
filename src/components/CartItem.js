import React, { useState } from "react";
import FormatPrice from "../Helpers/FormatPrice";
import { FaTrash } from "react-icons/fa";
import CartToggleAmount from "./CartToggleAmount";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ id, name, price,qty }) => {
  const [amount, setAmount] = useState(1);
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
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div></div>
        <div>
          <p>{name}</p>
          <div className="color-div"></div>
        </div>
      </div>
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>
      <CartToggleAmount
        amount={qty}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <div className="cart-hide">
        <p>
          <FormatPrice price={price*qty} />
        </p>
      </div>
      <div>
        <FaTrash className="remove_icon" />
      </div>
    </div>
  );
};

export default CartItem;
