import { useContext } from "react";
import CheckoutRowItem from "../../components/checkout-row-item/checkout-row-item.component";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
    const {cartItems,totalPrice} = useContext(CartContext);

    return (
        <>
            <div className="checkout-container">
                <div className="checkout-header">
                        <div className="header-block">Product</div>
                        <div className="header-block">Description</div>
                        <div className="header-block">Quantity</div>
                        <div className="header-block">Price</div>
                        <div className="header-block">Remove</div>
                </div>
                            
                {
                    cartItems.map((item) =>{
                        return <CheckoutRowItem key={item.id} cartItem={item}/>
                    })
                }
                <span className="total">
                Total: {totalPrice()}
                </span>
            </div>

        </>
      
    );
}

export default Checkout;