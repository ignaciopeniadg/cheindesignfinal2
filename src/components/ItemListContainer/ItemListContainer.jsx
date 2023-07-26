import React, { useState, useEffect } from 'react'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import Title from '../Title/Title'
import ItemList from '../ItemList/ItemList';
import './itemListContainer.css'
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({ texto }) => {

    const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'servicios');

        if (categoriaId) {
            const queryFilter = query(queryCollection, where('category', '==', categoriaId), where())
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({ id: res.id, ...res.data() }))))
        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({ id: res.id, ...res.data() }))))
        }
    }, [categoriaId])


    return (
        <div className='itemlist'>
            <h5>Repaso sobre mis</h5>
            <h2>Estudios</h2>
            <div id='container__itemlistcontainer'>
                <Title greeting={texto} />
                <ItemList className="item-list" data={data} />
            </div>
        </div>
    )
}

export default ItemListContainer
