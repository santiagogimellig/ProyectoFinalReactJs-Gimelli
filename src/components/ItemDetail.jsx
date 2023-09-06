import { useState } from "react";
import { useCartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
    const {decrementCartQuantity, incrementCartQuantity, addCartToList} = useCartContext();
    const [isCart, setIsCart] = useState(false);

    const handleClick = () => {
        if (isCart) {
            decrementCartQuantity();
        } else {
            incrementCartQuantity();
            addCartToList({ item });
        }
        setIsCart(!isCart);
        };
    
    return (
        <main className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-horizontal d-flex">
                                <div className="img-square-wrapper">
                                    <img src={item.img} className="card-img-left" alt={item.name} />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title mb-2">{item.name}</h4>
                                    <h6 className="card-subtitle mb-3 text-muted">Categoria: {item.category}</h6>
                                    <p className="card-text h5">Precio: ${item.price}</p>
                                    <p className="card-text">Descripcion: {item.description}</p>
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