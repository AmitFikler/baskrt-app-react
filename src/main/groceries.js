import React from 'react';
import GroceriesItem from './geoceriesItem';

class Groceries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceriesArr: props.groceriesArr,
      basketArr: props.basketArr,
      addToBasket: props.addToBasket,
    };
  }
  render() {
    return (
      <div>
        <h2>Groceries</h2>
        <ul>
          <GroceriesItem
            groceriesArr={this.state.groceriesArr}
            basketArr={this.state.basketArr}
            addToBasket={this.state.addToBasket}
          />
        </ul>
      </div>
    );
  }
}

export default Groceries;
