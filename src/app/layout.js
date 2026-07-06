// app/layout.js
import './globals.css'
import Navbar from '@/components/Navbar'
import { ApplyModalProvider } from '@/components/ApplyModal'

export const metadata = {
  title: 'Thinkly.co - Build Your Future',
  description: 'Internships, projects, certificates, and a community that helps you grow.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <ApplyModalProvider>
          <Navbar />
          {children}
        </ApplyModalProvider>
      </body>
    </html>
  )
}