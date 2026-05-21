const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const router = express.Router()

// ============================
// SIGNUP ROUTE
// ============================
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body

    // Check empty fields
    if (!name || !email || !password) {
      return res.status(400).json({
        message: 'All fields are required',
      })
    }

    // Check existing user
    const existingUser = await User.findOne({
      email,
    })

    if (existingUser) {
      return res.status(400).json({
        message: 'User already exists',
      })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(
      password,
      10
    )

    // Create new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    })

    // Create token
    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d',
      }
    )

    // Response
    res.status(201).json({
      success: true,
      message: 'Signup successful',
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      success: false,
      message: 'Server Error',
    })
  }
})

// ============================
// LOGIN ROUTE
// ============================
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    // Check empty fields
    if (!email || !password) {
      return res.status(400).json({
        message: 'All fields are required',
      })
    }

    // Find user
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({
        message: 'Invalid Email',
      })
    }

    // Compare password
    const isMatch = await bcrypt.compare(
      password,
      user.password
    )

    if (!isMatch) {
      return res.status(400).json({
        message: 'Invalid Password',
      })
    }

    // Generate token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d',
      }
    )

    // Response
    res.status(200).json({
      success: true,
      message: 'Login Successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      success: false,
      message: 'Server Error',
    })
  }
})

// ============================
// GET ALL USERS
// ============================

router.get('/users', async (req, res) => {
  try {
    const users = await User.find().select(
      '-password'
    )

    res.status(200).json(users)
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Server Error',
    })
  }
})

module.exports = router