import productReducer from "./product";
import { fromJS } from "immutable";
import { GET_PRODUCTS_INIT } from "../actionTypes/product";

describe("Product Reducer", () => {
  it("should return initial state", () => {
    const initialState = fromJS({ products: [], isLoading: false });
    let action = { type: "@@INIT" };
    let state = productReducer(undefined, action);
    expect(state.toJS()).toMatchObject(initialState.toJS());
  });

  it("should return state with isLoading set to true", () => {
    const prevState = fromJS({ products: [], isLoading: false });
    let action = { type: GET_PRODUCTS_INIT };
    let nextState = productReducer(prevState, action);
    expect(nextState.get("isLoading")).toBeFalsy();
  });
});
