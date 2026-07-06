import Hero from '@/components/Hero'
import Statistics from '@/components/Statistics'
import Domains from '@/components/Domains'
import HowItWorks from '@/components/HowItWorks'
import WhyChooseUs from '@/components/WhyChooseUs'
import CertificatePreview from '@/components/CertificatePreview'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Statistics />
      <Domains />
      <HowItWorks />
      <WhyChooseUs />
      <CertificatePreview />
      <FAQ />
      <Footer />
    </main>
  )
}