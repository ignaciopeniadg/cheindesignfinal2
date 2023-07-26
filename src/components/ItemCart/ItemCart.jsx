import React from 'react'
import './itemCart.css'
import { useCartContext } from '../../context/CartContext'

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemCart'>
            <img src={product.img} alt={product.title} />
            <div>
                <p>Título: {product.nombre}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio unidad: {product.precio}</p>
                <p>Subtotal: {product.quantity * product.precio}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart