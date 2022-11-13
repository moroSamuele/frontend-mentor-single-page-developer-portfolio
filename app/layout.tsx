import './globals.css'

import { Space_Grotesk } from '@next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${spaceGrotesk.className} bg-deepBlack`}>{children}</body>
    </html>
  )
}
