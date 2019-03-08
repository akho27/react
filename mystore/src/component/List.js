import React from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { getProductsAsyncActionCreator } from "../actionCreators/product";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: false
    };
  }

  async componentDidMount() {
    try {
      // this.setState({ isLoading: true });
      // let data = await fetch("http://localhost:4000/product").then(response =>
      //   response.json()
      // );
      // this.setState({ isLoading: false, products: data });

      // Part 2
      this.props.dispatch(getProductsAsyncActionCreator());
    } catch (exp) {}
  }

  handleOnClick = id => {
    // let products = this.props.products;
    // let index = products.findIndex(p => p.id === id);
    // products[index].stock--;
    // products[index] = { ...products[index] };
  };

  _renderProduct() {
    return this.props.products
      .toJS()
      .map(
        item =>
          item.stock > 0 && (
            <Item key={item.id} product={item} onSell={this.handleOnClick} />
          )
      );
  }

  render() {
    return (
      <div>
        <h2>Products</h2>
        {this.props.isLoading ? <p>Loading...</p> : this._renderProduct()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.productState.get("products"),
    isLoading: state.productState.get("isLoading")
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(List);
