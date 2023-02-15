export const setGridView = () => {
  return {
    type: "SET_GRID_VIEW",
  };
};

export const setListView = () => {
  return {
    type: "SET_LIST_VIEW",
  };
};

export const sorting = (event) => {
  let userValue = event.target.value;
  // console.log(userValue);
  return {
    type: "GET_SORT_VALUE",
    payload: userValue,
  };
};

export const sortingProducts = (data) => {
  return {
    type: "SORTING_PRODUCTS",
    payload: data,
  };
};

export const getAllProductsData = (data) => {
  return {
    type: "LOAD_ALL_PRODUCT_DATA",
    payload: data,
  };
};

export const getAllFilterProductsData = (data) => {
  return {
    type: "LOAD_ALL_FILTER_PRODUCT_DATA",
    payload: data,
  };
};

export const updateFilterValues = (event) => {
  let name = event.target.name;
  let value = event.target.value;
  return {
    type: "UPDATE_FILTERS_VALUE",
    payload: { name, value },
  };
};

export const filterProducts = (data) => {
  return {
    type: "FILTER_PRODUCTS",
    payload: data,
  };
};
