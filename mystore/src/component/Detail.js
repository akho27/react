import React from "react";

const Detail = props => (
  <div>
    <h1>Details for Product {props.match.params.productId}</h1>
    <button onClick={() => props.history.goBack()}>Back</button>
    <button onClick={() => props.history.push("/products/new")}>
      Add Product
    </button>
  </div>
);

export default Detail;
