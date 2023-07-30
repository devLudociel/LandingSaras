import React from 'react'
import "./Hero.css"
import imgS from "../../../src/assets/Shein.png"
import imgR from "../../../src/assets/Romwe.png"
import imgSt from "../../../src/assets/Stripe.png"
import imgB from "../../../src/assets/Binance.png"
import feacture1 from "../../../src/assets/feacture1.png"
import feacture2 from "../../../src/assets/entrega.png"
import feacture3 from "../../../src/assets/pago.png"
import NavBar from '../Navbar/NavBar'
import { BsArrowDown } from "react-icons/bs"
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Hero = () => {
  return (
    <>
      <NavBar />
      <div className="containerHero">
        <div className="containerText">
          <h1>
            Recibir las últimas tendencias de la moda sin complicaciones
            <br />
            Es posible con nuestro Servicio
          </h1>
          <p className="text">Compra en la amplia colección de Shein y deja que Sara'sFashions se encargue del envío y la entrega. Disfrute de una entrega garantizada del producto y de cómodas opciones de pago en dos plazos. ¡Manténgase elegante sin esfuerzo!</p>
          <button className="btn">ENVIAR MENSAJE AL WHATSAPP PARA EMPEZAR A COMPRAR</button>
        </div>
      </div>

      <div className="containerMarcas">
        <img src={imgR} alt="romwe" />
        <img src={imgSt} alt="stripe" />
        <img src={imgS} alt="shein" className='sheinL' />
        <img src={imgB} alt="binance" />
      </div>

      <div className="gancho">
        <h2>Ponte a la moda con Sara'sFashions
          <br />
          Compras fáciles y pagos flexibles.</h2>
        <p>Compra las últimas tendencias de Shein sin las molestias del envío y la entrega. Con Sara'sFashions, puede disfrutar de una entrega garantizada de los productos y de la comodidad de pagar en dos plazos. Manténgase a la moda sin arruinarse.</p>

        <p>Estos son Algunos de Nuestros Beneficios</p>
        <span>
          <BsArrowDown />
          <BsArrowDown />
          <BsArrowDown />
          <BsArrowDown />
          <BsArrowDown />
          <BsArrowDown />
          <BsArrowDown />
          <BsArrowDown />

        </span>
      </div>

      <div className="feactures">
        <div className="feacture">
          <h2>Compre sin complicaciones y sin costes ocultos.
          </h2>

          <p>En Sara'sFashions creemos en la transparencia de precios. Compre con nosotros y disfrute de la comodidad de no tener que realizar pagos adicionales en sus compras. Sin sorpresas ni costes ocultos, sólo compras sencillas y entrega garantizada. Además, puedes incluso elegir pagar en dos plazos para una mayor flexibilidad. Compre sin complicaciones y disfrute de una experiencia de compra perfecta con Sara'sFashions.</p>

          <img src={feacture1} alt="" width={600} />
        </div>

        <div className="feacture">
          <h2>Compre con confianza, sabiendo que sus productos serán entregados.
          </h2>

          <p>No se preocupe por paquetes perdidos o retrasos en las entregas. Con Sara'sFashions, le garantizamos la entrega segura y puntual de sus productos. Compra con tranquilidad y disfruta de la comodidad del pago en dos plazos.</p>

          <img src={feacture2} alt="" width={600} />
        </div>

        <div className="feacture">
          <h2>Compre ahora, paga después con Sara'sFashions.
          </h2>

          <p>Disfrute de la flexibilidad de pagar en dos plazos cuando haga el pedido y cuando reciba la mercancía. Sin pagos adicionales. Compre ahora y disfrute de una compra sin complicaciones con entrega garantizada y cómodas opciones de pago.</p>

          <img src={feacture3} alt="" width={600} />
        </div>
      </div>

      <div className="containerAction">
        <h2>¿Listo para comprar en Shein?</h2>
        <p>Compre en Shein y deje que Sara'sFashions se encargue del envío y la entrega. Disfrute de una entrega garantizada del producto y de cómodas opciones de pago en dos plazos. ¡Manténgase elegante sin esfuerzo!</p>
        <button className="btnAction">ENVIAR MENSAJE AL WHATSAPP PARA EMPEZAR A COMPRAR</button>
      </div>
      <Footer />
    </>
  )
}

export default Hero