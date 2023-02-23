import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { CheckoutItemContainer ,ImageContainer} from "./checkout-row-item.styles";

const CheckoutRowItem = ({cartItem}) =>{
    const {name,price, quantity, imageUrl} = cartItem;
    const {increaseQuantityOfCartItem, decreaseQuantityOfCartItem,deleteCartItem} = useContext(CartContext);

    const increase = () => {
        increaseQuantityOfCartItem(cartItem);
    }   

    const decrease = () => {
        decreaseQuantityOfCartItem(cartItem)
    }

    const deleteItem = () => {
        deleteCartItem(cartItem);
    }

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name}/>
            </ImageContainer>
            <div className="name">
                {name}
            </div>
            <div className="quantity">
                <div className="arrow" onClick={decrease}>&#10094;</div>
                <div className="value">{quantity}</div>
                <div className="arrow" onClick={increase}>&#10095;</div>
            </div>
            <div className="price">
                {price}
            </div>
            <div className="remove-button">
                <span onClick={deleteItem}>&#10005;</span>
            </div>
        </CheckoutItemContainer>
    )
}

export default CheckoutRowItem;