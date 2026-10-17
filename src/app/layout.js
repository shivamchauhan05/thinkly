// app/layout.js
import './globals.css'
import Navbar from '@/components/Navbar' 
import Footer from '@/components/Footer'
import { ApplyModalProvider } from '@/components/ApplyModal'
import { QuoteModalProvider } from '@/components/QuoteModal'

export const metadata = {
  metadataBase: new URL('https://thinklyedu.com'),
  verification:{
    google:"439LD31UM_4C8T_bYhwYufdpooj0HVhv1arax79Voyo",
  },
  title: 'Thinkly - Build Your Future',
  description: 'Internships, projects, certificates, and a community that helps you grow.',
  openGraph: {
    title: 'Thinkly - Build Your Future',
    description: 'Internships, projects, certificates, and a community that helps you grow.',
    siteName: 'Thinklyedu',
    type: 'website',
    url: 'https://thinklyedu.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thinkly - Build Your Future',
    description: 'Internships, projects, certificates, and a community that helps you grow.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <ApplyModalProvider>
          <QuoteModalProvider>
            <Navbar />
            {children}
            <Footer />
          </QuoteModalProvider>
        </ApplyModalProvider>
      </body>
    </html>
  )
}
