import React from 'react'
import './experiencia.css'
import { SiAdobeillustrator } from 'react-icons/si'
import { SiAdobephotoshop } from 'react-icons/si'
import { SiAdobeindesign } from 'react-icons/si'
import { SiAdobepremierepro } from 'react-icons/si'
import { SiAdobeaftereffects } from 'react-icons/si'


function Experiencia() {
    return (
      <section id='experiencia'>
        <h5>Repaso sobre mi</h5>
        <h2>Experiencia</h2>

        <div className='container experiencia__container'>
          <div className='experiencia__contenido'>
            <div className='experiencia__nombre'>
              <h4 id='experiencia__nombre-puesto'>Director de Arte Sr.</h4>
              <h5 id='experiencia__nombre-empresa'>Oliver, U-Studio</h5>
              <h5 id='experiencia__nombre-fecha'>May 2022 - Actualidad</h5>
            </div>
            <div className='experiencia__descripcion'>
              <p>Desarrollo de KV  y adaptación de piezas digitales para diferentes campañas en marcas específicas. Dirección de Arte para cuenta Axe Latam @axe.latam, desarrollo de línea gráfica en productos para la cuenta, creación de contenido visual. </p>
            </div>
            <div className='experiencia__programas'>
              <SiAdobeillustrator className='iconos__experiencia' />
              <SiAdobephotoshop className='iconos__experiencia' />
              <SiAdobepremierepro className='iconos__experiencia' />
              <SiAdobeaftereffects className='iconos__experiencia' />
            </div>
          </div>
          <div className='experiencia__contenido'>
            <div className='experiencia__nombre'>
              <h4 id='experiencia__nombre-puesto'>Diseñador Gráfico E-Commerce Ssr.</h4>
              <h5 id='experiencia__nombre-empresa'>Oliver, U-Studio</h5>
              <h5 id='experiencia__nombre-fecha'>Nov 2021 - May 2022</h5>
            </div>
            <div className='experiencia__descripcion'>
              <p>Adaptación de piezas digitales para retailers e-commerce, desarrollo de cratividades para campañas. </p>
            </div>
            <div className='experiencia__programas'>
              <SiAdobeillustrator className='iconos__experiencia' />
              <SiAdobephotoshop className='iconos__experiencia' />
              <SiAdobeaftereffects className='iconos__experiencia' />
            </div>
          </div>
          <div className='experiencia__contenido'>
            <div className='experiencia__nombre'>
              <h4 id='experiencia__nombre-puesto'>Diseñador Gráfico</h4>
              <h5 id='experiencia__nombre-empresa'>Felices las Vacas</h5>
              <p id='experiencia__nombre-fecha'>Jul 2021 - Oct 2021</p>
            </div>
            <div className='experiencia__descripcion'>
              <p>Desarrollo de KV  y adaptación de piezas digitales para redes sociales. Armado de Packaging para productos en formato digital e impreso. Preparación de archivos para ploteo vehicular. Preparación de archivos para cartelería publicitaria. Preparación de archivos para comunicación interna. </p>
            </div>
            <div className='experiencia__programas'>
              <SiAdobeillustrator className='iconos__experiencia' />
              <SiAdobephotoshop className='iconos__experiencia' />
            </div>
          </div>
          <div className='experiencia__contenido'>
            <div className='experiencia__nombre'>
              <h4 id='experiencia__nombre-puesto'>Diseñador Gráfico Jr</h4>
              <h5 id='experiencia__nombre-empresa'>Back to Blank</h5>
              <p id='experiencia__nombre-fecha'>Nov 2020 - Jun 2021</p>
            </div>
            <div className='experiencia__descripcion'>
              <p>Desarrollo de piezas gráficas para redes sociales, logotipos, implementación de marca y MockUps de productos. Desarrollo de paginas web en WordPressm Elemmentor.</p>
            </div>
            <div className='experiencia__programas'>
              <SiAdobeillustrator className='iconos__experiencia' />
              <SiAdobephotoshop className='iconos__experiencia' />
            </div>
          </div>
          <div className='experiencia__contenido'>
            <div className='experiencia__nombre'>
              <h4 id='experiencia__nombre-puesto'>Diseñador Gráfico Jr</h4>
              <h5 id='experiencia__nombre-empresa'>Estimulo Visual</h5>
              <p id='experiencia__nombre-fecha'>Ago 2017 - Ago 2018</p>
            </div>
            <div className='experiencia__descripcion'>
              <p>Encargado de diseño para ploteo vehicular. Manejo de Software de diseño, plotter de corte e impresion de archivos. Presentación de bocetos a cliente. </p>
            </div>
            <div className='experiencia__programas'>
              <SiAdobeillustrator className='iconos__experiencia' />
              <SiAdobephotoshop className='iconos__experiencia' />
            </div>
          </div>
          <div className='experiencia__contenido'>
            <div className='experiencia__nombre'>
              <h4 id='experiencia__nombre-puesto'>Asistente de Materia</h4>
              <h5 id='experiencia__nombre-empresa'>Universidad de Palermo</h5>
              <p id='experiencia__nombre-fecha'>May 2022 - Jul 2018</p>
            </div>
            <div className='experiencia__descripcion'>
              <p>Reflexión Artística</p>
              <p>Producción Gráfica</p>
              <p>Tipografía</p>
            </div>
            <div className='experiencia__programas'>
              <SiAdobeillustrator className='iconos__experiencia' />
              <SiAdobephotoshop className='iconos__experiencia' />
              <SiAdobeindesign className='iconos__experiencia' />
            </div>
          </div>

        </div>
      </section>
    )
  }


export { Experiencia }