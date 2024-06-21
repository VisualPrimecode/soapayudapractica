import '../styles/globals.css';
import { Footer } from '../components/footer';


export const metadata = {
    title: {
        template: '%s | Soap Ayuda',
        default: 'Soap Ayuda'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <script src="/image-carousel.js" defer></script>
                <link rel="stylesheet" href="/styles.css" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-TLZ32T20BM"></script>
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date());

                    gtag('config', 'G-TLZ32T20BM');
                </script>
            </head>
            <body >
                {children}
                <Footer />
            </body>
        </html>
    );
}
