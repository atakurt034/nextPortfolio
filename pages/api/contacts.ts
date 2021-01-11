import { NextApiRequest, NextApiResponse } from 'next'

import NextConnect from 'next-connect'

import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import Server from '../../models/server'
import User from '../../models/user'

import connectDB from '../../config/db'

dotenv.config()

const updateEmailCount = async () => {
  await Server.findByIdAndUpdate(
    process.env.SERVER_ID,
    { $inc: { emailsSentCount: 1 } },
    { new: true }
  )
}
const Handler = NextConnect<NextApiRequest, NextApiResponse>()

export default Handler.post(async (req, res) => {
  await connectDB()
  const { name, email, message, subject } = req.body

  const ttl = 3600000

  const transport = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  }

  const transporter = nodemailer.createTransport(transport)

  const mail = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: subject,
    text: `
    from:
    ${name} 
  
    contact: ${email}
  
    message: 
  
    ${message}`,
  }

  interface Props {
    user: {
      time?: number
      name?: string
      email?: string
      message?: string
      save?: () => void
    }
  }

  const now = new Date()
  let user: Props['user'] = await User.findOne({ email })

  if (user) {
    if (user.time < now.getTime()) {
      user.name = name
      user.email = email
      user.message = message
      user.time = now.getTime() + ttl

      const updated = await user.save()
      transporter.sendMail(mail, (err, data) => {
        if (err) {
          res.json({
            status: 'fail',
            valid: false,
            data: updated,
          })
        } else {
          res.json({ status: 'success', valid: true, data: updated })
        }
      })
      updateEmailCount()
    } else {
      res.json({ valid: false, data: user })
    }
  } else {
    const createdUser = await User.create({
      name: name,
      email: email,
      message: message,
      time: now.getTime() + ttl,
    })

    if (createdUser) {
      transporter.sendMail(mail, (err, data) => {
        if (err) {
          res.json({
            status: 'fail',
            valid: false,
            data: createdUser,
          })
        } else {
          res.json({ status: 'success', valid: true, data: createdUser })
        }
      })
      updateEmailCount()
    }
  }
})
