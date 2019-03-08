import React, { Component } from "react";

class TryCatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isErrored: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ isErrored: true });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isErrored ? (
          <div>
            <h1>Something went wrong.</h1>
          </div>
        ) : (
          this.props.children
        )}
      </React.Fragment>
    );
  }
}

export default TryCatch;
