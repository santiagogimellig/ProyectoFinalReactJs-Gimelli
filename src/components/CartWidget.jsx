import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export function CartWidget({items}) {
    const { cartQuantity } = useCartContext();
    return (
        <Link to = "/cart" >
            <i className='bx bx-cart-download' >
                <p> {items} </p>
            </i>
        </Link>
    );
};