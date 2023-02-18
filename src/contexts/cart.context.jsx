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

const increaseOrDecreaseQuantityOfCartItem = (cartItems, product,increase)  => {
    const newCartItems =  [...cartItems.map((item ) =>{
        if(item.id === product.id){
            if(increase){
                item.quantity += 1;
            } else {
                if(item.quantity >0){
                    item.quantity -= 1;
                }
            }
            
        }
        
        return item;
    }).filter((item )=> item.quantity > 0)];

    return newCartItems;
}

export const CartContext = createContext({
    dropdownCartIsOpen : false,
    setDropdownCartIsOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    numberOfItems: () =>{},
    numberOfProducts: () =>{},
    increaseQuantityOfCartItem: () =>{},
    decreaseQuantityOfCartItem: () =>{},
    deleteCartItem: () =>{}
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

    const totalPrice = () => {
        return cartItems.reduce((ac, current) => ac + (current.price * current.quantity), 0);
    }

    const increaseQuantityOfCartItem = (productToIncrease) =>{
        setCartItems(increaseOrDecreaseQuantityOfCartItem(cartItems, productToIncrease, true));
    }

    const decreaseQuantityOfCartItem = (productToIncrease) =>{
        setCartItems(increaseOrDecreaseQuantityOfCartItem(cartItems, productToIncrease, false));
    }

    const deleteCartItem = (productToDelete) => {
        setCartItems(
            cartItems.filter((item) => item.id !== productToDelete.id)
        );
    }

    const value={
        dropdownCartIsOpen,
        cartItems,
        setDropdownCartIsOpen,
        addItemToCart,
        numberOfItems,
        numberOfProducts,
        totalPrice,
        decreaseQuantityOfCartItem,
        increaseQuantityOfCartItem,
        deleteCartItem,
    }

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}