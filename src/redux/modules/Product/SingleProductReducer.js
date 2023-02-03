const initialState = {
    // isLoading: false,
    // isError: false,
    // products: [],
    // featureProducts: [],
    // isSingleLoading: false,
    singleProduct: {},
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case "SINGLE_PRODUCT_POST_SUCCESS":
        return {
          ...state,
          singleProducts: payload,
        };
      default:
        return state;
    }
  };