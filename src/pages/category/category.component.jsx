import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
import "./category.styles.scss";

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
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className={"category-preview-container"}>
                
                {
                    products && products.map((product) => <ProductCard key={product.id} product={product}/>)
    
                }
            </div>
        </Fragment>

    )
}

export default Category;