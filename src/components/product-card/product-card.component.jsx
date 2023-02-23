
import { ProductCardContainer, ProductCardContainerFooter,ProductCardContainerFooterName,
ProductCardContainerFooterPrice } from "./product-card.styles";
import Button,{BUTTON_TYPES_CLASSES} from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({product}) => {
    const {addItemToCart} = useContext(CartContext);

    const addOrIncrementThisProductToCart = () => {
        addItemToCart(product);
    }

    const {name, price,imageUrl} = product;
    return <ProductCardContainer>
        <img  src={imageUrl} alt={name}/>
        <ProductCardContainerFooter>
            <ProductCardContainerFooterName>{name}</ProductCardContainerFooterName>
            <ProductCardContainerFooterPrice>{price}</ProductCardContainerFooterPrice>
        </ProductCardContainerFooter>
        <Button onClick={addOrIncrementThisProductToCart} buttonType={BUTTON_TYPES_CLASSES.inverted}>Add to card</Button>
    </ProductCardContainer>
}

export default ProductCard;