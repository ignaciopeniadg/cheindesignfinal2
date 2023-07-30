import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import './cartwidget.css'

export const CartWidget = () => {
    const { totalProducts } = useCartContext();
    return (
        <div className='cartwidget'>
            <NavLink to='/carrito'><AiOutlineShoppingCart /></NavLink>
            <span>{totalProducts() || ''}</span>
        </div>

    )
}

export default CartWidget