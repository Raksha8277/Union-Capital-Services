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
  const [password, setPassword] =
    useState('')

  const [message, setMessage] =
    useState('')

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth/login',
        {
          email,
          password,
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
      setMessage(
        error.response?.data?.message ||
          'Login failed'
      )
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-600 px-6 py-16'>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className='w-full max-w-md'
      >

        <div className='bg-white rounded-[35px] shadow-2xl p-10'>

          <div className='text-center mb-8'>

            <div className='w-20 h-20 bg-gradient-to-r from-blue-950 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto'>

              <Lock className='text-white' size={35} />

            </div>

            <h1 className='text-4xl font-bold text-blue-950 mt-6'>
              Welcome Back
            </h1>

            <p className='text-gray-500 mt-3'>
              Login to your account
            </p>

          </div>

          <form
            onSubmit={handleLogin}
            className='space-y-5'
          >

            {/* Email */}
            <div>

              <label className='font-semibold text-sm'>
                Email Address
              </label>

              <div className='relative mt-2'>

                <Mail
                  size={20}
                  className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'
                />

                <input
                  type='email'
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder='Enter email'
                  required
                  className='w-full border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-cyan-400'
                />

              </div>

            </div>

            {/* Password */}
            <div>

              <label className='font-semibold text-sm'>
                Password
              </label>

              <div className='relative mt-2'>

                <Lock
                  size={20}
                  className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'
                />

                <input
                  type='password'
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder='Enter password'
                  required
                  className='w-full border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-cyan-400'
                />

              </div>

            </div>

            <button
              type='submit'
              className='w-full bg-gradient-to-r from-blue-950 to-cyan-500 text-white py-4 rounded-2xl font-bold hover:scale-[1.02] transition flex items-center justify-center gap-2'
            >

              Login

              <ArrowRight size={20} />

            </button>

          </form>

          {message && (
            <p className='text-center mt-5 text-red-500'>
              {message}
            </p>
          )}

          <p className='text-center mt-8 text-gray-500'>

            Don&apos;t have an account?{' '}

            <Link
              to='/signup'
              className='text-cyan-600 font-semibold'
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