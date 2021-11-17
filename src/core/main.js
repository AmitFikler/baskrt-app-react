import React from 'react';
import Basket from '../main/basket';
import Groceries from '../main/groceries';
import SearchBar from '../main/searchBar';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Main</h1>
        <SearchBar />
        <Basket />
        <Groceries />
      </div>
    );
  }
}

export default Main;
