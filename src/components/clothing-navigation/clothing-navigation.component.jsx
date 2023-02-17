import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as ClthLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import "./navigation.styles.scss";

const ClothingNavigation = () => {
    const {currentUser}  = useContext(UserContext);

    const signOutHandler = async () =>{
         await signOutUser();

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
                 
                </div>
            </div>

            <Outlet/>
        </>

    );
}

export default ClothingNavigation;