import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-row-item.styles.scss";

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
        <div className="checkout-item-container">
            <div className="image-container ">
                <img src={imageUrl}/>
            </div>
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
        </div>
    )
}

export default CheckoutRowItem;