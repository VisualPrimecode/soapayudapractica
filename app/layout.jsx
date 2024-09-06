"use client";

import '../styles/globals.css';
import { Footer } from '../components/footer';
import { useEffect } from 'react';
import { metadata } from './metadata';


export default function RootLayout({ children }) {
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
    return (
        <html lang="en" className={` scroll-smooth `}>
            <head>
                <title>{metadata.title.default}</title>
            </head>
            <body id='tope' className={` pb-0 xl:pb-16 pt-24 sm:pt-16 md:pt-20 lg:pt-24 bg-[linear-gradient(144deg,#eee,#fff,#eee,#fff,#fff)] font-sans `}>
                {children}
                <Footer />
            </body>
        </html>
    );
}
