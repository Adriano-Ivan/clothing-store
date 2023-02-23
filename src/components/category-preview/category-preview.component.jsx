import { Link, useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import { CategoryPreviewAllContainer,CategoryPreviewAllContainerPreview,
CategoryPreviewAllContainerTitle } from "./category-preview.styles";

const CategoryPreview = ( {title, products}) =>{
  
    return (
        <CategoryPreviewAllContainer>
            <CategoryPreviewAllContainerTitle>
                <Link to={title}>{title.toUpperCase()}</Link>
            </CategoryPreviewAllContainerTitle>
            <CategoryPreviewAllContainerPreview>
                {
                    
                    products.map((category) =>{
                        return <ProductCard key={category.id} product={category}/>
                    })
                }
            </CategoryPreviewAllContainerPreview>
        </CategoryPreviewAllContainer>
    )
}

export default CategoryPreview;