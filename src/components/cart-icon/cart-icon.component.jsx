import { useContext } from "react";
import { ShoppingIcon } from "./cart-icon.styles";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainerItemCount,CartIconContainer } from "./cart-icon.styles";

const CartIcon = ({toggleDropdownVisibility}) => {
    const {numberOfItems} = useContext(CartContext);

    return (
        <CartIconContainer onClick={toggleDropdownVisibility}>
            <ShoppingIcon/>
            <CartIconContainerItemCount>{numberOfItems()}</CartIconContainerItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;