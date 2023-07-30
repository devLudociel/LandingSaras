import React from 'react'
import "./Servicio.css"
import Box from "../../assets/Box.png"
import NavBar from "../Navbar/NavBar"

const Servicio = () => {
  return (
    <>
    <NavBar/>
      <div className="containerS">
        <h1 className="title">Nuestro Servicio</h1>

        <div className="containerServicio">
          <div className="containerText">
            <h2 className="titleH2">¿Cómo funciona?</h2>
            <p><strong>Somos una empresa especializada en el desarrollo de
              compras y envíos de productos de la tienda Shein.</strong></p>
            <p>Contamos con un equipo de trabajo que se encarga de realizar
              el proceso de compra y envío de tus productos de manera
              segura y confiable.</p>
            <p>Te ofrecemos un servicio de calidad, con el cual podrás
              disfrutar de la moda de Shein sin lidiar con trámites ni
              preocupaciones.</p>
            <p>¡Nosotros lo hacemos por ti!</p>
          </div>
          <div className="containerImg">
            <img src={Box} alt="Img-Servicio" className='img1' />
          </div>
        </div>
      </div>
    </>
  )
}
export default Servicio