import {
  Landmark,
  Building2,
  Briefcase,
  CreditCard,
  ArrowRight,
  ShieldCheck,
  BadgeIndianRupee,
  Users,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: <Landmark size={30} />,
    title: 'Business Loans',
    desc: 'Quick MSME and unsecured business loans with faster approvals.',
  },
  {
    icon: <Building2 size={30} />,
    title: 'Home Loans',
    desc: 'Affordable housing finance with smooth loan processing.',
  },
  {
    icon: <Briefcase size={30} />,
    title: 'MSME Finance',
    desc: 'Tailored financial solutions for startups and small businesses.',
  },
  {
    icon: <CreditCard size={30} />,
    title: 'Vehicle Loans',
    desc: 'Flexible vehicle financing options with competitive rates.',
  },
  {
    icon: <CreditCard size={30} />,
    title: 'Personal Loans',
    desc: 'Quick and easy personal loan options for your needs.',
  },
  {
    icon: <CreditCard size={30} />,
    title: 'Loan Against Property',
    desc: 'Flexible loan options secured against your property.',
  },

]

const features = [
  {
    icon: <ShieldCheck size={18} />,
    title: 'Trusted Banking Partners',
  },
  {
    icon: <BadgeIndianRupee size={18} />,
    title: 'Quick Loan Processing',
  },
  {
    icon: <Users size={18} />,
    title: 'Customer Support',
  },
  {
    icon: <TrendingUp size={18} />,
    title: 'Business Growth',
  },
]

const Services = () => {
  return (
    <section className='relative py-28 md:py-32 bg-gradient-to-br from-[#071739] via-[#0b1f52] to-cyan-700 overflow-hidden text-white'>

      {/* Background Effects */}
      <div className='absolute top-0 left-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl'></div>

      <div className='absolute bottom-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl'></div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-12'
        >

          <span className='bg-white/10 border border-white/10 text-cyan-300 px-4 py-2 rounded-full text-xs font-medium'>
            Our Financial Services
          </span>

          <h2 className='text-3xl md:text-3xl font-bold mt-5'>
            Smart Financial
            <span className='block text-cyan-400 mt-1'>
              Solutions For Everyone
            </span>
          </h2>

         <p className='mt-5 text-base text-gray-200 leading-7 max-w-xl mx-auto'>
            Trusted financial products and banking solutions
            for businesses, startups and individuals across India.
          </p>

          {/* Features */}
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className='bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4 flex items-center gap-3'
              >

                <div className='bg-cyan-400/20 text-cyan-400 p-3 rounded-xl'>
                  {feature.icon}
                </div>

                <h4 className='font-medium text-sm text-left text-white'>
                  {feature.title}
                </h4>

              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* Services Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className='group relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-5 overflow-hidden shadow-xl'
            >

              <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-cyan-300'></div>

              <div className='absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500'></div>

              <div className='relative z-10 w-14 h-14 rounded-2xl bg-cyan-400/20 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-blue-950 transition duration-300'>
                {service.icon}
              </div>

              <h3 className='relative z-10 text-2xl font-bold text-white mt-5 leading-tight'>
                {service.title}
              </h3>

              <p className='relative z-10 text-gray-300 leading-7 mt-4 text-sm'>
                {service.desc}
              </p>

              <button className='relative z-10 mt-4 flex items-center gap-2 text-cyan-400 font-semibold hover:text-white transition text-sm'>
                Learn More
                <ArrowRight size={16} />
              </button>

            </motion.div>
          ))}

        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='relative mt-12 bg-white/10 backdrop-blur-lg border border-white/10 rounded-[30px] px-6 py-10 text-center overflow-hidden shadow-2xl'
        >

          <div className='absolute top-0 right-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl'></div>

          <div className='absolute bottom-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl'></div>

          <div className='relative z-10'>

            <div className='inline-flex items-center gap-2 bg-cyan-400/20 border border-cyan-400/20 px-4 py-2 rounded-full'>

              <CheckCircle2
                size={16}
                className='text-cyan-400'
              />

              <span className='text-sm font-semibold'>
                Trusted Financial Guidance
              </span>

            </div>

            <h3 className='text-2xl md:text-3xl font-bold mt-5'>
              Need Expert Financial Assistance?
            </h3>

            <p className='mt-4 text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-7'>
              Our financial advisors help you choose the right
              banking and loan solutions for personal and business growth.

            </p>

            <Link
  to='/contact'
  className='inline-block mt-6 bg-cyan-400 hover:bg-cyan-300 text-blue-950 px-7 py-3 rounded-2xl font-semibold transition duration-300 shadow-lg'
>
  Contact Our Team
</Link>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Services