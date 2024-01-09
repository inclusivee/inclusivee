import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';
import Image from 'next/image';
import Button from './components/Button';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='bg-white flex justify-between mx-10 py-5 shadow-xl'>
        <Image src="/assets/image/Logo.png" alt="Logo Inclusivee" width={200} height={0} />
        <Button className="bg-[#008037] text-white px-10 rounded-lg">Acessar</Button>
        </header>



        <main>{children}</main>
        
        
       </body>
    </html>
  )
}
