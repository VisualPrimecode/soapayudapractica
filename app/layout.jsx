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
        <html lang="en">
            <head>
                <script src="/image-carousel.js" defer></script>
                <link rel="stylesheet" href="/styles.css" />
                <title>{metadata.title.default}</title>
            </head>
            <body >
                {children}
                <Footer />
            </body>
        </html>
    );
}
