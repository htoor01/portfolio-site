import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  icons: {
    icon: '/haaris-toor.jpg',
    apple: '/haaris-toor.jpg',
  },
  title: 'Haaris Toor — Backend & Systems Engineer',
  description:
    'Portfolio of Haaris Toor — backend engineer focused on distributed systems, AI infrastructure, cloud architecture, and developer tooling.',
  keywords: [
    'Haaris Toor',
    'Backend Engineer',
    'Distributed Systems',
    'AI Infrastructure',
    'Cloud Engineer',
    'Developer Tooling',
    'Python',
    'TypeScript',
    'AWS',
  ],
  authors: [{ name: 'Haaris Toor' }],
  openGraph: {
    title: 'Haaris Toor — Backend & Systems Engineer',
    description: 'Backend engineer focused on distributed systems, AI infrastructure, and developer tooling.',
    type: 'website',
  },
  themeColor: '#fafafa',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} light bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
