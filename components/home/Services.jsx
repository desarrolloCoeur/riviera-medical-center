import Link from "next/link";
import Image from "next/image";

const Services = () => {
    return (
        <div className="flex flex-wrap gap-10 md:flex-nowrap container w-11/12 mx-auto my-20">
            <div className="w-full md:w-1/3">
                <h1>Riviera Medical Center</h1>
                <p className="mb-7 mt-4">
                    Bienvenidos a nuestro Centro Médico de Especialistas en el
                    fraccionamiento Altavela, Nayarit. Contamos con un equipo de
                    profesionales altamente capacitados en nutriología,
                    cosmetología, odontología, terapia física y psicología.
                    Nuestro objetivo es brindarte una atención integral y de
                    calidad en todas estas áreas, para que puedas cuidar de tu
                    salud y bienestar de manera completa y conveniente. Confía
                    en nosotros para recibir el mejor cuidado médico
                    especializado.
                </p>
                <Link href="/nosotros" className="btn-primary">Mas Acerca de Nostros</Link>
            </div>
            <div className="w-full md:w-2/3 bg-[#edf8ff] flex flex-col items-center gap-5 rounded-md py-8">
                <h2>Nuestro Servicios</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-10 w-full h-full items-center justify-around">
                    <div className="flex flex-col items-center">
                        <Image src="/img/icons/terapia-fisica.png" alt="Terapia Fisica" width={100} height={100} />
                        <h3>Terapia Fisica</h3>
                    </div>
                    <div className="flex flex-col items-center">
                    <Image src="/img/icons/cosmetologia.png" alt="Terapia Fisica" width={100} height={100} />

                        <h3>Cosmetologia</h3>
                    </div>
                    <div className="flex flex-col items-center">
                    <Image src="/img/icons/nutriologia.png" alt="Terapia Fisica" width={100} height={100} />
                        
                        <h3>Nutricion</h3>
                    </div>
                    <div className="flex flex-col items-center">
                    <Image src="/img/icons/psicologia.png" alt="Terapia Fisica" width={100} height={100} />

                        <h3>Psicologia</h3>
                    </div>
                    <div className="flex flex-col items-center">
                    <Image src="/img/icons/medicina-general.png" alt="Terapia Fisica" width={100} height={100} />

                        <h3>Medicina General</h3>
                    </div>
                    <div className="flex flex-col items-center">
                    <Image src="/img/icons/odontologia.png" alt="Terapia Fisica" width={100} height={100} />

                        <h3>Odontologia</h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;
