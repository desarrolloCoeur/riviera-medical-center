import Image from 'next/image'


const page = () => {
    return (
        <>
            <div>
                <div className="mx-auto flex items-end mb-20 p-5 bg-cover bg-[#edf8ff]">
                    <div className="container mx-auto flex flex-col md:flex-row gap-5 w-full justify-center items-center">
                        {/* <Image src={service.icon} alt={service.title} width={200} height={200} /> */}
                        <h1 className="text-3xl md:text-5xl lg:text-7xl rounded-md p-3 uppercase text-[#FF9143] ">
                            Odontología
                        </h1>
                    </div>
                </div>
            </div>


            <div className="container  mx-auto"> 
            {/* w-11/12 */}

                <div className="flex flex-wrap justify-around items-center w-full">
                    <div className="lg:w-2/3 w-full">
                        <h2 className="text-center lg:text-4xl text-2xl">Riviera Medical Center / <span className="text-[#FF9143]">Odontologia</span></h2>
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


                <div className="grid grid-cols-3 justify-center my-24">
                    <div  className="text-center">
                        <Image src="/img/doctor5.webp" alt="" width={350} height={350} className="mx-auto object-cover	"/>
                    </div>

                    <div class="w-full h-full py-16 px-16 justify-center items-center col-span-2" id="promotional">
                        <h2>Odontología / <span className="text-[#FF9143]">Luis Rivera</span></h2>
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

                    {/* <div className="md:p-10 mt-10 md:w-1/2 lg:w-3/4">
                        <h2>Odontología / <span className="text-[#FF9143]">Luis Rivera</span></h2>
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
                    </div> */}

                </div>



                <div className="md:p-10 mt-10" id="servicios">

                        <div className='grid grid-cols-2 gap-6'>
                            <div>
                                <h2>Servicios Estéticos</h2>
                                <ul>
                                    <li>Blanqueamiento Dental</li>
                                    <li>Carillas de porcelana / resina</li>
                                    <li>Incrustaciones de resina / metal / porcelana</li> 

                                </ul>
                            </div>
                            <div>
                                <h2>Servicios de Restauración</h2>
                                <ul>
                                    <li>Resinas</li>
                                </ul>
                            </div>
                            <div>
                                <h2>Prótesis fijas y removibles</h2>
                                <ul>
                                    <li>Coronas libres de metal</li>  
                                    <li>Implantes dentales</li> 
                                    <li>Prótesis totales y parciales</li>  
                                    <li>Guardas nocturnos y deportivos</li>
                                </ul>
                            </div>
                            <div>
                                <h2>Otros servicios generales</h2>
                                <ul>
                                    <li>Realización de exámenes bucales completos, revisa la salud de tus dientes y encías, y realiza limpiezas dentales profesionales para mantener tu boca sana y prevenir enfermedades dentales.</li>
                                    <li>Obturaciones dentales para tratar las caries y restaurar la estructura dental dañada, devolviendo la funcionalidad y la estética a tus dientes.</li>
                                    <li>Brinda atención especializada en el tratamiento de enfermedades de las encías y periodonto para mantener tus encías saludables y prevenir la pérdida dental.</li>
                                </ul>
                            </div>
                        </div>
            
                    </div>


            </div>
            
        </>
    );
};

export default page;

