import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import ServicesSectionV2 from './components/ServicesSectionV2'
import ServicesSection from './components/ServicesSection'


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSectionV2 />
      <ServicesSection />
      {/* <AboutSection /> */}
      <Footer />
    </main>
  )
}
