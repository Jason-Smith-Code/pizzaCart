import { configureStore } from '@reduxjs/toolkit';

// remember that since these are exported as default, I can give them any name I want as the import
import isLoggedReducer from '../features/login/loginSlice'; 
import cartReducer from '../features/Cart/cartSlice';
import inventoryReducer from '../features/Inventory/inventorySlice';

export default configureStore({
  reducer: {
    login: isLoggedReducer,
    cart: cartReducer,
    inventory: inventoryReducer
  },
});