import './itemContador.css';

import React, { useEffect, useState } from 'react';

export const ItemContador = ({initial, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        if (count <= 1) {
            setCount(count + 0)
        } else {
        setCount(count - 1)}
    }

    const increase = () => {
        setCount(count + 1);
    }
    
    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <div className='contador'>
            <div className='contador__botones'>
                <a className='btn__contador' disabled={count <= 1} onClick={decrease}>-</a>
                <span className='num__contador'>{count}</span>
                <a className='btn__contador' onClick={increase}>+</a>
            </div>
            <div>
                <button className='btn__agregar-al-carrito' onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemContador