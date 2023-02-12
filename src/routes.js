import { Outlet, Route ,Routes} from "react-router-dom";
import ClothingNavigation from "./components/clothing-navigation/clothing-navigation.component";
import SignIn from  "./pages/signin/sign-in.component";
import Home from "./pages/home/home.component";

const ClothingStoreRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<ClothingNavigation/>} >
            <Route index element={<Home/>}/>
            <Route path="shop" element={<h1>Shop page</h1>}/>
            <Route path="sign-in" element={<SignIn />}/>
        </Route>
      </Routes>
    );
}

export default ClothingStoreRoutes;