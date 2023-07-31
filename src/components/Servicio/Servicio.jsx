import React from 'react'
import "./Servicio.css"
import Box from "../../assets/Box.png"
import elige from "../../assets/elige.png"
import elige1 from "../../assets/elige1.png"
import elige2 from "../../assets/elige2.png"
import paga from "../../assets/paga.png"
import paga1 from "../../assets/paga1.png"
import paga2 from "../../assets/paga2.png"
import entregar from "../../assets/entregar.png"
import entregar1 from "../../assets/entregar1.png"
import entregar2 from "../../assets/entregar2.png"
import NavBar from "../Navbar/NavBar"
import Footer from "../Footer/Footer"

const Servicio = () => {
  return (
    <>
      <NavBar />
      <div className="containerS">
        <h1 className="title">Nuestro Servicio</h1>

        <div className="containerServicio">
          <div className="containerTextS">
            <h2 className="titleH2">¿Cómo funciona?</h2>
            <div className="parrafo">
              <p>Somos una empresa especializada en el desarrollo de
                compras y envíos de productos de la tienda Shein.</p>
              <p>Contamos con un equipo de trabajo que se encarga de realizar
                el proceso de compra y envío de tus productos de manera
                segura y confiable.</p>
              <p>Te ofrecemos un servicio de calidad, con el cual podrás
                disfrutar de la moda de Shein sin lidiar con trámites ni
                preocupaciones.</p>
            </div>
            <p>¡Nosotros lo hacemos por ti!</p>
          </div>
          <div className="containerImg">
            <img src={Box} alt="Img-Servicio" className='img1' />
          </div>
        </div>
      </div>

      <div className="containerExplication">
        <h1>Haz tus compras en tres (3) Sencillos pasos</h1>
        <div className="explication">
          <div className="containerTextE">
            <h2 className="titleH2">1. Selecciona tus productos</h2>
            <p>Elige los productos que deseas comprar en la tienda Shein y
              envíanos los links de cada uno de ellos.</p>
            <div className="containerImg">
              <img src={elige} alt="" />
              <img src={elige1} alt="" />
              <img src={elige2} alt="" />
            </div>
          </div>
          <div className="containerTextE">
            <h2 className="titleH2">2. Realiza el pago solo de la MITAD del valor</h2>
            <p>Realiza el pago de tus productos a través de diferentes metodos de pago, enviamos un mensaje al Whatsapp para enterarte de ellos.</p>
              <div className="containerImg">
              <img src={paga} alt="" />
              <img src={paga1} alt="" />
              <img src={paga2} alt="" />
            </div>
          </div>
          <div className="containerTextE">
            <h2 className="titleH2">3. Recibe tus productos y Cancela la otra MITAD del pago</h2>
            <p>Recibe tus productos en la puerta de tu casa, por alguna agencia de envios o entrega personal.</p>
            <div className="containerImg">
              <img src={entregar} alt="" />
              <img src={entregar1} alt="" />
              <img src={entregar2} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
export default Servicio