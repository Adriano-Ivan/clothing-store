import { Outlet, Route ,Routes} from "react-router-dom";
import ClothingNavigation from "./components/clothing-navigation/clothing-navigation.component";

import Home from "./pages/home/home.component";
import Authentication from "./pages/signin/authentication.component";

const ClothingStoreRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<ClothingNavigation/>} >
            <Route index element={<Home/>}/>
            <Route path="shop" element={<h1>Shop page</h1>}/>
            <Route path="auth" element={<Authentication/>}/>
        </Route>
      </Routes>
    );
}

export default ClothingStoreRoutes;