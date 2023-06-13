import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='h-[100dvh] relative'>
        <Image src="/img/hero-2.jpg" alt="" width={1920} height={1080} className='h-full object-cover'/>
        
        <div className='container w-11/12 mx-auto -mt-64'>
            <h1 className='text-5xl mb-10'>Soluciones para el bienestar de calidad, <br/> con profesionales comprometidos</h1>
            <Link href="#" className='btn-primary text-2xl'>Reservar Cita</Link>
        </div>
    </div>
  )
}

export default Hero