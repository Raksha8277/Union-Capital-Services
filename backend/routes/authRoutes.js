const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

// Signup
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({
        message: 'Please fill all fields',
      })
    }

    const existingUser = await User.findOne({
      email,
    })

    if (existingUser) {
      return res.status(400).json({
        message: 'User already exists',
      })
    }

    const hashedPassword =
      await bcrypt.hash(password, 10)

    const user = new User({
      name,
      email,
      password: hashedPassword,
    })

    await user.save()

    res.status(201).json({
      message: 'Signup successful',
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Server Error',
    })
  }
})

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({
      email,
    })

    if (!user) {
      return res.status(400).json({
        message: 'User not found',
      })
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    )

    if (!isMatch) {
      return res.status(400).json({
        message: 'Invalid password',
      })
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d',
      }
    )

    res.status(200).json({
      token,
      message: 'Login successful',
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Server Error',
    })
  }
})

module.exports = router