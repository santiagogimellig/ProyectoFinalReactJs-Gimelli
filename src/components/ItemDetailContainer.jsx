import { useEffect, useState } from "react"
// import { pedirItemPorId } from "../functions/PedirDatos";
import ItemDetail  from './ItemDetail'; 
import { useParams } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    // Obtengo el parámetro del ID del item de la URL 
    const { itemId } = useParams();

    // Efecto que se ejecuta cuando cambia el ID del item
    useEffect(() => {
        const docRef = doc(firestore, 'items', itemId)
        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = {id: response.id, ...data}
                setItem(productAdapted)
            })
            .catch((error) => console.log(error))
            .finally(() => {});
        }, [itemId]); // Ejecuto este efecto cuando cambie el ID del item

    return(
        <div>
            {/* Renderizo el componente ItemDetail si el objeto de detalle existe */}
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer