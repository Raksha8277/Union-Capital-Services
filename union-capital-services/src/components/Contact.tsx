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
            Contact Union Capital
          </span>

          <h2 className='text-5xl md:text-6xl font-bold text-blue-950 mt-8 leading-tight'>

            Get Financial
            <span className='text-cyan-500'> Guidance Today</span>

          </h2>

          <p className='text-gray-600 mt-6 text-lg max-w-4xl mx-auto leading-8'>
            Connect with Union Capital Services for quick loan
            approvals, MSME funding, business finance,
            home loans and trusted banking assistance.
          </p>

        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12'>

          {/* Left Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-700 text-white rounded-[45px] p-12 relative overflow-hidden shadow-2xl'
          >

            {/* Blur Effects */}
            <div className='absolute top-0 right-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl'></div>

            <div className='absolute bottom-0 left-0 w-60 h-60 bg-blue-400/20 rounded-full blur-3xl'></div>

            {/* Heading */}
            <div className='relative z-10'>

              <div className='bg-white/10 backdrop-blur-lg border border-white/10 w-24 h-24 rounded-[30px] flex items-center justify-center mb-8'>
                <Headphones
                  size={50}
                  className='text-cyan-400'
                />
              </div>

              <h3 className='text-4xl font-bold'>
                Contact Information
              </h3>

              <p className='mt-5 text-gray-200 leading-8 text-lg'>
                Our financial experts are ready to guide you
                with trusted and transparent financial solutions.
              </p>

            </div>

            {/* Feature Badges */}
            <div className='flex flex-wrap gap-4 mt-10 relative z-10'>

              <div className='bg-white/10 backdrop-blur-lg px-5 py-3 rounded-full flex items-center gap-2 text-sm border border-white/10'>
                <CheckCircle
                  size={18}
                  className='text-cyan-400'
                />
                Quick Loan Processing
              </div>

              <div className='bg-white/10 backdrop-blur-lg px-5 py-3 rounded-full flex items-center gap-2 text-sm border border-white/10'>
                <CheckCircle
                  size={18}
                  className='text-cyan-400'
                />
                Trusted Financial Support
              </div>

            </div>

            {/* Contact Info */}
            <div className='space-y-8 mt-14 relative z-10'>

              {/* Address */}
              <div className='bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/10 flex gap-5'>

                <div className='bg-cyan-500/20 p-4 rounded-2xl h-fit'>
                  <MapPin className='text-cyan-400' />
                </div>

                <div>
                  <h4 className='text-2xl font-semibold'>
                    Office Address
                  </h4>

                  <p className='text-gray-200 leading-8 mt-3'>
                    #6, 50 Feet Road,
                    Avalahalli Extension,
                    Girinagar,
                    Bangalore - 560026
                  </p>
                </div>

              </div>

              {/* Phone */}
              <div className='bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/10 flex gap-5'>

                <div className='bg-cyan-500/20 p-4 rounded-2xl h-fit'>
                  <Phone className='text-cyan-400' />
                </div>

                <div>
                  <h4 className='text-2xl font-semibold'>
                    Contact Numbers
                  </h4>

                  <div className='space-y-2 mt-3 text-gray-200'>
                    <p>+91 91135 20317</p>
                    <p>+91 99720 69920</p>
                    <p>+91 81238 73820</p>
                  </div>
                </div>

              </div>

              {/* Email */}
              <div className='bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/10 flex gap-5'>

                <div className='bg-cyan-500/20 p-4 rounded-2xl h-fit'>
                  <Mail className='text-cyan-400' />
                </div>

                <div>
                  <h4 className='text-2xl font-semibold'>
                    Email Support
                  </h4>

                  <div className='space-y-2 mt-3 text-gray-200 break-all'>
                    <p>sandeshunion@gmail.com</p>
                    <p>abhijithshettyunion@gmail.com</p>
                  </div>
                </div>

              </div>

              {/* Working Hours */}
              <div className='bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/10 flex gap-5'>

                <div className='bg-cyan-500/20 p-4 rounded-2xl h-fit'>
                  <Clock3 className='text-cyan-400' />
                </div>

                <div>
                  <h4 className='text-2xl font-semibold'>
                    Working Hours
                  </h4>

                  <p className='text-gray-200 mt-3'>
                    Monday - Saturday
                  </p>

                  <p className='text-gray-200'>
                    9:00 AM - 7:00 PM
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

          {/* Right Form */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='bg-white rounded-[45px] shadow-2xl p-12 border border-gray-100 relative overflow-hidden'
          >

            {/* Glow */}
            <div className='absolute top-0 right-0 w-60 h-60 bg-cyan-100 rounded-full blur-3xl opacity-40'></div>

            <div className='relative z-10'>

              <div className='bg-blue-100 text-blue-950 w-24 h-24 rounded-[30px] flex items-center justify-center mb-8'>
                <Send size={45} />
              </div>

              <h3 className='text-4xl font-bold text-blue-950'>
                Send Message
              </h3>

              <p className='text-gray-500 mt-5 mb-10 leading-8 text-lg'>
                Fill the enquiry form and our Union Capital
                team will contact you shortly regarding your
                financial requirements.
              </p>

              <div className='space-y-6'>

                <input
                  type='text'
                  placeholder='Full Name'
                  className='w-full p-5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400'
                />

                <input
                  type='email'
                  placeholder='Email Address'
                  className='w-full p-5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400'
                />

                <input
                  type='text'
                  placeholder='Phone Number'
                  className='w-full p-5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400'
                />

                <select
                  className='w-full p-5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-500'
                >

                  <option>Select Loan Type</option>
                  <option>Home Loan</option>
                  <option>Business Loan</option>
                  <option>MSME Loan</option>
                  <option>Vehicle Loan</option>
                  <option>Personal Loan</option>
                  <option>Loan Against Property</option>
                  <option>Insurance</option>

                </select>

                <textarea
                  placeholder='Write your message'
                  rows={6}
                  className='w-full p-5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400'
                />

                <button className='w-full bg-gradient-to-r from-blue-950 to-cyan-600 hover:opacity-90 transition text-white py-5 rounded-2xl font-bold text-lg shadow-2xl'>
                  Submit Enquiry
                </button>

              </div>

            </div>

          </motion.form>

        </div>

      </div>

    </section>
  )
}

export default Contact