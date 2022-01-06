import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../features/Inventory/inventorySlice";

// This file will display a list of categories as buttons which when clicked will filter the product list

const Filter = ({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div>
            <button
                onClick={() => {dispatch(filterCategory(category))}}
                className={selectedCategory === category ? "filterButton filterButtonActive" : "filterButton"}
            >{category}</button>
        </div>
    )
}

export default Filter;