import React from 'react'
import './cart.css'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from '../../components/ItemCart/ItemCart'


const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/servicios'>Hacer compra</Link>
            </>
        );
    }
    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                total: {totalPrice()}
            </p>
        </>

    )
}

export { Cart }