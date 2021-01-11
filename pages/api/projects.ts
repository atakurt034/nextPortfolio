import { NextApiRequest, NextApiResponse } from 'next'
import NextConnect from 'next-connect'

const Handler = NextConnect<NextApiRequest, NextApiResponse>()

import Project from '../../models/projects'
import connectDB from '../../config/db'

connectDB()
export default Handler.get(async (req, res) => {
  const projects = await Project.find({})
  if (projects) {
    res.json(projects)
  } else {
    res.status(404)
    throw new Error('Projects not found')
  }
})
