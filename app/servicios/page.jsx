import data from '../../data/services.json'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {

  return (
    
    <div className='container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-11/12 mx-auto py-20 gap-5'>
      
      {
        data.map((service, i) => {
          return(
            <div key={i} className='flex justify-center items-center' >
                <Link href={`/servicios/${service.slug}#servicios`}>
                <Image src={service.img} alt={service.title} width={500} height={400} className='h-72 object-cover rounded-md mb-3' />
                <h2 className='btn-primary w-fit mx-auto'>{service.title}</h2>
              </Link>
            </div>

            
          )
        })
      }
      
    </div>
  )
}

export default page