import {
  Landmark,
  Home,
  Briefcase,
  Car,
  Building2,
  ShieldCheck,
  BadgeIndianRupee,
  ArrowRight,
} from 'lucide-react'

import { motion } from 'framer-motion'

const loans = [
  {
    icon: <Landmark size={28} />,
    title: 'Business Loan',
    description:
      'Fast funding solutions for businesses and entrepreneurs.',
  },
  {
    icon: <Home size={28} />,
    title: 'Home Loan',
    description:
      'Simple and affordable home financing options.',
  },
  {
    icon: <Briefcase size={28} />,
    title: 'MSME Finance',
    description:
      'Financial support for startups and MSMEs.',
  },
  {
    icon: <Car size={28} />,
    title: 'Vehicle Loan',
    description:
      'Quick vehicle loans with easy documentation.',
  },
  {
    icon: <Building2 size={28} />,
    title: 'Project Finance',
    description:
      'Reliable funding for business projects.',
  },
]

const features = [
  {
    icon: <ShieldCheck size={18} />,
    title: 'Trusted Banking',
  },
  {
    icon: <BadgeIndianRupee size={18} />,
    title: 'Fast Approval',
  },
]

const LoanSection = () => {
  return (
    <section className='relative py-40 bg-gradient-to-b from-[#071739] via-[#0b1f52] to-cyan-700 overflow-hidden text-white'>

      {/* Background Blur */}
      <div className='absolute top-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl'></div>

      <div className='absolute bottom-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl'></div>

      <div className='max-w-6xl mx-auto px-5 relative z-10'>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-10'
        >

          <span className='bg-white/10 border border-white/10 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium'>
            Our Loan Services
          </span>

          <h2 className='text-3xl md:text-4xl font-bold mt-5 leading-tight'>

            Financial Solutions
            <span className='text-cyan-300'> For Everyone</span>

          </h2>

          <p className='mt-4 text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-7'>
            Trusted loan and banking solutions with
            faster approvals and reliable support.
          </p>

          {/* Features */}
          <div className='flex flex-wrap justify-center gap-3 mt-6'>

            {features.map((item, index) => (
              <div
                key={index}
                className='flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md'
              >

                <div className='text-cyan-300'>
                  {item.icon}
                </div>

                <p className='text-sm text-white'>
                  {item.title}
                </p>

              </div>
            ))}

          </div>

        </motion.div>

        {/* Loan Cards */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>

          {loans.map((loan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -5 }}
              className='group bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-5 hover:border-cyan-300/30 transition duration-300'
            >

              {/* Icon */}
              <div className='w-14 h-14 rounded-2xl bg-cyan-400/15 text-cyan-300 flex items-center justify-center group-hover:bg-cyan-300 group-hover:text-blue-950 transition duration-300'>

                {loan.icon}

              </div>

              {/* Title */}
              <h3 className='text-xl font-semibold mt-5'>
                {loan.title}
              </h3>

              {/* Description */}
              <p className='text-gray-300 text-sm leading-6 mt-3'>
                {loan.description}
              </p>

              {/* Button */}
              <button className='mt-5 flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-white transition'>

                Apply Now

                <ArrowRight size={16} />

              </button>

            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='mt-12 bg-white/10 border border-white/10 backdrop-blur-lg rounded-3xl p-8 text-center'
        >

          <h3 className='text-2xl md:text-3xl font-bold'>
            Need Financial Help?
          </h3>

          <p className='mt-4 text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-7'>
            Our experts are ready to guide you with
            trusted banking and loan solutions.
          </p>

          <button className='mt-6 bg-cyan-400 hover:bg-cyan-300 text-blue-950 px-7 py-3 rounded-2xl font-semibold transition duration-300 shadow-lg'>
            Contact Our Team
          </button>

        </motion.div>

      </div>

    </section>
  )
}

export default LoanSection