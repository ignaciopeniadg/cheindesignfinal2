import React from 'react'
import './sobremi.css'
import Retrato1 from '../../assets/img/retrato-01.JPG'
import {MdOutlineWorkHistory} from 'react-icons/md'
import {MdOutlineAssuredWorkload} from 'react-icons/md'
import {GoBook} from 'react-icons/go'
import { Link } from 'react-router-dom'

function SobreMi() {
  return (
    <section id='sobremi'>
        <h5>Me presento</h5>
        <h2>Sobre mí</h2>
      <div className='container sobremi__container'>
        <div className='sobremi__yo'>
          <div className='sobremi__yo-img'>
            <img src={Retrato1} alt='Sobre Mi Retrato 01'/>
          </div>
        </div>

        <div className='sobremi__contenido'>
          <div className='sobremi__cards'>
            <article className='sobremi__card'>
              <MdOutlineWorkHistory className='sobremi__icon'/>
              <h5>Experiencia</h5>
              <small>6+ Años</small>
            </article>

            <article className='sobremi__card'>
              <MdOutlineAssuredWorkload className='sobremi__icon'/>
              <h5>Estudios</h5>
              <small>Diseño Gráfico y Desarrollo Web</small>
            </article>

            <article className='sobremi__card'>
              <GoBook className='sobremi__icon'/>
              <h5>Proyectos</h5>
              <small>+100 proyectos completados</small>
            </article>
          </div>
          <p>
          "Mi nombre es Nacho, me dicen "Chein". Soy Diseñador Gráfico especializado en Imagen Corporativa, amante de la realización de la imagen visual en una empresa, egresado de la Universidad de Palermo donde realicé mi carrera y especialización, actualmente ocupo el cargo de Director de Arte Sr y me encuentro realizando estudios en el ámbito del Desarrollo Web."
          </p>

          <Link to='/contacto' className='btn btn-primary'>¡Charlemos!</Link>
        </div>
      </div>
    </section>
  )
}

export { SobreMi }