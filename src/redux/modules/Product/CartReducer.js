
const initialState = {
  cartItems: [],
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
        ...state,
        cartItems: state.cartItems.map((product) =>
          product.id === payload.action
            ? { ...product, qty: product.qty + 1 }
            : product
        ),
      };

    default:
      return state;
  }
};
