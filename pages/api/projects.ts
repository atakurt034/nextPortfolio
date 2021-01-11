import { NextApiRequest, NextApiResponse } from 'next'
import NextConnect from 'next-connect'

const Handler = NextConnect<NextApiRequest, NextApiResponse>()
import Project from '../../models/projects'
import connectDB from './config/db'

export default Handler.get(async (req, res) => {
  try {
    await connectDB()
    const projects = await Project.find({})
    res.json(projects)
  } catch (error) {
    res.status(404)
    throw new Error('Projects not found')
  }
})
