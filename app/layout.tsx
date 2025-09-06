import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
<<<<<<< HEAD
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Audio Forensic',
  description: 'Created By Catan',
  generator: 'Thesis',
=======
import './globals.css'

export const metadata: Metadata = {
  title: 'Audioforensic',
  description: 'thesis2project',
  generator: 'Audiofrensic',
>>>>>>> 754d16a453ea9f48bb6124628bfeebbe0aa23ed5
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
<<<<<<< HEAD
      <body>
        {children}
        <Analytics />
      </body>
=======
      <body>{children}</body>
>>>>>>> 754d16a453ea9f48bb6124628bfeebbe0aa23ed5
    </html>
  )
}
