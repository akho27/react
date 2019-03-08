import {
  GET_PRODUCTS_INIT,
  GET_PRODUCTS_SUCCESS
} from "../actionTypes/product.js";
import { fromJS } from "immutable";

const initialState = fromJS({ products: [], isLoading: false });
let productReducer = (state, action) => {
  state = initialState;
  switch (action.type) {
    case GET_PRODUCTS_INIT:
      return state.set("isLoading", true);
    case GET_PRODUCTS_SUCCESS:
      return state.set("isLoading", false).set("products", fromJS(action.data));
    default:
      return state;
  }
};

export default productReducer;
