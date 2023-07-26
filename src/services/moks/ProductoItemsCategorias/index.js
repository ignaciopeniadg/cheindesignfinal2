import { categorias } from '../../tmp/data'


const getCategorias = async () => {

    return new Promise ((resolve, reject) => {
        resolve(categorias);
    });
};

const getCategoria = async (id) => {
    return new Promise ((resolve, reject) => {
        resolve(categorias.find((categoria) => categoria.id === id));
    });
}


/* const updateItem = async () => {}

const deleteItem = async () => {}
vos 
const createItem = async () => {} */

export { getCategorias, getCategoria };