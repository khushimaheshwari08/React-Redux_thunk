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

// export const sorting = (event) => {
//   let userValue = event.target.value;
//   // console.log(userValue);
//   return {
//     type: "GET_SORT_VALUE",
//     payload: userValue,
//   };
// };

// export const sortingValues = (sortingvalue) =>{
//   return{
//     type:"SORTING_PRODUCTS",
//     payload:{sorting_value:sortingvalue}
//   }
// }
