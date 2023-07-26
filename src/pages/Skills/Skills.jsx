import React from 'react'
import './skills.css'
import { AiOutlineStar } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'

import { SiAdobeillustrator } from 'react-icons/si'
import { SiAdobephotoshop } from 'react-icons/si'
import { SiAdobeindesign } from 'react-icons/si'
import { SiAdobepremierepro } from 'react-icons/si'
import { SiAdobeaftereffects } from 'react-icons/si'

import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiBootstrap } from 'react-icons/si'
import { SiSass } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiReact } from 'react-icons/si'



const Skills = () => {
  return (
    <section id='skills'>
      <h5>Leveleando mis</h5>
      <h2>Skills</h2>

      <div className='container skills__container'>
        <div className='skills__design'>
          <h3>Diseño Gráfico</h3>
          <div className='skills__contenido'>
            <article className='skills__detalle'>
              <div className='skills__nombre'>
                <SiAdobeillustrator className='iconos__skills' />
                <h4>Illustrator</h4>
              </div>
              <div className='skills__estrellas'>
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
              </div>
            </article>
            <article className='skills__detalle'>
              <div className='skills__nombre'>
                <SiAdobephotoshop className='iconos__skills' />
                <h4>Photoshop</h4>
              </div>
              <div className='skills__estrellas'>
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
              </div>
            </article>
            <article className='skills__detalle'>
              <div className='skills__nombre'>
                <SiAdobeindesign className='iconos__skills' />
                <h4>InDesign</h4>
              </div>
              <div className='skills__estrellas'>
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiOutlineStar className='iconos__estrellas' />
                <AiOutlineStar className='iconos__estrellas' />
              </div>
            </article>
            <article className='skills__detalle'>
              <div className='skills__nombre'>
                <SiAdobepremierepro className='iconos__skills' />
                <h4>Premiere Pro</h4>
              </div>
              <div className='skills__estrellas'>
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiOutlineStar className='iconos__estrellas' />
              </div>
            </article>
            <article className='skills__detalle'>
              <div className='skills__nombre'>
                <SiAdobeaftereffects className='iconos__skills' />
                <h4>After Effects</h4>
              </div>
              <div className='skills__estrellas'>
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiOutlineStar className='iconos__estrellas' />
              </div>
            </article>
          </div>
        </div>
        <div className='skills__frontend'>
          <h3>Desarrollo Front-End</h3>
          <div className='skills__contenido'>
            <article className='skills__detalle'>
              <div className='skills__nombre'>
                <SiHtml5 className='iconos__skills' />
                <h4>HTML</h4>
              </div>
              <div className='skills__estrellas'>
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiOutlineStar className='iconos__estrellas' />
              </div>
            </article>
            <article className='skills__detalle'>
              <div className='skills__nombre'>
                <SiCss3 className='iconos__skills' />
                <h4>CSS</h4>
              </div>
              <div className='skills__estrellas'>
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiOutlineStar className='iconos__estrellas' />
              </div>
            </article>
            <article className='skills__detalle'>
              <div className='skills__nombre'>
                <SiBootstrap className='iconos__skills' />
                <h4>Bootstrap</h4>
              </div>
              <div className='skills__estrellas'>
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiOutlineStar className='iconos__estrellas' />
                <AiOutlineStar className='iconos__estrellas' />
              </div>
            </article>
            <article className='skills__detalle'>
              <div className='skills__nombre'>
                <SiSass className='iconos__skills' />
                <h4>SASS</h4>
              </div>
              <div className='skills__estrellas'>
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiOutlineStar className='iconos__estrellas' />
                <AiOutlineStar className='iconos__estrellas' />
              </div>
            </article>
            <article className='skills__detalle'>
              <div className='skills__nombre'>
                <SiJavascript className='iconos__skills' />
                <h4>JavaScript</h4>
              </div>
              <div className='skills__estrellas'>
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiOutlineStar className='iconos__estrellas' />
              </div>
            </article>
            <article className='skills__detalle'>
              <div className='skills__nombre'>
                <SiReact className='iconos__skills' />
                <h4>React Js</h4>
              </div>
              <div className='skills__estrellas'>
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiFillStar className='iconos__estrellas' />
                <AiOutlineStar className='iconos__estrellas' />
                <AiOutlineStar className='iconos__estrellas' />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Skills }