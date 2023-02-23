
import { CartItemContainer, CartItemDetails, CartItemDetailsName } from "./cart-item.styles.jsx";

const CartItem = ({cartItem}) =>{
    const {name, quantity,imageUrl, price} = cartItem;

    return (
        <CartItemContainer>
            <img src={imageUrl} alt={name}/>

            <CartItemDetails>
                <CartItemDetailsName>{name}</CartItemDetailsName>
                <span className="price">{quantity} x ${price}</span>
            </CartItemDetails>
        
        </CartItemContainer>
    )
}

export default CartItem;