import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  CheckCircle,
  Send,
  Headphones,
} from 'lucide-react'

const Contact = () => {
  return (
    <section className='py-40 bg-gradient-to-b from-[#071739] via-[#0b1f52] to-cyan-700 overflow-hidden relative text-white'>

      {/* Background Blur */}
      <div className='absolute top-0 right-0 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl'></div>

      <div className='absolute bottom-0 left-0 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl'></div>

      <div className='max-w-6xl mx-auto px-4 relative z-10'>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-10'
        >

          <span className='bg-white/10 border border-white/10 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium'>
            Contact Union Capital
          </span>

          <h2 className='text-3xl md:text-4xl font-bold mt-5 leading-tight'>

            Get Financial
            <span className='text-cyan-300'> Guidance</span>

          </h2>

          <p className='text-gray-300 mt-4 text-sm md:text-base max-w-2xl mx-auto leading-7'>
            Connect with us for home loans, business loans,
            MSME finance and trusted banking support.
          </p>

        </motion.div>

        {/* Main Grid */}
        <div className='grid lg:grid-cols-2 gap-6'>

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6'
          >

            {/* Icon */}
            <div className='bg-cyan-400/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-5'>
              <Headphones
                size={32}
                className='text-cyan-300'
              />
            </div>

            <h3 className='text-2xl font-bold'>
              Contact Information
            </h3>

            <p className='text-gray-300 mt-3 text-sm leading-6'>
              Our financial experts are ready to guide you
              with trusted financial solutions.
            </p>

            {/* Badges */}
            <div className='flex flex-wrap gap-3 mt-5'>

              <div className='bg-white/10 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 text-xs'>
                <CheckCircle
                  size={15}
                  className='text-cyan-300'
                />
                Quick Loan Processing
              </div>

              <div className='bg-white/10 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 text-xs'>
                <CheckCircle
                  size={15}
                  className='text-cyan-300'
                />
                Trusted Support
              </div>

            </div>

            {/* Contact Details */}
            <div className='space-y-4 mt-7'>

              {/* Address */}
              <div className='bg-white/10 border border-white/10 rounded-2xl p-4 flex gap-3'>

                <div className='bg-cyan-400/20 p-3 rounded-xl h-fit'>
                  <MapPin
                    size={18}
                    className='text-cyan-300'
                  />
                </div>

                <div>
                  <h4 className='font-semibold text-base'>
                    Address
                  </h4>

                  <p className='text-gray-300 text-sm mt-1 leading-6'>
                    Girinagar, Bangalore - 560026
                  </p>
                </div>

              </div>

              {/* Phone */}
              <div className='bg-white/10 border border-white/10 rounded-2xl p-4 flex gap-3'>

                <div className='bg-cyan-400/20 p-3 rounded-xl h-fit'>
                  <Phone
                    size={18}
                    className='text-cyan-300'
                  />
                </div>

                <div>
                  <h4 className='font-semibold text-base'>
                    Phone
                  </h4>

                  <div className='text-gray-300 text-sm mt-1 space-y-1'>
                    <p>+91 91135 20317</p>
                    <p>+91 99720 69920</p>
                  </div>
                </div>

              </div>

              {/* Email */}
              <div className='bg-white/10 border border-white/10 rounded-2xl p-4 flex gap-3'>

                <div className='bg-cyan-400/20 p-3 rounded-xl h-fit'>
                  <Mail
                    size={18}
                    className='text-cyan-300'
                  />
                </div>

                <div>
                  <h4 className='font-semibold text-base'>
                    Email
                  </h4>

                  <div className='text-gray-300 text-sm mt-1 break-all'>
                    <p>sandeshunion@gmail.com</p>
                    <p>abhijithshettyunion@gmail.com</p>
                  </div>
                </div>

              </div>

              {/* Hours */}
              <div className='bg-white/10 border border-white/10 rounded-2xl p-4 flex gap-3'>

                <div className='bg-cyan-400/20 p-3 rounded-xl h-fit'>
                  <Clock3
                    size={18}
                    className='text-cyan-300'
                  />
                </div>

                <div>
                  <h4 className='font-semibold text-base'>
                    Working Hours
                  </h4>

                  <p className='text-gray-300 text-sm mt-1'>
                    Mon - Sat | 9:00 AM - 7:00 PM
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

          {/* Right Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6'
          >

            <div className='bg-cyan-400/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-5'>
              <Send
                size={28}
                className='text-cyan-300'
              />
            </div>

            <h3 className='text-2xl font-bold'>
              Send Message
            </h3>

            <p className='text-gray-300 mt-3 text-sm leading-6 mb-6'>
              Fill the enquiry form and our team will
              contact you shortly.
            </p>

            <div className='space-y-4'>

              <input
                type='text'
                placeholder='Full Name'
                className='w-full p-3.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-300'
              />

              <input
                type='email'
                placeholder='Email Address'
                className='w-full p-3.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-300'
              />

              <input
                type='text'
                placeholder='Phone Number'
                className='w-full p-3.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-300'
              />

              <select
                className='w-full p-3.5 rounded-xl bg-white/10 border border-white/10 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-300'
              >

                <option>Select Loan Type</option>
                <option>Home Loan</option>
                <option>Business Loan</option>
                <option>MSME Loan</option>
                <option>Vehicle Loan</option>

              </select>

              <textarea
                placeholder='Write your message'
                rows={4}
                className='w-full p-3.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-300'
              />

              <button className='w-full bg-cyan-400 hover:bg-cyan-300 text-blue-950 py-3 rounded-xl font-semibold transition'>
                Submit Enquiry
              </button>

            </div>

          </motion.form>

        </div>

      </div>

    </section>
  )
}

export default Contact