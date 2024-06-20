
import Image from 'next/image';
import corazon from 'public/corazon.png';
import auto from 'public/auto.jpg';

import imagen_1 from 'public/image-gallery-1.jpg';
import imagen_2 from 'public/image-gallery-2.jpg';
import imagen_3 from 'public/image-gallery-3.jpg';
import imagen_4 from 'public/image-gallery-4.jpg';
import imagen_5 from 'public/image-gallery-5.jpg';
import imagen_6 from 'public/image-gallery-6.jpg';
import imagen_7 from 'public/image-gallery-7.jpg';
import imagen_8 from 'public/image-gallery-8.jpg';
import imagen_9 from 'public/image-gallery-9.jpg';
import imagen_10 from 'public/image-gallery-10.jpg';
import imagen_11 from 'public/image-gallery-11.jpg';
import imagen_12 from 'public/image-gallery-12.jpg';
import imagen_13 from 'public/image-gallery-13.jpg';
import imagen_14 from 'public/image-gallery-14.jpg';
import imagen_15 from 'public/image-gallery-15.jpg';
import imagen_16 from 'public/image-gallery-16.jpg';

import bomberosamaericanavalparariso from 'public/bomberosamaericanavalparariso.jpg';
import cruzroja from 'public/cruzroja.jpg';
import fundacionapoyandome from 'public/fundacionapoyandome.jpg';
import dehermes from 'public/dehermes.webp';

