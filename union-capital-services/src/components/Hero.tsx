import { motion } from 'framer-motion'

import {
  CheckCircle,
  ArrowRight,
  BadgeCheck,
} from 'lucide-react'

const Hero = () => {
  return (
    <section className='relative min-h-screen overflow-hidden bg-gradient-to-br from-[#071739] via-[#0b1f52] to-cyan-700 text-white flex items-center pt-28 pb-10'>

      {/* Background Blur Effects */}
      <div className='absolute top-0 right-0 w-[350px] h-[350px] bg-cyan-400/20 rounded-full blur-3xl'></div>

      <div className='absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl'></div>

      <div className='max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10'>

        {/* Left Content */}
        <div>

          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full shadow-xl'
          >

            <BadgeCheck
              size={18}
              className='text-cyan-400'
            />

            <span className='font-semibold text-sm'>
              Trusted Loan & Financial Services
            </span>

          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='text-4xl md:text-6xl font-extrabold leading-tight mt-6'
          >

            Fast &
            Trusted

            <span className='block text-cyan-400 mt-1'>
              Financial Solutions
            </span>

          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className='mt-5 text-base text-gray-200 leading-7 max-w-xl'
          >

            Union Capital Services helps individuals,
            startups and businesses access Home Loans,
            Business Loans, MSME Funding, Vehicle Loans,
            Insurance and Project Finance.

          </motion.p>

          {/* Feature Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className='grid sm:grid-cols-2 gap-3 mt-6'
          >

            {[
              'No Hidden Charges',
              'Quick Loan Approval',
              'Flexible EMI Options',
              '120+ Banking Partners',
            ].map((item, index) => (

              <div
                key={index}
                className='flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-3 rounded-xl backdrop-blur-lg'
              >

                <CheckCircle
                  size={18}
                  className='text-cyan-400'
                />

                <span className='text-sm font-medium'>
                  {item}
                </span>

              </div>

            ))}

          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className='mt-8 flex flex-wrap gap-4'
          >

            <button className='group bg-cyan-400 hover:bg-cyan-300 transition text-blue-950 px-6 py-3 rounded-xl font-bold shadow-2xl flex items-center gap-2'>

              Apply Loan

              <ArrowRight
                size={18}
                className='group-hover:translate-x-1 transition'
              />

            </button>

            <button className='border border-white/20 hover:bg-white hover:text-blue-950 transition px-6 py-3 rounded-xl font-semibold backdrop-blur-lg'>
              Explore Services
            </button>

          </motion.div>

          {/* Contact Box */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className='flex items-center gap-4 mt-8 bg-white/10 backdrop-blur-lg border border-white/10 px-5 py-4 rounded-2xl max-w-sm'
          >

            <div className='bg-cyan-400 p-3 rounded-xl shadow-xl'>
              <Phone className='text-blue-950' size={20} />
            </div>

            <div>

              <p className='text-gray-300 text-sm'>
                Call Us Anytime
              </p>

              <h3 className='text-xl font-bold mt-1'>
                +91 91135 20317
              </h3>

            </div>

          </motion.div> */}

        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='relative flex justify-center'
        >

          {/* Glow */}
          <div className='absolute inset-0 bg-cyan-400/20 rounded-[30px] blur-3xl'></div>

          {/* Main Image */}
          <img
            src='https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop'
            alt='Union Capital Services'
            className='relative z-10 rounded-[30px] shadow-2xl border border-white/10 max-h-[75vh] object-cover'
          />

        </motion.div>

      </div>

    </section>
  )
}

export default Hero