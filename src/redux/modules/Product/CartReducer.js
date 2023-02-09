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

const initialState = {
  cartItems: [],
  val: 0,
};

export default (state = initialState, { type, payload }) => {
  // console.log("reducer", payload);
  switch (type) {
    case "ADD_TO_CART":
      const inCart = state.cartItems.find((product) =>
        product.id == payload.cartItem.id ? true : false
      );
      return {
        ...state,
        cartItems: inCart
          ? state.cartItems.map((product) =>
              product.id == payload.cartItem.id
                ? { ...product, qty: payload.qty }
                : product
            )
          : [...state.cartItems, { ...payload.cartItem, qty: payload.qty }],
      };

    case "INCREASE_CART_PRODUCT":
      return {
        ...state + 1,
        val: payload,
      };

    default:
      return state;
  }
};
