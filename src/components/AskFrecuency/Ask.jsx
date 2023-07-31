import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Ask.css'

const Ask = () => {
  return (
    <>
      <Navbar/>

      <div className="containerAsk" class="my-8 text-center">
        <h1 className="title">Preguntas Frecuentes</h1>
        <div className="containerPreguntas">
          <div className="containerPregunta" class="grid grid-cols-2 gap-4 py-0 px-16 my-8 mobile: grid-rows-2 grid-cols-1">
            <h2 className="titleAsk">
              1. ¿Qué es el servicio de compras en línea en Shein con envíos gratis a Venezuela en dos partes de pago?
            </h2>
            <p className="parrafoAsk">
              R = Es un servicio que prestamos como startups, para hacer compras en línea de la plataforma Shein para todas aquellas personas que desean hacer sus compras desde una (1) pieza en adelante.
            </p>

            <h2 className="titleAsk">
              2. ¿Cómo puedo realizar una compra utilizando el servicio en dos partes de pago?
            </h2>
            <p className="parrafoAsk">
              R = Con nuestro servicio al hacer tu pedido, solo cancelaras la mitad del total de la compra, y la otra mitad al recibir tu mercancia.
            </p>

            <h2 className="titleAsk">
              3. ¿Cuáles son los requisitos para poder acceder a la opción de pago en dos partes?
            </h2>
            <p className="parrafoAsk">
              R = Desde el primer pedido ya eres elegida/o para ser parte de esta opción de pago en dos partes, no necesitas ningún requisito previo
            </p>

            <h2 className="titleAsk">
              4. ¿Qué métodos de pago se aceptan para realizar los pagos en dos partes?
            </h2>
            <p className="parrafoAsk">
              R = Aceptamos pagos en efectivo, transferencias bancarias, pagos en criptomonedas por medio de binance en USDT y pagos en monedero Zinli
            </p>

            <h2 className="titleAsk">
              5. ¿Existe un monto mínimo de compra para poder utilizar este servicio?
            </h2>
            <p className="parrafoAsk">
              R = Para usar nuestros servicios no existe un monto mínimo de pedido, sin embargo a mayor cantidad de prendas de ropa, podrá aprovechar mejor el envío y reducir los costos
            </p>

            <h2 className="titleAsk">
            6. ¿Cómo se dividen los pagos en dos partes y cuál es el plazo para realizar cada pago?
            </h2>
            <p className="parrafoAsk">
            R = Al momento de realizar y confirmar el pedido, tanto unidades como tallas, colores y demás, se deberá hacer el pago del 50% del total, y el otro 50% al retirar o recibir el paquete.
            </p>

            <h2 className="titleAsk">
            7. ¿Hay algún costo adicional por utilizar este servicio de pago en dos partes?
            </h2>
            <p className="parrafoAsk">
            R = El costo adicional suele ser mínimo por concepto de pago de envios, van desde 0.3$ a 0.8$ por pieza, un pedido de 200$ generalmente suele generar un costo adicional de envio de 8$
            </p>

            <h2 className="titleAsk">
            8. ¿Qué sucede si no puedo realizar el segundo pago en la fecha acordada?
            </h2>
            <p className="parrafoAsk">
            R = Si no puedes cancelar tu pedido a la hora de entregar, guardaremos el paquete por un tiempo prudencial, si no te pones en contacto para retirar tu paquete o no cancelas, no podremos entregarte tu pedido.
            </p>

            <h2 className="titleAsk">
            9. ¿Puedo cancelar mi pedido después de haber realizado el primer pago?
            </h2>
            <p className="parrafoAsk">
            R = Luego de realizar el pago no se puede cancelar el pedido porque ya se habrá hecho la compra de los artículos.
            </p>

            <h2 className="titleAsk">
            10. ¿Qué ocurre si uno de los artículos que compré está agotado o no está disponible para entrega en Venezuela?
            </h2>
            <p className="parrafoAsk">
            R = En este caso te informaremos, y tu decides si lo retiras o cambias por algún otro producto similar.
            </p>

            <h2 className="titleAsk">
            11. ¿Cuál es el tiempo estimado de entrega para los pedidos con envío gratis a Venezuela?
            </h2>
            <p className="parrafoAsk">
            R = El tiempo máximo de entrega una vez confirmada la compra es de 1 MES, Nuestras entregas suelen tardar de 15 días a 3 semanas, si se alarga este tiempo, es por algún inconveniente con aduanas, pero siempre te mantendremos informados sobre el status de tu envio.
            </p>

            <h2 className="titleAsk">
            12. ¿Puedo hacer seguimiento de mi pedido durante el proceso de envío?
            </h2>
            <p className="parrafoAsk">
            R = Puedes escribirnos y nosotros te daremos la información necesaria.
            </p>

            <h2 className="titleAsk">
            13. ¿Qué debo hacer si mi pedido llega dañado o con algún problema?
            </h2>
            <p className="parrafoAsk">
            R = Solemos asegurar la carga, hasta la fecha hemos entregado más de 2450 prendas y ninguna ha sido defectuosa.
            </p>

            <h2 className="titleAsk">
            14. ¿Hay alguna política de devoluciones o reembolsos para los pedidos con envío gratis a Venezuela?
            </h2>
            <p className="parrafoAsk">
            R = Lamentandolo mucho no tenemos este servicio, sin embargo siempre podrás escribirnos para darte una solución o buscarla juntos.
            </p>

            <h2 className="titleAsk">
            15. ¿El servicio de compras en dos partes es aplicable a todas las categorías de productos en Shein?
            </h2>
            <p className="parrafoAsk">
            R = Si es aplicable a cualquier producto dentro de la plataforma.
            </p>

            <h2 className="titleAsk">
            16. ¿Hay alguna restricción en la cantidad de productos que puedo comprar utilizando este servicio?
            </h2>
            <p className="parrafoAsk">
            R = No, no existen restricciones a la hora de usar nuestro servicio.
            </p>

            <h2 className="titleAsk">
            17. ¿Es seguro proporcionar mis datos de pago para realizar los pagos en dos partes?
            </h2>
            <p className="parrafoAsk">
            R = Si no te sientes segura mostrando tus datos, siempre podrás hacerlo por medio de criptomonedas USDT el cual es un método descentralizado de pago.
            </p>

            <h2 className="titleAsk">
            18. ¿Puedo agregar o eliminar artículos de mi pedido después de haber realizado el primer pago?
            </h2>
            <p className="parrafoAsk">
            R = Después de realizar el primer pago no se pueden hacer cambios, esto es debido a que ya se habrá realizado la compra para ese momento.
            </p>

            <h2 className="titleAsk">
            19. ¿Qué debo hacer si no recibo la confirmación de mi pedido o algún correo de seguimiento?
            </h2>
            <p className="parrafoAsk">
            R = Puedes escribirnos directamente y resolveremos todas tus dudas
            </p>

            <h2 className="titleAsk">
            20. ¿Cómo puedo contactar al servicio de atención al cliente de Shein si tengo algún problema con mi pedido o el servicio de pago en dos partes?
            </h2>
            <p className="parrafoAsk">
            R = Directamente aquí en la página web tienes nuestros enlaces al WhatsApp, también puedes mediante la pestaña de contacto.
            </p>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Ask