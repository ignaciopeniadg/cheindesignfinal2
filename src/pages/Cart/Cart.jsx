import React from 'react'
import './cart.css'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from '../../components/ItemCart/ItemCart'
import { addDoc, collection, getFirestore } from 'firebase/firestore'


const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    const order = {
        comprador: {
            nombre: 'chein',
            email: 'ignaciopeniadg@gmail.com',
            phone: '2131231'
        },
        items: cart.map(product=> ({ id: product.id, nombre: product.nombre, precio: product.precio, quantity: product.quantity})),
        total: totalPrice,
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then (({ id }) => console.log(id))
    }

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
            <button onClick={handleClick}>Emitir compra</button>
        </>

    )
}

export { Cart }