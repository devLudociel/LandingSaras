import { React } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { BsWhatsapp } from "react-icons/bs"
import { AiOutlineArrowRight } from "react-icons/ai"
import { useEffect, useState } from "react"

const NavBar = () => {

  const [show, setShow] = useState(false)
  return (
    <nav className='containerNav'>
      <div className='containerLogo'>
        <h1 className='logo'>Sara´sFashions</h1>
        <div className={`navToggle ${show && "open"}`} onClick={() => setShow(!show)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`navigations ${show && "open"}`}>
        <ul className="navLinks">
          <Link to="/">Inicio</Link>
          <Link to="/Servicio">Servicios</Link>
          <Link to="/Ask">Preguntas Frecuentes</Link>
          <Link to="/Contacto">Contacto</Link>
        </ul>
        
      <div className="whatsapp">
        <a href="https://wa.me/34643037152?text=Hola%20Sara'sFashions%20quiero%20comprar%20en%20Shein" target="_blank" rel="noreferrer">
          <i>
            <BsWhatsapp />
          </i>
          <i>
            <AiOutlineArrowRight />
          </i>
        </a>
      </div>
      </div>

    </nav>
  )
}

export default NavBar