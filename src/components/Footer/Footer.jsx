import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="containerFooter" class="grid gap-4 md:gap-0 grid-cols-4 justify-around mx-16 tablet:grid-cols-2 mobile:grid-cols-none" >
        <div className="company" class="grid gap-3 grid-cols-1 grid-rows-3 py-5 ">
          <strong>Sobre Nosotros</strong>
          <Link>Clientes</Link>
          <Link>Blog</Link>
        </div>

        <div className="servicios" class="grid gap-3 grid-cols-1 grid-rows-3 py-5 ">
          <strong>Servicios</strong>
          <Link to="/servicio">¿Como funciona?</Link>
          <Link>Envíos</Link>
          <Link>Pagos</Link>
          <Link to="/contacto">Contacto</Link>
        </div>

        <div className="redes" class="grid gap-3 grid-cols-1 grid-rows-3 py-5 ">
          <strong>Redes Sociales</strong>
          <Link>Facebook</Link>
          <Link>Instagram</Link>
          <Link>TikTok</Link>
        </div>


        <div className="terminos" class="grid gap-3 grid-cols-1 grid-rows-3 py-5 ">
          <strong>Términos de servicios</strong>
          <Link to="/Politica-de-privacidad">Política de privacidad</Link>
        </div>

      </div>
        <div className="copy" class="flex justify-center mt-8">
          <p>© 2021 Sara'sFashions. Todos los derechos reservados.</p>
        </div>
    </>
  )
}

export default Footer