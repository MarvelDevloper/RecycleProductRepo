/* eslint-disable no-undef */
const User = require('../model/userModel')
const authToken = require('./authToken')
const bcrypt = require('bcryptjs')

const userController = {
  signup: async (req, res) => {
    try {
      const { name, email, password, location, phone, role } = req.body

      if (!name || !email || !password || !phone || !location) {
        return res.status(400).json({ msg: "All fields are required" })
      }

      const existUser = await User.findOne({ email })
      if (existUser) {
        return res.status(400).json({ msg: "Account already exists" })
      }

      const hashedPassword = await bcrypt.hash(password, 10)

      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        location,
        phone,
        role
      })

      await newUser.save()

      const token = authToken.generateToken({ id: newUser._id, email: newUser.email,location:newUser.location})
      res.cookie('token', token, { httpOnly: true,  maxAge: 2 * 24 * 60 * 60 * 1000,  sameSite: 'lax' })
      return res.status(201).json({ msg: "User registered successfully!",token:token })
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "Internal server error!" })
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body

      const exist = await User.findOne({ email })
      if (!exist) {
        return res.status(401).json({ msg: "Invalid email or password" })
      }

      const isPasswordValid = await bcrypt.compare(password, exist.password)
      if (!isPasswordValid) {
        return res.status(401).json({ msg: "Invalid email or password" })
      }

      const token = authToken.generateToken({ id: exist._id, email: exist.email,location:"kanjur" })
      res.cookie('token', token, { httpOnly: true, maxAge: 2 * 24 * 60 * 60 * 1000,
        sameSite: 'lax' })
      return res.status(200).json({ msg: "Login successfully" })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ msg: "Internal server error!" })
    }
  }
}

module.exports = userController
