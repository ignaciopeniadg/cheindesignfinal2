import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import Logo from '../../assets/img/navbar-logo.png'
import { BiMenu } from 'react-icons/bi'
import { MdOutlinePersonOutline } from 'react-icons/md'
import { MdOutlineWorkHistory } from 'react-icons/md'
import { MdOutlineAssuredWorkload } from 'react-icons/md'
import { GoBook } from 'react-icons/go'
import { AiOutlineStar } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { BsHandbag } from 'react-icons/bs'
import CartWidget from '../CartWidget/CartWidget'
//import { RxCross2 } from 'react-icons/rx'


class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    return (
      <>
        <nav className='nav__principal'>
          <div id='mobile' className='burger' onClick={this.handleClick}>
            <BiMenu id='bar menu' />
          </div>
          <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"} >
            <li><NavLink to='/'><img className='logo' src={Logo} alt='logo' /></NavLink></li>
            <li><NavLink to='/sobremi'><MdOutlinePersonOutline /><h5 id='nav__text'>Sobre Mi</h5></NavLink></li>
            <li><NavLink to='/experiencia'><MdOutlineWorkHistory /><h5 id='nav__text'>Experiencia</h5></NavLink></li>
            <li><NavLink to='/estudios'><MdOutlineAssuredWorkload /><h5 id='nav__text'>Estudios</h5></NavLink></li>
            <li><NavLink to='/skills'><AiOutlineStar /><h5 id='nav__text'>Skills</h5></NavLink></li>
            <li><NavLink to='/portfolio'><GoBook /><h5 id='nav__text'>Portfolio</h5></NavLink></li>
            <li><NavLink to='/servicios'><BsHandbag /><h5 id='nav__text'>Servicios</h5></NavLink></li>
            <li><NavLink to='/contacto'><AiOutlineMail /><h5 id='nav__text'>Contacto</h5></NavLink></li>
          </ul>
        </nav>
        <nav className='nav__secundaria'>
          <ul className='links'>
            <li><CartWidget /></li>
          </ul>
        </nav>
        <nav className='nav__categorias'>
          <ul id="navbar__categorias">
            <li><NavLink to='/servicios'><h5 id='navbar__categorias__text'>Todos</h5></NavLink></li>            <li><NavLink to='/servicios/categoria/brand'><h5 id='navbar__categorias__text'>Branding</h5></NavLink></li>
            <li><NavLink to='/servicios/categoria/merch'><h5 id='navbar__categorias__text'>Merch</h5></NavLink></li>
            <li><NavLink to='/servicios/categoria/pack'><h5 id='navbar__categorias__text'>Packaging</h5></NavLink></li>
            <li><NavLink to='/servicios/categoria/edi'><h5 id='navbar__categorias__text'>Editorial</h5></NavLink></li>
            <li><NavLink to='/servicios/categoria/ilus'><h5 id='navbar__categorias__text'>Ilustración</h5></NavLink></li>
            <li><NavLink to='/servicios/categoria/rrss'><h5 id='navbar__categorias__text'>Redes Sociales</h5></NavLink></li>
            <li><NavLink to='/servicios/categoria/web'><h5 id='navbar__categorias__text'>Web</h5></NavLink></li>
          </ul>
        </nav>
      </>

    )
  }
}

export { Navbar }