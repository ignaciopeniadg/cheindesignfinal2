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
        items: cart.map(product => ({ id: product.id, nombre: product.nombre, precio: product.precio, quantity: product.quantity })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => console.log(id))
    }

    if (cart.length === 0) {
        return (
            <section className='container' id='carrito-class'>
                <p>No hay elementos en el carrito</p>
                <Link to='/servicios'><button className='btn'>Hacer compra</button></Link>
            </section>
        );
    }
    return (
        <section className='container' id='carrito-class'>

            <div className='productos-carrito'>
                {
                    cart.map(product => <ItemCart key={product.id} product={product} />)
                }
            </div>

            <div className='carrito-titular'>
                <p>
                    TOTAL: {totalPrice()}
                </p>
                <button className='btn' onClick={handleClick}>Emitir compra</button>
            </div>

        </section>

    )
}

export { Cart }