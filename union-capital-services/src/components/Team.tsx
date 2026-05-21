import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  BadgeCheck,
  Users,
} from 'lucide-react'

const team = [
  {
    name: 'Sandesh Acharya',
    role: 'Branch Manager',
    phone: '+91 91135 20317',
    email: 'sandeshunion@gmail.com',
    image:
      'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
  },

  {
    name: 'Abhijith Shetty',
    role: 'Branch Manager',
    phone: '+91 99720 69920',
    email: 'abhijithshettyunion@gmail.com',
    image:
      'https://cdn-icons-png.flaticon.com/512/2202/2202112.png',
  },

  {
    name: 'Sneha Shetty',
    role: 'Associate Business Manager',
    phone: '+91 81238 73820',
    email: 'snehasrunion@gmail.com',
    image:
      'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
  },

  {
    name: 'Yashika Acharya',
    role: 'Relationship Manager',
    phone: '+91 63627 64245',
    email: 'yashikaunion@gmail.com',
    image:
      'https://cdn-icons-png.flaticon.com/512/6997/6997662.png',
  },
]

const Team = () => {
  return (
    <section className='py-28 bg-gradient-to-b from-white via-blue-50 to-cyan-50 overflow-hidden relative'>

      {/* Background Blur */}
      <div className='absolute top-0 left-0 w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-30'></div>

      <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20'></div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-20'
        >

          <span className='bg-cyan-100 text-cyan-700 px-5 py-2 rounded-full font-semibold'>
            Union Capital Team
          </span>

          <h2 className='text-5xl md:text-6xl font-bold text-blue-950 mt-6 leading-tight'>

            Meet Our
            <span className='text-cyan-500'> Financial Experts</span>

          </h2>

          <p className='text-gray-600 mt-6 text-lg max-w-3xl mx-auto leading-8'>
            Our experienced professionals are committed to
            delivering trusted financial guidance, faster
            loan processing and customer-friendly support
            across India.
          </p>

        </motion.div>

        {/* Top Features */}
        <div className='grid md:grid-cols-3 gap-6 mb-20'>

          <div className='bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex items-center gap-5'>

            <div className='bg-cyan-100 text-cyan-600 p-4 rounded-2xl'>
              <Users size={32} />
            </div>

            <div>
              <h3 className='text-xl font-bold text-blue-950'>
                Expert Team
              </h3>

              <p className='text-gray-500 mt-1'>
                Experienced finance professionals
              </p>
            </div>

          </div>

          <div className='bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex items-center gap-5'>

            <div className='bg-blue-100 text-blue-900 p-4 rounded-2xl'>
              <BadgeCheck size={32} />
            </div>

            <div>
              <h3 className='text-xl font-bold text-blue-950'>
                Trusted Guidance
              </h3>

              <p className='text-gray-500 mt-1'>
                Transparent financial support
              </p>
            </div>

          </div>

          <div className='bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex items-center gap-5'>

            <div className='bg-cyan-100 text-cyan-600 p-4 rounded-2xl'>
              <Phone size={32} />
            </div>

            <div>
              <h3 className='text-xl font-bold text-blue-950'>
                Quick Support
              </h3>

              <p className='text-gray-500 mt-1'>
                Fast customer assistance
              </p>
            </div>

          </div>

        </div>

        {/* Team Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10'>

          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
              }}
              className='group bg-white rounded-[35px] shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-300 relative'
            >

              {/* Top Gradient */}
              <div className='h-2 bg-gradient-to-r from-blue-950 to-cyan-500'></div>

              {/* Image */}
              <div className='relative overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-50'>

                <img
                  src={member.image}
                  alt={member.name}
                  className='w-full h-80 object-contain p-8 group-hover:scale-105 transition duration-500'
                />

                {/* Floating Icon */}
              

              </div>

              {/* Content */}
              <div className='p-8'>

                <h3 className='text-2xl font-bold text-blue-950 text-center'>
                  {member.name}
                </h3>

                <p className='text-cyan-600 font-semibold mt-2 text-center'>
                  {member.role}
                </p>

                {/* Divider */}
                <div className='w-16 h-1 bg-cyan-400 rounded-full mx-auto mt-5'></div>

                {/* Contact Info */}
                <div className='mt-8 space-y-5'>

                  <div className='flex items-center gap-3 text-gray-600'>

                    <div className='bg-cyan-100 p-2 rounded-xl'>
                      <Phone size={16} className='text-cyan-600' />
                    </div>

                    <span className='text-sm font-medium'>
                      {member.phone}
                    </span>

                  </div>

                  <div className='flex items-center gap-3 text-gray-600'>

                    <div className='bg-blue-100 p-2 rounded-xl'>
                      <Mail size={16} className='text-blue-900' />
                    </div>

                    <span className='text-sm break-all font-medium'>
                      {member.email}
                    </span>

                  </div>

                  <div className='flex items-start gap-3 text-gray-600'>

                    <div className='bg-cyan-100 p-2 rounded-xl'>
                      <MapPin
                        size={16}
                        className='text-cyan-600'
                      />
                    </div>

                    <span className='text-sm leading-6 font-medium'>
                      Girinagar,
                      Bangalore - 560026
                    </span>

                  </div>

                </div>

                {/* Button */}
                <button className='mt-8 w-full bg-blue-950 hover:bg-cyan-500 transition text-white py-3.5 rounded-2xl font-semibold shadow-lg'>
                  Contact Member
                </button>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mt-24 bg-blue-950 rounded-[40px] p-12 md:p-16 text-center text-white relative overflow-hidden'
        >

          <div className='absolute top-0 right-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl'></div>

          <h3 className='text-4xl md:text-5xl font-bold relative z-10'>
            Need Expert Financial Support?
          </h3>

          <p className='mt-6 text-gray-300 text-lg max-w-3xl mx-auto leading-8 relative z-10'>
            Our Union Capital experts are always ready to
            guide you with reliable banking and loan
            solutions for your personal and business growth.
          </p>

          <button className='mt-10 bg-cyan-500 hover:bg-cyan-400 transition px-10 py-5 rounded-2xl font-bold text-lg relative z-10 shadow-xl'>
            Connect With Our Team
          </button>

        </motion.div>

      </div>

    </section>
  )
}

export default Team