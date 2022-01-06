import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        total: 0,
        cartItems: [ ],
    }, 
    reducers: {
        addItemToCart: (state, action) => {
            // generate id for cart item
            const pseudoId = (new Date().getTime());
            // I need to push the contents into the cartItems by listing out the attributes and their action payload
            state.cartItems.push({
                id: pseudoId,
                productId: action.payload.product.id,
                title: action.payload.product.title,
                subtitle: action.payload.product.subtitle,
                quantity: action.payload.quantity,
                size: action.payload.product.size,
                totalPrice: action.payload.quantity * action.payload.product.price
            })
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId
            )
        }
    }
});

// create a variable to store all cart items
export const getCartItems = state => state.cart.cartItems;

// store the total value of a cart using .reduce
export const getTotalCartValue = state => {
    return state.cart.cartItems.reduce((total, cartItem) => {
        return cartItem.totalPrice + total;
    }, 0)
}   

// export actions (the reducers)
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
