import { Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata = {
  title: 'AI ChatWorks - Smart Productivity for AI Workflows',
  description: 'The smart productivity layer for modern AI workflows. Stay organized, save time, and master your prompts across ChatGPT, Claude, and Gemini.',
  icons: {
    icon: '/images/AI_ChatWorks.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/AI_ChatWorks.svg" type="image/svg+xml" />
      </head>
      <body className={`${openSans.className} bg-brand-bg text-brand-dark`}>
        {children}
      </body>
    </html>
  )
}
