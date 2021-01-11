import mongoose from 'mongoose'

const serverSchema = new mongoose.Schema(
  {
    visitorCount: {
      type: Number,
      required: true,
    },
    emailsSentCount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

const Server = mongoose.model('Server', serverSchema)

export default Server
