import CategoryItem from "../category-item/category-item.component"
import "./categories.styles.scss";

const Categories = ({categories}) =>{
    
    return  <div className="categories-container">
    {
      categories.map((category) =>{
        console.log(category)
        return <CategoryItem  key={category.id} {...category}/>
      })
    }
   </div>
}

export default Categories;