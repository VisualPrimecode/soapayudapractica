"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import corazon from 'public/corazon.png';
import auto from 'public/auto.jpg';
import soapayuda from 'public/soapayuda .png';

const navItems = [
    { linkText: '¿Quiénes somos?', href: '#quienesomos' },
    { linkText: 'Ayuda Social', href: '#ayudasocial' },
    { linkText: 'Tu aporte SOAP', href: '#tuaporte'},
    { linkText: 'Contacto', href: '#contacto' }
];

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

const carrusel = [imagen_1,imagen_2,imagen_3,imagen_4,imagen_5,imagen_6,imagen_7,imagen_8,imagen_9,imagen_10,imagen_11,imagen_12,imagen_13,imagen_14,imagen_15,imagen_16];

import bcibanco from 'public/bcibanco.png';
import mutualdeseguros from 'public/mutualdeseguros.png';

import bomberosamaericanavalparariso from 'public/bomberosamaericanavalparariso.jpg';
import cruzroja from 'public/cruzroja.jpg';
import fundacionapoyandote from 'public/fundacionapoyandote.jpg';
import dehermes from 'public/dehermes.webp';

const compraaqui = [
    { image: cruzroja, fundacion: 'cr', info: 'La Cruz Roja Chilena es una institución humanitaria y voluntaria que brinda apoyo en situaciones de emergencia y promueve la salud y el bienestar de la sociedad.' },
    { image: dehermes, fundacion: 'dh', info: 'DHERMES es un Refugio de Animales con 19 años resguardando a cientos de perritos abandonados y vulnerables que buscan hogar.' },
    { image: bomberosamaericanavalparariso, fundacion: 'bav', info: 'La Primera Compañía de Bomberos de Valparaiso fue fundada en 1851.Comenzó con 151 voluntarios, todos connotados porteños y en su mayoría ingleses y norteamericanos. En la actualidad están conformadas por más de 50 primerinos, quienes día a día permanecen atentos al ulular de la sirena para responder si el deber llama.' },
    { image: fundacionapoyandote, fundacion: 'fa', info: 'Fundación Apoyándote está conformada por padres con hijos en condición de Espectro Autista y fue creada con el objetivo de apoyar a las familias que no puedan costear los tratamientos que tanto cuesta pagar.' }
];


