import React from "react";

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      stock: ""
    };
    this.pricing = React.createRef();
  }

  // Since this is a normal function, need to bind(this)
  // If it is arrow function then need not to bind(this)
  handleOnTitleChange(tbxTitle) {
    let textInput = tbxTitle.target.value;
    console.log(textInput);
    // Question: doing this way only updates the title, what if I want to equate this.state to this, ie. contain only title key.
    // Answer: Can't be done, setState act as Object.assign(initial, input)
    this.setState({ title: textInput });
  }

  handleOnStockChange(tbxStock) {
    let textInput = Number(tbxStock.target.value);
    console.log(textInput);
    this.setState({ stock: textInput });
  }

  async handleOnSubmit(submitButton) {
    submitButton.preventDefault();
    let data = { ...this.state };
    data.price = Number(this.pricing.current.value);
    let product = await fetch("http://localhost:4000/product", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json());
    alert(`New product added and saved - product id: ${product.id}`);
  }

  getValue = () => {
    alert(this.pricing.current.value);
  };

  setValue = () => {
    this.pricing.current.value = Math.round(Math.random() * 1000);
    this.pricing.current.focus();
  };

  render() {
    return (
      <div>
        <button onClick={this.getValue}>Get</button>
        <button onClick={this.setValue}>Set</button>
        <form onSubmit={this.handleOnSubmit.bind(this)}>
          <input
            type="text"
            placeholder={`Enter device model`}
            value={this.state.title}
            onChange={this.handleOnTitleChange.bind(this)}
          />

          <input
            type="text"
            placeholder={`Tab 'Set' to generate an amount`}
            ref={this.pricing}
          />

          <input
            type="number"
            placeholder={`Enter amount of stock`}
            // value={this.state.stock}
            onChange={this.handleOnStockChange.bind(this)}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default AddProduct;
