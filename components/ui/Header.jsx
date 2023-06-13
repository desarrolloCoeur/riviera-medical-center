import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <div className="bg-[#EDF8FF]">
            <header className="container mx-auto flex flex-row justify-between items-center ">
                <div>
                    <Link href="/">
                        <Image
                            src="/img/riviera-medical-center.png"
                            alt="Riviera Medical Center"
                            width={150}
                            height={80}
                            className="main-logo"
                        />
                    </Link>
                </div>
                <div className="flex items-center gap-5 text-[#505050] uppercase text-xl font-semibold font-title">
                    <Link href="/">Inicio</Link>
                    <Link href="/nosotros">Nosotros</Link>
                    <Link href="/servicios">Servicios</Link>
                    <Link href="/#contacto">Contacto</Link>
                    <Link href="#" className="p-2 bg-[#00B5BD] rounded-md text-[#EDF8FF]">Hacer Cita!</Link>
                </div>
            </header>
        </div>
    );
};

export default Header;
