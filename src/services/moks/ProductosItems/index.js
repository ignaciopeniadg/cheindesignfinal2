import { servicios } from '../../tmp/data'


const getItems = async (id) => {

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

