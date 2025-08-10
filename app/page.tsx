import HeroSectionV3 from './components/HeroSectionV3'
import Footer from './components/Footer'
import AboutSection from './components/AboutSection'
import ServicesSectionV2 from './components/ServicesSectionV2'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSectionV3 />
      <ServicesSectionV2 />
      <AboutSection />
      <Footer />
    </main>
  )
}
