import {
  Landmark,
  ShieldCheck,
  BadgeCheck,
  Building2,
} from 'lucide-react'

import { motion } from 'framer-motion'

/* Bank Logos */
import sbiLogo from '../assets/banks/sbi.png'
import hdfcLogo from '../assets/banks/hdfc.png'
import idfcLogo from '../assets/banks/idfc.png'
import indusindLogo from '../assets/banks/indusind.png'
import federalLogo from '../assets/banks/federal.png'
import yesLogo from '../assets/banks/yesbank.png'
import iciciLogo from '../assets/banks/icici.png'
import bobLogo from '../assets/banks/bob.png'
import shriramLogo from '../assets/banks/shriram.png'
import bajajLogo from '../assets/banks/bajaj.png'
import tataLogo from '../assets/banks/tatacapital.png'
import kotakLogo from '../assets/banks/kotak.png'
import axisLogo from '../assets/banks/axis.png'
import indianLogo from '../assets/banks/indianbank.png'
import karnatakaLogo from '../assets/banks/karnataka.png'
import canaraLogo from '../assets/banks/canara.png'
import pnbLogo from '../assets/banks/pnb.png'
import abcLogo from '../assets/banks/abc.png'

const banks = [
  { logo: sbiLogo },
  { logo: hdfcLogo },
  { logo: idfcLogo },
  { logo: indusindLogo },
  { logo: federalLogo },
  { logo: yesLogo },
  { logo: iciciLogo },
  { logo: bobLogo },
  { logo: shriramLogo },
  { logo: bajajLogo },
  { logo: tataLogo },
  { logo: kotakLogo },
  { logo: pnbLogo },
  { logo: abcLogo },
  { logo: axisLogo },
  { logo: indianLogo },
  { logo: karnatakaLogo },
  { logo: canaraLogo },
]

const Banks = () => {
  return (
    <section className='relative py-40 bg-gradient-to-b from-[#071739] via-[#0b1f52] to-cyan-700 overflow-hidden text-white'>

      {/* Background Glow */}
      <div className='absolute top-0 right-0 w-44 h-44 bg-cyan-400/10 rounded-full blur-3xl'></div>

      <div className='absolute bottom-0 left-0 w-44 h-44 bg-blue-400/10 rounded-full blur-3xl'></div>

      <div className='max-w-5xl mx-auto px-4 relative z-10'>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-8'
        >

          <span className='bg-white/10 border border-white/10 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-medium'>
            120+ Banking & NBFC Partners
          </span>

          <h2 className='text-2xl md:text-3xl font-bold mt-4 leading-tight'>

            Trusted
            <span className='text-cyan-300'> Banking Partners</span>

          </h2>

          <p className='text-gray-300 text-sm mt-3 max-w-xl mx-auto leading-6'>
            Reliable loan and financial solutions through
            India’s leading banks and NBFC institutions.
          </p>

        </motion.div>

        {/* Logo Container */}
        <div className='bg-gradient-to-b from-[#071739] via-[#0b1f52] to-cyan-700 rounded-3xl p-4 md:p-5 shadow-2xl border border-white/10'>

          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3'>

            {banks.map((bank, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.02,
                }}
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                className='bg-white border border-gray-10 rounded-2xl h-[90px] flex items-center justify-center p-3 hover:shadow-md transition duration-300'
              >

                <img
                  src={bank.logo}
                  alt='bank'
                  className='h-20 w-full object-contain'
                />

              </motion.div>
            ))}

          </div>

        </div>

        {/* Bottom Cards */}
        <div className='grid md:grid-cols-3 gap-4 mt-6'>

          {/* Card 1 */}
          <div className='bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-5 text-center'>

            <div className='bg-cyan-400/20 text-cyan-300 w-11 h-11 rounded-xl flex items-center justify-center mx-auto'>

              <Landmark size={20} />

            </div>

            <h3 className='text-lg font-bold mt-3'>
              120+
            </h3>

            <p className='text-xs text-gray-300 mt-1'>
              Banking Partners
            </p>

          </div>

          {/* Card 2 */}
          <div className='bg-cyan-400 rounded-2xl p-5 text-center text-blue-950 shadow-lg'>

            <div className='bg-white/30 w-11 h-11 rounded-xl flex items-center justify-center mx-auto'>

              <ShieldCheck size={20} />

            </div>

            <h3 className='text-lg font-bold mt-3'>
              Fast Approval
            </h3>

            <p className='text-xs mt-1'>
              Smooth & quick processing
            </p>

          </div>

          {/* Card 3 */}
          <div className='bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-5 text-center'>

            <div className='bg-cyan-400/20 text-cyan-300 w-11 h-11 rounded-xl flex items-center justify-center mx-auto'>

              <BadgeCheck size={20} />

            </div>

            <h3 className='text-lg font-bold mt-3'>
              Trusted Service
            </h3>

            <p className='text-xs text-gray-300 mt-1'>
              Reliable financial guidance
            </p>

          </div>

        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mt-6 bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 text-center'
        >

          <div className='bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4'>

            <Building2
              size={24}
              className='text-cyan-300'
            />

          </div>

          <h3 className='text-xl md:text-2xl font-bold'>
            Easy Loan Support
          </h3>

          <p className='mt-3 text-gray-300 text-sm max-w-lg mx-auto leading-6'>
            Home Loans, Business Loans, MSME Finance
            and Vehicle Loans with trusted banking support.
          </p>

          <button className='mt-5 bg-cyan-400 hover:bg-cyan-300 text-blue-950 px-6 py-2.5 rounded-xl text-sm font-semibold transition duration-300 shadow-lg'>
            Apply Now
          </button>

        </motion.div>

      </div>

    </section>
  )
}

export default Banks