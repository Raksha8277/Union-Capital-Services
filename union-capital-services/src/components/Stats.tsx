import { motion } from 'framer-motion'
import {
  Landmark,
  Users,
  BadgeIndianRupee,
  ShieldCheck,
} from 'lucide-react'

const stats = [
  {
    number: '12K+',
    title: 'Loans Approved',
    description:
      'Successfully processed business, home and MSME loans with trusted banking partners.',
    icon: <Landmark size={38} />,
  },
  {
    number: '100+',
    title: 'Banking Partners',
    description:
      'Strong network with leading banks and NBFC institutions across India.',
    icon: <ShieldCheck size={38} />,
  },
  {
    number: '18K+',
    title: 'Happy Customers',
    description:
      'Serving entrepreneurs, startups, salaried professionals and businesses.',
    icon: <Users size={38} />,
  },
  {
    number: '₹12000Cr+',
    title: 'Loan Disbursal',
    description:
      'Delivered reliable financial support with faster approvals and smooth processing.',
    icon: <BadgeIndianRupee size={38} />,
  },
]

const Stats = () => {
  return (
    <section className='py-28 bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-700 text-white overflow-hidden relative'>

      {/* Background Effects */}
      <div className='absolute top-0 right-0 w-[450px] h-[450px] bg-cyan-400/20 rounded-full blur-3xl'></div>

      <div className='absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-400/20 rounded-full blur-3xl'></div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-20'
        >

          <span className='bg-white/10 backdrop-blur-lg border border-white/10 px-5 py-2 rounded-full font-semibold'>
            Company Achievements
          </span>

          <h2 className='text-5xl md:text-6xl font-bold mt-6 leading-tight'>
            Trusted Financial
            <span className='text-cyan-400'> Excellence</span>
          </h2>

          <p className='text-gray-200 mt-6 text-lg max-w-3xl mx-auto leading-8'>
            Union Capital Services delivers modern financial
            solutions with transparency, reliability and
            customer-focused banking support across India.
          </p>

        </motion.div>

        {/* Stats Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10'>

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className='group bg-white/10 backdrop-blur-xl border border-white/10 rounded-[35px] p-10 text-center shadow-2xl relative overflow-hidden hover:border-cyan-400/40 transition duration-300'
            >

              {/* Hover Glow */}
              <div className='absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition duration-500'></div>

              {/* Icon */}
              <div className='w-20 h-20 mx-auto rounded-3xl bg-cyan-400/20 text-cyan-400 flex items-center justify-center relative z-10 group-hover:bg-cyan-400 group-hover:text-blue-950 transition duration-300'>

                {item.icon}

              </div>

              {/* Number */}
              <h1 className='text-5xl md:text-6xl font-bold text-cyan-400 mt-8 relative z-10'>
                {item.number}
              </h1>

              {/* Title */}
              <h3 className='mt-5 text-2xl font-semibold relative z-10'>
                {item.title}
              </h3>

              {/* Description */}
              <p className='mt-4 text-gray-300 leading-7 relative z-10'>
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mt-24 bg-white/10 backdrop-blur-xl border border-white/10 rounded-[40px] p-12 md:p-16 text-center relative overflow-hidden'
        >

          <div className='absolute top-0 right-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl'></div>

          <h3 className='text-4xl md:text-5xl font-bold relative z-10'>
            Empowering Financial Growth
          </h3>

          <p className='mt-6 text-gray-300 text-lg max-w-3xl mx-auto leading-8 relative z-10'>
            We continue to build strong banking partnerships
            and provide trusted loan solutions with faster
            approvals and transparent financial guidance.
          </p>

          <button className='mt-10 bg-cyan-400 hover:bg-cyan-300 transition px-10 py-5 rounded-2xl font-bold text-lg text-blue-950 relative z-10 shadow-xl'>
            Explore Financial Services
          </button>

        </motion.div>

      </div>

    </section>
  )
}

export default Stats