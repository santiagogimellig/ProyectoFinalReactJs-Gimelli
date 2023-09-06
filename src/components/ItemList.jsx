import Item from './Item';

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