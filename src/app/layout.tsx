import AppProviders from '@/components/providers'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from 'react'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'БЖД | Безопасные железные дороги',
  description: 'Безопасные железные дороги',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <AppProviders>
        <>
          {children}
        </>
      </AppProviders>
      </body>
      </html>
  )
}
