import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
import { CategoryPreviewContainer, CategoryTitle } from "./category.styles";


const Category = () => {
    const {categories} = useContext(CategoriesContext);
    const {category} = useParams();

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        if(!!Object.keys(categories).find(c => c === category)){
            setProducts(categories[category]);
        }
      
    },[category, categories]);


    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryPreviewContainer>
                
                {
                    products && products.map((product) => <ProductCard key={product.id} product={product}/>)
    
                }
            </CategoryPreviewContainer>
        </Fragment>

    )
}

export default Category;