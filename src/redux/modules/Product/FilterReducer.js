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

    // case "GET_SORT_VALUE":
    //   return {
    //     ...state,
    //     sorting_value: payload,
    //   };

    //   case "LOAD_FILTER_PRODUCTS":
    //     let priceArr = payload.map((curElem) => curElem.price);
    //     let maxPrice = Math.max(...priceArr);
    //     let minPrice=Math.min(...priceArr);
    //     // console.log(maxPrice);
  
    //     return {
    //       ...state,
    //       filter_products: [...payload],
    //       all_products: [...payload],
    //     };

    // case "SORTING_PRODUCTS":
    //   let newSortData;
    //   const {sorting_value } = state;
    //   let tempSortProduct = [...filter_products];

    //   const sortingProducts = (a, b) => {
    //     if (sorting_value === "lowest") {
    //       return a.price - b.price;
    //     }

    //     if (sorting_value === "highest") {
    //       return b.price - a.price;
    //     }

    //     if (sorting_value === "a-z") {
    //       return a.name.localeCompare(b.name);
    //     }

    //     if (sorting_value === "z-a") {
    //       return b.name.localeCompare(a.name);
    //     }
    //   };

    //   newSortData = tempSortProduct.sort(sortingProducts);

    //   return {
    //     ...state,
    //     filter_products: newSortData,
    //   };

    default:
      return state;
  }
};
