// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import countriesReducer from './slices/countriesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    countries: countriesReducer
  }
});