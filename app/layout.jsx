import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';


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
                <script src='/image-carousel.js' defer></script>
                <link rel="stylesheet" href='/styles.css' />
            </head>
            <body >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
