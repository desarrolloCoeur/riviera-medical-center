'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {

    const [open,setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
        console.log(open);
    }

    return (
        <div className="bg-[#EDF8FF]">
            <header className="container w-11/12 mx-auto flex flex-row justify-between items-center ">
                <div>
                    <Link href="/">
                        <Image
                            src="/img/riviera-medical-horizontal.png"
                            alt="Riviera Medical Center"
                            width={225}
                            height={90}
                            className="main-logo my-1"
                        />
                    </Link>
                </div>
                <div className={`items-center gap-5 text-[#505050] uppercase text-lg font-semibold font-title md:flex hidden`}>
                    <Link href="/">Inicio</Link>
                    <Link href="/nosotros">Nosotros</Link>
                    <Link href="/servicios">Servicios</Link>
                    <Link href="/#contacto">Contacto</Link>
                    <Link href="https://wa.me/5213221921554" className="p-2 bg-[#00B5BD] rounded-md text-[#EDF8FF]">Hacer Cita!</Link>
                </div>
                <div className="text-xl md:hidden">
                    <button onClick={toggleMenu}>
                        <FaBars />
                    </button>
                </div>
            </header>
            <div className={`items-center gap-5 text-[#505050] uppercase text-lg font-semibold font-title flex flex-col py-10 ${open ? "" : "hidden"}`}>
                <Link href="/" onClick={toggleMenu}>Inicio</Link>
                <Link href="/nosotros" onClick={toggleMenu}>Nosotros</Link>
                <Link href="/servicios" onClick={toggleMenu}>Servicios</Link>
                <Link href="/#contacto" onClick={toggleMenu}>Contacto</Link>
                <Link href="#" className="p-2 bg-[#00B5BD] rounded-md text-[#EDF8FF] " onClick={toggleMenu}>Hacer Cita!</Link>
            </div>
        </div>
    );
};

export default Header;
