import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart () {
    const {cartList} = useCartContext()
    console.log(cartList)
    if (cartList.length === 0) {
        return (
            <div>
                <h3>Aun no agregaste nada al carrito</h3>
                <Link to="/">Volver a Inicio</Link>
            </div>
        );
    }
    return<>Cart</>
}

export default Cart;