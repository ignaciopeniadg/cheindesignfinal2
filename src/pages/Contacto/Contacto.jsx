import React from 'react'
import './contacto.css'
import { Link } from 'react-router-dom'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4hwyeux', 'template_x85r8te', form.current, 'qdg-Z134u2PumBb-j')

    e.target.reset()
  };

  return (
    <section id='contacto'>
      <h5>¡Dejanos tu consulta!</h5>
      <h2>Contacto</h2>

      <div className='container contacto__container'>
        <div className='contacto__opciones'>
          <article className='contacto__opcion'>
            <AiOutlineMail className='contacto__icon'/>
            <h4>Email</h4>
            <h5>ignaciopeniadg@gmail.com</h5>
            <Link to="mailto:ignaciopeniadg@gmail.com" target='_blank'><small className='contacto__opcion-link'>¡Enviame un mensaje!</small></Link>
          </article>
          <article className='contacto__opcion'>
            <AiOutlineWhatsApp className='contacto__icon'/>
            <h4>WhatsApp</h4>
            <h5>+54 9 11 3672-5337</h5>
            <Link to="https://wa.me/5491136725337" target='_blank' ><small className='contacto__opcion-link'>¡Enviame un mensaje!</small></Link>
          </article>
        </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Tu nombre' required />
            <input type='email' name='email' placeholder='Tu e-mail' required />
            <textarea name='message' rows="7" placeholder='Tu mensaje'></textarea>
            <button type='submit'  className='btn btn-primary'>¡Enviar!</button>
          </form>
      </div>

    </section>
  )
}

export { Contacto }