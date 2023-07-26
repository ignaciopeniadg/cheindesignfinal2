import React from 'react'
import CV from '../../assets/pdf/CV-Esp.pdf'
import { Link } from 'react-router-dom'

const CTA = () => {
    return (
        <div className='cta'>
            <Link to={CV} download className='btn'>Descargar CV</Link>
            <Link to="/contacto" className='btn'>Contacto</Link>
        </div>
    )
}

export default CTA