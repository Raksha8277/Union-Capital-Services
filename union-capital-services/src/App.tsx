import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'

import PartnersPage from './pages/PartnersPage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import TeamPage from './pages/TeamPage'
import LoansPage from './pages/LoansPage'

const App = () => {
  return (
    <Routes>

      {/* Home */}
      <Route path='/' element={<Home />} />

      {/* Other Pages */}
      <Route path='/partners' element={<PartnersPage />} />

      <Route path='/services' element={<ServicesPage />} />

      <Route path='/about' element={<AboutPage />} />

      <Route path='/contact' element={<ContactPage />} />

      <Route path='/team' element={<TeamPage />} />

      <Route path='/loans' element={<LoansPage />} />

    </Routes>
  )
}

export default App