import { motion } from 'framer-motion'
import {
  Landmark,
  ShieldCheck,
  BadgeCheck,
  Building2,
} from 'lucide-react'

const banks = [
  {
    name: 'HDFC Bank',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg',
  },

  {
    name: 'ICICI Bank',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg',
  },

  {
    name: 'State Bank of India',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg',
  },

  {
    name: 'Axis Bank',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg',
  },

  {
    name: 'Bank of Baroda',
    logo: 'data:image/png;base64,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',
  },

  {
    name: 'Kotak Mahindra Bank',
    logo: 'data:image/png;base64,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',
  },

  {
    name: 'IndusInd Bank',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-Qja6HNriT-i5oLSxoccu1GqzvrQ4GgGIjce5tCNhAeHZqPyCaXjwWw&s',
  },

  {
    name: 'YES Bank',
    logo: 'data:image/png;base64,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',
  },
]

const Banks = () => {
  return (
    <section className='pt-40 pb-28 bg-gradient-to-b from-slate-50 via-white to-cyan-50 overflow-hidden relative'>

      {/* Background Blur */}
      <div className='absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-200/40 rounded-full blur-3xl'></div>

      <div className='absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-200/40 rounded-full blur-3xl'></div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-20'
        >

          <span className='bg-cyan-100 text-cyan-700 px-6 py-3 rounded-full font-semibold shadow-sm'>
            Trusted Banking Network
          </span>

          <h2 className='text-5xl md:text-6xl font-bold text-blue-950 mt-8 leading-tight'>
            Our Banking &
            <span className='text-cyan-500'> NBFC Partners</span>
          </h2>

          <p className='text-gray-600 mt-6 text-lg max-w-4xl mx-auto leading-8'>
            Union Capital Services works with India’s leading
            Banks and NBFC institutions to provide reliable
            loan solutions, fast approvals and customer-friendly
            financial services.
          </p>

        </motion.div>

        {/* Logo Cards */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>

          {banks.map((bank, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className='bg-white rounded-[32px] shadow-xl border border-gray-100 p-8 flex flex-col items-center justify-center group hover:shadow-2xl transition duration-300 relative overflow-hidden min-h-[220px]'
            >

              {/* Hover Glow */}
              <div className='absolute top-0 right-0 w-32 h-32 bg-cyan-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500'></div>

              <div className='flex items-center justify-center h-20 w-full relative z-10'>
                <img
                  src={bank.logo}
                  alt={bank.name}
                  className='max-h-16 w-full object-contain'
                />
              </div>

              <p className='mt-6 text-center font-bold text-blue-950 text-sm leading-6 relative z-10'>
                {bank.name}
              </p>

            </motion.div>
          ))}

        </div>

        {/* Stats */}
        <div className='grid md:grid-cols-3 gap-8 mt-24'>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className='bg-white rounded-[35px] shadow-xl p-10 border border-gray-100 text-center'
          >

            <div className='bg-cyan-100 text-cyan-700 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto'>
              <Landmark size={42} />
            </div>

            <h3 className='text-4xl font-bold text-blue-950 mt-6'>
              120+
            </h3>

            <p className='text-gray-600 mt-3 leading-7'>
              Banking & NBFC Partners Across India
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className='bg-blue-950 text-white rounded-[35px] shadow-xl p-10 text-center relative overflow-hidden'
          >

            <div className='absolute top-0 right-0 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl'></div>

            <div className='bg-white/10 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto relative z-10'>
              <ShieldCheck
                size={42}
                className='text-cyan-400'
              />
            </div>

            <h3 className='text-4xl font-bold mt-6 relative z-10'>
              Fast
            </h3>

            <p className='text-gray-300 mt-3 leading-7 relative z-10'>
              Quick Loan Processing & Transparent Service
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className='bg-white rounded-[35px] shadow-xl p-10 border border-gray-100 text-center'
          >

            <div className='bg-blue-100 text-blue-950 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto'>
              <BadgeCheck size={42} />
            </div>

            <h3 className='text-4xl font-bold text-blue-950 mt-6'>
              Trusted
            </h3>

            <p className='text-gray-600 mt-3 leading-7'>
              Reliable Financial Solutions For Every Customer
            </p>

          </motion.div>

        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mt-24 bg-gradient-to-r from-blue-950 via-blue-900 to-cyan-700 rounded-[45px] p-14 md:p-20 text-center text-white relative overflow-hidden shadow-2xl'
        >

          {/* Blur Effects */}
          <div className='absolute top-0 left-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl'></div>

          <div className='absolute bottom-0 right-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl'></div>

          <div className='relative z-10'>

            <div className='bg-white/10 backdrop-blur-lg border border-white/10 w-24 h-24 rounded-[30px] flex items-center justify-center mx-auto mb-8'>
              <Building2
                size={50}
                className='text-cyan-400'
              />
            </div>

            <h3 className='text-4xl md:text-5xl font-bold leading-tight'>
              Financial Support
              <span className='text-cyan-400'> You Can Trust</span>
            </h3>

            <p className='mt-6 text-lg text-gray-200 max-w-3xl mx-auto leading-8'>
              Get access to Home Loans, Business Loans,
              Vehicle Loans, MSME Finance and Project
              Funding through our trusted financial network.
            </p>

            <button className='mt-10 bg-cyan-500 hover:bg-cyan-400 transition px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl'>
              Apply For Loan
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Banks