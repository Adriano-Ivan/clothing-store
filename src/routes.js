import { Outlet, Route ,Routes} from "react-router-dom";
import ClothingNavigation from "./components/clothing-navigation/clothing-navigation.component";

import Home from "./pages/home/home.component";
import Shop from "./pages/shop/shop.component";
import Authentication from "./pages/authentication/authentication.component";
import Checkout from "./pages/checkout/checkout.component";

const ClothingStoreRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<ClothingNavigation/>} >
            <Route index element={<Home/>}/>
            <Route path="shop/*" element={<Shop />}/>
            <Route path="auth" element={<Authentication/>}/>
            <Route path="checkout" element={<Checkout/>}/>
        </Route>
      </Routes>
    );
}

export default ClothingStoreRoutes;