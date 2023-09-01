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
                    <div className="container mx-auto flex flex-col md:flex-row gap-5 w-full justify-center items-center">
                        <Image src={service.icon} alt={service.title} width={200} height={200} />
                        <h1 className="text-3xl md:text-5xl lg:text-7xl rounded-md p-3 uppercase text-[#FF9143] ">
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
                <div className={`flex flex-wrap  gap-5 md:flex-nowrap my-10 justify-center ${slug === "psicologia" ? "hidden" : null}`}>
                    <div  className="text-center hidden md:block md:w-1/2 lg:w-1/4">
                        <Image
                            src={service.doctorimg}
                            alt={service.title}
                            width={350}
                            height={350}
                            className="mx-auto mt-10 rounded-full"
                        />
                        <h2>{service.doctor}</h2>
                        <p>{service.title}</p>
                    </div>
                    <div className="md:p-10 mt-10 md:w-1/2 lg:w-3/4" id="servicios">
                        <h2>Servicios</h2>
                        <ul>
                            {service.services.map((service, i) => {
                                return(
                                    <li key={i} className="pb-3">{service}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div  className="text-center  md:hidden">
                        <Image
                            src={service.doctorimg}
                            alt={service.title}
                            width={350}
                            height={350}
                            className="mx-auto mt-10 rounded-full"
                        />
                        <h2>{service.doctor}</h2>
                        <p>{service.title}</p>
                    </div>
                </div>
                <div className={`my-10 ${slug === "psicologia" ? "hidden" : null }`}>
                    <h2>Acerca de / <span className="text-[#FF9143]">{service.doctor}</span></h2>
                    {
                        service.about.map((about,i) => {
                            return(
                                <p key={i} className="pb-3"> {about} </p>
                            )
                        })
                    }
                </div>
            {
                slug === "psicologia" ? (
                <>
                    <div className=" mt-10 md:w-1/2" id="servicios">
                        <h2>Servicios</h2>
                        <ul>
                            {service.services.map((service, i) => {
                                return(
                                    <li key={i} className="pb-3">{service}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="flex flex-wrap  gap-5 md:flex-nowrap my-10 justify-center">

                        <div  className="text-center md:w-1/2 lg:w-1/4">
                            <Image
                                src={service.doctorimg}
                                alt={service.title}
                                width={350}
                                height={350}
                                className="mx-auto mt-10 rounded-full"
                                />
                            <h2>{service.doctor}</h2>
                            <p>{service.title}</p>
                        </div>
                        <div className="md:p-10 mt-10 md:w-1/2 lg:w-3/4">
                            <h2>Acerca de / <span className="text-[#FF9143]">{service.doctor}</span></h2>
                            {
                            service.about.map((about,i) => {
                                return(
                                    <p key={i} className="pb-3"> {about} </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-wrap  gap-5 md:flex-nowrap my-10 justify-center">

                        <div  className="text-center md:w-1/2 lg:w-1/4">
                            <Image
                                src={service.doctorimg2}
                                alt={service.title}
                                width={350}
                                height={350}
                                className="mx-auto mt-10 rounded-full"
                                />
                            <h2>{service.doctor2}</h2>
                            <p>{service.title}</p>
                        </div>
                        <div className="md:p-10 mt-10 md:w-1/2 lg:w-3/4">
                            <h2>Acerca de / <span className="text-[#FF9143]">{service.doctor2}</span></h2>
                            {
                            service.about2.map((about,i) => {
                                return(
                                    <p key={i} className="pb-3"> {about} </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </>    
                ) : null }
            </div>
            
        </>
    );
};

export default page;
