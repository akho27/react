import {
  GET_PRODUCTS_INIT,
  GET_PRODUCTS_SUCCESS
} from "../actionTypes/product.js";
import { fromJS } from "immutable";

const initialState = fromJS({
  products: [],
  isLoading: false,
  page: 1,
  limit: 10
});

let productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_INIT:
      return state.set("isLoading", true);
    case GET_PRODUCTS_SUCCESS:
      return state
        .set("isLoading", false)
        .set(
          "products",
          fromJS([...state.get("products").toJS(), ...action.data])
        )
        .set("page", state.get("page") + 1);
    default:
      return state;
  }
};

export default productReducer;
