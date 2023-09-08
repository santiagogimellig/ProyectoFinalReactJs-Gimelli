import React, { createContext, useContext, useState } from "react";

//Crea un nuevo contexto y lo inicializo con un valor predeterminado de un arreglo vacío []
export const CartContext = createContext([]);

//Defino un componente funcional CartProvider que recibe children como prop. Los children son los componentes que se encuentran dentro del componente CartProvider.
export function CartProvider({ children }) {
    //Utilizo el hook useState para crear un estado cartList que se inicializa como un arreglo vacio. cartList representa la lista de productos en el carrito y setCartList es la funcion que se utiliza para actualizar este estado.
    const [cartList, setCartList] = useState([]);
    //Esta función la utilizo para agregar un producto al carrito.    
    const addCartToList = (cart) => {
        const existingProduct = cartList.findIndex(item => item.id === cart.id);
        //Esta funcion la utilizo para eliminar un producto del carrito.
        if (existingProduct !== -1) {
            const updatedCartList = [...cartList];
            updatedCartList[existingProduct].quantity += cart.quantity;
            setCartList(updatedCartList);
        } else {
            setCartList([...cartList, cart]);
        }
    };
    //Esta funcion la utilizo para eliminar un producto del carrito.
    const removeCartFromList = (cartID) => {
        const newCart = cartList.filter((cart) => cart.id !== cartID);
        setCartList(newCart);
    };
    //Esta funcion la utilizo para vaciar completamente el carrito.
    const clearCart = () => {
        setCartList([]);
    };
    //Esta funcion la utilizo para calcular el precio total de los productos agregados al carrito.
    const getTotal = () => {
        return cartList.reduce((total, cart) => total + cart.price * cart.quantity, 0);
    };
    //cartQuantity almacena la cantidad total de productos en el carrito.
    const cartQuantity = cartList.reduce((total, cart) => total + cart.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cartQuantity: cartQuantity,
                addCartToList,
                removeCartFromList,
                cartList,
                clearCart,
                getTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCartContext() {
    return useContext(CartContext);
}

export default CartProvider;