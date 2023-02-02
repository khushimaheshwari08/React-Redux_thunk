const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

export default (state = initialState, { type, payload }) => {
  // console.log(payload);
  switch (type) {
    case "PRODUCT_POST":
      return {
        ...state,
        productResponse: payload,
      };
    default:
      return state;
  }
};
