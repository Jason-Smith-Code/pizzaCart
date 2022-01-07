import React from 'react';
import './App.css';
import Filters from '../components/Filter/Filters';
import { Login } from '../features/login/Login';
import Cart from '../features/Cart/Cart';
import Products from '../components/Products/Products';
import logo from './logo.png';
import {getTotalCartValue} from '../features/Cart/cartSlice';
import { useSelector } from 'react-redux';

// I have added a login component, but at this stage I have not learnt how to implement logging in and out, I will leave it here for now and work on it at a later stage

function App() {
  const cartValue = useSelector(getTotalCartValue).toFixed(2);

  return (
    <div className="App">
      <div className="contentWidth">
        <header className="App-header">
          <img alt="logo"src={logo}></img>
          <Login />
        </header>
        <div className="main">
          <div className="productCategoryContainer">
            <h2 className="title">Categories</h2>
            <Filters />
          </div>
          <div className="productListContainer">
            <h2 className="title">Pizza Products</h2>
            <Products/>
          </div>
          <div className="cartContainer">
            <h2 className="title cartValue">Cart Total: £{cartValue}</h2>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
