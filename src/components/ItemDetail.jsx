import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { ItemCount } from "./ItemCount";
import { Link } from "react-router-dom"; 

const ItemDetail = ({ item }) => {
    //Obtengo la funcion para agregar productos al carrito desde el contexto.
    const { addCartToList } = useCartContext();
    //Estado local para controlar si el producto esta en el carrito o no.
    const [isCart, setIsCart] = useState(false);
    //Funcion para manejar el click en el boton "Agregar al carrito".
    const handleClick = (quantity) => {
        //Agrego el producto al carrito con la cantidad seleccionada.
        addCartToList({ ...item, quantity: quantity }); 
        //Actualizo el estado para indicar que el producto esta en el carrito
        setIsCart(true);
    };

    //Si el producto esta en el carrito (isCart === true), se muestran botones de accion que permiten al usuario volver al inicio o ir al carrito.
    //Si el producto no esta en el carrito (isCart === false), se muestra el componente ItemCount que permite al usuario seleccionar una cantidad y agregar el producto al carrito. Se le pasa el stock disponible, una cantidad inicial de 0 (initial) y la funcion handleClick como prop onAdd.
    return (
        <main className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-horizontal d-flex">
                                <div className="img-square-wrapper">
                                    <img src={item.img} className="card-img-left" alt={item.name}/>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title mb-2">{item.name}</h4>
                                    <h6 className="card-subtitle mb-3 text-muted">
                                        Categoria: {item.category}
                                    </h6>
                                    <p className="card-text h5">Precio: ${item.price}</p>
                                    <p className="card-text">Descripcion: {item.description}</p>
                                    {isCart ? (
                                        <div className="d-flex flex-column text-left">
                                            <Link to="/" className="btn btn-primary btn-sm my-2">Volver al Inicio</Link>
                                            <Link to="/cart" className="btn btn-primary btn-sm my-2">Terminar Compra</Link>
                                        </div>
                                    ) : (
                                        <ItemCount stock={item.stock} initial={0} onAdd={handleClick}/>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ItemDetail;