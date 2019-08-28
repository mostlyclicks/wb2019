import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Projects = ({ data }) => (
  <Layout>
    <h2>{data.contentfulProjects.title}</h2>
  </Layout>
)

export const query = graphql`
  query project($slug: String!) {
    contentfulProjects(slug: { eq: $slug }) {
      title
    }
  }
`
export default Projects