import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const location = useLocation()

  const navLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Services',
      path: '/services',
    },
    {
      name: 'Loans',
      path: '/loans',
    },
    {
      name: 'Partners',
      path: '/partners',
    },
    {
      name: 'Team',
      path: '/team',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ]

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-2xl border-b border-white/20 shadow-lg'>

      {/* Top Glow */}
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-100/20 via-transparent to-blue-100/20 pointer-events-none'></div>

      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-10'>

        {/* Logo */}
        <Link
          to='/'
          className='flex items-center gap-4 group'
        >

          <div className='relative'>

            <div className='absolute inset-0 bg-cyan-400/20 rounded-full blur-xl group-hover:bg-cyan-400/40 transition duration-500'></div>

            <img
              src={logo}
              alt='logo'
              className='relative w-14 h-14 object-contain'
            />

          </div>

          <div>

            <h1 className='text-2xl font-extrabold bg-gradient-to-r from-blue-950 to-cyan-500 bg-clip-text text-transparent'>
              Union Capital
            </h1>

            <p className='text-sm text-gray-500 tracking-wide'>
              Financial Services
            </p>

          </div>

        </Link>

        {/* Desktop Menu */}
        <div className='hidden xl:flex items-center gap-2'>

          {navLinks.map((link, index) => (

            <Link
              key={index}
              to={link.path}
              className={`relative px-5 py-3 rounded-xl font-semibold transition-all duration-300
              
              ${
                location.pathname === link.path
                  ? 'text-white bg-gradient-to-r from-blue-950 to-cyan-500 shadow-lg'
                  : 'text-gray-700 hover:text-cyan-500 hover:bg-cyan-50'
              }`}
            >

              {link.name}

            </Link>

          ))}

          {/* Buttons */}
          <div className='flex items-center gap-4 ml-6'>

            <Link
              to='/login'
              className='border border-blue-950 text-blue-950 px-6 py-3 rounded-2xl hover:bg-blue-950 hover:text-white transition-all duration-300 font-semibold shadow-sm hover:shadow-xl'
            >
              Login
            </Link>

            <Link
              to='/signup'
              className='bg-gradient-to-r from-blue-950 to-cyan-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-300/40 transition-all duration-300'
            >
              Sign Up
            </Link>

          </div>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='xl:hidden bg-gradient-to-r from-blue-950 to-cyan-500 text-white p-3 rounded-xl shadow-lg'
        >

          {menuOpen ? <X size={28} /> : <Menu size={28} />}

        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className='xl:hidden bg-white/95 backdrop-blur-2xl border-t border-gray-100 shadow-2xl px-6 py-8 space-y-4'>

          {navLinks.map((link, index) => (

            <Link
              key={index}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block px-5 py-4 rounded-2xl font-semibold transition-all duration-300
              
              ${
                location.pathname === link.path
                  ? 'bg-gradient-to-r from-blue-950 to-cyan-500 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-cyan-50 hover:text-cyan-500'
              }`}
            >

              {link.name}

            </Link>

          ))}

          {/* Mobile Buttons */}
          <div className='flex flex-col gap-4 pt-6'>

            <Link
              to='/login'
              onClick={() => setMenuOpen(false)}
              className='border border-blue-950 text-blue-950 px-5 py-4 rounded-2xl text-center hover:bg-blue-950 hover:text-white transition-all duration-300 font-semibold'
            >
              Login
            </Link>

            <Link
              to='/signup'
              onClick={() => setMenuOpen(false)}
              className='bg-gradient-to-r from-blue-950 to-cyan-500 text-white px-5 py-4 rounded-2xl text-center font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300'
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