export interface CartItem {
	id: number;
	quantity: number;
}

export interface ShoppingCartState {
	isOpen: boolean;
	cartItems: CartItem[];
}
