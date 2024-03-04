// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './AddToCart';

const Store = configureStore({
  reducer: {
    cart: cartReducer,
  }
});

export default Store;
