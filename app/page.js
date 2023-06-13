import Services from '../components/home/Services'
import Team from '../components/home/Team'
import Hero from '../components/ui/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Team />
    </main>
  )
}
