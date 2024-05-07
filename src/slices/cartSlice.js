import { createSlice } from "@reduxjs/toolkit";

const MAX_CART_ITEMS = 21;

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            if(state.items.length < MAX_CART_ITEMS) {
                const isItemExists = state.items.find(item => item.card.info.id === action.payload.card.info.id);
                if(isItemExists) {
                    isItemExists.quantity += 1;
                } else {
                    state.items.push({...action.payload, quantity: 1});
                }
            } 
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(items => items.card.info.id !== action.payload.card.info.id);
        },
        decreaseQuantity: (state, action) => {
            const existingItem = state.items.find(item => item.card.info.id === action.payload.card.info.id);
            if(existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                state.items = state.items.filter(items => items.card.info.id !== action.payload.card.info.id);
            }
        },
        increaseQuantity: (state, action) => {
            const existingItem = state.items.find(item => item.card.info.id === action.payload.card.info.id);
            if(existingItem && existingItem.quantity < MAX_CART_ITEMS) {
                existingItem.quantity += 1;
            }
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const { addItem, removeItem, decreaseQuantity, increaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;