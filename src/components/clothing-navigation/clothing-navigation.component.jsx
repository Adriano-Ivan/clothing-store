import { useContext, useState } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as ClthLogo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import "./navigation.styles.scss";
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
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <ClthLogo className="logo"/>
                </Link>
                
                <div className="nav-links-container">
                    <Link  className="nav-link" to="/shop">
                        SHOP
                    </Link>

                    {
                        currentUser ?
                        <Link  className="nav-link"  onClick={signOutHandler}>
                        SIGN OUT
                        </Link>
                        :
                        <Link  className="nav-link" to="/auth">
                        SIGN IN
                        </Link>
                    }
                    <CartIcon toggleDropdownVisibility={toggleDropdownVisibility}/>
                </div>
                
                {dropdownCartIsOpen &&   <CartDropdown />}
            </div>

            <Outlet/>
        </>

    );
}

export default ClothingNavigation;