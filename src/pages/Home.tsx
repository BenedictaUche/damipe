import HeroSection from '../components/HeroSection'
import Intro from '@/components/Intro'
import Brands from '@/components/Brands'
import Collaborate from '@/components/Collaborate'
import Footer from '@/components/Footer'
import Offer from '@/components/Offer'
import Gallery from '@/components/Gallery'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <Intro />
        <Brands />
        <Gallery />
        <Offer />
        <Collaborate />
        <Footer />
    </div>
  )
}

export default Home
