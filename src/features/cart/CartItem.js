import { useDispatch } from "react-redux";
import { removeItemFromCart } from "./cartSlice";

const CartItem = ({cartItem}) => { 
  const dispatch = useDispatch();

  return (
    <div className="cartItemContainer">
        <div className="cartItem">
            <p className="cartSize">{cartItem.quantity} x {cartItem.title} {cartItem.size}</p>
             {/* use toFixed on price to force 2 decimal places */}
            <p className="Price">{cartItem.totalPrice.toFixed(2)}</p>
            <button 
              className="removeCartItem"
              onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}
            >
              X
            </button>
        </div>
    </div>
  );
}

export default CartItem;
