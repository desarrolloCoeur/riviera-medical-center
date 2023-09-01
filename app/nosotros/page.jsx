import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <>
            <div>
                <div className="container w-11/12 mx-auto">
                    <h1>Nosotros</h1>
                </div>
            </div>
            <div className="container w-11/12 mx-auto my-10">
                <div className="flex flex-wrap items-center justify-center">
                    <div className="w-full md:w-1/2">
                        <h1>Riviera Medical Center</h1>
                        <p>
                            Bienvenidos a nuestro Centro Médico de Especialistas
                            en el fraccionamiento Altavela, Nayarit. Contamos
                            con un equipo de profesionales altamente capacitados
                            en nutriología, cosmetología, odontología, terapia
                            física y psicología. Nuestro objetivo es brindarte
                            una atención integral y de calidad en todas estas
                            áreas, para que puedas cuidar de tu salud y
                            bienestar de manera completa y conveniente. Confía
                            en nosotros para recibir el mejor cuidado médico
                            especializado.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <Image
                            src="/img/riviera-medical.webp"
                            alt="Centro Medico ubicado en Altavela"
                            width={700}
                            height={800}
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 justify-center">
                    <div>
                        <h2>Mision</h2>
                        <p>
                            Brindar servicios de calidad con sentido humano en
                            un espacio seguro, condos, empáticos y solidarios,
                            nuestro propósito es brindar soluciones armoniosas
                            para mejorar el bienestar y la salud.
                        </p>
                    </div>
                    <div>
                        <h2>Vision</h2>
                        <p>
                            Mantener una atencion calida, humana y profesional
                            dentro de instalaciones, consolidarnos como una
                            marca genuina y expandirse hacia otras localidades
                            Ser un centro de atención de vanguardia, espacios
                            confortables, funcionales y equipados según la
                            especialidad.{" "}
                        </p>
                    </div>
                    <div>
                        <h2>Valores</h2>

                        <ul>
                            <li>Honestidad</li>
                            <li>Responsabilidad</li>
                            <li>Respeto</li>
                            <li>Etica</li>
                            <li>Sensibilidad</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
