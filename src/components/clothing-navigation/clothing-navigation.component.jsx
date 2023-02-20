import { Fragment, useContext, useState } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as ClthLogo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { NavigationContainer,NavLinks,NavLink,LogoContainer } from "./navigation.styles"; 
import { CartContext } from "../../contexts/cart.context";

const ClothingNavigation = () => {
    const {currentUser}  = useContext(UserContext);
    const {dropdownCartIsOpen, setDropdownCartIsOpen} = useContext(CartContext);

    const signOutHandler = async () =>{
         await signOutUser();
    }

    const toggleDropdownVisibility = ( ) =>{
        setDropdownCartIsOpen(!dropdownCartIsOpen);
    }

    return  (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <ClthLogo />
                </LogoContainer>
                
                <NavLinks>
                    <NavLink to="/shop">
                        SHOP
                    </NavLink>

                    {
                        currentUser ?
                        <NavLink as="span"   onClick={signOutHandler}>
                        SIGN OUT
                        </NavLink>
                        :
                        <NavLink   to="/auth">
                        SIGN IN
                        </NavLink>
                    }
                    <CartIcon toggleDropdownVisibility={toggleDropdownVisibility}/>
                </NavLinks>
                
                {dropdownCartIsOpen &&   <CartDropdown />}
            </NavigationContainer>

            <Outlet/>
        </Fragment>

    );
}

export default ClothingNavigation;