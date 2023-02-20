import { Fragment, useContext, useEffect, useState } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";
import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
    const {categories} = useContext(CategoriesContext);

    const returnCategoryItems = (categoryTitle) =>{
      const categoryItemsToShow =  categories[categoryTitle].slice(0, 4);
      
      return  (<>
        <CategoryPreview title={categoryTitle} products={categoryItemsToShow}/>

        </>);
    }

    return (

        <div className="categories-preview-container">
            {
                Object.keys(categories).map((title,index) => {
                    return <Fragment key={title}>
                       { returnCategoryItems(title) }
                    </Fragment>
                })
            }

        </div>

    );
}

export default CategoriesPreview;