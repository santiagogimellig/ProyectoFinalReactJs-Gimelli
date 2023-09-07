import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

function CartProvider({ children }) {
    const [cartList, setCartList] = useState([]);

    const addCartToList = (cart) => {
        const existingProduct = cartList.findIndex(item => item.id === cart.id);

        if (existingProduct !== -1) {
            const updatedCartList = [...cartList];
            updatedCartList[existingProduct].quantity += cart.quantity;
            setCartList(updatedCartList);
        } else {
            setCartList([...cartList, cart]);
        }
    };

    const removeCartFromList = (cartID) => {
        const newCart = cartList.filter((cart) => cart.id !== cartID);
        setCartList(newCart);
    };

    const cartQuantity = cartList.reduce((total, cart) => total + cart.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cartQuantity: cartQuantity,
                addCartToList,
                removeCartFromList,
                cartList,
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