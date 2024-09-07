"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import auto from 'public/auto.jpg';
import corazon from 'public/corazon.png';
import soapayuda from 'public/soapayuda .png';

import CarruselImages from 'components/carrusel';

import AOS from 'aos';
import 'aos/dist/aos.css';

const navItems = [
    { linkText: 'Inicio', href: '#tope' },
    { linkText: '¿Quiénes somos?', href: '#quienesomos' },
    { linkText: 'Ayuda Social', href: '#ayudasocial' },
    { linkText: 'Tu aporte SOAP', href: '#tuaporte' },
    { linkText: 'Contacto', href: '#contacto' }
];

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

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    const [currentImage, setCurrentImage] = useState(null);
    const [showInfoBox, setShowInfoBox] = useState(false);
    const [infoContent, setInfoContent] = useState('');

    const [navBarScrollChange, setNavBarScrollChange] = useState(false);

    const openInfoBox = (info, image) => {
        setCurrentImage(image);
        setInfoContent(info);
        setShowInfoBox(true); };

    const closeInfoBox = () => {
        setShowInfoBox(false);
        setCurrentImage(null); };

    useEffect(() => {
        if (showInfoBox) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'scroll';
        return () => document.body.style.overflow = 'scroll'; 
    }, [showInfoBox]);

    useEffect(() => {
        const handleScroll = () => {
            const theHeight = window.innerHeight * 0.62;
            if (window.scrollY >= theHeight) setNavBarScrollChange(true);
            else setNavBarScrollChange(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (

        <main className="text-center ">
{/*
            <nav id={navBarScrollChange ? 'navBarB' : undefined} className={`z-30  fixed top-4 left-1/2 -translate-x-1/2 flex items-start justify-start max-w-screen-lg w-full`} >

                <div className={` inline-flex  gap-6 max-w-screen-lg items-center justify-center shadow-lg shadow-[rgba(0,0,0,0.3)] ${navBarScrollChange ? 'bg-slate-700 opacity-80 hover:opacity-100 ml-4 p-6 flex-col' : 'bg-white bg-opacity-90 opacity-100 mx-auto py-4 px-8 sm:px-4 md:px-6 lg:px-8 flex-row'} rounded-xl transition-all duration-300 ease-in-out`}>
                    <div className={` inline-block text-center mx-auto ${navBarScrollChange ? 'w-20 md:w-28' : 'w-44 sm:w-16 md:w-28 lg:w-44'}`}>
                        <img src={soapayuda.src} alt="SOAP Ayuda" className={` h-auto w-auto mx-auto `} />
                    </div>
                    {!!navItems?.length && (
                        <p className={` ${navBarScrollChange ? 'hidden flex-col' : 'hidden sm:inline-flex sm:flex-row'} relative gap-6`}>
                            {navItems.map((item, index) => (
                                navBarScrollChange ? (
                                    <Link key={index} href={item.href} className={` inline-flex text-left justify-start items-center whitespace-nowrap text-sm md:text-base lg:text-lg font-bold no-underline hover:underline transition-all duration-300 ease-in-out ${navBarScrollChange ? 'text-[#22beeb] hover:text-[#a4ebff]' : 'text-[#1e5db2] hover:text-[#22beeb]'} `}>{item.linkText}</Link>
                                ) :
                                    (index != 0 && (
                                        <Link key={index} href={item.href} className={` inline-flex text-left justify-start items-center whitespace-nowrap text-sm md:text-base lg:text-lg font-bold no-underline hover:underline transition-all duration-300 ease-in-out ${navBarScrollChange ? 'text-[#22beeb] hover:text-[#a4ebff]' : 'text-[#1e5db2] hover:text-[#22beeb]'} `}>{item.linkText}</Link>
                                    ))
                            ))}
                        </p>
                    )}
                </div>
            </nav>
*/}
            <section className={`z-10 max-w-screen-xl mx-auto rounded-none xl:rounded-xl  relative h-[453px] sm:h-[529px] md:h-[610px] lg:h-[610px] overflow-hidden `}>
                <div className={` bg-[url('/auto.jpg')] bg-center bg-cover  absolute w-full overflow-hidden h-full `} />
                <div className={` absolute left-0 bottom-0 h-20 w-full bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-transparent`} />
                <div className={` absolute left-0 top-0 h-20 w-full bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-transparent`} />
                <div className="relative max-w-6xl w-full text-left mx-auto ">
                    <div className="relative inline-block text-center px-8 text-white mt-20 md:mt-40 duration-300 ease-in-out">
                        <h2 data-aos-once="true" data-aos="flip-right">
                            <Link style={{ lineHeight: `1.3em` }} href="./#compraaqui" className=" mx-auto mb-4 md:mb-6 w-52 md:w-72 lg:w-96 transition-all duration-300 ease-in-out text-opacity-90 hover:text-opacity-100 shadow-lg shadow-[rgba(0,0,0,0.3)] hover:shadow-[rgba(0,0,0,0.6)] inline-block rounded-full px-8 pt-6 pb-6 bg-[linear-gradient(#22beeb,#1e5db2)] text-white text-2xl md:text-3xl no-underline font-bold " >
                                Compra tu SOAP y haz tu donación</Link>
                        </h2>
                        <div data-aos-once="true" data-aos="flip-right" className={` border-8 border-solid border-[yellow] mx-auto uppercase text-center font-extrabold text-xl md:text-3xl lg:text-4xl text-[#0d50a8] block w-72 md:w-96 lg:w-[36rem] transition-all duration-300 ease-in-out `} style={{ borderRadius: `50%` }}>
                        <h2 className={` border-0 md:border-8 border-solid border-[yellow] block p-4 md:p-6 bg-white bg-opacity-60 `} style={{ borderRadius: `50%` }}>
                            Ayuda con tu<br />seguro obligatorio
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-center max-w-screen-lg mx-auto">
                <h2 id="quienesomos" className="scroll-m-header text-3xl md:text-5xl font-bold text-[#1e5db2] mt-20 md:mt-28 mb-10 md:mb-16">¿Quiénes somos?</h2>
                <div className={` text-justify tracking-normal indent-6 hyphens-auto text-xl md:text-2xl font-medium text-opacity-60 text-black leading-8 md:leading-9 font-sans`}>
                    <p className={`mx-6 mb-7 `} ><span className="text-[#1e5db2] font-bold">SOAP</span> <span className="text-[#22beeb] font-bold">AYUDA</span> nace bajo el concepto de ayudar a diversas instituciones y/o fundaciones que mediante la venta del Seguro Obligatorio puedan recibir donaciones con el objetivo de continuar con sus labores sociales.</p>
                    <p data-aos-once="true" data-aos="fade-up" className={`mx-6 mb-7 `} ><span className="text-[#1e5db2] font-bold">SOAP</span> <span className="text-[#22beeb] font-bold">AYUDA</span> proviene de una red de venta que trabaja para prestar el mejor servicio hace más de 20 años con casa matriz en la ciudad de Valparaíso.</p>
                    <p data-aos-once="true" data-aos="fade-up" className={`mx-6 mb-7 `} ><span className="text-[#1e5db2] font-bold">Nuestra VISIÓN es</span> <span className="text-[#22beeb] font-bold">AYUDAR</span> a más instituciónes y/o Fundaciones mediante la venta online del Seguro Obligatorio <span className="text-[#1e5db2] font-bold">SOAP</span> <span className="text-[#22beeb] font-bold">AYUDA</span>.</p>
                </div>
                <p data-aos-once="true" data-aos="fade-up" className="tracking-tight text-3xl md:text-5xl font-serif font-extrabold italic mt-16 mr-20 ml-20"><span className="text-[#1e5db2]">Súmate </span><span className="text-[#22beeb]">a esta gran labor</span></p>
                <p data-aos-once="true" data-aos="fade-up" className="mt-14 md:mt-30 mb-8 sm:mb-10 md:mb-16 "><img src={corazon.src} alt="" className="inline-block mr-2 w-40 sm:w-40 md:w-48 lg:w-52" /></p>
                <h2 data-aos-once="true" data-aos="fade-up" id="ayudasocial" className="scroll-m-header text-3xl md:text-5xl font-bold text-[#1e5db2] mt-16 md:mt-20 mb-10 md:mb-16">Ayuda Social</h2>
                <p data-aos-once="true" data-aos="fade-up" className=" text-justify indent-6 hyphens-auto text-xl md:text-2xl font-medium text-opacity-60 text-black mx-7 mt-7 leading-8 md:leading-9">Actualmente, <span className="text-[#1e5db2] font-bold">SOAP</span> <span className="text-[#22beeb] font-bold">AYUDA</span> está presente con convenios en diferentes Instituciones y/o Fundaciones de <span className="text-[#22beeb] font-bold">ámbito social</span>.</p>
            </section>

            <section id="compraaqui" className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 mt-8 md:mt-12 mb-10 md:mb-16 wx-auto duration-300 ease-in-out bg-[#22beeb]  px-8 lg:px-4 py-10 max-w-screen-xl mx-auto rounded-none  xl:rounded-xl overflow-hidden">
                <div className={` absolute left-0 bottom-0 h-24 w-full bg-gradient-to-t from-[rgba(255,255,255,0.3)] to-transparent`} />
                <div className={` absolute left-0 top-0 h-24 w-full bg-gradient-to-b from-[rgba(30,93,178,0.8)] to-transparent`} />
                {compraaqui.map((item, index) => (<div data-aos-once="true" data-aos="fade-down" key={index} className=" p-4 bg-white border-solid border-2 border-slate-900 border-opacity-10 rounded-lg">
                    <p className="relative rounded-lg overflow-hidden">
                        <span onClick={() => openInfoBox(item.info, item.image)} className=" cursor-pointer font-serif font-black absolute bottom-1/4 right-2 rounded-full h-9 w-9 hover:bg-[#1e5db2] bg-[#22beeb] border-2 border-solid border-[#22beeb] hover:border-none text-white text-lg flex justify-center items-center shadow-md shadow-[rgba(0,0,0,0.6)] hover:shadow-md hover:shadow-[rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out">i</span>
                        <img src={item.image.src} alt="" className="mx-auto" />
                    </p>
                    <p className="mt-8 nowrap"><img src={mutualdeseguros.src} alt="" className="inline-block w-8 mr-2" /> <Link href={`/compraaquimut${item.fundacion}`} className=" transition-all duration-300 ease-in-out text-opacity-90 hover:text-opacity-100 shadow-lg shadow-[rgba(0,0,0,0.3)] hover:shadow-[rgba(0,0,0,0.6)] inline-block rounded-full px-4 pt-1 pb-2 bg-[linear-gradient(#22beeb,#1e5db2)] text-white text-lg md:text-xl no-underline font-medium" >Compra aquí</Link></p>
                    <p className="mt-4 nowrap"><img src={bcibanco.src} alt="" className="inline-block w-8 mr-2" /> <Link href={`/compraaquibci${item.fundacion}`} className=" transition-all duration-300 ease-in-out text-opacity-90 hover:text-opacity-100 shadow-lg shadow-[rgba(0,0,0,0.3)] hover:shadow-[rgba(0,0,0,0.6)] inline-block rounded-full px-4 pt-1 pb-2 bg-[linear-gradient(#22beeb,#1e5db2)] text-white text-lg md:text-xl no-underline font-medium" >Compra aquí</Link></p>
                </div>))}
            </section>

            {showInfoBox && (
                <div className=" fixed inset-0 bg-black bg-opacity-40 z-50 ">
                    <div className={` relative max-w-2xl h-full mx-auto px-8 flex items-center justify-center `} data-aos-once="true" data-aos="fade">
                        <div id="infoblock" className=" overflow-auto block bg-white p-6 sm:p-8 md:p-16 rounded-xl shadow-lg shadow-[rgba(0,0,0,0.4)] z-50 ">
                            <p className="text-center"><img src={currentImage.src} alt="" className="mx-auto w-[144px]" /></p>
                            <p className="mt-8 md:text-xl sm:text-lg text-base text-black font-medium text-justify hyphens-auto text-opacity-60 indent-5 leading-7 sm:leading-8 md:leading-9 ">{infoContent}</p>
                            <p className="mt-12 uppercase text-base md:text-md text-[#22beeb] hover:text-[#1e5db2] font-bold text-center cursor-pointer transition-all ease-in-out duration-300" onClick={closeInfoBox}>Cerrar</p>
                        </div>
                    </div>
                </div>
            )}

            <section className="text-center max-w-screen-md w-full mx-auto">
                <h2 data-aos-once="true" data-aos="fade-up" className="text-3xl md:text-5xl font-bold text-[#22beeb] mt-16 md:mt-28 mb-10 md:mb-16">¿Cómo funciona?</h2>
                <ol className={` list-decimal list-outside text-left text-2xl md:text-3xl font-semibold ml-8 `}>
                    <li data-aos-once="true" data-aos="fade-up" className={` text-[#1754a3] m-7 `}>Haga click en el botón de compra de su elección</li>
                    <li data-aos-once="true" data-aos="fade-up" className={` text-[#11b8e7] m-7 `} >Complete el Formulario</li>
                    <li data-aos-once="true" data-aos="fade-up" className={` text-[#1754a3] m-7 `} >Seleccione forma de pago</li>
                    <li data-aos-once="true" data-aos="fade-up" className={` text-[#11b8e7] m-7 `} >Hecho el pago ya has donado a la institución elegida</li>
                </ol>
            </section>

            <section className="text-center max-w-screen-xl mx-auto relative">
                <p data-aos-once="true" data-aos="fade-up" className="mt-14 md:mt-30 mb-8 sm:mb-10 md:mb-16 "><img src={corazon.src} alt="" className="inline-block mr-2 w-40 sm:w-40 md:w-48 lg:w-52" /></p>
                <h2 data-aos-once="true" data-aos="fade-up" id="tuaporte" className="scroll-m-header text-3xl md:text-5xl font-bold text-[#1e5db2] mt-16 md:mt-28 mb-10 md:mb-16">Tu aporte SOAP</h2>
                <CarruselImages />
            </section>

            <section className="text-center max-w-screen-md mx-auto mb-0 sm:mb-0 md:mb-40">
                <h2 data-aos-once="true" data-aos="fade-up" id="contacto" className="scroll-m-header text-3xl md:text-5xl font-bold text-[#1e5db2] mt-16 md:mt-28 mb-10 md:mb-16">Contacto</h2>
                {/*<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
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
                    </div>*/}
                <div data-aos-once="true" data-aos="fade-down" className="pt-4 pr-4 pb-10 pl-4 bg-[#22beeb] rounded-none sm:rounded-none md:rounded-xl lg:rounded-xl relative overflow-hidden">
                    <div className={` absolute left-0 bottom-0 h-32 w-full bg-gradient-to-t from-[rgba(255,255,255,0.3)] to-transparent`} />
                    <div className={` absolute left-0 top-0 h-32 w-full bg-gradient-to-b from-[rgba(30,93,178,0.8)] to-transparent`} />

                    <form className={` relative `} action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="2211d83c-52ec-4484-a609-6fd57c3c47f1" />

                        <label className=" font-medium text-lg block mt-8" htmlFor="nombre">Nombre</label>
                        <input className=" rounded-md p-2 font-medium ext-lg w-[100%] mt-2" type="text" name="nombre" required="" />

                        <label className=" font-medium text-lg block mt-8" htmlFor="email">Correo electrónico</label>
                        <input className=" rounded-md p-2 font-medium text-lg w-[100%] mt-2" type="email" name="email" required="" />

                        <label className=" font-medium text-lg block mt-8" htmlFor="numero">Teléfono</label>
                        <input className=" rounded-md p-2 font-medium text-lg w-[100%] mt-2" type="number" name="numero" required="" />

                        <label className=" font-medium text-lg block mt-8" htmlFor="">Mótivo de la consulta</label>
                        <select className=" rounded-md p-2 font-medium text-base md:text-lg w-[100%] mt-2 appearance-none  bg-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9IiNiYmIiPjxwYXRoIGQ9Ik02IDlsNiA2IDYtNiIvPjwvc3ZnPg==)] bg-no-repeat bg-right" name="motivos" id="motivos" required="">
                            <option value="selecciona">Selecciona un motivo</option>
                            <option value="opiniones">Opiniones</option>
                            <option value="agradecimientos">Agradecimientos</option>
                            <option value="representacion">Representación ONG</option>
                            <option value="consultas">Consultas</option>
                        </select>

                        <label className=" font-medium text-lg block mt-8" htmlFor="asunto">Asunto</label>
                        <input className=" rounded-md p-2 font-medium text-lg w-[100%] mt-2" type="text" id="asunto" name="Asunto" required="" />

                        <label className=" font-medium text-lg block mt-8" htmlFor="mensaje">Mensaje</label>
                        <textarea className=" rounded-md p-2 font-medium text-lg w-[100%] mt-2" name="mensaje" id="mensaje" rows="3" required=""></textarea>

                        <input className=" rounded-md py-2 px-8 font-bold text-lg mt-8 bg-[#1e5db2] text-white text-opacity-70 hover:text-opacity-100 cursor-pointer hover:shadow-lg hover:shadow-[rgba(0,0,0,0.5)] transition-all easy-in-out duration-300" type="submit" value="Enviar" />
                    </form>

                </div>

            </section>



        </main>
    );
}

