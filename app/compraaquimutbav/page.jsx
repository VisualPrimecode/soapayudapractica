
import Boton from 'components/button';

import mutualdeseguros from '/public/mutualdeseguros.png';

export const metadata = {
    title: 'Mutal de Seguros | Bomberos Americana Valparaiso'
};

export default async function Page() {
    return (

        <main className="text-center">

            <section className=" text-center mt-20 mb-24 max-w-screen-lg mx-auto">
                <p className=" text-center m-4"><img alt='' src={mutualdeseguros.src} className=" mx-auto h-[89px] sm:h-[144px] w-auto duration-300 ease-in-out block"/></p>
                <h3 className="text-center m-8 font-bold text-lg md:text-xl lg:text-1xl text-[#1e5db2] duration-300 ease-in-out block" >Lista de precios SOAP vehículos particulares (Vigencia desde 01/04/2024)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 my-10 text-center m-4 font-medium text-lg">
                    <div className=" text-left mx-8 text-lg md:text-xl duration-300 ease-in-out block">
                        <p className="grid grid-cols-2 text-[#1e5db2] border-dotted border-t-2 border-black border-opacity-30"><span className="inline-block text-left ">Autos</span> <span className="inline-block text-right">$8.500</span></p>
                        <p className="grid grid-cols-2 text-[#00b6e8] border-dotted border-t-2 border-black border-opacity-30"><span className="inline-block text-left">Jeep</span> <span className="inline-block text-right">$8.500</span></p>
                        <p className="grid grid-cols-2 text-[#1e5db2] border-dotted border-t-2 border-black border-opacity-30"><span className="inline-block text-left">St. Wagon</span> <span className="inline-block text-right">$8.500</span></p>
                        <p className="grid grid-cols-2 text-[#00b6e8] border-dotted border-t-2 border-black border-opacity-30"><span className="inline-block text-left">Camioneta</span> <span className="inline-block text-right">$10.500</span></p>
                        <p className="grid grid-cols-2 text-[#1e5db2] border-dotted border-t-2 md:border-y-2 border-black border-opacity-30"><span className="inline-block text-left">Furgón</span> <span className="inline-block text-right">$10.500</span></p>
                    </div>
                    <div className=" text-left mx-8 text-lg md:text-xl duration-300 ease-in-out block">
                        <p className="grid grid-cols-2 text-[#00b6e8] border-dotted border-t-2 border-black border-opacity-30"><span className="inline-block text-left">Casa Rodante</span> <span className="inline-block text-right">$10.500</span></p>
                        <p className="grid grid-cols-2 text-[#1e5db2] border-dotted border-t-2 border-black border-opacity-30"><span className="inline-block text-left">Carro Arrastre</span> <span className="inline-block text-right">$7.000</span></p>
                        <p className="grid grid-cols-2 text-[#00b6e8] border-dotted border-t-2 border-black border-opacity-30"><span className="inline-block text-left no-wrap">Minibus particular</span> <span className="inline-block text-right">$25.000</span></p>
                        <p className="grid grid-cols-2 text-[#1e5db2] border-dotted border-y-2 border-black border-opacity-30"><span className="inline-block text-left">Moto</span> <span className="inline-block text-right">$46.000</span></p>
                    </div>
                </div>
                <p className=" text-center m-8 px-8 max-w-screen-sm mx-auto"><Boton enlace='https://core.mutualdeseguros.cl/soap_ms/pago.php?tipodeventa=243' texto='Paga to SOAP aquí' /></p>
            </section>


        </main>
    );
}
