import React from "react";
import Item from "./Item";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Link } from "react-router-dom";
import { shallowToJson } from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("Item component", function() {
  let p, wrapper;
  beforeEach(() => {
    p = { id: 1, title: "test", price: 10, stock: 10 };
    wrapper = shallow(<Item product={p} onSell={() => {}} />);
  });

  afterEach(() => {
    p = null;
    wrapper = null;
  });

  it("should render a product", function() {
    expect(wrapper).toBeTruthy();
  });

  it("should render a Link", function() {
    let linkWrapper = wrapper.find(Link);
    expect(linkWrapper.props().to).toBe("/products/1");
  });

  it("should invoke parents onSell", function() {
    let mockParentFn = jest.fn();
    wrapper = shallow(<Item product={p} onSell={mockParentFn} />);
    let buttonWrapper = wrapper.find("button");
    buttonWrapper.simulate("click");
    expect(mockParentFn).toHaveBeenCalledWith(1);
  });

  it("snapshots must be same", function() {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
