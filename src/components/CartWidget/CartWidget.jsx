import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

export const CartWidget = () => {
    const { totalProducts } = useCartContext();
    return (
        <>
            <NavLink to='/carrito'><AiOutlineShoppingCart /></NavLink>
            <span>{totalProducts() || ''}</span>
        </>

    )
}

export default CartWidget