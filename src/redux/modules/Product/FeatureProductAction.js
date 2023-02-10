import { axiosCall } from "../../axiosCall";

export const productAction = () => {
  const path = "products";
  const type = "PRODUCT_POST";
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  return axiosCall("get", path, type, headers);
};

export const singleProductAction = (id) => {
  const path = `products/${id}`;
  const type = "SINGLE_PRODUCT_POST";
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  return axiosCall("get", path, type, headers);
};

// export const cartAction = () => {
//   // console.log(id)
//   const path =   "products";
//   const type = "CART_PRODUCT";
//   const headers = {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   };
//   return axiosCall("get", path, type, headers);
// };

// export const selectedCartItemAction = (selectedCartItem) => {
//   return {
//     type : "SELECTED_CART_ITEM_ACTION",
//     payload: selectedCartItem
//   }
// };

//

export const addToCartAction = (cartItem, amount) => {
  // console.log("action",cartItem)
  return {
    type: "ADD_TO_CART",
    payload: { cartItem: cartItem, qty: amount },
  };
};

export const increaseCartProduct = (id) => {
  return {
    type: "INCREASE_CART_PRODUCT",
    payload: id
  };
};
