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
  return async function(dispatch, getState) {
    try {
      const state = getState();
      const page = state.productState.get("page");
      const limit = state.productState.get("limit");
      const isLoading = state.productState.get("isLoading");
      const maxProduct = 20;
      const numOfProduct = state.productState.get("products").size;

      dispatch(getProductsActionCreator(GET_PRODUCTS_INIT));
      if (!isLoading && numOfProduct != maxProduct) {
        let data = await fetch(
          `http://10.0.2.2:4000/products?_page=${page}&_limit=${limit}`
        ).then(response => response.json());
        dispatch(getProductsActionCreator(GET_PRODUCTS_SUCCESS, data));
        // dispatch({ type: "GET_PRODUCTS_SUCCESS", data });
      }
    } catch (err) {
      // dispatch(getProductsActionCreator("GET_PRODUCTS_FAILURE"));
    }
  };
}
