import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
let saslprep
try {
  saslprep = require('saslprep')
} catch (e) {
  // don't do anything;
}
if (!saslprep) {
  console.warn(
    'Warning: no saslprep library specified. Passwords will not be sanitized'
  )
}

const connectDB = async () => {
  try {
    mongoose.set('useFindAndModify', false)
    const conn = await mongoose.connect(process.env.MONGO_URI!, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log(`mongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
