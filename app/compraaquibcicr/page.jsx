
import Link from 'next/link';
import Image from 'next/image';

import bcibanco from 'public/bcibanco.png';

export const metadata = {
    title: 'BCI | Cruz Roja | Soap Ayuda'
};

export default async function Page() {
    return (

        <main className="text-center">
            <nav className="text-center block my-16"><Link className="inline-block py-2 px-8 mx-auto bg-[#1e5db2] text-white text-center uppercase text-bold text-sm no-underline" href="/#ayudasocial" style={{ clipPath: 'polygon(10% 0, 0 50%, 10% 100%, 100% 100%, 100% 0)' }} >Volver</Link></nav>

            <section className=" text-center mt-16 mb-24 max-w-screen-lg mx-auto">
                <p className=" text-center m-4"><Image src={bcibanco} className=" mx-auto h-[89px] sm:h-[144px] w-auto duration-300 ease-in-out block"/></p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 my-10 text-center m-4 font-bold text-lg">

                    <div>
                        <h3 className="text-center m-8 font-extrabold text-lg md:text-xl lg:text-1xl text-[#1e5db2] duration-300 ease-in-out block" >Lista de precios SOAP vehículos particulares<br/>(Vigencia hasta Marzo de 2025)</h3>
                        <div className=" text-left mx-8 text-lg md:text-xl duration-300 ease-in-out block">
                            <p className="grid grid-cols-2 text-[#1e5db2]"><span className="inline-block text-left">Autos, Jeep y st Wagon</span> <span className="inline-block text-right">$8.500</span></p>
                            <p className="grid grid-cols-2 text-[#22beeb]"><span className="inline-block text-left">Camioneta y Furgón</span> <span className="inline-block text-right">$10.500</span></p>
                            <p className="grid grid-cols-2 text-[#1e5db2]"><span className="inline-block text-left">Casa rodante</span> <span className="inline-block text-right">$10.500</span></p>
                            <p className="grid grid-cols-2 text-[#22beeb]"><span className="inline-block text-left">Carro de arrastre</span> <span className="inline-block text-right">$7.000</span></p>
                            <p className="grid grid-cols-2 text-[#1e5db2]"><span className="inline-block text-left">Mini bus particular</span> <span className="inline-block text-right">$25.000</span></p>
                            <p className="grid grid-cols-2 text-[#22beeb]"><span className="inline-block text-left">Moto</span> <span className="inline-block text-right">$46.000</span></p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-center m-8 font-extrabold text-lg md:text-xl lg:text-1xl text-[#1e5db2] duration-300 ease-in-out block" >Lista de precios SOAP<br/>(Vigencia hasta Mayo de 2025)</h3>
                        <div className=" text-left mx-8 text-lg md:text-xl duration-300 ease-in-out block">
                            <p className="grid grid-cols-2 text-[#1e5db2]"><span className="inline-block text-left">T colectivo</span> <span className="inline-block text-right">$34.000</span></p>
                            <p className="grid grid-cols-2 text-[#22beeb]"><span className="inline-block text-left">T básico</span> <span className="inline-block text-right">$32.000</span></p>
                            <p className="grid grid-cols-2 text-[#1e5db2]"><span className="inline-block text-left">Turismo</span> <span className="inline-block text-right">$34.000</span></p>
                            <p className="grid grid-cols-2 text-[#22beeb]"><span className="inline-block text-left">M turismo</span> <span className="inline-block text-right">$34.000</span></p>
                            <p className="grid grid-cols-2 text-[#1e5db2]"><span className="inline-block text-left">T escolar</span> <span className="inline-block text-right">$32.000</span></p>
                            <p className="grid grid-cols-2 text-[#22beeb]"><span className="inline-block text-left">Bus particular</span> <span className="inline-block text-right">$82.000</span></p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-center m-8 font-extrabold text-lg md:text-xl lg:text-1xl text-[#1e5db2] duration-300 ease-in-out block" >Lista de precios SOAP<br/>(Vigencia hasta Septiembre de 2025)</h3>
                        <div className=" text-left mx-8 text-lg md:text-xl duration-300 ease-in-out block">
                            <p className="grid grid-cols-2 text-[#1e5db2]"><span className="inline-block text-left">Camión y Tractocamión</span> <span className="inline-block text-right">$44.000</span></p>
                            <p className="grid grid-cols-2 text-[#22beeb]"><span className="inline-block text-left">Rampla y acoplado</span> <span className="inline-block text-right">$21.000</span></p>
                            <p className="grid grid-cols-2 text-[#1e5db2]"><span className="inline-block text-left">Industrial</span> <span className="inline-block text-right">$25.000</span></p>
                            <p className="grid grid-cols-2 text-[#22beeb]"><span className="inline-block text-left">Agrícola</span> <span className="inline-block text-right">$25.000</span></p>
                        </div>
                    </div>

                </div>
                <p className=" text-center m-8 px-8 max-w-screen-sm mx-auto"><Link href="https://soapweb.bciseguros.cl/web/DatosVehiculo?Convenios=EBE95AA36E47B33FD608C5BFE58844B6" className="inline-block rounded-full px-4 w-[100%] pt-1 pb-2 bg-[linear-gradient(#22beeb,#1e5db2)] text-white text-lg md:text-xl no-underline font-medium" >Paga to SOAP aquí</Link></p>
            </section>


        </main>
    );
}
