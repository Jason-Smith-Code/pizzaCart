import './Products.css';
import Product from '../Product/Product';
import inventory from '../../features/Inventory/Inventory';
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../features/Inventory/inventorySlice";

// here I need to return a new component "Product", I will do this by mapping out the Products array
// The product component needs to contain a prop to pass down the object properties
// Below when we map, the "product" is the object in the array
const Products = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div className="productList">
            {inventory
            .filter(product => {
                // return all products if category is All
                if (selectedCategory === 'All') return true;   
                // only show products from selected category
                return selectedCategory === product.category;            
            })
            .map(product => <Product product={product} key={product.id}/>)
            }
        </div>
    )
}

export default Products;
