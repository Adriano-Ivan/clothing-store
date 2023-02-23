import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContainerCartItems,CartDropdownContainer,CartDropdownContainerEmptyMessage } from "./cart-dropdown.styles";

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate("/checkout");
    }

    return (
        <CartDropdownContainer>
            <CartDropdownContainerCartItems>
                {
                    cartItems.map((item) =>{
                        return <CartItem key={item.id} cartItem={item} />
                    })
                }
            </CartDropdownContainerCartItems>

            {
                cartItems.length === 0 &&

                <CartDropdownContainerEmptyMessage>
                You did not choose any items
                </CartDropdownContainerEmptyMessage>

            }

            <Button onClick={goToCheckout}>Go to checkout</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;