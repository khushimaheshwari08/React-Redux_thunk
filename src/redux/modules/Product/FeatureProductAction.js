import { axiosCall } from "../../axiosCall";


export const productAction = () => {
  const path = "products";
  const type = "PRODUCT_POST";
  const headers ={
    Accept:"application/json",
    "Content-Type":"application/json"
  }
  return axiosCall("get", path, type,headers );
};
