import React from 'react';
import { useSelector } from 'react-redux';
import {getCartItems} from './cartSlice';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector(getCartItems);  

  return (
    <ul className="cartListContainer">
      {cartItems.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id}/>)}
    </ul>
  );
}

export default Cart;
