// I need the quantity button to change its value when the user clicks either button.
// for this i want to use "useState" from react 
const QuantityButton = ({quantity, setQuantity}) => {

    // Create function to add 1 to quantity
    const addQuantity = () => {
        const increasedQuantity = quantity + 1;
        setQuantity(increasedQuantity);
    }

    // Create function to reduce quantity
    // I also need to prevent the quantity going lower than 1.
    const reduceQuantity = () => {
        if (quantity <= 1) {
            return quantity
        } else {
            const reducedQuantity = quantity - 1;
            setQuantity(reducedQuantity);
        } 
    }

    return (
            <div className="productQuantityContainer">
                <button className="buttonLeft" onClick={reduceQuantity}>-</button>
                <span className="Quantity">{quantity}</span>
                <button className="buttonRight" onClick={addQuantity}>+</button>    
            </div>
    )
}

export default QuantityButton;