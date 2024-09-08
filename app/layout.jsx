

import '../styles/globals.css';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import AOSInitializer from 'components/AOSInitializer';
import GoogleAnalitics from 'components/GoogleAnalitics';

export const metadata = {
    title: {
        template: '%s | Soap Ayuda',
        default: 'Soap Ayuda'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={` scroll-smooth `}>
            <head>
                <title>{metadata.title.default}</title>
            </head>
            <body id='tope' className={` pb-0 lg:pb-4 pt-24 sm:pt-16 md:pt-20 lg:pt-24 bg-[linear-gradient(-9deg,#fff,#fff,#eee,#fff,#e8e8e8)] font-sans `}>
                <AOSInitializer />
                <GoogleAnalitics />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
