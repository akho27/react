import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import List from "./component/List";
import Footer from "./component/Footer";
import AddProduct from "./component/AddProduct";
import { Route, Switch } from "react-router-dom";
import Nav from "./component/Nav";
import Detail from "./component/Detail";
import NoMatch from "./component/NoMatch";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Switch>
          {/* Wrapping in Switch so that it is first match basis */}
          <Route exact path="/products" component={List} />
          <Route path="/products/new" component={AddProduct} />
          <Route path="/products/:productId" component={Detail} />
          <Route render={props => <NoMatch {...props} test="1" />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
