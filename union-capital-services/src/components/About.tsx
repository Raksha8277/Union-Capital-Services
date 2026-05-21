import { motion } from 'framer-motion'

import {
  Building2,
  Landmark,
  Users,
  BadgeCheck,
  ShieldCheck,
  CircleDollarSign,
  CheckCircle2,
} from 'lucide-react'

const About = () => {
  return (
    <section className='relative py-32 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden'>

      {/* Background Effects */}
      <div className='absolute top-0 right-0 w-[450px] h-[450px] bg-cyan-200/30 rounded-full blur-3xl'></div>

      <div className='absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-200/30 rounded-full blur-3xl'></div>

      <div className='max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10'>

        {/* Left Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='relative'
        >

          {/* Glow */}
          <div className='absolute inset-0 bg-cyan-400/10 rounded-[50px] blur-3xl'></div>

          {/* Main Image */}
          <img
            src='https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop'
            alt='Union Capital Services'
            className='relative z-10 rounded-[40px] shadow-2xl border border-white/20'
          />

          {/* Floating Card 1 */}
          <motion.div
            whileHover={{ y: -8 }}
            className='absolute -bottom-10 left-8 bg-white rounded-3xl shadow-2xl p-8 z-20 border border-gray-100 w-64'
          >

            <div className='bg-cyan-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-5'>

              <Landmark className='text-cyan-600' size={32} />

            </div>

            <h3 className='text-4xl font-bold text-blue-950'>
              120+
            </h3>

            <p className='text-gray-500 mt-2 leading-7'>
              Banking & NBFC Partners Across India
            </p>

          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            whileHover={{ y: -8 }}
            className='absolute top-10 -right-8 bg-blue-950 text-white rounded-3xl shadow-2xl p-6 z-20 w-52'
          >

            <h3 className='text-3xl font-bold text-cyan-400'>
              10K+
            </h3>

            <p className='text-gray-300 mt-2'>
              Trusted Customers
            </p>

          </motion.div>

        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Tag */}
          <span className='bg-cyan-100 text-cyan-700 px-6 py-3 rounded-full font-semibold shadow-sm'>
            About Union Capital Services
          </span>

          {/* Heading */}
          <h2 className='text-5xl lg:text-6xl font-bold text-blue-950 mt-8 leading-tight'>

            Trusted Financial
            <span className='text-cyan-500'> Solutions </span>
            For Every Customer

          </h2>

          {/* Description */}
          <p className='text-gray-600 leading-9 mt-8 text-lg'>

            Union Capital Services is a trusted financial
            consultancy providing quick and transparent
            loan solutions for individuals, businesses,
            MSMEs and startups across India.

          </p>

          <p className='text-gray-600 leading-9 mt-6 text-lg'>

            We specialize in Home Loans, Business Loans,
            Vehicle Loans, Loan Against Property,
            Insurance, MSME Funding and Project Finance
            through strong banking partnerships and
            expert financial consultation.

          </p>

          {/* Highlights */}
          <div className='space-y-4 mt-10'>

            <div className='flex items-center gap-3'>

              <CheckCircle2 className='text-cyan-500' />

              <p className='text-gray-700 font-medium'>
                Quick Loan Processing & Faster Approvals
              </p>

            </div>

            <div className='flex items-center gap-3'>

              <CheckCircle2 className='text-cyan-500' />

              <p className='text-gray-700 font-medium'>
                Transparent Financial Guidance
              </p>

            </div>

            <div className='flex items-center gap-3'>

              <CheckCircle2 className='text-cyan-500' />

              <p className='text-gray-700 font-medium'>
                Customized Loan Solutions For Businesses
              </p>

            </div>

          </div>

          {/* Features */}
          <div className='grid sm:grid-cols-2 gap-6 mt-14'>

            <motion.div
              whileHover={{ y: -6 }}
              className='bg-white border border-gray-100 shadow-lg rounded-3xl p-6 flex gap-5'
            >

              <div className='bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-900 shrink-0'>
                <Landmark />
              </div>

              <div>

                <h3 className='font-bold text-xl text-blue-950'>
                  Banking Network
                </h3>

                <p className='text-gray-500 mt-2 leading-7'>
                  Partnerships with trusted banks & NBFCs
                </p>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className='bg-white border border-gray-100 shadow-lg rounded-3xl p-6 flex gap-5'
            >

              <div className='bg-cyan-100 w-16 h-16 rounded-2xl flex items-center justify-center text-cyan-700 shrink-0'>
                <Users />
              </div>

              <div>

                <h3 className='font-bold text-xl text-blue-950'>
                  Customer Support
                </h3>

                <p className='text-gray-500 mt-2 leading-7'>
                  Dedicated assistance for every customer
                </p>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className='bg-white border border-gray-100 shadow-lg rounded-3xl p-6 flex gap-5'
            >

              <div className='bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-900 shrink-0'>
                <Building2 />
              </div>

              <div>

                <h3 className='font-bold text-xl text-blue-950'>
                  MSME Finance
                </h3>

                <p className='text-gray-500 mt-2 leading-7'>
                  Flexible business funding solutions
                </p>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className='bg-white border border-gray-100 shadow-lg rounded-3xl p-6 flex gap-5'
            >

              <div className='bg-cyan-100 w-16 h-16 rounded-2xl flex items-center justify-center text-cyan-700 shrink-0'>
                <ShieldCheck />
              </div>

              <div>

                <h3 className='font-bold text-xl text-blue-950'>
                  Trusted Process
                </h3>

                <p className='text-gray-500 mt-2 leading-7'>
                  Transparent & secure financial services
                </p>

              </div>

            </motion.div>

          </div>

          {/* Stats */}
          <div className='grid grid-cols-2 gap-6 mt-14'>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className='bg-gradient-to-br from-blue-950 to-blue-900 text-white p-10 rounded-[35px] shadow-2xl text-center'
            >

              <CircleDollarSign
                size={50}
                className='mx-auto mb-5 text-cyan-400'
              />

              <h3 className='text-5xl font-bold'>
                ₹1200Cr+
              </h3>

              <p className='mt-3 text-gray-300 text-lg'>
                Loan Disbursal
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className='bg-gradient-to-br from-cyan-500 to-cyan-400 text-white p-10 rounded-[35px] shadow-2xl text-center'
            >

              <BadgeCheck
                size={50}
                className='mx-auto mb-5 text-white'
              />

              <h3 className='text-5xl font-bold'>
                10K+
              </h3>

              <p className='mt-3 text-cyan-100 text-lg'>
                Happy Customers
              </p>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default About