import React, { Component } from 'react';
import AppNavBar from '../src/components/AppNavbar'
import ShoppingList from '../src/components/ShoppingList'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
