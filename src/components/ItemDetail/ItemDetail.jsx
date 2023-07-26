import React, { useState } from 'react'
import './itemDetail.css'
import { useCartContext } from '../../context/CartContext'
import ItemContador from  '../ItemContador/ItemContador'
import { Link } from 'react-router-dom'


export const ItemDetail = ({ data }) => {

    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext ();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return (
        <div className='container'>
            <div className='detail'>
                <img className='detail__image' src={data.img} alt='productodetalle'/>
                <div className='content'>
                    <h1>{data.nombre}</h1>
                    <p>{data.descripcion}</p>
                    {
                        goToCart
                            ? <Link to='/cart'>Terminar compra</Link>
                            : <ItemContador initial={1} onAdd={onAdd} />
                    }
                </div>

            </div>
        </div>
    )
}

export default ItemDetail