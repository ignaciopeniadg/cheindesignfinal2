import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import { Home } from './pages/Home/Home'
import { Navbar } from './components/Navbar/Navbar'
import { SobreMi } from './pages/Sobremi/SobreMi'
import { Experiencia } from './pages/Experiencia/Experiencia'
import { Estudios } from './pages/Estudios/Estudios'
import { Skills } from './pages/Skills/Skills'
import { Portfolio } from './pages/Portfolio/Portfolio'
import { Contacto } from './pages/Contacto/Contacto'
import { HeaderSocials } from './components/HeaderSocials/HeaderSocials'
import { Cart } from './pages/Cart/Cart'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import './index.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartProvider from './context/CartContext'



function App() {
    return (
        <>
            <BrowserRouter>
                <CartProvider>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/sobremi' element={<SobreMi />} />
                        <Route path='/experiencia' element={<Experiencia />} />
                        <Route path='/estudios' element={<Estudios />} />
                        <Route path='/skills' element={<Skills />} />
                        <Route path='/portfolio' element={<Portfolio />} />

                        <Route path='/servicios' element={<ItemListContainer />} />
                        <Route path='/servicios/categoria/:categoriaId' element={<ItemListContainer />} />

                        <Route path='/detalle' element={<ItemDetailContainer />} />
                        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />

                        <Route path='/contacto' element={<Contacto />} />
                        <Route path='/carrito' element={<Cart />} />
                    </Routes>
                </CartProvider>
            </BrowserRouter>
            <HeaderSocials />
        </>

    )
}
export default App