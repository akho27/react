import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Item extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(`constructor`);
  }

  //   shouldComponentUpdate = (nextProps, nextState) => {
  //     let state = this.props.product.stock === nextProps.product.stock;
  //     console.log(`shouldComponentUpdate: ${state}`);
  //     return !state;
  //   };

  componentDidMount() {
    console.log(`componentDidMount`);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`componentDidUpdate`);
  }

  componentWillUnmount() {
    console.log(`componentWillUnmount`);
  }

  render() {
    let {
      product: { id, title, price, stock },
      onSell
    } = this.props;
    console.log(`render: ${id}`);
    return (
      <div>
        <h3>
          <Link to={`/products/${id}`}>
            {title}({stock})
          </Link>
        </h3>
        <p>{price}</p>
        <button onClick={() => onSell(id)}>Buy Me</button>
      </div>
    );
  }
}

Item.defaultProps = {
  product: { id: 0, title: "N/A", stock: -1, price: -1 },
  onSell: () => {}
};

Item.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired
  }),
  onSell: PropTypes.func.isRequired
};

export default Item;
