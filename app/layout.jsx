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
            </head>
            <body >
                {children}
                <Footer />
            </body>
        </html>
    );
}
