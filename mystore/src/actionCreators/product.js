import {
  GET_PRODUCTS_INIT,
  GET_PRODUCTS_SUCCESS
} from "../actionTypes/product.js";

let getProductsActionCreator = (event, data) => {
  return {
    type: event,
    data: data
  };
};

export function getProductsAsyncActionCreator() {
  return async function(dispatch) {
    try {
      dispatch(getProductsActionCreator(GET_PRODUCTS_INIT));
      let data = await fetch("http://localhost:4000/product").then(response =>
        response.json()
      );
      dispatch(getProductsActionCreator(GET_PRODUCTS_SUCCESS, data));
      // dispatch({ type: "GET_PRODUCTS_SUCCESS", data });
    } catch (err) {
      // dispatch(getProductsActionCreator("GET_PRODUCTS_FAILURE"));
    }
  };
}
