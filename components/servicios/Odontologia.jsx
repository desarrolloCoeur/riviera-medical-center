import React from 'react'
import Image from 'next/image'

const Odontologia = () => {
  return (
    <>
    <div className="mx-auto flex items-end mb-20 p-5 bg-cover bg-[#edf8ff]">
        <div className="container mx-auto flex flex-col md:flex-row gap-5 w-full justify-center items-center">
            <Image src='/img/icons/odontologia.png' alt="" width={150} height={150} />
            <h1 className="text-3xl md:text-5xl lg:text-7xl rounded-md p-3 uppercase text-[#FF9143] ">
                Odontología
            </h1>
        </div>
    </div>

    <div className="container mx-auto"> 
        <div className="flex flex-wrap justify-around items-center w-full ">
            <div className="lg:w-2/3 w-full mx-8">
                <h2 className="text-center text-4xl">Riviera Medical Center / <span className="text-[#FF9143]">Odontología</span></h2>
                <p className="text-center font-light lg:text-lg text-ms">
                    En nuestro Centro Médico en el fraccionamiento Altavela, Nayarit, contamos con el servicio de 
                    odontología liderado por el Dr. Luis Riviera, puedes encontrar todas las especialidades
                     Odontológicas necesarias para ti y toda tu familia. Te ofrecemos odontología de vanguardia 
                     digitalizada y analógica para llegar al mejor de los resultados. Contamos con los materiales 
                     más innovadores para darte la atención necesaria sin dolor, limpiezas con ultrasonido, rayos 
                     X computarizados y cámara intra oral.
                </p>
            </div>
        </div>

        <section className='container mx-auto my-24'>
            <div className='flex flex-wrap justify-center sm:flex-nowrap flex-col sm:flex-row'>
                <div className='sm:w-1/4 text-center my-auto'>
                    <Image className='w-full h-[80vh]  object-cover object-center' width={500} height={500} src="/img/doctor5.webp" alt="Riviera Medcial Center - Luis Riviera - Odontologia"/>
                </div>
                <div className='sm:w-3/4' id="promotional">
                    <div className='justify-center items-center lg:mt-32 mt-12 lg:mx-16 mx-12 lg:mb-0 mb-12'>
                        <h2 className='text-4xl'>Acerca de / <span className="text-[#FF9143]">Luis Rivera</span></h2>
                        <p className='font-light lg:text-lg text-ms'>
                            El Dr. Luis Rivera es un especialista en Odontología con una sólida formación 
                            académica y amplia experiencia en el campo. Obtuvo su licenciatura en Cirujano 
                            Dentista en la Universidad Autónoma de Nayarit, donde adquirió los conocimientos 
                            y las habilidades necesarias para brindar la mejor de las atenciones y calidad 
                            frente a sus pacientes. Actualmente Dr. Rivera se encuentra cursando posgrado 
                            en Rehabilitación Oral y Estética en Universidad Intercontinental Pierre Fauchard.
                        </p>
                        <p className='font-light lg:text-lg text-ms pt-3'>
                            En nuestra clínica el Dr. Rivera está disponible para ofrecer el mejor de los 
                            servicios y tratamientos en odontología. Su amplio conocimiento en el campo de 
                            la odontología y su dedicación a la salud y el bienestar dental de sus pacientes 
                            lo convierten en una opción confiable para aquellos que buscan mejorar su salud 
                            bucal y lograr una sonrisa saludable y hermosa.
                        </p>
                    </div>
                </div>
            </div>
        </section>


    <div className='grid lg:grid-cols-2 grid-cols-1 w-11/12 mx-auto gap-12 mb-24'>
        <div className="mx-auto text-base">
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:mx-0 mx-3 gap-6'>
                <div>
                    <Image className='mx-auto pb-3' width="48" height="48" src="/img/tooth.png" alt="tooth"/>
                    <h2 className='lg:text-center text-left'>Servicios Estéticos</h2>
                    <ul className='list-disc font-light pl-6'>
                        <li>Blanqueamientos</li>
                        <li>Carillas de Porcelana</li>
                        <li>Carillas directas de resina</li> 
                        <li>Incrustaciones al color</li>
                        <li>Coronas en cerámica libres de metal</li>
                        <li>Cirugía periodontal (cirugía de Encias) </li>
                    </ul>
                </div>
                <div>
                    <Image className='mx-auto pb-3' width="48" height="48" src="/img/dental-filling.png" alt="dental-filling"/>
                    <h2 className='lg:text-center text-left'>Servicios de Restauración</h2>
                    <ul className='list-disc font-light pl-6'>
                        <li>Resinas</li>
                        <li>Selladores</li>
                        <li>Incrustaciones en metal</li>
                        <li>Incrustaciones al color</li>
                        <li>Amalgamas</li>
                        <li>Reconstrucciones de piezas dentales parcialmente destruidas</li>
                    </ul>
                </div>
                <div>
                    <Image className='mx-auto pb-3' width="48" height="48" src="/img/dental-implant.png" alt="dental-implant"/>
                    <h2 className='lg:text-center text-left'>Prótesis fijas y removibles</h2>
                    <ul className='list-disc font-light pl-6'>
                        <li>Coronas de porcelana en zirconia</li>  
                        <li>Coronas de porcelana en alúmina</li> 
                        <li>Coronas de porcelana prensada</li>  
                        <li>Coronas en metal y oro porcelana</li>
                        <li>Prótesis total o parcial</li>
                        <li>Guardas oclusales con activación</li>
                        <li>Implantes dentales de última generación</li>
                    </ul>
                </div>
                <div>
                    <Image className='mx-auto pb-3' width="48" height="48" src="/img/tooth-xray.png" alt="tooth-xray"/>                           
                    <h2 className='lg:text-center text-left'>Otros servicios generales</h2>
                    <ul className='list-disc font-light pl-6'>
                        <li>Limpiezas con Ultrasonido</li>
                        <li>Rayos X</li>
                        <li>Diagnóstico clínico con cámara intraoral</li>
                        <li>Rayo Láser Terapéutico</li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <Image className='w-full lg:h-[80vh] h-[50vh] object-cover object-center' width={900} height={900} src="/img/odontologia-3.webp" alt="Riviera Medical Center"/>
        </div>
    </div>

    {/* paquetes */}
    <section className='w-11/12 mx-auto mb-24'>
        <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-3 gap-6 text-lg'>
            <div className='py-6 px-12 text-white' id='paquete1'>
                <h2 className='text-center text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>Paquete 1</h2>
                <p className='[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>8 carillas de resina X de $20,000  a $16,000 precio especial (frente estético) Incluye:</p>
                <ul className='list-disc pl-10 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>
                    <li>Diseño de sonrisa digital</li>
                    <li>Fotografías</li> 
                    <li>Radiografías</li>
                    <li>Aplica restricciones</li>
                </ul>
            </div>
            <div className='py-6 px-12 text-white' id='paquete2'>
                <h2 className='text-center text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>Paquete 2</h2>
                <p className='[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>Consulta + diagnóstico de $800 a $650 Incluye: </p>
                <ul className='list-disc pl-10 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>
                    <li>Limpieza con ultrasonido de regalo</li>
                </ul>
            </div>
            <div className='py-6 px-12 text-white' id='paquete3'>
                <h2 className='text-center text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>Paquete 3</h2>
                <p className='[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>Blanqueamiento dental de $4,800 a  $3,800 Incluye:</p>
                <ul className='list-disc pl-10 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>
                    <li>Limpieza con ultrasonido</li>
                    <li>Activación en consultorio + blanqueamiento de casa</li>
                </ul>
            </div>
        </div>
    </section>


</div>
    
</>
  )
}

export default Odontologia