import { axiosCall } from "../../axiosCall";

export const productAction = () => {
  const path = "products";
  const type = "PRODUCT_POST";
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  return axiosCall("get", path, type, headers);
};

export const singleProductAction = (id) => {
  const path = `products/${id}`;
  const type = "SINGLE_PRODUCT_POST";
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  return axiosCall("get", path, type, headers);
};