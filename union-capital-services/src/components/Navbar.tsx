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
    { name: 'Loans', path: '/loans' },
    { name: 'Partners', path: '/partners' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-[#071739]/85 backdrop-blur-xl border-b border-white/10 shadow-lg'>

      {/* Background Glow */}
      <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none'></div>

      <div className='max-w-7xl mx-auto px-5 lg:px-8 h-[78px] flex items-center justify-between relative z-10'>

        {/* Logo */}
        <Link
          to='/'
          className='flex items-center gap-3'
        >

          <img
            src={logo}
            alt='Union Capital'
            className='w-12 h-12 object-contain'
          />

          <div>

            <h1 className='text-xl md:text-2xl font-bold text-white leading-none'>
              Union Capital
            </h1>

            <p className='text-cyan-300 text-xs tracking-wide mt-1'>
              Financial Services
            </p>

          </div>

        </Link>

        {/* Desktop Menu */}
        <div className='hidden lg:flex items-center gap-2'>

          {navLinks.map((link, index) => (

            <Link
              key={index}
              to={link.path}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
              
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

        {/* Desktop Buttons */}
        <div className='hidden lg:flex items-center gap-3'>

          <Link
            to='/login'
            className='border border-cyan-300/30 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-white/10 transition'
          >
            Login
          </Link>

          <Link
            to='/signup'
            className='bg-cyan-400 hover:bg-cyan-300 text-blue-950 px-5 py-2.5 rounded-xl text-sm font-semibold transition shadow-lg'
          >
            Sign Up
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='lg:hidden bg-white/10 border border-white/10 text-white p-2.5 rounded-xl'
        >

          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}

        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className='lg:hidden bg-[#071739]/95 backdrop-blur-2xl border-t border-white/10 px-5 py-6 space-y-3'>

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

          {/* Mobile Buttons */}
          <div className='flex flex-col gap-3 pt-4'>

            <Link
              to='/login'
              onClick={() => setMenuOpen(false)}
              className='border border-cyan-300/30 text-white px-4 py-3 rounded-xl text-center text-sm font-medium hover:bg-white/10 transition'
            >
              Login
            </Link>

            <Link
              to='/signup'
              onClick={() => setMenuOpen(false)}
              className='bg-cyan-400 hover:bg-cyan-300 text-blue-950 px-4 py-3 rounded-xl text-center text-sm font-semibold transition'
            >
              Sign Up
            </Link>

          </div>

        </div>

      )}

    </nav>
  )
}

export default Navbar