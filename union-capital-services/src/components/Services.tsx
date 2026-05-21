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
    icon: <Landmark size={42} />,
    title: 'Business Loans',
    desc: 'Quick MSME and unsecured business loans with faster approvals and flexible repayment solutions.',
  },
  {
    icon: <Building2 size={42} />,
    title: 'Home Loans',
    desc: 'Affordable housing finance with competitive interest rates and smooth loan processing.',
  },
  {
    icon: <Briefcase size={42} />,
    title: 'Project Finance',
    desc: 'Customized funding solutions for infrastructure, startups and commercial growth projects.',
  },
  {
    icon: <CreditCard size={42} />,
    title: 'Credit Services',
    desc: 'Professional credit card assistance, restructuring and financial advisory services.',
  },
]

const features = [
  {
    icon: <ShieldCheck size={24} />,
    title: 'Trusted Banking Partners',
  },
  {
    icon: <BadgeIndianRupee size={24} />,
    title: 'Quick Loan Processing',
  },
  {
    icon: <Users size={24} />,
    title: 'Dedicated Customer Support',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Business Growth Solutions',
  },
]

const Services = () => {
  return (
    <section className='relative py-28 bg-gradient-to-b from-white via-slate-50 to-cyan-50 overflow-hidden'>

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
            Our Financial Services
          </span>

          <h2 className='text-5xl md:text-6xl font-bold text-blue-950 mt-8 leading-tight'>

            Smart Financial
            <span className='block text-cyan-500 mt-2'>
              Solutions For Everyone
            </span>

          </h2>

          <p className='text-gray-600 mt-8 text-lg max-w-3xl mx-auto leading-9'>
            Union Capital Services delivers trusted financial
            products and banking solutions for businesses,
            startups, entrepreneurs and salaried individuals
            across India.
          </p>

          {/* Features */}
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14'>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className='bg-white border border-gray-100 shadow-lg rounded-3xl p-6 flex items-center gap-4 hover:shadow-2xl transition duration-300'
              >

                <div className='bg-cyan-100 text-cyan-600 p-4 rounded-2xl'>
                  {feature.icon}
                </div>

                <h4 className='font-semibold text-blue-950 text-left leading-7'>
                  {feature.title}
                </h4>

              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* Services Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10'>

          {services.map((service, index) => (
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
              <div className='relative z-10 w-20 h-20 rounded-3xl bg-blue-100 text-blue-950 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition duration-300'>

                {service.icon}

              </div>

              {/* Title */}
              <h3 className='relative z-10 text-3xl font-bold text-blue-950 mt-8 leading-tight'>
                {service.title}
              </h3>

              {/* Description */}
              <p className='relative z-10 text-gray-600 leading-8 mt-5'>
                {service.desc}
              </p>

              {/* Learn More */}
              <button className='relative z-10 mt-8 flex items-center gap-3 text-cyan-600 font-semibold hover:text-blue-950 transition duration-300'>

                Learn More

                <ArrowRight size={20} />

              </button>

            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='relative mt-28 bg-gradient-to-r from-blue-950 via-blue-900 to-cyan-700 rounded-[45px] px-8 md:px-16 py-16 text-center overflow-hidden shadow-2xl'
        >

          {/* Blur Effects */}
          <div className='absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl'></div>

          <div className='absolute bottom-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl'></div>

          <div className='relative z-10'>

            {/* Badge */}
            <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/10 px-5 py-3 rounded-full'>

              <CheckCircle2 size={18} className='text-cyan-400' />

              <span className='text-sm font-semibold text-white'>
                Trusted Financial Guidance
              </span>

            </div>

            {/* Heading */}
            <h3 className='text-4xl md:text-5xl font-bold text-white mt-8 leading-tight'>
              Need Expert Financial Assistance?
            </h3>

            {/* Description */}
            <p className='mt-7 text-gray-200 text-lg max-w-3xl mx-auto leading-9'>
              Our experienced financial advisors are ready
              to help you choose the right banking and
              loan solutions for your personal and
              business growth.
            </p>

            {/* Button */}
            <button className='mt-10 bg-cyan-400 hover:bg-cyan-300 text-blue-950 px-10 py-5 rounded-2xl font-bold text-lg transition duration-300 shadow-2xl'>
              Contact Our Team
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Services