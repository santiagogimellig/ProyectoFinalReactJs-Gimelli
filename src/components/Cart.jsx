import React from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    //Obtengo funciones y datos del carrito desde el contexto.
    const { cartList, removeCartFromList, clearCart } = useCartContext();
    //Funcion para calcular el total de la compra
    const getTotal = () => {
        return cartList.reduce((total, cart) => total + cart.price * cart.quantity, 0);
    };
    //Funcion para finalizar la compra.
    const handleFinalizarCompra = () => {
        clearCart();
    };
    //Funcion para vaciar el carrito.
    const handleVaciarCarrito = () => {
        clearCart();
    };

    //Divido en dos columnas: una para mostrar los productos en el carrito y otra para mostrar el resumen de la compra.
    //En la columna de productos del carrito, mapeo sobre cartList para renderizar cada producto como una tarjeta. Se muestra la imagen, nombre, categoría, precio y cantidad del producto, junto con un botón para eliminarlo del carrito.
    //En la columna de resumen de compra, muestro una lista de productos en el carrito junto con su subtotal. Tambien muestro el total de la compra y dos botones: uno para finalizar la compra y otro para vaciar el carrito. El boton de finalizar compra lo utilizo para navegar a la pagina de checkout.
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h2 className="text-center">Carrito de Compras</h2>
                    {cartList.length > 0 ? (
                        cartList.map((product) => (
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
                                            <button className="btn btn-danger" onClick={() => removeCartFromList(product.id)}>
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center">
                            <p>El carrito está vacío.</p>
                        </div>
                    )}
                </div>
                <div className="col-md-4">
                    <h2 className="text-center">Resumen de Compra</h2>
                    {cartList.length > 0 && (
                        <div className="card">
                            <div className="card-body">
                                {cartList.map((product) => (
                                    <div key={product.id} className="resumen-item">
                                        <p>{product.name} - {product.category}</p>
                                        <p>Cantidad: {product.quantity}</p>
                                        <h6>Subtotal: ${product.price * product.quantity}</h6>
                                    </div>
                                ))}
                                <div className="resumen-total">
                                    <h4>Total:</h4>
                                    <p>${getTotal()}</p>
                                </div>
                                <div className="d-inline-block">
                                    <button className="btn btn-success custom-button" type="submit">
                                        <Link to="/checkout" className="text-decoration-none text-white">Finalizar compra</Link>
                                    </button>
                                </div>
                                <div className="d-inline-block ml-2">
                                    <button className="btn btn-danger" onClick={handleVaciarCarrito}>
                                        Vaciar Carrito
                                    </button>
                                </div>
                            </div>
                        </div> 
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;