export default function Page() {
    return (
        <main className="text-center">

            <section className=" h-[377px] sm:h-[453px] md:h-[529px] lg:h-[610px] overflow-hidden">
                <div className="absolute inset-0 overflow-hidden h-[377px] sm:h-[453px] md:h-[529px] lg:h-[610px]">
                    <Image src={auto} unoptimized alt="" className="object-cover w-full h-full" style={{ clipPath: 'inset(0px 0px 8% 0px)' }} />
                </div>
                <div className="relative z-10 text-left ml-10 md:ml-20 xl:ml-30 text-white mt-20 md:mt-40 xl:mt-60 duration-300 ease-in-out">
                    <h2 className="uppercase text-center font-extrabold text-md md:text-2xl lg:text-3xl text-[#1e5db2] md:border-8 border-4 border-[yellow] block w-[200px] md:w-[300px] lg:w-[400px] p-2 md:p-4 duration-300 ease-in-out" style={{ borderRadius: '50%' }}>Ayuda con tu<br/>seguro<br/>obligatorio</h2>
                    <p className="uppercase text-center font-extrabold text-md md:text-2xl lg:text-3xl text-[#1e5db2] block w-[200px] md:w-[300px] lg:w-[400px] mt-2 md:mt-4 duration-300 ease-in-out"><span className=" bg-white bg-opacity-50 block p-1 md:p-2 transform -translate-x-5" style={{ clipPath: 'polygon(10% 0, 0 50%, 10% 100%, 100% 100%, 100% 0)' }} >Compra tu Soap</span> <span className=" bg-[#22beeb] block p-1 md:p-2 transform translate-x-5" style={{ clipPath: 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0% 100%)' }}>y haz tu donación</span></p>
                </div>
            </section>

            <section className="text-center max-w-screen-lg mx-auto">
                <h2 id="quienesomos" className="scroll-m-header text-3xl md:text-5xl font-bold text-[#1e5db2] mt-10 md:mt-16 mb-10 md:mb-16"><Image src={corazon} alt="" unoptimized className="inline-block mr-2 w-[90px] md:w-[150px]" />¿Quiénes somos?</h2>
                <p className="text-1xl md:text-2xl font-medium text-black m-7 leading-6 md:leading-10"><span className="text-[#1e5db2] font-bold">SOAP</span> <span className="text-[#22beeb] font-bold">AYUDA</span> nace bajo el concepto de ayudar a diversas instituciones y/o fundaciones que mediante la venta del Seguro Obligatorio puedan recibir donaciones con el objetivo de continuar con sus labores sociales.</p>
                <p className="text-1xl md:text-2xl font-medium text-black m-7 leading-6 md:leading-10"><span className="text-[#1e5db2] font-bold">SOAP</span> <span className="text-[#22beeb] font-bold">AYUDA</span> proviene de una red de venta que trabaja para prestar el mejor servicio hace más de 20 años con casa matriz en la ciudad de Valparaíso.</p>
                <p className="text-1xl md:text-2xl font-medium text-black m-7 leading-6 md:leading-10"><span className="text-[#1e5db2] font-bold">Nuestra VISIÓN es</span> <span className="text-[#22beeb] font-bold">AYUDAR</span> a más instituciónes y/o Fundaciones mediante la venta online del Seguro Obligatorio <span className="text-[#1e5db2] font-bold">SOAP</span> <span className="text-[#22beeb] font-bold">AYUDA</span>.</p>
                <p className="text-3xl md:text-5xl font-serif font-bold italic mt-16 mr-20 mb-20 ml-20"><span className="text-[#1e5db2]">Súmate </span><span className="text-[#22beeb]">a esta gran labor</span></p>
                <h2 id="ayudasocial" className="scroll-m-header text-3xl md:text-5xl font-bold text-[#1e5db2] mt-16 md:mt-28 mb-10 md:mb-16"><Image src={corazon} alt="" unoptimized className="inline-block mr-2 w-[90px] md:w-[150px]" />Ayuda Social</h2>
                <p className="text-1xl md:text-2xl font-medium text-black m-7 leading-6 md:leading-10">Actualmente <span className="text-[#1e5db2] font-bold">SOAP</span> <span className="text-[#22beeb] font-bold">AYUDA</span> está presente con convenios en diferentes Instituciones y/o Fundaciones de <span className="text-[#22beeb] font-bold">ámbito social</span>.</p>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 md:mt-28 mb-10 md:mb-16 max-w-screen-xl mx-auto duration-300 ease-in-out">
                <div className="px-20 py-10 sm:p-8 md:p-8 lg:p-1 duration-300 ease-in-out">
                    <p><Image src={cruzroja} alt="" unoptimized className="mx-auto" /></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div className="px-20 py-10 sm:p-8 md:p-8 lg:p-1 duration-300 ease-in-out">
                    <p><Image src={dehermes} alt="" unoptimized className="mx-auto" /></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div className="px-20 py-10 sm:p-8 md:p-8 lg:p-1 duration-300 ease-in-out">
                    <p><Image src={bomberosamaericanavalparariso} alt="" unoptimized className="mx-auto" /></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div className="px-20 py-10 sm:p-8 md:p-8 lg:p-1 duration-300 ease-in-out">
                    <p><Image src={fundacionapoyandome} alt="" unoptimized className="mx-auto" /></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </section>

            <section className="text-center max-w-screen-lg mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-[#22beeb] mt-16 md:mt-28 mb-10 md:mb-16"><Image src={corazon} alt="" unoptimized className="inline-block mr-2 w-[90px] md:w-[150px]" />¿Cómo funciona?</h2>
                <p className="text-left text-2xl md:text-3xl font-bold text-[#1e5db2] m-7 ">1.- Haga click en el botón de compra de su elección</p>
                <p className="text-left text-2xl md:text-3xl font-bold text-[#22beeb] m-7 ">2.- Complete el Formulario</p>
                <p className="text-left text-2xl md:text-3xl font-bold text-[#1e5db2] m-7 ">3.- Seleccione forma de pago</p>
                <p className="text-left text-2xl md:text-3xl font-bold text-[#22beeb] m-7 ">4.- Hecho el pago ya has donado a la institución elegida</p>
            </section>

            <section className="text-center image-carousel">
                <h2 id="tuaporte" className="scroll-m-header text-3xl md:text-5xl font-bold text-[#1e5db2] mt-16 md:mt-28 mb-10 md:mb-16"><Image src={corazon} alt="" unoptimized className="inline-block mr-2 w-[90px] md:w-[150px]" />Tu aporte SOAP</h2>
                <div className="mx-auto h-[377px] md:h-[610px] overflow-hidden relative carrousel-fondo">
                    <Image src={imagen_1} alt="" className="w-full h-full object-cover absolute top-0 left-0 opacity-100 transition-opacity duration-2000 image-item" />
                    <Image src={imagen_2} alt="" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-2000 image-item" />
                    <Image src={imagen_3} alt="" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-2000 image-item" />
                    <Image src={imagen_4} alt="" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-2000 image-item" />
                    <Image src={imagen_5} alt="" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-2000 image-item" />
                    <Image src={imagen_6} alt="" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-2000 image-item" />
                    <Image src={imagen_7} alt="" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-2000 image-item" />
                    <Image src={imagen_8} alt="" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-2000 image-item" />
                    <Image src={imagen_9} alt="" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-2000 image-item" />
                    <Image src={imagen_10} alt="" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-2000 image-item" />
                    <Image src={imagen_11} alt="" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-2000 image-item" />
                    <Image src={imagen_12} alt="" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-2000 image-item" />
                    <Image src={imagen_13} alt="" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-2000 image-item" />
                    <Image src={imagen_14} alt="" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-2000 image-item" />
                    <Image src={imagen_15} alt="" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-2000 image-item" />
                    <Image src={imagen_16} alt="" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-2000 image-item" />
                </div>
            </section>

            <section className="text-center ">
                <h2 id="contacto" className="scroll-m-header text-3xl md:text-5xl font-bold text-[#1e5db2] mt-16 md:mt-28 mb-10 md:mb-16"><Image src={corazon} alt="" unoptimized className="inline-block mr-2 w-[90px] md:w-[150px]" />Contacto</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div className="p-4">
                        <div className="flex flex-col justify-center h-full">
                        <p className=" mx-auto text-socialBlue w-8 md:w-12 mt-6 md:mt-10">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className=" w-8 md:w-12">
                                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                            </svg>
                        </p>
                        <p className="mt-2 md:mt-4 font-bold text-socialBlue text-base md:text-lg">contacto.soapayuda@gmail.com</p>
                        <p className=" mx-auto text-socialBlue w-8 md:w-12 mt-6 md:mt-10">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" className=" w-8 md:w-12">
                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                            </svg>
                        </p>
                        <p className="mt-2 md:mt-4 font-bold text-socialBlue text-base md:text-lg">Av. Colón 3192. Valparaíso</p>
                        <p className=" mx-auto text-socialBlue w-8 md:w-12 mt-6 md:mt-10">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className=" w-8 md:w-12">
                                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                            </svg>
                        </p>
                        <p className="mt-2 md:mt-4 font-bold text-socialBlue text-base md:text-lg">(32) 2233491</p>
                        </div>
                    </div>
                    <div className="p-4 bg-[#ddd]">

                        <form action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="2211d83c-52ec-4484-a609-6fd57c3c47f1" />

                            <label className=" font-medium text-lg block mt-8" for="nombre">Nombre</label>
                            <input className=" rounded-md p-2 font-medium ext-lg w-[100%] mt-2" type="text" name="nombre" required="" />

                            <label className=" font-medium text-lg block mt-8" for="email">Correo electrónico</label>
                            <input className=" rounded-md p-2 font-medium text-lg w-[100%] mt-2" type="email" name="email" required="" />

                            <label className=" font-medium text-lg block mt-8" for="numero">Teléfono</label>
                            <input className=" rounded-md p-2 font-medium text-lg w-[100%] mt-2" type="number" name="numero" required="" />

                            <label className=" font-medium text-lg block mt-8" for="">Mótivo de la consulta</label>
                            <select className=" rounded-md p-2 font-medium text-base md:text-lg w-[100%] mt-2" name="motivos" id="motivos" required="">
                                <option value="selecciona">Selecciona un motivo</option>
                                <option value="opiniones">Opiniones</option>
                                <option value="agradecimientos">Agradecimientos</option>
                                <option value="representacion">Representación ONG</option>
                                <option value="consultas">Consultas</option>
                            </select>

                            <label className=" font-medium text-lg block mt-8" for="">Asunto</label>
                            <input className=" rounded-md p-2 font-medium text-lg w-[100%] mt-2" type="text" name="Asunto" required="" />

                            <label className=" font-medium text-lg block mt-8" for="mensaje">Mensaje</label>
                            <textarea className=" rounded-md p-2 font-medium text-lg w-[100%] mt-2" name="mensaje" id="mensaje" rows="3" required=""></textarea>

                            <input className=" rounded-md py-2 px-8 font-bold text-lg mt-2 bg-[#22beeb]" type="submit" class="btn-envio" value="Enviar" />
                        </form>

                    </div>
                </div>
            </section>



        </main>
    );
}

