import { motion } from 'framer-motion'
import {
  Landmark,
  Users,
  BadgeIndianRupee,
  ShieldCheck,
} from 'lucide-react'

const stats = [
  {
    title: 'Loan Services',
    description:
      'Business, home and MSME loan solutions with trusted banking support.',
    icon: <Landmark size={30} />,
  },

  {
    title: 'Banking Partners',
    description:
      'Strong network with leading banks and NBFC institutions across India.',
    icon: <ShieldCheck size={30} />,
  },

  {
    title: 'Customer Support',
    description:
      'Helping businesses and individuals with smooth financial guidance.',
    icon: <Users size={30} />,
  },

  {
    title: 'Fast Processing',
    description:
      'Quick approvals with reliable and transparent loan assistance.',
    icon: <BadgeIndianRupee size={30} />,
  },
]

const Stats = () => {
  return (
    <section className='py-14 bg-gradient-to-b from-[#071739] via-[#0b1f52] to-cyan-700 text-white relative overflow-hidden'>

      {/* Background Blur */}
      <div className='absolute top-0 right-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl'></div>

      <div className='absolute bottom-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl'></div>

      <div className='max-w-6xl mx-auto px-5 relative z-10'>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-10'
        >

          <span className='bg-white/10 border border-white/10 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium'>
            Company Services
          </span>

          <h2 className='text-3xl md:text-4xl font-bold mt-5 leading-tight'>

            Trusted Financial
            <span className='text-cyan-300'> Solutions</span>

          </h2>

          <p className='text-gray-300 mt-4 text-sm md:text-base max-w-2xl mx-auto leading-7'>
            Union Capital Services provides reliable banking
            and loan support with quick processing and
            customer-friendly financial guidance.
          </p>

        </motion.div>

        {/* Cards */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
              }}
              className='bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 text-center hover:border-cyan-300/30 transition duration-300'
            >

              {/* Icon */}
              <div className='w-14 h-14 mx-auto rounded-2xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center'>

                {item.icon}

              </div>

              {/* Title */}
              <h3 className='mt-5 text-lg font-semibold'>
                {item.title}
              </h3>

              {/* Description */}
              <p className='mt-3 text-gray-300 text-sm leading-6'>
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='mt-12 bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden'
        >

          <div className='absolute top-0 right-0 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl'></div>

          <div className='relative z-10'>

            <h3 className='text-2xl md:text-3xl font-bold'>
              Empowering Financial Growth
            </h3>

            <p className='mt-4 text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-7'>
              Trusted banking partnerships and reliable
              financial solutions for personal and business growth.
            </p>

            <button className='mt-6 bg-cyan-400 hover:bg-cyan-300 text-blue-950 px-7 py-3 rounded-xl font-semibold transition shadow-lg'>
              Explore Services
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Stats