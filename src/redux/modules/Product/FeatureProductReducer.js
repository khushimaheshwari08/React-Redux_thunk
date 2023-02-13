const initialState = {
  featureProducts: [],
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
