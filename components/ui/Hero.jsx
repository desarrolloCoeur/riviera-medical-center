import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='h-[100dvh] relative'>
        <Image src="/img/equipo-riviera-medical.webp" alt="" width={1920} height={1080} className='h-full object-cover'/>
        {/* <div class="absolute inset-0 bg-black/75 bg-transparent from-black/20 to-black/20 bg-gradient-to-r bg-gradient-to-l"></div> */}
        
        <div className='container w-11/12 mx-auto -mt-64'>
            <h1 className=' text-3xl lg:text-5xl mb-10 drop-shadow-lg text-white'>Soluciones para el bienestar de calidad, <br/> con profesionales comprometidos</h1>
            <Link href="https://wa.me/5213221921554" className='btn-primary text-xl'>Reservar Cita</Link>
        </div>
    </div>
  )
}

export default Hero