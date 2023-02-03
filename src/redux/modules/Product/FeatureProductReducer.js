const initialState = {
  // isLoading: false,
  // isError: false,
  // products: [],
  featureProducts: [],
  // isSingleLoading: false,
  // singleProduct: {},
};

export default (state = initialState, { type, payload }) => {
  // console.log(payload);
  switch (type) {
    case "PRODUCT_POST_SUCCESS":
      return {
        ...state,
        featureProducts: payload,
      };
    default:
      return state;
  }
};
