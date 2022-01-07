import React from 'react';
import { useSelector } from 'react-redux';
import {getCartItems, getTotalCartValue} from './cartSlice';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
  const cartValue = useSelector(getTotalCartValue).toFixed(2);
  const cartItems = useSelector(getCartItems);  

  return (
    <ul className="cartListContainer">
      <h2 className="cartValue">Total: £{cartValue}</h2>
      {cartItems.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id}/>)}
    </ul>
  );
}

export default Cart;
