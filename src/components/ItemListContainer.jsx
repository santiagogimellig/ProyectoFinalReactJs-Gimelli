import "./ItemListContainer.css";
// import { pedirDatos } from "../functions/PedirDatos";
import { useEffect, useState } from "react";
import ItemList  from './ItemList';
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where} from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

export function ItemListContainer() {
    // Defino estados para productos y título
    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("productos");
    // Obtengo el parámetro de categoría de la URL 
    const { categoryId } = useParams();

    // Efecto que se ejecuta cuando cambia la categoría seleccionada
    useEffect(() => {
        const collectionRef = categoryId
            ? query(collection(firestore, 'items'), where('category', '==', categoryId))
            : collection(firestore, 'items')
            getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                console.log(productsAdapted)
                setProductos(productsAdapted)
            })
            .catch((error) => console.log(error))
            .finally(() => {});
    }, [categoryId])

    return (
        <>
            {/* Renderizo el componente ItemList pasando los productos y el título */}
            <ItemList productos={productos} titulo={titulo} /> 
        </>
    );
};