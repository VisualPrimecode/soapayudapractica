import Image from 'next/image';
import Link from 'next/link';
import soapayuda from 'public/soapayuda .png';

const navItems = [
    { linkText: '¿Quiénes somos?', href: '#' },
    { linkText: 'Ayuda Social', href: '#' },
    { linkText: 'Tu aporte SOAP', href: '#'},
    { linkText: 'Contacto', href: '#' }
];

export function Header() {
    return (
        <nav className="absolute top-0 left-0 flex items-center justify-center pt-2 md:pt-4 pb-2 md:pb-4 z-10 w-[100%] bg-white bg-opacity-50">
            <Image src={soapayuda} alt="SOAP Ayuda" className="hidden sm:inline-block sm:w-[68px] md:w-[144px] mr-8" />
            {!!navItems?.length && (
            <ul className="flex gap-2 sm:gap-4 md:gap-5">
                {navItems.map((item, index) => (<li key={index}>
                    <Link href={item.href} className="whitespace-nowrap inline-block text-[#1e5db2] text-sm md:text-lg font-bold no-underline duration-300 ease-in-out hover:text-[#22beeb] ">{item.linkText}</Link>
                </li>
            ))}</ul>
            )}</nav>
    );
}
