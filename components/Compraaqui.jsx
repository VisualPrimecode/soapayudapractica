'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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

const Compraaqui = () => {

    const [currentImage, setCurrentImage] = useState(null);
    const [showInfoBox, setShowInfoBox] = useState(false);
    const [infoContent, setInfoContent] = useState('');

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

    return (
        <>

        {compraaqui.map((item, index) => (<div data-aos-once="true" data-aos="fade-down" key={index} className=" p-4 bg-white rounded-md " style={{ boxShadow: `inset 0 0.3rem 0.5rem 0 rgb(0,0,0,0.4)` }}>
            <p className="relative overflow-hidden">
                <span onClick={() => openInfoBox(item.info, item.image)} className=" cursor-pointer font-serif font-black absolute bottom-1/4 right-2 rounded-full h-9 w-9 hover:bg-[#1e5db2] bg-[#22beeb] border-2 border-solid border-[#22beeb] hover:border-none text-white text-lg flex justify-center items-center shadow-md shadow-[rgba(0,0,0,0.6)] hover:shadow-md hover:shadow-[rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out">i</span>
                <img src={item.image.src} alt="" className="mx-auto" />
            </p>
            <p className="mt-8 nowrap"><img src={mutualdeseguros.src} alt="" className="inline-block w-8 mr-2" /> <Link href={`/compraaquimut${item.fundacion}`} className=" transition-all duration-300 ease-in-out text-opacity-80 hover:text-opacity-100 shadow-lg shadow-[rgba(0,0,0,0.3)] hover:shadow-[rgba(0,0,0,0.6)] inline-block rounded-full px-5 pt-1 pb-2 bg-[linear-gradient(#22beeb,#1e5db2)] text-white text-lg md:text-xl no-underline font-normal font-FiraSansCondensed" >Compra aquí</Link></p>
            <p className="mt-4 nowrap"><img src={bcibanco.src} alt="" className="inline-block w-8 mr-2"        /> <Link href={`/compraaquibci${item.fundacion}`} className=" transition-all duration-300 ease-in-out text-opacity-80 hover:text-opacity-100 shadow-lg shadow-[rgba(0,0,0,0.3)] hover:shadow-[rgba(0,0,0,0.6)] inline-block rounded-full px-5 pt-1 pb-2 bg-[linear-gradient(#22beeb,#1e5db2)] text-white text-lg md:text-xl no-underline font-normal font-FiraSansCondensed" >Compra aquí</Link></p>
        </div>))}

    {showInfoBox && (
            <div data-aos-once="true" data-aos="fade" className=" fixed inset-0 bg-black bg-opacity-40 z-50 backdrop-blur-md  ">
                <div className={` relative max-w-2xl h-full mx-auto px-8 flex items-center justify-center `}>
                    <div id="infoblock" className=" overflow-auto block bg-white p-6 sm:p-8 md:p-16 rounded-xl shadow-lg shadow-[rgba(0,0,0,0.4)] z-50 ">
                        <p className="text-center"><img src={currentImage.src} alt="" className="mx-auto w-[144px]" /></p>
                        <p className="mt-8 md:text-xl sm:text-lg text-base text-black font-medium text-justify hyphens-auto text-opacity-60 indent-5 leading-7 sm:leading-8 md:leading-9 ">{infoContent}</p>
                        <p className="mt-12 uppercase text-base md:text-md text-[#22beeb] hover:text-[#1e5db2] font-bold text-center cursor-pointer transition-all ease-in-out duration-300" onClick={closeInfoBox}>Cerrar</p>
                    </div>
                </div>
            </div>
        )}

</>);
};

export default Compraaqui;