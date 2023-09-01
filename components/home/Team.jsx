import Image from "next/image";
import Link from "next/link";
import data from "../../data/services.json"

const Team = () => {
    return (
        <>
            <div className="container w-11/12 mx-auto  my-10">
                <h2 className="mb-5">Nuestros Especialistas</h2>
                <div className="grid md:grid-cols-3 gap-5 text-center mb-10">
                    {
                        data.map((service,index) => {
                            return(
                                <Link key={index} href={`/servicios/${service.slug}`} alt={service.title}>
                                    <Image
                                        src={service.doctorimg}
                                        alt="doctor"
                                        width={350}
                                        height={350}
                                        className="mx-auto rounded-full "
                                    />
                                    <h3>{service.doctor}</h3>
                                    <p>{service.title}</p>
                                </Link>
                            )
                        })
                    }
                    <Link  href="/servicios/psicologia" alt="Psicologia">
                        <Image
                            src="/img/Hans-Meza-psicologia.jpg"
                            alt="doctor"
                            width={350}
                            height={350}
                            className="mx-auto rounded-full"
                        />
                        <h3>Hans Meza</h3>
                        <p>Psicología</p>
                    </Link>
                    
                </div>
            </div>
        </>
    );
};

export default Team;