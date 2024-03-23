import { combineReducers, configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./reducers/shoppingCartSlice";

export const store = configureStore({
	reducer: {
		shoppingCart: shoppingCartReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
