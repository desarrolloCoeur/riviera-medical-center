import './globals.css'
import {Poppins, Roboto } from 'next/font/google'
import Footer from '../components/ui/Footer'
import Header from '../components/ui/Header'
import WhatsappButton from '../components/ui/WhatsappButton'
import Script from 'next/script'

const roboto = Roboto({subsets : ['latin'], weight : ['100','300','400','500','700'],variable: '--font-roboto'})
const poppins = Poppins({subsets : ['latin'], weight : ['700'], variable : '--font-poppins'})

export const metadata = {
  title: 'Riviera Medical Center ',
  description: ' ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-17LF5TC506" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-17LF5TC506');
        `}
      </Script>
      <body>
        <Header />
          {children}
        <Footer />
        <WhatsappButton />

      </body>
    </html>
  )
}
