import { Offcanvas, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import storeItems from "../data/items.json";
import { RootState } from "../store";
import { closeCart, openCart } from "../store/reducers/shoppingCartSlice";
import { CartItem as CartItemType } from "../types/shoppingCart.types";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";

export function ShoppingCart() {
	const dispatch = useDispatch();
	const cartItems = useSelector(
		(state: RootState) => state.shoppingCart.cartItems
	);
	const isOpen = useSelector((state: RootState) => state.shoppingCart.isOpen);
	console.log("isOpen: ", isOpen);

	return (
		<Offcanvas
			show={isOpen}
			placement="end"
			onHide={() => dispatch(closeCart())}
		>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Cart</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<Stack gap={3}>
					{cartItems.map((item: CartItemType) => (
						<CartItem key={item.id} {...item} />
					))}
					<div className="ms-auto fw-bold fs-5">
						Total{" "}
						{formatCurrency(
							cartItems.reduce((total: number, cartItem: CartItemType) => {
								const item = storeItems.find((item) => item.id === cartItem.id);
								return total + (item?.price || 0) * cartItem.quantity;
							}, 0)
						)}
					</div>
				</Stack>
			</Offcanvas.Body>
		</Offcanvas>
	);
}
