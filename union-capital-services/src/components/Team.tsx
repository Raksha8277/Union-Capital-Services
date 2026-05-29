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
    name: 'Abhijith Shetty',
    role: 'Branch Manager',
    phone: '+91 99720 69920',
    email: 'abhijithshettyunion@gmail.com',
    image:
      'https://cdn-icons-png.flaticon.com/512/2202/2202112.png',
  },

  {
    name: 'Sandesh Acharya',
    role: 'Branch Manager',
    phone: '+91 91135 20317',
    email: 'sandeshunion@gmail.com',
    image:
      'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
  },
]

const Team = () => {
  return (
    <section className='py-40 bg-gradient-to-b from-[#071739] via-[#0b1f52] to-cyan-700 relative overflow-hidden'>

      {/* Background Blur */}
      <div className='absolute top-0 left-0 w-52 h-52 bg-cyan-400/10 rounded-full blur-3xl'></div>

      <div className='absolute bottom-0 right-0 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl'></div>

      <div className='max-w-4xl mx-auto px-4 relative z-10'>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-8'
        >

          <span className='bg-white/10 text-cyan-300 px-3 py-1.5 rounded-full text-xs font-medium border border-white/10'>
            Union Capital Team
          </span>

          <h2 className='text-2xl md:text-3xl font-bold text-white mt-4'>

            Meet Our
            <span className='text-cyan-300'> Experts</span>

          </h2>

          <p className='text-gray-300 mt-3 text-sm max-w-xl mx-auto leading-6'>
            Trusted professionals providing financial
            guidance and loan support.
          </p>

        </motion.div>

        {/* Features */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mb-8'>

          <div className='bg-white/10 backdrop-blur-md rounded-xl border border-white/10 p-3 flex items-center gap-3'>

            <div className='bg-cyan-400/20 text-cyan-300 p-2 rounded-lg'>
              <Users size={18} />
            </div>

            <div>
              <h3 className='text-white font-semibold text-xs'>
                Expert Team
              </h3>

              <p className='text-gray-300 text-[11px] mt-1'>
                Experienced professionals
              </p>
            </div>

          </div>

          <div className='bg-white/10 backdrop-blur-md rounded-xl border border-white/10 p-3 flex items-center gap-3'>

            <div className='bg-cyan-400/20 text-cyan-300 p-2 rounded-lg'>
              <BadgeCheck size={18} />
            </div>

            <div>
              <h3 className='text-white font-semibold text-xs'>
                Trusted Support
              </h3>

              <p className='text-gray-300 text-[11px] mt-1'>
                Transparent guidance
              </p>
            </div>

          </div>

          <div className='bg-white/10 backdrop-blur-md rounded-xl border border-white/10 p-3 flex items-center gap-3'>

            <div className='bg-cyan-400/20 text-cyan-300 p-2 rounded-lg'>
              <Phone size={18} />
            </div>

            <div>
              <h3 className='text-white font-semibold text-xs'>
                Quick Help
              </h3>

              <p className='text-gray-300 text-[11px] mt-1'>
                Fast assistance
              </p>
            </div>

          </div>

        </div>

        {/* Team Cards */}
        <div className='grid sm:grid-cols-2 gap-4'>

          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              whileHover={{ y: -3 }}
              className='bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden'
            >

              {/* Image */}
              <div className='bg-white/5 flex justify-center'>

                <img
                  src={member.image}
                  alt={member.name}
                  className='h-36 object-contain p-4'
                />

              </div>

              {/* Content */}
              <div className='p-4'>

                <h3 className='text-lg font-bold text-white text-center'>
                  {member.name}
                </h3>

                <p className='text-cyan-300 text-xs text-center mt-1'>
                  {member.role}
                </p>

                <div className='w-10 h-1 bg-cyan-300 rounded-full mx-auto mt-2'></div>

                {/* Contact */}
                <div className='mt-4 space-y-2'>

                  <div className='flex items-center gap-2 text-gray-300 text-xs'>

                    <Phone size={13} className='text-cyan-300' />

                    <span>{member.phone}</span>

                  </div>

                  <div className='flex items-center gap-2 text-gray-300 text-xs break-all'>

                    <Mail size={13} className='text-cyan-300' />

                    <span>{member.email}</span>

                  </div>

                  <div className='flex items-center gap-2 text-gray-300 text-xs'>

                    <MapPin size={13} className='text-cyan-300' />

                    <span>Bangalore</span>

                  </div>

                </div>

                {/* Button */}
                <button className='mt-4 w-full bg-cyan-400 hover:bg-cyan-300 text-blue-950 py-2 rounded-lg text-sm font-semibold transition'>
                  Contact
                </button>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mt-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 p-6 text-center text-white'
        >

          <h3 className='text-xl md:text-2xl font-bold'>
            Need Financial Support?
          </h3>

          <p className='mt-3 text-gray-300 text-sm max-w-xl mx-auto leading-6'>
            Connect with our experts for reliable
            banking and loan solutions.
          </p>

          <button className='mt-5 bg-cyan-400 hover:bg-cyan-300 text-blue-950 px-6 py-2.5 rounded-lg text-sm font-semibold transition'>
            Connect With Team
          </button>

        </motion.div>

      </div>

    </section>
  )
}

export default Team