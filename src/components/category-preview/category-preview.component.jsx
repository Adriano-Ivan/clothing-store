import { Link, useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ( {title, products}) =>{
    const navigate = useNavigate();


    return (
        <div className="category-preview-all-container">
            <h2>
                <Link to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className="preview">
                {
                    
                    products.map((category) =>{
                        return <ProductCard key={category.id} product={category}/>
                    })
                }
            </div>
        </div>
    )
}

export default CategoryPreview;