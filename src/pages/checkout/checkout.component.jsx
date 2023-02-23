import { Fragment, useContext } from "react";
import CheckoutRowItem from "../../components/checkout-row-item/checkout-row-item.component";
import { CartContext } from "../../contexts/cart.context";
import { CheckoutContainer, CheckoutHeader, CheckoutHeaderBlock, CheckoutHeaderTotal } from "./checkout.styles.jsx";

const Checkout = () => {
    const {cartItems,totalPrice} = useContext(CartContext);

    return (
        <Fragment>
            <CheckoutContainer>
                <CheckoutHeader>
                        <CheckoutHeaderBlock>Product</CheckoutHeaderBlock>
                        <CheckoutHeaderBlock>Description</CheckoutHeaderBlock>
                        <CheckoutHeaderBlock>Quantity</CheckoutHeaderBlock>
                        <CheckoutHeaderBlock>Price</CheckoutHeaderBlock>
                        <CheckoutHeaderBlock>Remove</CheckoutHeaderBlock>
                </CheckoutHeader>
                            
                {
                    cartItems.map((item) =>{
                        return <CheckoutRowItem key={item.id} cartItem={item}/>
                    })
                }
                <CheckoutHeaderTotal>
                Total: {totalPrice()}
                </CheckoutHeaderTotal>
            </CheckoutContainer>

        </Fragment>
      
    );
}

export default Checkout;