import Layout from '../components/layout/Layout'
import About from '../screens/about/AboutScreen'
import Stacks from '../screens/stacks/StacksScreen'
import Project from '../screens/projects/Project'
import Contact from '../screens/contact/Contact'
import { GetStaticProps } from 'next'
import { getProject } from './api/projects'

import { ContactProvider } from '../utils/contactContext'

export const getStaticProps: GetStaticProps = async (context) => {
  const projects = await getProject()
  return { props: { projects } }
}

export default function Home(
  props: JSX.IntrinsicAttributes & { projects: any }
) {
  return (
    <Layout>
      <About />
      <Stacks />
      <Project {...props} />
      <ContactProvider>
        <Contact />
      </ContactProvider>
    </Layout>
  )
}
