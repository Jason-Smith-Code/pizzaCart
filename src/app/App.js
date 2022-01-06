import React from 'react';
import './App.css';
import Filters from '../components/Filter/Filters';
import { Login } from '../features/login/Login';
import Cart from '../features/Cart/Cart';
import Products from '../components/Products/Products';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <div className="contentWidth">
        <header className="App-header">
          <img alt="logo"src={logo}></img>
          <Login />
        </header>
        <div className="main">
          <div className="productCategoryContainer">
            <h2 className="title">Menu</h2>
            <Filters />
          </div>
          <div className="productListContainer">
            <h2 className="title">Product List</h2>
            <Products/>
          </div>
          <div className="cartContainer">
            <h2 className="title">Cart</h2>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
