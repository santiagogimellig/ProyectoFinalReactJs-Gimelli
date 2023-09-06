import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return (
        <div className="card h-100 mb-3">
        <img src={producto.img} className="card-img-top" alt={producto.name} />
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">{producto.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Categoría: {producto.category}</h6>
            <p className="card-text">${producto.price}</p>
            {/* <p className="card-text flex-grow-1">{producto.description}</p> */}
            <Link to={`/item/${producto.id}`} className="btn btn-primary">
            Ver más
            </Link>
        </div>
        </div>
    );
};

export default Item;