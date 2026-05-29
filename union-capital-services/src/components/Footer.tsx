import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from 'lucide-react'

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-[#071739] via-[#0b1f52] to-cyan-700 text-white pt-14 pb-5 relative overflow-hidden'>

      {/* Background Blur */}
      <div className='absolute top-0 left-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl'></div>

      <div className='absolute bottom-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl'></div>

      <div className='max-w-6xl mx-auto px-5 relative z-10'>

        {/* Main Grid */}
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8 pb-10 border-b border-white/10'>

          {/* Company */}
          <div>

            <h2 className='text-2xl font-bold'>
              Union Capital
            </h2>

            <p className='text-cyan-300 text-sm mt-1'>
              Financial Services
            </p>

            <p className='mt-4 text-gray-300 text-sm leading-6'>
              Trusted financial solutions for businesses,
              MSMEs and individuals with quick approvals
              and transparent services.
            </p>

            {/* Social */}
            <div className='flex gap-3 mt-5'>

              <a
                href='https://facebook.com'
                target='_blank'
                rel='noreferrer'
                className='w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-blue-950 transition'
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href='https://instagram.com'
                target='_blank'
                rel='noreferrer'
                className='w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-blue-950 transition'
              >
                <FaInstagram size={14} />
              </a>

              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noreferrer'
                className='w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-blue-950 transition'
              >
                <FaLinkedinIn size={14} />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className='text-lg font-semibold mb-5'>
              Quick Links
            </h3>

            <ul className='space-y-3'>

              {[
                ['Home', '/'],
                ['About', '/about'],
                ['Services', '/services'],
                ['Loans', '/loans'],
                ['Partners', '/partners'],
                ['Team', '/team'],
                ['Contact', '/contact'],
              ].map(([name, path], index) => (

                <li key={index}>

                  <Link
                    to={path}
                    className='flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition text-sm'
                  >

                    <ArrowRight size={14} />

                    {name}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className='text-lg font-semibold mb-5'>
              Services
            </h3>

            <div className='space-y-3'>

              {[
                'Business Loans',
                'Home Loans',
                'MSME Finance',
                'Vehicle Loans',
                'Credit Cards',
                'Project Funding',
              ].map((service, index) => (

                <div
                  key={index}
                  className='bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 hover:border-cyan-300/30 transition'
                >
                  {service}
                </div>

              ))}

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className='text-lg font-semibold mb-5'>
              Contact Info
            </h3>

            <div className='space-y-5 text-sm'>

              {/* Address */}
              <div className='flex items-start gap-3'>

                <div className='bg-cyan-400/10 text-cyan-300 p-2.5 rounded-xl'>
                  <MapPin size={18} />
                </div>

                <div>
                  <h4 className='font-medium'>
                    Address
                  </h4>

                  <p className='text-gray-300 leading-6 mt-1'>
                    Girinagar,
                    Bangalore - 560026
                  </p>
                </div>

              </div>

              {/* Phone */}
              <div className='flex items-start gap-3'>

                <div className='bg-cyan-400/10 text-cyan-300 p-2.5 rounded-xl'>
                  <Phone size={18} />
                </div>

                <div>
                  <h4 className='font-medium'>
                    Phone
                  </h4>

                  <p className='text-gray-300 mt-1'>
                    +91 91135 20317
                  </p>

                  <p className='text-gray-300'>
                    +91 99720 69920
                  </p>
                </div>

              </div>

              {/* Email */}
              <div className='flex items-start gap-3'>

                <div className='bg-cyan-400/10 text-cyan-300 p-2.5 rounded-xl'>
                  <Mail size={18} />
                </div>

                <div>
                  <h4 className='font-medium'>
                    Email
                  </h4>

                  <p className='text-gray-300 break-all mt-1'>
                    sandeshunion@gmail.com
                  </p>

                  <p className='text-gray-300 break-all'>
                    abhijithshettyunion@gmail.com
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className='pt-5 flex flex-col md:flex-row justify-between items-center gap-3'>

          <p className='text-gray-300 text-xs text-center'>
            © 2026 Union Capital Services. All Rights Reserved.
          </p>

          <p className='text-gray-400 text-xs text-center'>
            Designed for modern financial services
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer