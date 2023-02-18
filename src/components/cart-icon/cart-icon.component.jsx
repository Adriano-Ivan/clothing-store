import { useContext } from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

const CartIcon = ({toggleDropdownVisibility}) => {
    const {numberOfItems} = useContext(CartContext);

    return (
        <div onClick={toggleDropdownVisibility}className="cart-icon-container">
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{numberOfItems()}</span>
        </div>
    )
}

export default CartIcon