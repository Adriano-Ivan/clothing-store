import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext(
    {
        categories: [],
        setCategories: () => {}
    }
)

export const CategoriesProvider = ({children}) =>{

    const [categories, setCategories] = useState({});

    useEffect(() =>{
        const getCategoriesMap = async() => {
            const categoriesMap = await  getCategoriesAndDocuments();
 
            setCategories(categoriesMap);
        }
        
        getCategoriesMap();
    },[]);

    const values = {categories, setCategories};

    return <CategoriesContext.Provider value={values}>
        {children}
    </CategoriesContext.Provider>
}