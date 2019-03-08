import React from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { getProductsAsyncActionCreator } from "./actionCreators/product";
import {
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  RefreshControl
} from "react-native";

class List extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   products: [],
    //   isLoading: false
    // };
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
    return this.props.products.toJS().map(item => (
      <TouchableOpacity
        key={item.id}
        onPress={() => {
          this.props.navigation.navigate("Detail", { id: item.id });
        }}
      >
        <Item product={item} onSell={this.handleOnClick} />
      </TouchableOpacity>
    ));
  }

  _renderRefresh() {
    return (
      <RefreshControl
        onRefresh={() => this.props.dispatch(getProductsAsyncActionCreator())}
        refreshing={this.props.isLoading}
        tintColor={"#000"}
        title={"Refreshing..."}
        titleColor={"#00ff80"}
      />
    );
  }

  _renderItem({ index, item }) {}

  render() {
    return (
      <FlatList
        refreshControl={this._renderRefresh()}
        data={this.props.products}
        keyExtractor={({ item, index }) => `${index}`}
        renderItem={({ index, item }) => {
          return <Item product={item} onSell={this.handleOnClick} />;
        }}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          this.props.dispatch(getProductsAsyncActionCreator());
        }}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.productState.get("products").toJS(),
    isLoading: state.productState.get("isLoading")
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(List);
