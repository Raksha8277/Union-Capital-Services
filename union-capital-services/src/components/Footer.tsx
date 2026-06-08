import {
  Phone,
  Mail,
  MapPin,
} from 'lucide-react'

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-[#071739] via-[#0b1f52] to-cyan-700 text-white pt-20 pb-8 relative overflow-hidden'>

      {/* Background Blur */}
      <div className='absolute top-0 left-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl'></div>

      <div className='absolute bottom-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl'></div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>

        {/* Main Grid */}
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-12 pb-10 border-b border-white/10'>

          {/* Company */}
          <div>

            <h2 className='text-3xl font-extrabold'>
              Union Capital
            </h2>

            <p className='text-cyan-300 text-base mt-1'>
              Financial Services
            </p>

            <p className='mt-5 text-base text-gray-200 leading-7'>
              Trusted financial solutions for businesses,
              MSMEs and individuals with quick approvals
              and transparent services.
            </p>

            {/* Social */}
            <div className='flex gap-3 mt-6'>

              <a
                href='https://facebook.com'
                target='_blank'
                rel='noreferrer'
                className='w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-blue-950 transition'
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href='https://instagram.com'
                target='_blank'
                rel='noreferrer'
                className='w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-blue-950 transition'
              >
                <FaInstagram size={16} />
              </a>

              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noreferrer'
                className='w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-blue-950 transition'
              >
                <FaLinkedinIn size={16} />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className='text-base font-bold text-white mb-5'>
              Quick Links
            </h3>

            <ul className='space-y-4'>

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
                    className='flex items-center gap-2 text-gray-200 hover:text-cyan-300 transition text-base'
                  >

                    {name}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className='text-base font-bold text-white mb-5'>
              Services
            </h3>

            <div className='space-y-3'>

              {[
                'Business Loans',
                'Home Loans',
                'MSME Finance',
                'Vehicle Loans',
                'Project Funding',
              ].map((service, index) => (

                <div
                  key={index}
                  className='bg-white/10 border border-white/10 rounded-2xl px-4 py-3 text-base text-gray-200 hover:border-cyan-300/30 transition'
                >
                  {service}
                </div>

              ))}

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className='text-base font-bold text-white mb-5'>
              Contact Info
            </h3>

            <div className='space-y-6'>

              {/* Address */}
              <div className='flex items-start gap-4'>

                <div className='bg-cyan-400/10 text-cyan-300 w-12 h-12 rounded-xl flex items-center justify-center shrink-0'>
                  <MapPin size={22} />
                </div>

                <div>

                  <h4 className='font-bold text-base'>
                    Address
                  </h4>

                  <p className='text-gray-200 leading-7 mt-1'>
                    Girinagar,
                    Bangalore - 560026
                  </p>

                </div>

              </div>

              {/* Phone */}
              <div className='flex items-start gap-4'>

                <div className='bg-cyan-400/10 text-cyan-300 w-12 h-12 rounded-xl flex items-center justify-center shrink-0'>
                  <Phone size={22} />
                </div>

                <div>

                  <h4 className='font-bold text-base'>
                    Phone
                  </h4>

                  <p className='text-gray-200 mt-1'>
                    +91 91135 20317
                  </p>

                  <p className='text-gray-200'>
                    +91 99720 69920
                  </p>

                </div>

              </div>

              {/* Email */}
              <div className='flex items-start gap-4'>

                <div className='bg-cyan-400/10 text-cyan-300 w-12 h-12 rounded-xl flex items-center justify-center shrink-0'>
                  <Mail size={22} />
                </div>

                <div>

                  <h4 className='font-bold text-base'>
                    Email
                  </h4>

                  <p className='text-gray-200 break-all mt-1'>
                    sandeshunion@gmail.com
                  </p>

                  <p className='text-gray-200 break-all'>
                    abhijithshettyunion@gmail.com
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className='pt-6 flex flex-col md:flex-row justify-between items-center gap-4'>

          <p className='text-gray-300 text-sm text-center'>
            © 2026 Union Capital Services. All Rights Reserved.
          </p>

          <p className='text-gray-400 text-sm text-center'>
            Designed for modern financial services
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer