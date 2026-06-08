import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Partners', path: '/partners' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-[#071739]/85 backdrop-blur-xl border-b border-white/10 shadow-lg'>

      {/* Background Glow */}
      <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none'></div>

      <div className='max-w-7xl mx-auto px-6 h-[76px] flex items-center justify-between relative z-10'>

        {/* Logo */}
        <Link
          to='/'
          className='flex items-center gap-3'
        >
          <img
            src={logo}
            alt='Union Capital'
            className='w-11 h-11 object-contain'
          />

          <div>
            <h1 className='text-xl font-bold text-white leading-none'>
              Union Capital
            </h1>

            <p className='text-sm text-cyan-300 tracking-wide mt-1'>
              Services
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden lg:flex items-center gap-2'>

          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300
              
              ${
                location.pathname === link.path
                  ? 'bg-cyan-400 text-blue-950'
                  : 'text-gray-200 hover:text-cyan-300 hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='lg:hidden bg-white/10 border border-white/10 text-white p-2.5 rounded-xl'
        >
          {menuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className='lg:hidden bg-[#071739]/95 backdrop-blur-2xl border-t border-white/10 px-6 py-5 space-y-2'>

          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition
              
              ${
                location.pathname === link.path
                  ? 'bg-cyan-400 text-blue-950'
                  : 'text-gray-200 hover:bg-white/5 hover:text-cyan-300'
              }`}
            >
              {link.name}
            </Link>
          ))}

        </div>

      )}

    </nav>
  )
}

export default Navbar