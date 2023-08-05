import React from 'react'

const Testimonials = () => {
    return (
        <>
            <section className='md:grid grid-cols-3 md:gap-4 md:place-items-center xs:flex-col xs:justify-center xs:items-center xs:flex sm:flex-col sm:justify-center sm:items-center sm:flex'>
                <div class="max-w-sm py-4 px-8 bg-white shadow-lg rounded-lg my-4">
                    <div class="flex justify-center md:justify-end -mt-16">
                        <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                    </div>
                    <div>
                        <h2 class="text-gray-800 text-xl font-semibold">Perfecto</h2>
                        <p class="mt-2 text-gray-600 font-sm">"¡SarasFashions superó mis expectativas! Entrega puntual de ropa de Shein y pagos en dos partes hicieron la experiencia genial."</p>
                    </div>
                    <div class="flex justify-end mt-4">
                        <span class="text-md font-medium text-indigo-500">Sara de Ruiz</span>
                    </div>
                    <div className="stars">
                        <span class="text-md font-medium text-indigo-500">⭐⭐⭐⭐⭐</span>
                    </div>
                </div>

                <div class="max-w-sm py-4 px-8 bg-white shadow-lg rounded-lg my-4">
                    <div class="flex justify-center md:justify-end -mt-16">
                        <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                    </div>
                    <div>
                        <h2 class="text-gray-800 text-xl font-semibold">Super Genial</h2>
                        <p class="mt-2 text-gray-600 font-sm">"Increíble servicio de SarasFashions para comprar en Shein, entregas rápidas y cómodos pagos fraccionados."</p>
                    </div>
                    <div class="flex justify-end mt-4">
                        <span class="text-md font-medium text-indigo-500">Oriana Perez</span>
                    </div>
                    <div className="stars">
                        <span class="text-md font-medium text-indigo-500">⭐⭐⭐⭐⭐</span>
                    </div>
                </div>

                <div class="max-w-sm py-4 px-8 bg-white shadow-lg rounded-lg my-4">
                    <div class="flex justify-center md:justify-end -mt-16">
                        <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                    </div>
                    <div>
                        <h2 class="text-gray-800 text-xl font-semibold">Increible</h2>
                        <p class="mt-2 text-gray-600 font-sm">"SarasFashions es la mejor opción: pedidos de Shein llegaron a tiempo y pagos en dos partes muy convenientes."
                        </p>
                    </div>
                    <div class="flex justify-end mt-4">
                        <span class="text-md font-medium text-indigo-500">Maria Rodriguez</span>
                    </div>
                    <div className="stars">
                        <span class="text-md font-medium text-indigo-500">⭐⭐⭐⭐⭐</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials