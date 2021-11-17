import React from 'react';

class Groceries extends React.Component {
  constructor(props) {
    super(props);
    this.groceriesArr = [
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
    ];
  }
  render() {
    return (
      <div>
        <h2>Groceries</h2>
        <ul>
          {this.groceriesArr.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Groceries;
