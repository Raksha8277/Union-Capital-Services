import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
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
       'https://cdn-icons-png.flaticon.com/512/236/236832.png',
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
    <section className="py-28 bg-gradient-to-b from-[#071739] via-[#0b1f52] to-cyan-700 relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center bg-white/10 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full text-sm font-semibold text-cyan-300">
            Union Capital Team
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-6">
            Meet Our
            <span className="text-cyan-400"> Experts</span>
          </h2>

          <p className="mt-5 text-base text-gray-200 leading-7 max-w-2xl mx-auto">
            Trusted professionals providing financial guidance,
            loan assistance, and reliable banking solutions.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl p-4 flex gap-4">
            <div className="bg-cyan-400/20 w-12 h-12 rounded-xl flex items-center justify-center text-cyan-400 shrink-0">
              <Users size={22} />
            </div>

            <div>
              <h3 className="font-bold text-base text-white">
                Expert Team
              </h3>

              <p className="text-gray-200 mt-1 text-sm leading-6">
                Experienced professionals
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl p-4 flex gap-4">
            <div className="bg-cyan-400/20 w-12 h-12 rounded-xl flex items-center justify-center text-cyan-400 shrink-0">
              <BadgeCheck size={22} />
            </div>

            <div>
              <h3 className="font-bold text-base text-white">
                Trusted Support
              </h3>

              <p className="text-gray-200 mt-1 text-sm leading-6">
                Transparent guidance
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl p-4 flex gap-4">
            <div className="bg-cyan-400/20 w-12 h-12 rounded-xl flex items-center justify-center text-cyan-400 shrink-0">
              <Phone size={22} />
            </div>

            <div>
              <h3 className="font-bold text-base text-white">
                Quick Help
              </h3>

              <p className="text-gray-200 mt-1 text-sm leading-6">
                Fast assistance
              </p>
            </div>
          </div>
        </div>

        {/* Team Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -4 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <div className="bg-white/5 flex justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-40 object-contain p-5"
                />
              </div>

              {/* Content */}
              <div className="px-6 py-4 pt-6">
                <h3 className="text-lg font-bold text-white text-center">
                  {member.name}
                </h3>

                <p className="text-cyan-300 text-xs text-center mt-1">
                  {member.role}
                </p>

                <div className="w-10 h-1 bg-cyan-400 rounded-full mx-auto mt-2"></div>

                {/* Contact */}
                <div className=" mt-3 space-y-1 px-3 py-3">
                  <div className="flex items-center gap-2 text-gray-300 text-xs leading-4">
                    <Phone
                      size={14}
                      className="text-cyan-400 shrink-0"
                    />
                    <span>{member.phone}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-300 text-xs leading-4">
                    <Mail
                      size={14}
                      className="text-cyan-400 shrink-0"
                    />
                    <span className="truncate">
                      {member.email}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-300 text-xs leading-4">
                    <MapPin
                      size={14}
                      className="text-cyan-400 shrink-0"
                    />
                    <span>Bangalore</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold">
            Need Financial Support?
          </h3>

          <p className="mt-4 text-base text-gray-200 leading-7 max-w-2xl mx-auto">
            Connect with our experts for reliable banking,
            loan solutions, and professional financial guidance.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-6 bg-cyan-400 hover:bg-cyan-300 text-blue-950 px-7 py-3 rounded-2xl font-semibold transition duration-300 shadow-lg"
          >
            Contact Our Team
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Team