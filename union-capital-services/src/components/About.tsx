import { motion } from 'framer-motion'

import {
  Building2,
  Landmark,
  Users,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'

const About = () => {
  return (
    <section className='relative min-h-screen py-40 bg-gradient-to-br from-[#071739] via-[#0b1f52] to-cyan-700 overflow-hidden flex items-center text-white'>

      {/* Background Effects */}
      <div className='absolute top-0 right-0 w-[350px] h-[350px] bg-cyan-400/20 rounded-full blur-3xl'></div>

      <div className='absolute bottom-0 left-0 w-[280px] h-[280px] bg-blue-500/20 rounded-full blur-3xl'></div>

      <div className='max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10'>

        {/* Left Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='relative'
        >

          {/* Glow */}
          <div className='absolute inset-0 bg-cyan-400/20 rounded-[40px] blur-3xl'></div>

          {/* Main Image */}
          <img
            src='https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop'
            alt='Union Capital Services'
            className='relative z-10 rounded-[30px] shadow-2xl border border-white/10 max-h-[75vh] object-cover'
          />

        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Tag */}
          <span className='bg-cyan-400/20 text-cyan-300 px-5 py-2 rounded-full font-semibold text-sm border border-cyan-400/20'>
            About Union Capital Services
          </span>

          {/* Heading */}
          <h2 className='text-4xl lg:text-5xl font-bold text-white mt-6 leading-tight'>

            Trusted Financial
            <span className='text-cyan-400'> Solutions </span>
            For Every Customer

          </h2>

          {/* Description */}
          <p className='text-gray-300 leading-7 mt-5 text-base'>

            Union Capital Services provides quick and transparent
            loan solutions for individuals, MSMEs, startups and businesses.

          </p>

          <p className='text-gray-300 leading-7 mt-4 text-base'>

            We specialize in Home Loans, Business Loans,
            Vehicle Loans, Insurance and Project Finance
            through strong banking partnerships.

          </p>

          {/* Highlights */}
          <div className='space-y-3 mt-6'>

            <div className='flex items-center gap-3'>

              <CheckCircle2
                size={20}
                className='text-cyan-400'
              />

              <p className='text-gray-200 text-sm font-medium'>
                Quick Loan Processing & Faster Approvals
              </p>

            </div>

            <div className='flex items-center gap-3'>

              <CheckCircle2
                size={20}
                className='text-cyan-400'
              />

              <p className='text-gray-200 text-sm font-medium'>
                Transparent Financial Guidance
              </p>

            </div>

            <div className='flex items-center gap-3'>

              <CheckCircle2
                size={20}
                className='text-cyan-400'
              />

              <p className='text-gray-200 text-sm font-medium'>
                Customized Loan Solutions
              </p>

            </div>

          </div>

          {/* Features */}
          <div className='grid sm:grid-cols-2 gap-4 mt-8'>

            <motion.div
              whileHover={{ y: -4 }}
              className='bg-white/10 backdrop-blur-lg border border-white/10 shadow-lg rounded-2xl p-4 flex gap-4'
            >

              <div className='bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center text-cyan-400 shrink-0'>
                <Landmark size={22} />
              </div>

              <div>

                <h3 className='font-bold text-base text-white'>
                  Banking Network
                </h3>

                <p className='text-gray-300 mt-1 text-sm leading-6'>
                  Trusted banks & NBFCs
                </p>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className='bg-white/10 backdrop-blur-lg border border-white/10 shadow-lg rounded-2xl p-4 flex gap-4'
            >

              <div className='bg-cyan-400/20 w-12 h-12 rounded-xl flex items-center justify-center text-cyan-400 shrink-0'>
                <Users size={22} />
              </div>

              <div>

                <h3 className='font-bold text-base text-white'>
                  Customer Support
                </h3>

                <p className='text-gray-300 mt-1 text-sm leading-6'>
                  Dedicated assistance
                </p>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className='bg-white/10 backdrop-blur-lg border border-white/10 shadow-lg rounded-2xl p-4 flex gap-4'
            >

              <div className='bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center text-cyan-400 shrink-0'>
                <Building2 size={22} />
              </div>

              <div>

                <h3 className='font-bold text-base text-white'>
                  MSME Finance
                </h3>

                <p className='text-gray-300 mt-1 text-sm leading-6'>
                  Flexible funding solutions
                </p>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className='bg-white/10 backdrop-blur-lg border border-white/10 shadow-lg rounded-2xl p-4 flex gap-4'
            >

              <div className='bg-cyan-400/20 w-12 h-12 rounded-xl flex items-center justify-center text-cyan-400 shrink-0'>
                <ShieldCheck size={22} />
              </div>

              <div>

                <h3 className='font-bold text-base text-white'>
                  Trusted Process
                </h3>

                <p className='text-gray-300 mt-1 text-sm leading-6'>
                  Secure financial services
                </p>

              </div>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default About