import React, { useEffect, useState } from 'react'

import Layout from '../components/layout/Layout'
import About from '../screens/about/AboutScreen'
import Stacks from '../screens/stacks/StacksScreen'
import Project from '../screens/projects/Project'
import Contact from '../screens/contact/Contact'
import { GetStaticProps } from 'next'
import { getProject } from './api/projects'

import { ContactProvider } from './api/lib/contactContext'
import { ModalLoader } from '../components/ModalLoader'

import { useRouter } from 'next/router'

export const getStaticProps: GetStaticProps = async (context) => {
  const projects = await getProject()
  return { props: { projects } }
}

interface Props {
  projects: {}[]
}

const Home: React.FC<Props> = (props) => {
  const router = useRouter()

  return (
    <>
      {router.isFallback ? (
        <ModalLoader />
      ) : (
        <Layout>
          <About />
          <Stacks />
          <Project {...props} />
          <ContactProvider>
            <Contact />
          </ContactProvider>
        </Layout>
      )}
    </>
  )
}

export default Home
