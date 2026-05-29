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

const services = [
  {
    icon: <Landmark size={34} />,
    title: 'Business Loans',
    desc: 'Quick MSME and unsecured business loans with faster approvals.',
  },
  {
    icon: <Building2 size={34} />,
    title: 'Home Loans',
    desc: 'Affordable housing finance with smooth loan processing.',
  },
  {
    icon: <Briefcase size={34} />,
    title: 'Project Finance',
    desc: 'Funding solutions for startups and business growth.',
  },
  {
    icon: <CreditCard size={34} />,
    title: 'Credit Services',
    desc: 'Professional credit assistance and advisory services.',
  },
]

const features = [
  {
    icon: <ShieldCheck size={20} />,
    title: 'Trusted Banking Partners',
  },
  {
    icon: <BadgeIndianRupee size={20} />,
    title: 'Quick Loan Processing',
  },
  {
    icon: <Users size={20} />,
    title: 'Customer Support',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Business Growth',
  },
]

const Services = () => {
  return (
    <section className='relative min-h-screen py-40 bg-gradient-to-br from-[#071739] via-[#0b1f52] to-cyan-700 overflow-hidden text-white flex items-center'>

      {/* Background Effects */}
      <div className='absolute top-0 left-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl'></div>

      <div className='absolute bottom-0 right-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl'></div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-14'
        >

          <span className='bg-cyan-400/20 text-cyan-300 px-5 py-2 rounded-full font-semibold text-sm border border-cyan-400/20'>
            Our Financial Services
          </span>

          <h2 className='text-4xl md:text-5xl font-bold text-white mt-6 leading-tight'>

            Smart Financial
            <span className='block text-cyan-400 mt-1'>
              Solutions For Everyone
            </span>

          </h2>

          <p className='text-gray-300 mt-5 text-base max-w-2xl mx-auto leading-7'>
            Trusted financial products and banking solutions
            for businesses, startups and individuals across India.
          </p>

          {/* Features */}
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className='bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4 flex items-center gap-3 shadow-lg'
              >

                <div className='bg-cyan-400/20 text-cyan-400 p-3 rounded-xl'>
                  {feature.icon}
                </div>

                <h4 className='font-medium text-white text-sm text-left leading-6'>
                  {feature.title}
                </h4>

              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* Services Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className='group relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 overflow-hidden shadow-xl'
            >

              {/* Top Gradient */}
              <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-cyan-300'></div>

              {/* Hover Glow */}
              <div className='absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500'></div>

              {/* Icon */}
              <div className='relative z-10 w-16 h-16 rounded-2xl bg-cyan-400/20 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-blue-950 transition duration-300'>

                {service.icon}

              </div>

              {/* Title */}
              <h3 className='relative z-10 text-2xl font-bold text-white mt-5 leading-tight'>
                {service.title}
              </h3>

              {/* Description */}
              <p className='relative z-10 text-gray-300 leading-7 mt-4 text-sm'>
                {service.desc}
              </p>

              {/* Learn More */}
              <button className='relative z-10 mt-5 flex items-center gap-2 text-cyan-400 font-semibold hover:text-white transition duration-300 text-sm'>

                Learn More

                <ArrowRight size={18} />

              </button>

            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='relative mt-14 bg-white/10 backdrop-blur-lg border border-white/10 rounded-[35px] px-8 py-12 text-center overflow-hidden shadow-2xl'
        >

          {/* Blur Effects */}
          <div className='absolute top-0 right-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl'></div>

          <div className='absolute bottom-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl'></div>

          <div className='relative z-10'>

            {/* Badge */}
            <div className='inline-flex items-center gap-2 bg-cyan-400/20 backdrop-blur-lg border border-cyan-400/20 px-4 py-2 rounded-full'>

              <CheckCircle2 size={16} className='text-cyan-400' />

              <span className='text-sm font-semibold text-white'>
                Trusted Financial Guidance
              </span>

            </div>

            {/* Heading */}
            <h3 className='text-3xl md:text-4xl font-bold text-white mt-6 leading-tight'>
              Need Expert Financial Assistance?
            </h3>

            {/* Description */}
            <p className='mt-5 text-gray-300 text-base max-w-2xl mx-auto leading-7'>
              Our financial advisors help you choose the right
              banking and loan solutions for personal and business growth.
            </p>

            {/* Button */}
            <button className='mt-8 bg-cyan-400 hover:bg-cyan-300 text-blue-950 px-8 py-4 rounded-2xl font-bold transition duration-300 shadow-xl'>
              Contact Our Team
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Services