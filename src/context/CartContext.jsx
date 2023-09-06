import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

function CartProvider({children}){
    const [cartQuantity, setCartQuantity] = useState(0);
    const [cartList, setCartList] = useState([]);

    const incrementCartQuantity = () => {
        setCartQuantity(cartQuantity + 1);
    }

    const decrementCartQuantity = () => {
        setCartQuantity(cartQuantity - 1);
    }

    const addCartToList = (cart) => {
        setCartList([...cartList, cart])
    }

    const removeCartFormList = cartID => {
        const newCart = cartList.filter(cart => cart.id !== cartID)
        setCartList(newCart)
    }

    return (
        <CartContext.Provider
            value={{
                cartQuantity: cartQuantity,
                incrementCartQuantity: incrementCartQuantity,
                decrementCartQuantity: decrementCartQuantity,
                addCartToList,
                removeCartFormList,
                cartList
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCartContext(){
    return useContext(CartContext);
}

export default CartProvider;