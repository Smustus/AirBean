import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/orderReducer";
import sendOrder from "../reducers/statusReducer";
import setLoginState from "../reducers/loggedInReducer";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        orders: sendOrder,
        loginStatus: setLoginState
    }
   
});

export default store;


