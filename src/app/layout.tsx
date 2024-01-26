import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HeaderBar from './shared-components/header-bar'
import FooterBar from './shared-components/footer-bar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>
          <HeaderBar /> 
            {children}
          <FooterBar />
        </main>
      </body>
    </html>
  )
}
