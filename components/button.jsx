import Link from "next/link";

const Boton = ({texto, enlace}) => {
    return (
        <Link href={enlace} className=" transition-all duration-300 ease-in-out text-opacity-80 hover:text-opacity-100 shadow-lg shadow-[rgba(0,0,0,0.3)] hover:shadow-[rgba(0,0,0,0.6)] inline-block rounded-full px-12 pt-1 pb-2 bg-[linear-gradient(#22beeb,#1e5db2)] text-white text-lg md:text-xl no-underline font-medium" >{texto}</Link>
    );
}

export default Boton;