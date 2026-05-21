import { motion } from 'framer-motion'

import {
  CheckCircle,
  Phone,
  ArrowRight,
  BadgeCheck,
} from 'lucide-react'

const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#071739] via-[#0b1f52] to-cyan-700 text-white pt-32'>

      {/* Background Blur Effects */}
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-3xl'></div>

      <div className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl'></div>

      <div className='max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10'>

        {/* Left Content */}
        <div>

          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className='inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full shadow-xl'
          >

            <BadgeCheck
              size={20}
              className='text-cyan-400'
            />

            <span className='font-semibold text-sm tracking-wide'>
              Trusted Loan & Financial Services
            </span>

          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='text-5xl md:text-7xl font-extrabold leading-tight mt-8'
          >

            Fast &
            Trusted

            <span className='block text-cyan-400 mt-2'>
              Financial Solutions
            </span>

          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className='mt-8 text-lg text-gray-200 leading-8 max-w-2xl'
          >

            Union Capital Services helps individuals,
            startups and businesses access Home Loans,
            Business Loans, MSME Funding, Vehicle Loans,
            Insurance and Project Finance through
            120+ trusted Banking & NBFC Partners.

          </motion.p>

          {/* Feature Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className='grid sm:grid-cols-2 gap-5 mt-10'
          >

            {[
              'No Hidden Charges',
              'Quick Loan Approval',
              'Flexible EMI Options',
              '120+ Banking Partners',
            ].map((item, index) => (

              <div
                key={index}
                className='flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-4 rounded-2xl backdrop-blur-lg'
              >

                <CheckCircle
                  size={20}
                  className='text-cyan-400'
                />

                <span className='font-medium'>
                  {item}
                </span>

              </div>

            ))}

          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className='mt-12 flex flex-wrap gap-5'
          >

            <button className='group bg-cyan-400 hover:bg-cyan-300 transition text-blue-950 px-8 py-4 rounded-2xl font-bold shadow-2xl flex items-center gap-3'>

              Apply Loan

              <ArrowRight
                size={20}
                className='group-hover:translate-x-1 transition'
              />

            </button>

            <button className='border border-white/20 hover:bg-white hover:text-blue-950 transition px-8 py-4 rounded-2xl font-semibold backdrop-blur-lg'>
              Explore Services
            </button>

          </motion.div>

          {/* Contact Box */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className='flex items-center gap-5 mt-14 bg-white/10 backdrop-blur-lg border border-white/10 px-6 py-5 rounded-3xl max-w-md'
          >

            <div className='bg-cyan-400 p-4 rounded-2xl shadow-xl'>
              <Phone className='text-blue-950' />
            </div>

            <div>

              <p className='text-gray-300 text-sm'>
                Call Us Anytime
              </p>

              <h3 className='text-2xl font-bold mt-1'>
                +91 91135 20317
              </h3>

            </div>

          </motion.div>

        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='relative'
        >

          {/* Glow */}
          <div className='absolute inset-0 bg-cyan-400/20 rounded-[40px] blur-3xl'></div>

          {/* Main Image */}
          <img
            src='https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop'
            alt='Union Capital Services'
            className='relative z-10 rounded-[40px] shadow-2xl border border-white/10'
          />

          {/* Floating Stats Card */}
          <div className='absolute -bottom-10 -left-5 md:-left-10 bg-white text-blue-950 rounded-[30px] shadow-2xl p-7 z-20 w-72 border border-gray-100'>

            <h3 className='text-4xl font-extrabold'>
              ₹1200Cr+
            </h3>

            <p className='text-gray-500 mt-3 leading-7'>
              Successfully disbursed loans across
              India with trusted financial support.
            </p>

            <div className='mt-5 flex items-center gap-2 text-cyan-600 font-semibold'>
              <CheckCircle size={18} />
              <span>10K+ Happy Customers</span>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Hero