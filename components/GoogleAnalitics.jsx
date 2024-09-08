"use client";
import { useEffect } from 'react';

const GoogleAnalitics = () => {
    useEffect(() => {
        // Add Google Analytics script
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-K9QVH3KKQD';
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K9QVH3KKQD');
        `;
        document.head.appendChild(script2);

        return () => {
            // Cleanup the scripts when the component unmounts
            document.head.removeChild(script1);
            document.head.removeChild(script2);
        };
    }, []);
  
    return null;
  };
  
  export default GoogleAnalitics;