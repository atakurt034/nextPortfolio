import { NextApiRequest, NextApiResponse } from 'next'

import Project from './models/projects'
import connectDB from './config/db'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB()
  const projects = await Project.find({})
  if (projects) {
    res.json(projects)
  } else {
    res.status(404)
    throw new Error('Projects not found')
  }
}
