import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import { useForm } from "react-hook-form";

const Checkout = () => {
    const [orderId, setOrderId] = useState("");
    const { cartList, getTotal, clearCart } = useCartContext();
    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const order = {
            cliente: data,
            items: cartList,
            total: getTotal()
        };

        console.log("Datos del pedido:", order);

        const ordersRef = collection(firestore, "orders");

        addDoc(ordersRef, order)
            .then((doc) => {
                setOrderId(doc.id);
                clearCart();
            })
            .catch((error) => {
                console.error("Error al guardar en Firebase:", error);
            });
    };

    if (orderId) {
        return (
            <div className="container">
                <h1 className="main-title">¡Gracias por su compra!</h1>
                <p>Tu ID de compra es: {orderId}</p>
            </div>
        );
    }

    return (
        <div className="container">
            <h1 className="main-title">Finalizar compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingrese su nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingrese su email" {...register("email")} />
                <input type="tel" placeholder="Ingrese su teléfono" {...register("telefono")} />

                <button className="enviar" type="submit">Comprar</button>
            </form>
        </div>
    );
};

export default Checkout;

