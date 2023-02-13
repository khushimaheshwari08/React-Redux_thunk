const initialState = {
  grid_view: true,
  sorting_value: "lowest",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: payload,
      };

    // case "SORTING_PRODUCTS":
    // return {
    //   ...state,
    //   sorting_value: payload,
    // };

    default:
      return state;
  }
};
