import React from 'react';

class GroceriesItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceriesArr: props.groceriesArr,
      basketArr: props.basketArr,
      addToBasket: props.addToBasket,
    };
  }
  render() {
    return this.state.groceriesArr.map((item) => (
      <li key={item}>
        <button onClick={this.state.addToBasket} value={item}>
          +
        </button>
        {item}
      </li>
    ));
  }
}

export default GroceriesItem;
