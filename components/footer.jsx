import Image from 'next/image';
import soapayuda from 'public/soapayuda .png';


export function Footer() {
    return (
        <footer className=" bg-sky-950 mx-auto max-w-screen-lg rounded-none lg:rounded-xl overflow-hidden">
            <div className={` relative py-6 w-full flex flex-col-reverse md:flex-row justify-evenly items-center gap-8 md:gap-0 text-md font-medium text-center text-white text-opacity-80 `}>
                    <div className={` absolute left-0 bottom-0 h-1/5 w-full bg-gradient-to-t from-[rgba(0,0,0,0.3)] to-transparent`} />
                    <div className={` absolute left-0 top-0 h-4/5 w-full bg-gradient-to-b from-[rgba(30,93,178,0.6)] to-transparent`} />

                <section className="relative flex flex-col justify-center items-center ">
                    <h3 className=" flex justify-center items-end w-full h-16 relative ">
                        <Image src={soapayuda} className={` mx-auto object-contain  h-full w-auto `} alt="" height='auto' width="auto" />
                    </h3>
                    <div className="w-full">
                        <p className="mt-2">© 2022 SOAP AYUDA.<br/>
                        Creado por Seguro Obligatorio</p>
                        <p className=" text-center mt-4">
                            <a href="#" className="inline-flex items-center justify-center mx-4 w-8 h-8 rounded-full text-socialBlue hover:text-white duration-300 ease-in-out bg-white hover:bg-purple">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="h-4">
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </a>
                            <a href="#" className="inline-flex items-center justify-center mx-4 w-8 h-8 rounded-full text-socialBlue hover:text-white duration-300 ease-in-out bg-white hover:bg-socialBlue">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor" className="h-4">
                                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                </svg>
                            </a>
                        </p>
                    </div>
                </section>

                <section className="relative flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-lg md:text-xl text-center mb-2 flex justify-center items-end w-full ">Datos de contacto</h3>
                    <p className=" w-full">Teléfono (32) 2233 491. Av. Colón 3192. Valparaíso</p>
                    <h3 className="font-semibold text-lg md:text-xl text-center mt-6 mb-2 flex justify-center items-end w-full ">
                        Atención al público
                    </h3>
                    <p className=" w-full">Lunes a viernes de 8:30 hrs. a 14:00 hrs. y de 15:00 hrs. a 18:00 hrs.</p>
                </section>

            </div>
        </footer>
    );
};
