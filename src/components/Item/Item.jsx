
import React from 'react'
import { Link } from 'react-router-dom'
import './item.css'


const Item = ({ info }) => {
    
    return (
        <Link to={`/detalle/${info.id}`} className='item-servicio'>
            <p id='item-servicio__nombre-servicio'>{info.nombre}</p>
            <div>
                <img className="item-servicio-img" src={info.img} alt='producto'/>
            </div>
            <p id='item-servicio__precio'>US$ {info.precio}</p>
        </Link>
    )
}

export default Item