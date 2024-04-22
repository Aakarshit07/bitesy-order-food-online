import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./slices/cartSlice";
import dataReducer from "./slices/dataSlice";

const appStore = configureStore({
    reducer: {
        cart: cardReducer,
        cardData: dataReducer,
    }
});

export default appStore;
