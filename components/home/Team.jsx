import Image from "next/image";
import Link from "next/link";
import React from "react";

const Team = () => {
    return (
        <div className="container w-11/12 mx-auto  my-10">
            <h2 className="mb-5">Nuestros Especialistas</h2>
            <div className="grid md:grid-cols-3 gap-5 text-center mb-10">
                <div>
                    <Image
                        src="/img/doctor-1.png"
                        alt="doctor"
                        width={350}
                        height={350}
                        className="mx-auto"
                    />
                    <h3>Xochitl Elena</h3>
                    <p>Cosmetologa</p>
                </div>
                <div>
                <Image
                        src="/img/doctor-2.png"
                        alt="doctor"
                        width={350}
                        height={350}
                        className="mx-auto"
                    />
                    <h3>Juan Ramos</h3>
                    <p>Fisioterapeuta</p>
                </div>
                <div>
                <Image
                        src="/img/doctor-1.png"
                        alt="doctor"
                        width={350}
                        height={350}
                        className="mx-auto"
                    />
                    <h3>Naira Cisneros</h3>
                    <p>Nutriologa</p>
                </div>
            </div>
            <Link href="#" className="btn-primary">Nuestro Servicios</Link>
        </div>
    );
};

export default Team;
