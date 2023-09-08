import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export function CartWidget() {
    //Obtengo la cantidad de productos en el carrito desde el contexto
    const { cartQuantity } = useCartContext();
    //Si hay productos en el carrito, muestro un numero que indica la cantidad de productos. Si el carrito esta vacio, no muestro ningun numero. Cuando se hace click en el icono, se navega a la pagina del carrito.
    return (
        <Link to="/cart" className="cart-widget text-decoration-none text-dark">
            <i className="bx bx-cart-download">
                {cartQuantity > 0 && (
                    <span className="cart-quantity small text-dark">
                        {cartQuantity}
                    </span>
                )}
            </i>
        </Link>
    );
}