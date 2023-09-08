import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Checkout = () => {
    //Almaceno el ID del pedido.
    const [orderId, setOrderId] = useState("");
    //Obtengo funciones y datos del carrito desde el contexto.
    const { cartList, getTotal, clearCart } = useCartContext();
    //Inicializo react-hook-form.
    const { register, handleSubmit } = useForm();
    // Construyo un objeto de pedido con los datos del cliente, los productos en el carrito y el total.
    const comprar = (data) => {
        const order = {
            cliente: data,
            items: cartList,
            total: getTotal()
        };

        console.log("Datos del pedido:", order);
        //Agrego el pedido a la coleccion orders.
        const ordersRef = collection(firestore, "orders");

        addDoc(ordersRef, order)
            .then((doc) => {
                setOrderId(doc.id); 
                clearCart(); //Vacio el carrito.
            })
            .catch((error) => {
                console.error("Error al guardar en Firebase:", error);
            });
    };

    //Si se completa la compra muestro un mensaje.
    if (orderId) {
        return (
            <div className="container">
                <h1 className="main-title">¡Gracias por su compra!</h1>
                <h5>Tu ID de compra es: {orderId}</h5>
                <Link to="/" className="btn btn-primary btn-sm my-2">Volver al Inicio</Link>
            </div>
        );
    }

    //Formulario para obtener los datos del cliente.
    return (
        <div className="container">
            <h1 className="main-title">Finalizar compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Ingrese su nombre (solo letras)" {...register("nombre")} pattern="[A-Za-z]+" required />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Ingrese su apellido (solo letras)" {...register("apellido")} pattern="[A-Za-z]+" required />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Ingrese su email" {...register("email")} required />
                </div>
                <div className="mb-3">
                    <input type="tel" className="form-control" placeholder="Ingrese su teléfono (solo numeros)" {...register("telefono")} pattern="[0-9]+" required />
                </div>
                <button className="btn btn-primary" type="submit">Comprar</button>
            </form>
        </div>
    );
};

export default Checkout;