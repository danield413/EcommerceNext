import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer from './auth';
import productsReducer from './products';

const reducer = combineReducers({
    auth: authReducer,
    products: productsReducer
})

export const store = configureStore({
    reducer
})