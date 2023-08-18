import Image from "next/image";
import Link from "next/link";

const Team = () => {
    return (
        <>
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
                        <h3>Naira Cisneros</h3>
                        <p>Nutriologa</p>
                    </div>
                    <div>
                        <Image
                            src="/img/doctor-1.png"
                            alt="doctor"
                            width={350}
                            height={350}
                            className="mx-auto"
                        />
                        <h3>Esther Tostado</h3>
                        <p>Psicología</p>
                    </div>
                    <div>
                        <Image
                            src="/img/doctor-2.png"
                            alt="doctor"
                            width={350}
                            height={350}
                            className="mx-auto"
                        />
                        <h3>Hans Meza</h3>
                        <p>Psicología</p>
                    </div>
                </div>
            </div>

            <div className="container w-11/12 mx-auto  my-10">
                <div className="grid md:grid-cols-3 gap-5 text-center mb-10">
                    <div>
                        <Image
                            src="/img/doctor-1.png"
                            alt="doctor"
                            width={350}
                            height={350}
                            className="mx-auto"
                        />
                        <h3>Maria Guadalupe Peña Meza</h3>
                        <p>Terapia Física</p>
                    </div>
                    <div>
                        <Image
                            src="/img/doctor-2.png"
                            alt="doctor"
                            width={350}
                            height={350}
                            className="mx-auto"
                        />
                        <h3>Juan Garcia</h3>
                        <p>Medicina General</p>
                    </div>
                    <div>
                        <Image
                            src="/img/doctor-2.png"
                            alt="doctor"
                            width={350}
                            height={350}
                            className="mx-auto"
                        />
                        <h3>Luis Rivera</h3>
                        <p>Odontología</p>
                    </div>
                </div>
            </div>

            <div className="container w-11/12 mx-auto  my-10">
                <div className="grid md:grid-cols-3 gap-5 text-center mb-10">
                    <div>
                        <Image
                            src="/img/doctor-1.png"
                            alt="doctor"
                            width={350}
                            height={350}
                            className="mx-auto"
                        />
                        <h3>Xóchitl Gámez</h3>
                        <p>Cosmetología</p>
                    </div>
                </div>
                <Link href="/servicios" className="btn-primary">Nuestro Servicios</Link>
            </div>
        </>
    );
};

export default Team;