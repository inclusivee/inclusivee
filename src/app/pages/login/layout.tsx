import Link from 'next/link';
import Image from 'next/image';
import Button from '@/app/components/Button';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body>
       {children}
      </body>
    </html>
  )
}
