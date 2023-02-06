// const getLocaLCartData = () => {
//     let localCartData = localStorage.getItem("Cartvalue");
//     const parsedData =JSON.parse(localCartData);
//     if(!Array.isArray(parsedData)) return [];
  
//     return parsedData;
//   };
  

const initialState = {
    // // cart: getLocaLCartData(),
    // total_item: "",
    // total_price: "",
    // shipping_fee: 50000,
    cart:{},
  };
  
  export default (state = initialState, { type, payload}) => {
    // console.log(payload);
    switch (type) {
      case "CART_PRODUCT_SUCCESS":
        return {
          ...state,
          cartProducts: payload,
        };
      default:
        return state;
    }
  };
