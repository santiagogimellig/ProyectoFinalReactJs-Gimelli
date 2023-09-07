import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export function CartWidget() {
    const { cartQuantity } = useCartContext();

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