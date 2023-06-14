import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './Components/Cart/CartSlice';
import authSlice from './Components/Authenciation/authSlice';

export const store = configureStore({
    reducer: {
      cart: CartSlice,
      auth: authSlice,
    },
  })