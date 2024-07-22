"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

const preloadImages = (imageArray) => {
    imageArray.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });
  };


 export function Footer() {
    useEffect(() => {
      preloadImages(carrusel);
    }, []);
  
    return (
        <>
        {carrusel.map((item, index) => (<Image key={index} src={item} alt={`Carousel image ${index + 1}`} className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-2000 image-item" />))}
        </>
    );
  };
  