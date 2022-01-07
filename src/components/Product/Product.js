import React, { useState} from 'react'; 
import QuantityButton from './QuantityButton';

import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../features/Cart/cartSlice';

// here I am clarifying how the Product will render itself, I can reference the product property using dot notation

const Product = ({product}) => {
    const [quantity, setQuantity] = useState(1); 
    const dispatch = useDispatch();

    return (
        <div className="productContainer">
            <div className="productImageContainer">
                <img className="productImage" alt="Product image" src={`./${product.image}.jpg`}></img>
            </div>
            <div className="productInfo">
                <h2><span className="size">{product.size}</span> {product.title}</h2>
                <p>{product.subtitle}</p>
                {/* use toFixed on price to force 2 decimal places */}
                <p className="Price">{product.price.toFixed(2)}</p> 

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
        </div>
    )
}

export default Product;