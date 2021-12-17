import React from 'react';
import './App.css';
import { ProductCategories } from '../features/ProductCategories/productCategories';
import { Counter } from '../features/counter/Counter';
import { Login } from '../features/login/Login';
import { Cart } from '../features/Cart/Cart';
import { ProductList } from '../features/ProductList/productList';
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
            <ProductCategories />
          </div>
          <div className="productListContainer">
            <h2 className="title">Product List</h2>
            <ProductList/>
          </div>
          <div className="cartContainer">
            <h2 className="title">Cart</h2>
            <Cart />
          </div>
        </div>
        <Counter />
      </div>
      
    </div>
  );
}

export default App;
