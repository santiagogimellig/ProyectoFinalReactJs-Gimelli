import Item from './Item';

//ItemList recibe una lista de productos y un titulo, y renderiza una lista de elementos utilizando el componente Item. Cada elemento de la lista es representado por un componente Item, y se le pasa un producto especifico como prop.
const ItemList = ({ productos, titulo }) => {
    return (
        <div>
            <h2 className="text-center">{titulo}</h2>
            <div className="items-container">
                {productos.map((prod) => (
                    <Item producto={prod} key={prod.id} />
                ))}
            </div>
        </div>
    );
};

export default ItemList;