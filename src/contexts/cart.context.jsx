import { createContext, useState } from "react";


export const CartContext = createContext({
    dropdownCartIsOpen : false,
    setDropdownCartIsOpen: () => {}
});

export const CartProvider = ({children})=>{

    const [dropdownCartIsOpen,setDropdownCartIsOpen] = useState(false);

    const value={
        dropdownCartIsOpen,
        setDropdownCartIsOpen
    }

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}