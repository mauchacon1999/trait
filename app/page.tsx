import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import AboutSection from './components/AboutSection'
import ServicesSectionV2 from './components/ServicesSectionV2'
import ServicesSection from './components/ServicesSection'
import IconosMobile from './components/IconosMobile'

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
