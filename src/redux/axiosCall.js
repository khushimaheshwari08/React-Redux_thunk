import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.pujakaitem.com/api/",
});

export const axiosCall = (method, url, type,  headers,data,) => {
//   console.log(method, url, type, data, headers);

  return async (dispatch) => {
    const apiData = data
      ? { method, url, data, headers }
      : { method, url, headers };

    instance(apiData)
      .then((response) => {
        if (response.data.code == 200) {
          // console.log(response);
          dispatch({
            type: `${type}_SUCCESS`,
            payload: response.data,
          });
        } else {
          dispatch({
            type: `${type}_ERROR`,
            payload: response.data,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: `${type}_ERROR`,
          payload: error.response,
        });
      });
  };
};
