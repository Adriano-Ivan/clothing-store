import { Link, Outlet } from "react-router-dom";
import { ReactComponent as ClthLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

const ClothingNavigation = () => {
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

                    <Link  className="nav-link" to="/auth">
                        SIGN IN
                    </Link>
                </div>
            </div>

            <Outlet/>
        </>

    );
}

export default ClothingNavigation;