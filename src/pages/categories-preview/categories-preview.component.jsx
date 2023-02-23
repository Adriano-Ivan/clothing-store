import { Fragment, useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";
import { CategoriesPreviewContainer } from "./categories-preview.styles";

const CategoriesPreview = () => {
    const {categories} = useContext(CategoriesContext);

    const returnCategoryItems = (categoryTitle) =>{
      const categoryItemsToShow =  categories[categoryTitle].slice(0, 4);
      
      return  (<>
        <CategoryPreview title={categoryTitle} products={categoryItemsToShow}/>

        </>);
    }

    return (

        <CategoriesPreviewContainer>
            {
                Object.keys(categories).map((title,index) => {
                    return <Fragment key={title}>
                       { returnCategoryItems(title) }
                    </Fragment>
                })
            }

        </CategoriesPreviewContainer>

    );
}

export default CategoriesPreview;