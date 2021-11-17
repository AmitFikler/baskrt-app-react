import React from 'react';
import Basket from '../main/basket';
import Groceries from '../main/groceries';
import SearchBar from '../main/searchBar';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceriesArr: [
        'Strawberry',
        'Blueberry',
        'Orange',
        'Banana',
        'Apple',
        'Carrot',
        'Celery',
        'Mushroom',
        'Green',
        'Pepper',
        'Eggs',
        'Cheese',
        'Butter',
        'Chicken',
        'Beef',
        'Pork',
        'Fish',
        'Rice',
        'Pasta',
        'Bread',
      ],
      basketArr: [],
      countr: 0,
    };
  }

  updateCountr = () => {
    this.setState({ countr: this.state.countr + 1 });
  };
  addToBasket = (e) => {
    let index = this.state.basketArr.indexOf(e.target.value);
    if (index === -1) {
      this.state.basketArr.push(e.target.value);
      this.setState({ basketArr: this.state.basketArr });
    } else {
      this.updateCountr();
    }
  };
  removeFromBasket = (e) => {
    let index = this.state.basketArr.indexOf(e.target.value);
    this.state.basketArr.splice(index, 1);
    this.setState({ basketArr: this.state.basketArr });
  };
  render() {
    return (
      <div>
        <h1>Main</h1>
        <SearchBar />
        <div className="rows">
          <Groceries
            groceriesArr={this.state.groceriesArr}
            basketArr={this.state.basketArr}
            addToBasket={this.addToBasket}
          />
          <Basket
            basketArr={this.state.basketArr}
            removeFromBasket={this.removeFromBasket}
            countr={this.state.countr}
            update={this.updateCountr}
          />
        </div>
      </div>
    );
  }
}

export default Main;
