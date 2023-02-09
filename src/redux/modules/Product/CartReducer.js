// const getLocaLCartData = () => {
//     let localCartData = localStorage.getItem("Cartvalue");
//     const parsedData =JSON.parse(localCartData);
//     if(!Array.isArray(parsedData)) return [];

//     return parsedData;
//   };

// const initialState = {
//   // // cart: getLocaLCartData(),
//   // total_item: "",
//   // total_price: "",
//   // shipping_fee: 50000,
//   cart: {},
//   selectedCartItems: [],
// };

// export default (state = initialState, { type, payload }) => {
//   // console.log(payload);
//   switch (type) {
//     case "CART_PRODUCT_SUCCESS":
//       return {
//         ...state,
//         cartProducts: payload,
//       };

//     case "SELECTED_CART_ITEM_ACTION":
//       return {
//         ...state,
//         selectedCartItems: payload,
//       };
//     default:
//       return state;
//   }
// };

// const getLocaLCartData = () => {
//   let localCartData = localStorage.getItem("Cartvalue");
//   const parsedData = JSON.parse(localCartData);
//   if (!Array.isArray(parsedData)) return [];

//   return parsedData;
// };

const initialState = {
  cartItems: [],
};

export default (state = initialState, { type, payload }) => {
  console.log("reducer", payload);
  switch (type) {
    case "CART_PRODUCTS_SUCCESS":
      return {
        ...state,
        cartItems: payload,
      };

    default:
      return state;
  }
};
