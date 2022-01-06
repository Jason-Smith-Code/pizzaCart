import React, { useState} from 'react'; 
import './Product.css';
import QuantityButton from './QuantityButton';

import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../features/Cart/cartSlice';

// here I am clarifying how the Product will render itself, I can reference the product property using dot notation

const Product = ({product}) => {
    const [quantity, setQuantity] = useState(1); 
    const dispatch = useDispatch();

    return (
        <div className="productContainer">
            <div className="productImage"></div>
            <div className="productInfo">
                <h2>{product.title}</h2>
                <p>{product.subtitle}</p>
                <p className="size">Size: {product.size}</p>
                {/* use toFixed on price to force 2 decimal places */}
                <p className="Price">{product.price.toFixed(2)}</p>  
            </div>
            <div className="addToCart">
                <QuantityButton 
                    quantity={quantity}
                    setQuantity={setQuantity}
                />
                <button
                    onClick={() => {
                        dispatch(addItemToCart({product, quantity}))
                    }}
                >Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;