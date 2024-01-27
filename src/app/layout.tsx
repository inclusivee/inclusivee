import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';
import Image from 'next/image';
import Button from './components/Button';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Inclusivee',
  description: 'Create by Mommytech Corporation and Inclusivee Tech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href="/assets/image/logo-inclusivee.png" type="image/x-icon" />
      </head>
      <body className={inter.className }>
        <header className='bg-white flex justify-between  py-2 px-10 shadow-xl  '>
        <Link href={'/'}><Image src="/assets/image/Logo.png" alt="Logo Inclusivee" width={200} height={0} /></Link>
        <Link href={'/pages/login'}><Button className="bg-[#008037] text-white px-10 py-3 rounded-lg">Acessar</Button></Link> 
        </header>



        <main className='relative'>{children}</main>
        
        
       </body>
    </html>
  )
}
