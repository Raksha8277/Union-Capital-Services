import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { motion } from 'framer-motion'
import {
  Mail,
  Lock,
  ArrowRight,
} from 'lucide-react'

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    try {
      const res = await axios.post(
        'https://union-capital-services.onrender.com/api/auth/login',
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      localStorage.setItem(
        'token',
        res.data.token
      )

      setMessage('Login successful')

      setTimeout(() => {
        navigate('/')
      }, 1500)
    } catch (error: any) {
      console.log(error)

      setMessage(
        error.response?.data?.message ||
          'Login failed'
      )
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-[#071739] via-[#0b1f52] to-cyan-700 px-4 py-8 overflow-hidden relative'>

      {/* Background Blur */}
      <div className='absolute top-0 left-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl'></div>

      <div className='absolute bottom-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl'></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='w-full max-w-sm relative z-10'
      >

        <div className='bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-7'>

          {/* Top */}
          <div className='text-center mb-6'>

            <div className='w-16 h-16 bg-cyan-400/20 rounded-2xl flex items-center justify-center mx-auto border border-cyan-300/20'>

              <Lock
                className='text-cyan-300'
                size={28}
              />

            </div>

            <h1 className='text-3xl font-bold text-white mt-5'>
              Welcome Back
            </h1>

            <p className='text-gray-300 text-sm mt-2'>
              Login to continue
            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={handleLogin}
            className='space-y-4'
          >

            {/* Email */}
            <div>

              <label className='text-sm text-gray-200 font-medium'>
                Email Address
              </label>

              <div className='relative mt-2'>

                <Mail
                  size={18}
                  className='absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300'
                />

                <input
                  type='email'
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder='Enter email'
                  required
                  className='w-full bg-white/10 border border-white/10 text-white placeholder:text-gray-400 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-cyan-400'
                />

              </div>

            </div>

            {/* Password */}
            <div>

              <label className='text-sm text-gray-200 font-medium'>
                Password
              </label>

              <div className='relative mt-2'>

                <Lock
                  size={18}
                  className='absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300'
                />

                <input
                  type='password'
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder='Enter password'
                  required
                  className='w-full bg-white/10 border border-white/10 text-white placeholder:text-gray-400 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-cyan-400'
                />

              </div>

            </div>

            {/* Button */}
            <button
              type='submit'
              className='w-full bg-cyan-400 hover:bg-cyan-300 text-blue-950 py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2 mt-2'
            >

              Login

              <ArrowRight size={18} />

            </button>

          </form>

          {/* Message */}
          {message && (
            <p className='text-center mt-4 text-sm text-red-300'>
              {message}
            </p>
          )}

          {/* Bottom */}
          <p className='text-center mt-6 text-gray-300 text-sm'>

            Don&apos;t have an account?{' '}

            <Link
              to='/signup'
              className='text-cyan-300 font-semibold hover:text-cyan-200'
            >
              Signup
            </Link>

          </p>

        </div>

      </motion.div>

    </div>
  )
}

export default Login