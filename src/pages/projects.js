import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = ({data: { allContentfulProjectCategories }}) => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects Index</h1>
    <p>Wieser Brothers Projects overview paragraph</p>

    <h3>Categories from Contentful API</h3>
    <ul>
      {allContentfulProjectCategories.edges.map(({ node }) => (
        <li>{node.title} {node.slug}</li>
      ))}
    </ul>
  </Layout>
)

export const query = graphql`
{
  allContentfulProjectCategories {
    edges {
      node {
        title
      }
    }
  }
}
`
export default ProjectsPage