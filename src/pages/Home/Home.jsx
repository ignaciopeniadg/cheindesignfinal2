import React from 'react'
import './home.css'
import CTA from './CTA'
import Foto from '../../assets/img/foto-chein.png'
import Logo from '../../assets/img/navbar-logo.png'


function Home() {
    return (
        <header id='home'>
            <div className="container header__container">
                <div className='logo__container'>
                    <img src={Logo} alt='logo'/>
                </div>
                <h5>¡Hola! Mi nombre es</h5>
                <h1>Ignacio Peña</h1>
                <h5 className='efecto-escritura'>Diseñador & Desarrollador Front-End</h5>
                <CTA />
                <div className='foto'>
                    <img src={Foto} alt='foto'/>
                </div>
            </div>

        </header>
    )
}


export { Home }