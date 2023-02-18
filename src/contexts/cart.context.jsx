import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    let cartItemsToDefine = [...cartItems];

    if(!!cartItemsToDefine.find(i => productToAdd.id === i.id)){
        cartItemsToDefine = cartItemsToDefine.map(i => {
            if(i.id === productToAdd.id){
               i.quantity += 1;
            }

            return i;
        });
    } else {
        productToAdd.quantity = 1;
        cartItemsToDefine.push(productToAdd);
    }

    return cartItemsToDefine;
}

export const CartContext = createContext({
    dropdownCartIsOpen : false,
    setDropdownCartIsOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}
});

export const CartProvider = ({children})=>{

    const [dropdownCartIsOpen,setDropdownCartIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const numberOfItems = () => {

        return cartItems.reduce((ac, current) => ac + current.quantity, 0);
    }

    const numberOfProducts = () =>{
        return cartItems.length;
    }

    const value={
        dropdownCartIsOpen,
        cartItems,
        setDropdownCartIsOpen,
        addItemToCart,
        numberOfItems,
        numberOfProducts
    }

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}