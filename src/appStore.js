import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./slices/cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cardReducer,
    }
});

export default appStore;
