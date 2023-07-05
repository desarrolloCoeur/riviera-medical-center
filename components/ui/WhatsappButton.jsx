import Link from 'next/link'
import {FaWhatsapp} from 'react-icons/fa'


const WhatsappButton = () => {
  return (
    <>
        <Link href="https://wa.me/5213221921554">
            <div className="fixed bottom-4 right-4 font-title rounded-full bg-[#25D366] flex items-center gap-2 text-xl p-2 text-white "> <FaWhatsapp className='text-5xl'/>  </div>
        </Link>
    </>
  )
}

export default WhatsappButton