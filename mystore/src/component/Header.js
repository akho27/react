import React, { Component } from "react";

class Header extends Component {
  render() {
    return <h1>myStore ({new Date().toTimeString()})</h1>;
  }
}

export default Header;