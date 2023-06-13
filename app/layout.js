import './globals.css'
import {Poppins, Roboto } from 'next/font/google'
import Footer from '../components/ui/Footer'
import Header from '../components/ui/Header'
import WhatsappButton from '../components/ui/WhatsappButton'

const roboto = Roboto({subsets : ['latin'], weight : ['100','300','400','500','700'],variable: '--font-roboto'})
const poppins = Poppins({subsets : ['latin'], weight : ['700'], variable : '--font-poppins'})

export const metadata = {
  title: 'Riviera Medical Center ',
  description: ' ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body>
        <Header />
          {children}
        <Footer />
        <WhatsappButton />

      </body>
    </html>
  )
}
