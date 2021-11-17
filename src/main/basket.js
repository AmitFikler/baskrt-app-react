import React from 'react';

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basketArr: props.basketArr,
      removeFromBasket: props.removeFromBasket,
      counter: props.counter,
    };
  }
  render() {
    return (
      <div>
        <h2>Basket</h2>
        <ul>
          {this.state.basketArr.map((item) => (
            <li key={item}>
              <button onClick={this.state.removeFromBasket} value={item}>
                -
              </button>{' '}
              <span id={item + 'counter'}>{this.state.counter + 1} </span>{' '}
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Basket;
