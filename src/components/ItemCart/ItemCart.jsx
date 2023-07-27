import React from 'react'
import './itemCart.css'
import { useCartContext } from '../../context/CartContext'

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemcart'>
            <div>
                <img className='itemcart-img' src={product.img} alt={product.title} />
            </div>
            <div>
                <p>{product.nombre}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio unidad: {product.precio}</p>
                <p>Subtotal: {product.quantity * product.precio}</p>
                <button className='btn' onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart