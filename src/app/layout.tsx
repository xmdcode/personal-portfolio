import { ReactNode } from 'react'
import { Inter } from 'next/font/google'

type Props = {
  children: ReactNode
}
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen relative`}>{children}</body>
    </html>
  )
}
