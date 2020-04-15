import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox'

class App extends Component {
  render() {
    return (
      <div className="App">
        {foods.map((food) =>
          <FoodBox food={food} />
        )}

      </div>
    );
  }
}

export default App;
