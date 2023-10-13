import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Service Point Neuberg',
  description: 'Lorem Ipsum',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={inter.className + ' dark bg-background text-foreground min-h-screen'}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
