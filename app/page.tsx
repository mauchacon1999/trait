import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import AboutSection from './components/AboutSection'
import ServicesSectionV2 from './components/ServicesSectionV2'
import IconosMobile from './components/IconosMobile'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSectionV2 />
      {/* <AboutSection /> */}
      <Footer />
    </main>
  )
}