export default function Page() {
    const [currentImage, setCurrentImage] = useState(null);
    const [showInfoBox, setShowInfoBox] = useState(false);
    const [infoContent, setInfoContent] = useState('');

    const openInfoBox = (info,image) => {
        setCurrentImage(image);
        setInfoContent(info);
        setShowInfoBox(true);
    };

    const closeInfoBox = () => {
        setShowInfoBox(false);
        setCurrentImage(null);
    };


    return (

        <main className="text-center">
            <nav className="absolute top-0 left-0 flex items-center justify-center pt-2 md:pt-4 pb-2 md:pb-4 z-10 w-[100%] bg-white bg-opacity-50">
                <Image src={soapayuda} alt="SOAP Ayuda" className="hidden sm:inline-block sm:w-[68px] md:w-[144px] mr-8" />
                {!!navItems?.length && (
            <ul className="flex gap-2 sm:gap-4 md:gap-5">
                {navItems.map((item, index) => (<li key={index}>
                    <Link href={item.href} className="whitespace-nowrap inline-block text-[#1e5db2] text-sm md:text-lg font-bold no-underline hover:underline duration-300 ease-in-out hover:text-[#22beeb] ">{item.linkText}</Link>
                </li>
            ))}</ul>
            )}</nav>

            <section className=" h-[453px] sm:h-[529px] md:h-[610px] lg:h-[610px] overflow-hidden">
                <div className="absolute inset-0 overflow-hidden h-[453px] sm:h-[529px] md:h-[610px] lg:h-[610px]">
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

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 mt-16 md:mt-28 mb-10 md:mb-16 max-w-screen-xl mx-auto duration-300 ease-in-out bg-[#22beeb] p-8 max-w-screen-lg mx-auto">
                {compraaqui.map((item, index) => (<div key={index} className="px-20 py-10 sm:p-10 md:p-10 lg:p-4 duration-300 ease-in-out bg-white rounded-lg">
                    <p className="cursor-pointer rounded-lg overflow-hidden hover:border-[#1e5db2] border-2 border-transparent duration-300 ease-in-out" onClick={() => openInfoBox(item.info, item.image)}><Image src={item.image} alt="" unoptimized className="mx-auto" /></p>
                    <p className="mt-8 nowrap"><Image src={mutualdeseguros} alt="" unoptimized className="inline-block w-8 mr-2" /> <Link href={`/compraaquimut${item.fundacion}`} className="inline-block rounded-full px-4 pt-1 pb-2 bg-[linear-gradient(#22beeb,#1e5db2)] text-white text-lg md:text-xl no-underline font-medium" >Compra aquí</Link></p>
                    <p className="mt-4 nowrap"><Image src={bcibanco} alt="" unoptimized className="inline-block w-8 mr-2" /> <Link href={`/compraaquibci${item.fundacion}`} className="inline-block rounded-full px-4 pt-1 pb-2 bg-[linear-gradient(#22beeb,#1e5db2)] text-white text-lg md:text-xl no-underline font-medium" >Compra aquí</Link></p>
                </div> ))}
            </section>

            {showInfoBox && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50 duration-300 ease-in-out">
                    <div id="infoblock" className="bg-white p-16 rounded-xl text-center shadow-2xl z-50 ">
                        <p className="text-center"><Image src={currentImage} alt="" className="mx-auto w-[89px] sm:w-[144px]" /></p>
                        <p className="md:text-2xl text-md text-black font-medium text-center">{infoContent}</p>
                        <p className="mt-12 text-base md:text-md text-[#888] font-medium text-center cursor-pointer" onClick={closeInfoBox}>Cerrar</p>
                    </div>
                </div>
            )}


            <section className="text-center max-w-screen-lg mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-[#22beeb] mt-16 md:mt-28 mb-10 md:mb-16"><Image src={corazon} alt="" unoptimized className="inline-block mr-2 w-[90px] md:w-[150px]" />¿Cómo funciona?</h2>
                <p className="text-left text-2xl md:text-3xl font-bold text-[#1e5db2] m-7 ">1.- Haga click en el botón de compra de su elección</p>
                <p className="text-left text-2xl md:text-3xl font-bold text-[#22beeb] m-7 ">2.- Complete el Formulario</p>
                <p className="text-left text-2xl md:text-3xl font-bold text-[#1e5db2] m-7 ">3.- Seleccione forma de pago</p>
                <p className="text-left text-2xl md:text-3xl font-bold text-[#22beeb] m-7 ">4.- Hecho el pago ya has donado a la institución elegida</p>
            </section>

            <section className="text-center image-carousel max-w-screen-xl mx-auto">
                <h2 id="tuaporte" className="scroll-m-header text-3xl md:text-5xl font-bold text-[#1e5db2] mt-16 md:mt-28 mb-10 md:mb-16"><Image src={corazon} alt="" unoptimized className="inline-block mr-2 w-[90px] md:w-[150px]" />Tu aporte SOAP</h2>
                <div className="mx-auto h-[377px] md:h-[610px] overflow-hidden relative carrousel-fondo">
                {carrusel.map((item, index) => (<Image key={index} src={item} alt="" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-2000 image-item" />))}
                </div>
            </section>

            <section className="text-center max-w-screen-xl mx-auto">
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
                    <div className="pt-4 pr-4 pb-10 pl-4 bg-[#ddd]">

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

                            <input className=" rounded-md py-2 px-8 font-bold text-lg mt-8 bg-[#22beeb]" type="submit" value="Enviar" />
                        </form>

                    </div>
                </div>
            </section>



        </main>
    );
}

