import { productos } from "../asyncMock";

// Función para solicitud de datos
export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Resuelvo la promesa proporcionando el array productos
            resolve(productos);
        }, 500);
    });
};

// Función para obtener un elemento específico por su ID desde el array productos
export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        // Busco un elemento en el array productos que tenga el ID proporcionado
        const item = productos.find((el) => el.id === id);
        // Si encuentro el elemento con el ID proporcionado
        if(item) {
            // Resuelvo la promesa proporcionando el elemento encontrado
            resolve(item)
        } else {
            // Si no encuentro el elemento, rechazo la promesa y devuelvo un error
            reject({
                error: "No se encontro el prodcuto"
            })
        }
    })
}