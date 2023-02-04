import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartToggleAmount = (props) => {
  const [amount, setAmount] = useState(1);
  //   const setDecrease = () => {
  //     amount > 1 ? setAmount(amount - 1) : setAmount(1);
  //   };

  const setDecrease = () => {
    if (amount !== 1) {
      setAmount(amount - 1);
    }
  };

  const setIncrease = () => {
    if (amount < props.singleProductResponse.stock) {
      setAmount(props.singleProductResponse.stock);
    }
  };

  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartToggleAmount;
