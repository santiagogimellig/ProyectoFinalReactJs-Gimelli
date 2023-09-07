import React from "react";
import { useCartContext } from "../context/CartContext";

const Cart = () => {
    const { cartList, removeCartFromList } = useCartContext();

    const getTotal = () => {
        return cartList.reduce((total, cart) => total + cart.price * cart.quantity, 0);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h2 className="text-center">Carrito de Compras</h2>
                    {cartList.map((product) => (
                        <div key={product.id} className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={product.img} className="img-fluid rounded-start" alt={product.name} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Categoría: {product.category}</h6>
                                        <p className="card-text">${product.price}</p>
                                        <p className="card-text">Cantidad: {product.quantity}</p>
                                        <p className="card-text">{product.description}</p>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => removeCartFromList(product.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-md-4">
                    <h2 className="text-center">Resumen de Compra</h2>
                    <div className="card">
                        <div className="card-body">
                            {cartList.map((product) => (
                                <div key={product.id} className="resumen-item">
                                    <p>{product.name} - {product.category}</p>
                                    <p>Cantidad: {product.quantity}</p>
                                </div>
                            ))}
                            <div className="resumen-total">
                                <h4>Total:</h4>
                                <p>${getTotal()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

