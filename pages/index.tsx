import Layout from '../components/layout/Layout'
import About from '../screens/about/AboutScreen'
import Stacks from '../screens/stacks/StacksScreen'
import Project from '../screens/projects/Project'
import Contact from '../screens/contact/Contact'

export default function Home() {
  return (
    <Layout>
      <About />
      <Stacks />
      <Project />
      <Contact />
    </Layout>
  )
}
