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
    <footer className='bg-[#06142e] text-white pt-24 pb-8 relative overflow-hidden'>

      {/* Background Glow */}
      <div className='absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full'></div>

      <div className='absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full'></div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>

        {/* Top Grid */}
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-14 pb-16 border-b border-white/10'>

          {/* Company */}
          <div>

            <h2 className='text-4xl font-bold leading-tight'>
              Union Capital
            </h2>

            <p className='text-cyan-400 font-medium mt-2'>
              Financial Services
            </p>

            <p className='mt-6 text-gray-400 leading-8'>
              Providing trusted banking and financial
              solutions for businesses, MSMEs and
              individuals with faster approvals and
              transparent services.
            </p>

            {/* Social */}
            <div className='flex gap-4 mt-8'>

              <a
                href='https://facebook.com'
                target='_blank'
                rel='noreferrer'
                className='w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 transition duration-300'
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href='https://instagram.com'
                target='_blank'
                rel='noreferrer'
                className='w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 transition duration-300'
              >
                <FaInstagram size={16} />
              </a>

              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noreferrer'
                className='w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 transition duration-300'
              >
                <FaLinkedinIn size={16} />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className='text-2xl font-semibold mb-8'>
              Quick Links
            </h3>

            <ul className='space-y-5'>

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
                    className='flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition duration-300'
                  >

                    <ArrowRight size={16} />

                    {name}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className='text-2xl font-semibold mb-8'>
              Financial Services
            </h3>

            <div className='space-y-4'>

              {[
                'Business Loans',
                'Home Loans',
                'MSME Finance',
                'Vehicle Loans',
                'Credit Card Services',
                'Project Funding',
              ].map((service, index) => (

                <div
                  key={index}
                  className='bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-gray-300 hover:border-cyan-400/40 hover:bg-white/10 transition duration-300'
                >
                  {service}
                </div>

              ))}

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className='text-2xl font-semibold mb-8'>
              Contact Info
            </h3>

            <div className='space-y-7'>

              {/* Address */}
              <div className='flex items-start gap-4'>

                <div className='bg-cyan-500/10 text-cyan-400 p-3 rounded-2xl'>
                  <MapPin size={22} />
                </div>

                <div>
                  <h4 className='font-semibold text-lg'>
                    Office Address
                  </h4>

                  <p className='text-gray-400 leading-7 mt-2'>
                    #6, 50 Feet Road,
                    Avalahalli Extension,
                    Girinagar,
                    Bangalore - 560026
                  </p>
                </div>

              </div>

              {/* Phone */}
              <div className='flex items-start gap-4'>

                <div className='bg-cyan-500/10 text-cyan-400 p-3 rounded-2xl'>
                  <Phone size={22} />
                </div>

                <div>
                  <h4 className='font-semibold text-lg'>
                    Phone Number
                  </h4>

                  <p className='text-gray-400 mt-2'>
                    +91 91135 20317
                  </p>

                  <p className='text-gray-400'>
                    +91 99720 69920
                  </p>

                  <p className='text-gray-400'>
                    +91 81238 73820
                  </p>
                </div>

              </div>

              {/* Email */}
              <div className='flex items-start gap-4'>

                <div className='bg-cyan-500/10 text-cyan-400 p-3 rounded-2xl'>
                  <Mail size={22} />
                </div>

                <div>
                  <h4 className='font-semibold text-lg'>
                    Email Support
                  </h4>

                  <p className='text-gray-400 break-all mt-2'>
                    sandeshunion@gmail.com
                  </p>

                  <p className='text-gray-400 break-all mt-1'>
                    abhijithshettyunion@gmail.com
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className='pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>

          <p className='text-gray-500 text-sm text-center'>
            © 2026 Union Capital Services. All Rights Reserved.
          </p>

          <p className='text-gray-600 text-sm text-center'>
            Built with Modern Finance UI Design ✨
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer