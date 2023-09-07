import { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="ItemCount">
            <div className="d-flex align-items-center">
                <button className="btn btn-outline-secondary" type="button" onClick={decrement}>-</button>
                <input 
                    type="text" 
                    className="form-control text-center" 
                    value={quantity} 
                    readOnly 
                    style={{ maxWidth: '50px' }} 
                />
                <button className="btn btn-outline-secondary" type="button" onClick={increment}>+</button>
            </div>
            <button
                className="btn btn-primary mt-2"
                onClick={() => onAdd(quantity)}
                disabled={quantity === 0}
            >
                Agregar al carrito
            </button>
        </div>
    );
};
