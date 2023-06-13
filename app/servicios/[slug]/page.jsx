/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect, useState } from "react";
import data from "../../../data/services.json";
import Image from "next/image";

const page = ({ params: { slug } }) => {
    const [service, setService] = useState(null);

    useEffect(() => {
        getService();
    });

    const getService = () => {
        const servicePage = data.find((service) => service.slug === slug);
        setService(servicePage);
    };

    if (!service) {
        return (
            <div>
                <p>{slug}</p>
            </div>
        );
    }

    return (
        <>
            <div>
                <div
                    className="mx-auto flex items-end mb-20 p-5 bg-cover bg-[#edf8ff]"
                    
                >
                    <div className="container mx-auto flex gap-5 w-full justify-center items-center">
                        <Image src={service.icon} alt={service.title} width={200} height={200} />
                        <h1 className="text-7xl rounded-md p-3 uppercase text-[#FF9143] ">
                            {service.title}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="container w-11/12 mx-auto">
                <div className="flex flex-wrap justify-around items-center w-full gap-5 md:flex-nowrap">
                    <div className="w-full md:w-1/2">
                        <h2>Riviera Medical Center / <span className="text-[#FF9143]">{service.title}</span></h2>
                        <p>{service.description} </p>
                    </div>
                    <div className=" md:w-1/2">
                        <Image
                            src={service.imgservice}
                            alt={service.title}
                            width={500}
                            height={500}
                            className="mx-auto"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap justify-around items-center w-full gap-5 md:flex-nowrap">
                    <div  className="text-center min-w-1/4">
                        <Image
                            src={service.doctorimg}
                            alt={service.title}
                            width={350}
                            height={350}
                            className="mx-auto"
                        />
                        <h2>{service.doctor}</h2>
                        <p>{service.title}</p>
                    </div>
                    <div className="w-3/4 p-10">
                        <h2>Servicios</h2>
                        <ul>
                            <li>
                                Evaluación del estado nutricio a nivel
                                individual en las diferentes etapas de la vida,
                                en individuos sanos o enfermos, considerando
                                indicadores antropométricos, dietéticos,
                                bioquímicos, clínicos, entre otros.
                            </li>
                            <li>
                                Diagnósticos nutricionales encaminados a la
                                identificación de problemáticas de alimentación
                                y nutrición, así como para la evaluación de
                                intervenciones en nutrición
                            </li>
                            <li>
                                Plan de alimentación adecuado a los
                                requerimientos y necesidades del paciente.
                            </li>
                            <li>
                                Se pretende mejorar los hábitos alimenticios del
                                paciente, para obtener una mejor calidad de vida
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="my-20">
                    <h2>Acerca de / <span className="text-[#FF9143]">{service.doctor}</span></h2>
                    <p>
                        Naira Cisneros es una nutrióloga con una amplia
                        formación académica. Obtuvo su licenciatura en Nutrición
                        en la UNIVA y posteriormente se especializó en Nutrición
                        y Dietética en la Universidad Mayor en Temuco, Chile.
                    </p>
                    <p>
                        A lo largo de su carrera, Naira ha participado en
                        diversos congresos y simposios relacionados con la salud
                        y la nutrición. Algunos de los eventos en los que ha
                        estado presente incluyen el Congreso Internacional de
                        Ciencias de la Salud "La Salud Mental" en 2016, el CISU
                        "Actualidades y Tópicos de Vanguardia" en 2017, el CISU
                        "Desafíos en la salud integral del infante y
                        adolescente" en 2018, y el CISU "Salud Digestiva" en
                        2019.
                    </p>
                    <p>
                        En el año 2020, Naira participó en el evento "ABCD de la
                        obesidad" organizado por el IMSS y también en el tema de
                        "Consulta Online y Covid" en la UNINUT. En 2021, asistió
                        al Simposio de Nutrición Clínica Pediátrica y al
                        Simposio de Nutrición en el Embarazo, ambos organizados
                        por la FNNC.
                    </p>
                    <p>
                        Con una sólida formación y una amplia experiencia en
                        nutrición, Naira Cisneros se dedica a proporcionar
                        servicios de consulta y asesoramiento nutricional,
                        brindando apoyo en temas relacionados con la
                        alimentación y la salud en diferentes etapas de la vida,
                        incluyendo infantes, adolescentes, embarazadas y
                        pacientes con condiciones específicas como el síndrome
                        de ovario poliquístico.
                    </p>
                </div>
            </div>
        </>
    );
};

export default page;
