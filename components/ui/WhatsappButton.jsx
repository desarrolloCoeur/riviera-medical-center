import Link from 'next/link'
import {FaWhatsapp} from 'react-icons/fa'


const WhatsappButton = () => {
  return (
    <>
        <Link href="#">
            <div className="fixed bottom-4 right-4 font-title rounded-md bg-[#FF9143] flex items-center gap-2 text-xl p-2 text-white "> WhatsApp <FaWhatsapp className='text-3xl'/></div>
        </Link>
    </>
  )
}

export default WhatsappButton