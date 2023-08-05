import React from 'react'
import Navbar from '../Navbar/NavBar'
import Footer from '../Footer/Footer'
import './Ask.css'

const Ask = () => {
  return (
    <>
      <Navbar/>

      <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
                <div class="flex flex-col items-center">
                    <h2 class="font-bold text-5xl mt-5 tracking-tight">
                        FAQ
                    </h2>
                    <p class="text-neutral-500 text-xl mt-3">
                        Frequenty asked questions
                    </p>
                </div>
                <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">

                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> 1. ¿Qué es el servicio de compras en línea en Shein con envíos gratis a Venezuela en dos partes de pago?</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                R = Es un servicio que prestamos como startups, para hacer compras en línea de la plataforma Shein para todas aquellas personas que desean hacer sus compras desde una (1) pieza en adelante.
                            </p>
                        </details>
                    </div>

                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> 2. ¿Cómo puedo realizar una compra utilizando el servicio en dos partes de pago?</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                R = Con nuestro servicio al hacer tu pedido, solo cancelaras la mitad del total de la compra, y la otra mitad al recibir tu mercancia.
                            </p>
                        </details>
                    </div>

                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> 3. ¿Cuáles son los requisitos para poder acceder a la opción de pago en dos partes?</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                R = Desde el primer pedido ya eres elegida/o para ser parte de esta opción de pago en dos partes, no necesitas ningún requisito previo
                            </p>
                        </details>
                    </div>

                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> 4. ¿Qué métodos de pago se aceptan para realizar los pagos en dos partes?</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                R = Aceptamos pagos en efectivo, transferencias bancarias, pagos en criptomonedas por medio de binance en USDT y pagos en monedero Zinli
                            </p>
                        </details>
                    </div>

                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> 5. ¿Existe un monto mínimo de compra para poder utilizar este servicio?</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                R = Para usar nuestros servicios no existe un monto mínimo de pedido, sin embargo a mayor cantidad de prendas de ropa, podrá aprovechar mejor el envío y reducir los costos
                            </p>
                        </details>
                    </div>

                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> 6. ¿Cómo se dividen los pagos en dos partes y cuál es el plazo para realizar cada pago?</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                R = Al momento de realizar y confirmar el pedido, tanto unidades como tallas, colores y demás, se deberá hacer el pago del 50% del total, y el otro 50% al retirar o recibir el paquete.
                            </p>
                        </details>
                    </div>

                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> 7. ¿Hay algún costo adicional por utilizar este servicio de pago en dos partes?</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                R = El costo adicional suele ser mínimo por concepto de pago de envios, van desde 0.3$ a 0.8$ por pieza, un pedido de 200$ generalmente suele generar un costo adicional de envio de 25$ y aproximademte 30 a 40 piezas.
                            </p>
                        </details>
                    </div>

                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> 8. ¿Qué sucede si no puedo realizar el segundo pago en la fecha acordada?</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                R = Si no puedes cancelar tu pedido a la hora de entregar, guardaremos el paquete por un tiempo prudencial, si no te pones en contacto para retirar tu paquete o no cancelas, no podremos entregarte tu pedido.
                            </p>
                        </details>
                    </div>

                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> 9. ¿Puedo cancelar mi pedido después de haber realizado el primer pago?</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                R = Luego de realizar el pago no se puede cancelar el pedido porque ya se habrá hecho la compra de los artículos.
                            </p>
                        </details>
                    </div>

                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> 10. ¿Qué ocurre si uno de los artículos que compré está agotado o no está disponible para entrega en Venezuela?</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                R = En este caso te informaremos, y tu decides si lo retiras o cambias por algún otro producto similar.
                            </p>
                        </details>
                    </div>

                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> 11. ¿Cuál es el tiempo estimado de entrega para los pedidos con envío gratis a Venezuela?</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                R = El tiempo máximo de entrega una vez confirmada la compra es de 1 MES, Nuestras entregas suelen tardar de 15 días a 3 semanas, si se alarga este tiempo, es por algún inconveniente con aduanas, pero siempre te mantendremos informados sobre el status de tu envio.
                            </p>
                        </details>
                    </div>

                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> 12. ¿Puedo hacer seguimiento de mi pedido durante el proceso de envío?</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                R = Puedes escribirnos y nosotros te daremos la información necesaria.
                            </p>
                        </details>
                    </div>

                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> 13. ¿Qué debo hacer si mi pedido llega dañado o con algún problema?</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                R = Solemos asegurar la carga, hasta la fecha hemos entregado más de 2450 prendas y ninguna ha sido defectuosa.
                            </p>
                        </details>
                    </div>

                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> 14. ¿Hay alguna política de devoluciones o reembolsos para los pedidos con envío gratis a Venezuela?</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                R = Lamentandolo mucho no tenemos este servicio, sin embargo siempre podrás escribirnos para darte una solución o buscarla juntos.
                            </p>
                        </details>
                    </div>

                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> 15. ¿El servicio de compras en dos partes es aplicable a todas las categorías de productos en Shein?</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                R = Si es aplicable a cualquier producto dentro de la plataforma.
                            </p>
                        </details>
                    </div>

                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> 16. ¿Hay alguna restricción en la cantidad de productos que puedo comprar utilizando este servicio?</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                R = No, no existen restricciones a la hora de usar nuestro servicio.
                            </p>
                        </details>
                    </div>

                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>17. ¿Es seguro proporcionar mis datos de pago para realizar los pagos en dos partes?</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                R = Si no te sientes segura mostrando tus datos, siempre podrás hacerlo por medio de criptomonedas USDT el cual es un método descentralizado de pago.
                            </p>
                        </details>
                    </div>

                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> 18. ¿Puedo agregar o eliminar artículos de mi pedido después de haber realizado el primer pago?</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                R = Después de realizar el primer pago no se pueden hacer cambios, esto es debido a que ya se habrá realizado la compra para ese momento.
                            </p>
                        </details>
                    </div>

                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> 19. ¿Qué debo hacer si no recibo la confirmación de mi pedido o algún correo de seguimiento?</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                R = Puedes escribirnos directamente y resolveremos todas tus dudas
                            </p>
                        </details>
                    </div>

                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>20. ¿Cómo puedo contactar al servicio de atención al cliente de Shein si tengo algún problema con mi pedido o el servicio de pago en dos partes?</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                R = Directamente aquí en la página web tienes nuestros enlaces al WhatsApp, también puedes mediante la pestaña de contacto.
                            </p>
                        </details>
                    </div>
                </div>
            </div>

      <Footer/>
    </>
  )
}

export default Ask