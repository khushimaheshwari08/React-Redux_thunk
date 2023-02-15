const initialState = {
  grid_view: true,
  sorting_value: "lowest",
  filter_products: [],
  all_products: [],
  filters: {
    text: "",
    // category: "all",
    // company: "all",
    // maxPrice: 0,
    // price: 0,
    // minPrice: 0,
  },
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

    case "LOAD_ALL_PRODUCT_DATA":
      return {
        ...state,
        filter_products: payload,
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
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

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

      
      case "LOAD_ALL_FILTER_PRODUCT_DATA":
        return {
          ...state,
          all_products: payload,
        };
      

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text,  } = state.filters;
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }
      // if (category !== "all") {
      //   tempFilterProduct = tempFilterProduct.filter((curElem) => {
      //     return curElem.category === category;
      //   });
      // }
      // if (company !== "all") {
      //   tempFilterProduct = tempFilterProduct.filter((curElem) => {
      //     return curElem.company.toLowerCase() === company.toLowerCase();
      //   });
      // }
      // if (color !== "all") {
      //   tempFilterProduct = tempFilterProduct.filter((curElem) =>
      //     curElem.colors.includes(color)
      //   );
      // }
      // if (price) {
      //   tempFilterProduct = tempFilterProduct.filter((curElem) =>
      //     curElem.price <= price
      //   );
      // }
      return {
        ...state,
        filter_products: tempFilterProduct,
      };


    default:
      return state;
  }
};
