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
      counter: 0,
    };
  }
  updateCounter = (a) => {
    this.setState({ counter: a });
  };
  addToBasket = (e) => {
    let index = this.state.basketArr.indexOf(e.target.value);
    if (index === -1) {
      this.state.basketArr.push(e.target.value);
      this.setState({ basketArr: this.state.basketArr });
    } else {
      document.getElementById(`${e.target.value}counter`).innerText =
        Number(document.getElementById(`${e.target.value}counter`).innerText) +
        1;
    }
  };
  removeFromBasket = (e) => {
    let index = this.state.basketArr.indexOf(e.target.value);
    if (document.getElementById(`${e.target.value}counter`).innerText != 1) {
      document.getElementById(`${e.target.value}counter`).innerText =
        Number(document.getElementById(`${e.target.value}counter`).innerText) -
        1;
    } else {
      this.state.basketArr.splice(index, 1);
      this.setState({ basketArr: this.state.basketArr });
    }
  };
  render() {
    return (
      <div>
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
            counter={this.state.counter}
          />
        </div>
      </div>
    );
  }
}

export default Main;
