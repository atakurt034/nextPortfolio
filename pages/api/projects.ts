import Project from '@/models/projects'
import connectDB from '@/config/db'

export const getProject = async () => {
  try {
    await connectDB()
    const projects = await Project.find({})
    return JSON.parse(JSON.stringify(projects))
  } catch (error) {
    return error
  }
}
