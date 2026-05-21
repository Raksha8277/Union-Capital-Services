import {
  Landmark,
  Home,
  Briefcase,
  CreditCard,
  Car,
  Building2,
  ShieldCheck,
  BadgeIndianRupee,
  ArrowRight,
} from 'lucide-react'

import { motion } from 'framer-motion'

const loans = [
  {
    icon: <Landmark size={42} />,
    title: 'Business Loan',
    description:
      'Fast business funding solutions for entrepreneurs, traders and growing companies.',
  },
  {
    icon: <Home size={42} />,
    title: 'Home Loan',
    description:
      'Affordable home financing with low interest rates and quick approval process.',
  },
  {
    icon: <Briefcase size={42} />,
    title: 'MSME Finance',
    description:
      'Customized MSME financial support for startups and small businesses.',
  },
  {
    icon: <CreditCard size={42} />,
    title: 'Credit Card Services',
    description:
      'Premium credit card assistance with cashback, rewards and banking support.',
  },
  {
    icon: <Car size={42} />,
    title: 'Vehicle Loan',
    description:
      'Easy car and commercial vehicle loans with minimal documentation.',
  },
  {
    icon: <Building2 size={42} />,
    title: 'Project Finance',
    description:
      'Reliable project funding for infrastructure and commercial developments.',
  },
]

const features = [
  {
    icon: <ShieldCheck size={24} />,
    title: 'Trusted Banking Network',
  },
  {
    icon: <BadgeIndianRupee size={24} />,
    title: 'Quick Loan Disbursal',
  },
]

const LoanSection = () => {
  return (
    <section className='relative py-28 bg-gradient-to-b from-slate-50 via-white to-cyan-50 overflow-hidden'>

      {/* Background Effects */}
      <div className='absolute top-0 left-0 w-80 h-80 bg-cyan-200/40 rounded-full blur-3xl'></div>

      <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl'></div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-24'
        >

          <span className='bg-cyan-100 text-cyan-700 px-6 py-3 rounded-full font-semibold shadow-sm'>
            Our Financial Products
          </span>

          <h2 className='text-5xl md:text-6xl font-bold text-blue-950 mt-8 leading-tight'>

            Smart Financial Solutions
            <span className='block text-cyan-500 mt-2'>
              For Every Need
            </span>

          </h2>

          <p className='mt-8 text-gray-600 text-lg max-w-3xl mx-auto leading-9'>
            Union Capital Services provides reliable financial
            products for businesses, entrepreneurs,
            startups and individuals with trusted
            banking partnerships across India.
          </p>

          {/* Features */}
          <div className='flex flex-wrap justify-center gap-6 mt-12'>

            {features.map((item, index) => (
              <div
                key={index}
                className='flex items-center gap-4 bg-white border border-gray-100 shadow-lg px-7 py-5 rounded-2xl hover:shadow-2xl transition duration-300'
              >

                <div className='bg-cyan-100 text-cyan-600 p-3 rounded-2xl'>
                  {item.icon}
                </div>

                <p className='font-semibold text-blue-950'>
                  {item.title}
                </p>

              </div>
            ))}

          </div>

        </motion.div>

        {/* Cards */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>

          {loans.map((loan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
              }}
              className='group relative bg-white rounded-[35px] p-10 border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl transition duration-500'
            >

              {/* Top Gradient */}
              <div className='absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-950 via-cyan-500 to-cyan-400'></div>

              {/* Hover Glow */}
              <div className='absolute top-0 right-0 w-52 h-52 bg-cyan-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500'></div>

              {/* Icon */}
              <div className='relative z-10 w-20 h-20 bg-blue-100 text-blue-950 rounded-3xl flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition duration-300'>

                {loan.icon}

              </div>

              {/* Title */}
              <h3 className='relative z-10 text-3xl font-bold text-blue-950 mt-8'>
                {loan.title}
              </h3>

              {/* Description */}
              <p className='relative z-10 text-gray-600 leading-8 mt-5'>
                {loan.description}
              </p>

              {/* Button */}
              <button className='relative z-10 mt-8 flex items-center gap-3 bg-blue-950 hover:bg-cyan-500 text-white px-7 py-4 rounded-2xl font-semibold transition duration-300 shadow-lg'>

                Apply Now

                <ArrowRight size={20} />

              </button>

            </motion.div>
          ))}

        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='relative mt-28 bg-gradient-to-r from-blue-950 via-blue-900 to-cyan-700 rounded-[45px] px-8 md:px-16 py-16 text-center overflow-hidden shadow-2xl'
        >

          {/* Blur */}
          <div className='absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl'></div>

          <div className='absolute bottom-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl'></div>

          <div className='relative z-10'>

            <h3 className='text-4xl md:text-5xl font-bold text-white leading-tight'>
              Need Financial Assistance?
            </h3>

            <p className='mt-7 text-gray-200 text-lg max-w-3xl mx-auto leading-9'>
              Our expert financial advisors help you choose
              the best banking and loan solutions for your
              personal and business growth.
            </p>

            <button className='mt-10 bg-cyan-400 hover:bg-cyan-300 text-blue-950 px-10 py-5 rounded-2xl font-bold text-lg transition duration-300 shadow-2xl'>
              Contact Our Team
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default LoanSection