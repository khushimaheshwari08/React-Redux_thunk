const initialState = {
  featureProducts: [],  
  sorting_value: "lowest",
  filter_products: [],
};

export default (state = initialState, { type, payload }) => {
  // console.log(payload);
  switch (type) {
    case "PRODUCT_POST_SUCCESS":
      return {
        ...state,
        featureProducts: payload,
      };
      case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: payload,
      };

      
    case "SORTING_PRODUCTS":
      let newSortData;
      // let tempSortProduct = [...action.payload];

      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    default:
      return state;
  }
};
