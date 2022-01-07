import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        total: 0,
        cartItems: [ ],
    }, 
    reducers: {
        addItemToCart: (state, action) => {
            // I need to push the contents into the cartItems by listing out the attributes and their action payload
            // if the cart contains an id, which matches the current id, then instead increment the quantity of the items for that id in the cart
            const ProductToAddID = action.payload.product.id;   
            let foundDuplicate = state.cartItems.find(item => item.id === ProductToAddID);
            if (foundDuplicate) {
                console.log("ID has been found")
                // find the index of that product in the cartitems array
                let objIndex = state.cartItems.findIndex((obj => obj.id === ProductToAddID));
                state.cartItems[objIndex].quantity += action.payload.quantity;
                state.cartItems[objIndex].totalPrice = state.cartItems[objIndex].quantity * action.payload.product.price;
            } else {
                // Else add the item to cart
                state.cartItems.push({
                    id: action.payload.product.id,
                    productId: action.payload.product.id,
                    title: action.payload.product.title,
                    subtitle: action.payload.product.subtitle,
                    quantity: action.payload.quantity,
                    size: action.payload.product.size,
                    totalPrice: action.payload.quantity * action.payload.product.price
                })
            }
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
