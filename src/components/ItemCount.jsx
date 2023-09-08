import { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {

    const [quantity, setQuantity] = useState(initial);

    //Funcion para incrementar la cantidad
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    //Funcion para decrementar la cantidad
    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        //Agrego un boton Agregar al carrito que llama a la función onAdd con la cantidad seleccionada como argumento. Este botón está deshabilitado si la cantidad es cero 
        <div className="ItemCount">
            <div className="d-flex align-items-center">
                <button className="btn btn-outline-secondary" type="button" onClick={decrement}>-</button>
                <input type="text" className="form-control text-center" value={quantity} readOnly style={{ maxWidth: '50px' }} />
                <button className="btn btn-outline-secondary" type="button" onClick={increment}>+</button>
            </div>
            <button className="btn btn-primary mt-2" onClick={() => onAdd(quantity)} disabled={quantity === 0}>
                Agregar al carrito 
            </button>
        </div>
    );
};