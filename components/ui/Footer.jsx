import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#edf8ff]" id="contacto">
            <div className="container w-11/12 mx-auto ">
                <div className="w-full flex flex-wrap gap-5 py-10 md:flex-nowrap">
                    <div className="w-full md:w-1/2 lg:w-1/3">
                        <h2  className="text-[#00b5bd]">Contactanos</h2>
                        <div className="flex flex-col">
                            <Link href="#">
                                Océano Antártico 930, Fraccionamiento Altavela,
                                63735 Nay.
                            </Link>
                            <Link href="#">322 192 1554</Link>
                            <Link href="#">hola@rivieramedicalcenter.com</Link>
                        </div>
                    </div>
                    <div className="w-full  md:w-1/2 lg:w-2/3">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119396.68094557153!2d-105.34861826573838!3d20.74486434291391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842147b9c2fdbfcd%3A0x6e0e9a8a350b1f6e!2sRiviera%20Medical%20Center!5e0!3m2!1ses!2smx!4v1686245066137!5m2!1ses!2smx"
                            width="100%"
                            height="450"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 mb-8">
                    <div className="">
                        <Image
                            src="/img/riviera-medical-center.png"
                            alt="Riviera Medical Center"
                            width={100}
                            height={100}
                            className="mb-2"
                        />
                        <p className="w-[95%]">
                            Centro Médico de Especialistas en el fraccionamiento
                            Altavela, Nayarit. Contamos con un equipo de
                            profesionales altamente capacitados en nutriología,
                            cosmetología, odontología, terapia física y
                            psicología.{" "}
                        </p>
                    </div>
                    <div className="">
                        <h3 className="text-[#00b5bd]">Nosotros</h3>
                        <div className="flex gap-2 flex-col">
                            <Link href="#">Contacto</Link>
                            <Link href="#">FAQ</Link>
                            <Link href="#">Hacer cita</Link>
                            <Link href="#">Enviar WhatsApp</Link>
                            <Link href="#">Llamar Ahora</Link>
                        </div>
                    </div>
                    <div className="">
                        <h3 className="text-[#00b5bd]">Servicios</h3>
                        <div className="flex gap-2 flex-col">
                            <Link href="#">Terapia Fisica</Link>
                            <Link href="#">Cosmetologia</Link>
                            <Link href="#">Nutricion</Link>
                            <Link href="#">Psicologia</Link>
                            <Link href="#">Medicina General</Link>
                            <Link href="#">Odontologia</Link>
                        </div>
                    </div>
                    <div className="">
                        <h3 className="text-[#00b5bd]">Contactanos</h3>
                        <div className="flex flex-col">
                            <Link href="#">
                                Océano Antártico 930, Fraccionamiento Altavela,
                                63735 Nay.
                            </Link>
                            <Link href="#">322 192 1554</Link>
                            <Link href="#">hola@rivieramedicalcenter.com</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#FF9143]">

                <div className="container w-11/12 mx-auto">
                    <span className="text-white text-sm">Riviera Medical Center - 2023. Desarrollado por CoeurMkt</span>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
