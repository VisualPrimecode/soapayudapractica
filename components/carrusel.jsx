"use client";
import React, { useEffect, useRef, useState } from 'react';


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

const carrusel = [
  imagen_1, imagen_2, imagen_3, imagen_4, imagen_5, imagen_6, imagen_7, imagen_8, imagen_9, imagen_10, imagen_11, imagen_12, imagen_13, imagen_14, imagen_15, imagen_16 ];

export function CarruselImages() {
  const imageRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {

    const intervalId = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % carrusel.length);
    }, 2000); // Change image every 4 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-[url('/image-gallery-1.jpg')] bg-cover bg-center bg-no-repeat mx-auto h-[377px] md:h-[610px] overflow-hidden relative rounded-none sm:rounded-none md:rounded-none lg:rounded-none xl:rounded-xl ">
      {carrusel.map((item, index) => (
        <img
          key={index}
          src={item.src}
          alt={`Carousel image ${index + 1}`}
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
          ref={el => imageRefs.current[index] = el}
          width={item.width} // Provide the actual width of the image
          height={item.height} // Provide the actual height of the image
        />
      ))}
      <div className={` absolute left-0 bottom-0 h-20 w-full bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent`} />
      <div className={` absolute left-0 top-0 h-20 w-full bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-transparent`} />
    </div>
  );
}

export default CarruselImages;
