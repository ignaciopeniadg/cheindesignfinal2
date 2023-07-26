import React from 'react'
import './estudios.css'
import Retrato4 from '../../assets/img/retrato-04.JPG'

function Estudios() {
  return (
    <section id='estudios'>
      <h5>Repaso sobre mis</h5>
      <h2>Estudios</h2>

      <div className='container estudios__container'>
        <div className='estudios__grid'>
          <div className='estudios__contenido '>
            <div className='estudios__nombre'>
              <h4 id='estudios__nombre-clase'>Estudios</h4>
            </div>
            <div className='estudios__list'>
              <div className='estudios__list-item'>
                <h5 id='estudios__nombre-empresa'>Diseño de Imágen Empresarial</h5>
                <h5 id='estudios__nombre-fecha'>Universidad de Palermo, Bs.As. Argentina</h5>
                <h5 id='estudios__nombre-fecha'>Ago 2018 - Dic 2019</h5>
              </div>
              <div className='estudios__list-item'>
                <h5 id='estudios__nombre-empresa'>Diseño Gráfico</h5>
                <h5 id='estudios__nombre-fecha'>Universidad de Palermo, Bs.As. Argentina</h5>
                <h5 id='estudios__nombre-fecha'>Ago 2014 - Jun 2018</h5>
              </div>
              <div className='estudios__list-item'>
                <h5 id='estudios__nombre-empresa'>Secundario</h5>
                <h5 id='estudios__nombre-fecha'>Newton College, Lima Perú</h5>
                <h5 id='estudios__nombre-fecha'>Ene 2009 - Dic 2011</h5>
              </div>
              <div className='estudios__list-item'>
                <h5 id='estudios__nombre-empresa'>Secundario</h5>
                <h5 id='estudios__nombre-fecha'>Instituto María Auxiliadora, Neuquén Argentina</h5>
                <h5 id='estudios__nombre-fecha'>Ene 2007 - Dic 2008</h5>
              </div>
            </div>
          </div>
          <div className='estudios__contenido '>
            <div className='estudios__nombre'>
              <h4 id='estudios__nombre-clase'>Cursos</h4>
            </div>
            <div className='estudios__list'>
              <div className='estudios__list-item'>
                <h5 id='estudios__nombre-empresa'>React Js</h5>
                <h5 id='estudios__nombre-fecha'>Coderhouse, Bs.As. Argentina</h5>
                <h5 id='estudios__nombre-fecha'>May 2023 - Jul 2023</h5>
              </div>
              <div className='estudios__list-item'>
                <h5 id='estudios__nombre-empresa'>JavaScript</h5>
                <h5 id='estudios__nombre-fecha'>Coderhouse, Bs.As. Argentina</h5>
                <h5 id='estudios__nombre-fecha'>Feb 2023 - Abr 2023</h5>
              </div>
              <div className='estudios__list-item'>
                <h5 id='estudios__nombre-empresa'>Desarrollo Web</h5>
                <h5 id='estudios__nombre-fecha'>Coderhouse, Bs.As. Argentina</h5>
                <h5 id='estudios__nombre-fecha'>Dic 2022 - Feb 2023</h5>
              </div>
              <div className='estudios__list-item'>
                <h5 id='estudios__nombre-empresa'>Photoshop e Illustrator</h5>
                <h5 id='estudios__nombre-fecha'>Coderhouse, Bs.As. Argentina</h5>
                <h5 id='estudios__nombre-fecha'>Sep 2020 - Oct 2020</h5>
              </div>
              <div className='estudios__list-item'>
                <h5 id='estudios__nombre-empresa'>Desarrollo Web</h5>
                <h5 id='estudios__nombre-fecha'>Da Vinci Multimedia School, Bs.As. Argentina</h5>
                <h5 id='estudios__nombre-fecha'>Jul 2019 - Dic 2019</h5>
              </div>
              <div className='estudios__list-item'>
                <h5 id='estudios__nombre-empresa'>Serigrafía</h5>
                <h5 id='estudios__nombre-fecha'>Centro Cultural Recoleta, Bs.As. Argentina</h5>
                <h5 id='estudios__nombre-fecha'>Jul 2017 - Dic 2017</h5>
              </div>
            </div>
          </div>
        </div>
        <div className='estudios__yo'>
          <div className='estudios__yo-img' id='estudios__yo-img'>
            <img src={Retrato4} alt='Sobre Mi Retrato 04' />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Estudios }