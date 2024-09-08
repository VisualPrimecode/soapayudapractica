
import Link from 'next/link';
import Image from 'next/image';
import Boton from 'components/button';

import bcibanco from '/public/bcibanco.png';

export const metadata = {
    title: 'BCI | Bomberos Americana Valparaiso'
};

export default async function Page() {
    return (

        <main className="text-center">

            <section className=" text-center mt-20 mb-24 max-w-screen-lg mx-auto">
                <p className=" text-center m-4"><img alt='' src={bcibanco.src} className=" mx-auto h-[89px] sm:h-[144px] w-auto duration-300 ease-in-out block"/></p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 my-10 text-center m-4 font-medium text-lg">

                    <div>
                        <h3 className="text-center m-8 font-bold text-lg md:text-xl lg:text-1xl text-[#1e5db2] duration-300 ease-in-out block" >Lista de precios SOAP vehículos particulares<br/>(Vigencia hasta Marzo de 2025)</h3>
                        <div className=" text-left mx-8 text-lg md:text-xl duration-300 ease-in-out block">
                            <p className="grid grid-cols-2 text-[#1e5db2] border-dotted border-t-2 border-black border-opacity-30"><span className="inline-block text-left">Autos, Jeep y Station Wagon</span> <span className="inline-block text-right">$8.500</span></p>
                            <p className="grid grid-cols-2 text-[#00b6e8] border-dotted border-t-2 border-black border-opacity-30"><span className="inline-block text-left">Camioneta y Furgón</span> <span className="inline-block text-right">$10.500</span></p>
                            <p className="grid grid-cols-2 text-[#1e5db2] border-dotted border-t-2 border-black border-opacity-30"><span className="inline-block text-left">Casa rodante</span> <span className="inline-block text-right">$10.500</span></p>
                            <p className="grid grid-cols-2 text-[#00b6e8] border-dotted border-t-2 border-black border-opacity-30"><span className="inline-block text-left">Carro de arrastre</span> <span className="inline-block text-right">$7.000</span></p>
                            <p className="grid grid-cols-2 text-[#1e5db2] border-dotted border-t-2 border-black border-opacity-30"><span className="inline-block text-left">Mini bus particular</span> <span className="inline-block text-right">$25.000</span></p>
                            <p className="grid grid-cols-2 text-[#00b6e8] border-dotted border-y-2 border-black border-opacity-30"><span className="inline-block text-left">Moto</span> <span className="inline-block text-right">$46.000</span></p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-center m-8 font-bold text-lg md:text-xl lg:text-1xl text-[#1e5db2] duration-300 ease-in-out block" >Lista de precios SOAP<br/>(Vigencia hasta Mayo de 2025)</h3>
                        <div className=" text-left mx-8 text-lg md:text-xl duration-300 ease-in-out block">
                            <p className="grid grid-cols-2 text-[#1e5db2] border-dotted border-t-2 border-black border-opacity-30"><span className="inline-block text-left">T colectivo</span> <span className="inline-block text-right">$34.000</span></p>
                            <p className="grid grid-cols-2 text-[#00b6e8] border-dotted border-t-2 border-black border-opacity-30"><span className="inline-block text-left">T básico</span> <span className="inline-block text-right">$32.000</span></p>
                            <p className="grid grid-cols-2 text-[#1e5db2] border-dotted border-t-2 border-black border-opacity-30"><span className="inline-block text-left">Turismo</span> <span className="inline-block text-right">$34.000</span></p>
                            <p className="grid grid-cols-2 text-[#00b6e8] border-dotted border-t-2 border-black border-opacity-30"><span className="inline-block text-left">M turismo</span> <span className="inline-block text-right">$34.000</span></p>
                            <p className="grid grid-cols-2 text-[#1e5db2] border-dotted border-t-2 border-black border-opacity-30"><span className="inline-block text-left">T escolar</span> <span className="inline-block text-right">$32.000</span></p>
                            <p className="grid grid-cols-2 text-[#00b6e8] border-dotted border-y-2 border-black border-opacity-30"><span className="inline-block text-left">Bus particular</span> <span className="inline-block text-right">$82.000</span></p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-center m-8 font-bold text-lg md:text-xl lg:text-1xl text-[#1e5db2] duration-300 ease-in-out block" >Lista de precios SOAP<br/>(Vigencia hasta Septiembre de 2025)</h3>
                        <div className=" text-left mx-8 text-lg md:text-xl duration-300 ease-in-out block">
                            <p className="grid grid-cols-2 text-[#1e5db2] border-dotted border-t-2 border-black border-opacity-30"><span className="inline-block text-left">Camión y Tracto</span> <span className="inline-block text-right">$25.000</span></p>
                            <p className="grid grid-cols-2 text-[#00b6e8] border-dotted border-t-2 border-black border-opacity-30"><span className="inline-block text-left">Remolque, Semi remolque y Rampla</span> <span className="inline-block text-right">$8.500</span></p>
                            <p className="grid grid-cols-2 text-[#1e5db2] border-dotted border-t-2 border-black border-opacity-30"><span className="inline-block text-left">Maquinaria Industrial</span> <span className="inline-block text-right">$11.000</span></p>
                            <p className="grid grid-cols-2 text-[#00b6e8] border-dotted border-y-2 border-black border-opacity-30"><span className="inline-block text-left">Maquinaria Agrícola</span> <span className="inline-block text-right">$11.000</span></p>
                        </div>
                    </div>

                </div>
                <p className=" text-center m-8 px-8 max-w-screen-sm mx-auto"><Boton enlace='https://soapweb.bciseguros.cl/web/DatosVehiculo?Convenios=5F9998D95E422A3AF047F73D5636B6B9' texto='Paga to SOAP aquí' /></p>
            </section>

        </main>
    );
}
