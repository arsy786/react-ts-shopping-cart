import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ShoppingCartState } from "../../types/shoppingCart.types";

const initialState: ShoppingCartState = {
	isOpen: false,
	cartItems: [],
};

const shoppingCartSlice = createSlice({
	name: "shoppingCart",
	initialState,
	reducers: {
		openCart: (state) => {
			state.isOpen = true;
		},
		closeCart: (state) => {
			state.isOpen = false;
		},
		increaseCartQuantity: (state, action: PayloadAction<number>) => {
			const id = action.payload;
			const item = state.cartItems.find((item) => item.id === id);
			if (item) {
				item.quantity++;
			} else {
				state.cartItems.push({ id, quantity: 1 });
			}
		},
		decreaseCartQuantity: (state, action: PayloadAction<number>) => {
			const id = action.payload;
			const item = state.cartItems.find((item) => item.id === id);
			if (item && item.quantity > 1) {
				item.quantity--;
			} else {
				state.cartItems = state.cartItems.filter((item) => item.id !== id);
			}
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			const id = action.payload;
			state.cartItems = state.cartItems.filter((item) => item.id !== id);
		},
	},
});

export const {
	openCart,
	closeCart,
	increaseCartQuantity,
	decreaseCartQuantity,
	removeFromCart,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
