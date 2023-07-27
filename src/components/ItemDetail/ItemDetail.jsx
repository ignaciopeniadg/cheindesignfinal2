import React, { useState } from 'react'
import './itemDetail.css'
import { useCartContext } from '../../context/CartContext'
import ItemContador from '../ItemContador/ItemContador'
import { Link } from 'react-router-dom'


export const ItemDetail = ({ data }) => {

    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return (
        <section className='container'>
            <div className='detail'>
                <div className='foto-producto1'>
                    <div className='foto-producto2' id='foto-producto2'>
                        <img src={data.img} alt='productodetalle' />
                    </div>
                </div>
                <div id='itemdetalle__descripcion'>
                    <h1>{data.nombre}</h1>
                    <p>{data.descripcion}</p>
                    <div id='itemdetalle__descripcion-agregar'>
                        {
                            goToCart
                                ? <Link to='/carrito'><button className='btn'>Terminar compra</button></Link>
                                : <ItemContador initial={1} onAdd={onAdd} />
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ItemDetail