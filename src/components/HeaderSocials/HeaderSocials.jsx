import { BrowserRouter, Link } from 'react-router-dom'
import React from 'react'
import './headersocials.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'
import {AiOutlineBehance} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'


const HeaderSocials = () => {
    return (
        <>
            <BrowserRouter>
                <div className='header__socials'>
                        <Link className='iconos__rrss' to='https://www.linkedin.com/in/ignaciopeniadg/'><AiOutlineLinkedin/></Link>
                        <Link className='iconos__rrss' to='https://www.behance.net/ignaciopeniadg'><AiOutlineBehance/></Link>
                        <Link className='iconos__rrss' to='https://github.com/ignaciopeniadg'><AiOutlineGithub/></Link>
                        <Link className='iconos__rrss' to='https://www.youtube.com/@cheindesign'><AiOutlineYoutube/></Link>
                        <Link className='iconos__rrss' to='https://www.instagram.com/cheindesign/'><AiOutlineInstagram/></Link>
                </div>
            </BrowserRouter>
        </>

    )
}

export { HeaderSocials }