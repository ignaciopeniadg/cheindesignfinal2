import { collection, getDoc, doc, getFirestore } from 'firebase/firestore'


const getItems =  (query) => {

    const db = getFirestore();

    const docRef = doc(db, "servicios")

    return new Promise ((resolve, reject) => {
        resolve(servicios.filter((Servicio) => Servicio.categoriaId === id));
    });
};

const getItem = async (id) => {
    return new Promise ((resolve, reject) => {
        resolve(servicios.find((Servicio) => Servicio.id == id));
    });
}


/* const updateItem = async () => {}

const deleteItem = async () => {}

const createItem = async () => {} */

export { getItem, getItems };