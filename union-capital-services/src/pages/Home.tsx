import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Stats from '../components/Stats'
import LoanSection from '../components/LoanSection'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Banks from '../components/Banks'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <LoanSection />
      <Services />
      <About />
      <Team />
      <Contact />
      <Banks />
      <Footer />
    </>
  )
}

export default Home